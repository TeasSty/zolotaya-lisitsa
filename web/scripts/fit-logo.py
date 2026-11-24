"""Crop VK avatar to the circular ЗЛ mark and warm gold toward site amber."""

from PIL import Image, ImageDraw, ImageEnhance, ImageFilter

src = Image.open("public/images/logo-vk.jpg").convert("RGBA")
w, h = src.size
side = min(w, h)
cx, cy = w // 2, h // 2

# Keep the black disc + thin gold ring; drop glitter spray and stripes
inset = int(side * 0.12)
box = (
    cx - side // 2 + inset,
    cy - side // 2 + inset,
    cx + side // 2 - inset,
    cy + side // 2 - inset,
)
crop = src.crop(box).resize((720, 720), Image.Resampling.LANCZOS)
cw, ch = crop.size
ccx, ccy = cw // 2, ch // 2

# Radius to the thin gold ring only (not glitter halo)
radius = int(min(cw, ch) * 0.465)

mask = Image.new("L", (cw, ch), 0)
draw = ImageDraw.Draw(mask)
draw.ellipse(
    (ccx - radius, ccy - radius, ccx + radius, ccy + radius),
    fill=255,
)
# Very slight feather so edge isn't jagged
mask = mask.filter(ImageFilter.GaussianBlur(radius=1.2))

pixels = crop.load()
for y in range(ch):
    for x in range(cw):
        r, g, b, a = pixels[x, y]
        lum = (r + g + b) / 3.0
        if lum < 38:
            pixels[x, y] = (26, 20, 16, a)
            continue
        # Chrome gold → lacquer amber / fox russet of the site
        nr = min(255, int(r * 0.82 + 36))
        ng = min(255, int(g * 0.68 + 14))
        nb = min(255, int(b * 0.38 + 6))
        pixels[x, y] = (nr, ng, nb, a)

out = Image.new("RGBA", (cw, ch), (0, 0, 0, 0))
out.paste(crop, mask=mask)
# paste with mask properly:
masked = Image.new("RGBA", (cw, ch), (0, 0, 0, 0))
masked.paste(crop, (0, 0))
masked.putalpha(mask)

rgb = masked.convert("RGB")
rgb = ImageEnhance.Contrast(rgb).enhance(1.05)
rgb = ImageEnhance.Color(rgb).enhance(0.88)
final = Image.merge("RGBA", (*rgb.split(), masked.split()[-1]))
final.save("public/images/logo-mark.png", optimize=True)

disc_bg = Image.new("RGBA", (cw, ch), (30, 23, 20, 255))
disc_bg.paste(final, (0, 0), final)
disc_bg.save("public/images/logo-mark-disc.png", optimize=True)
disc_bg.resize((96, 96), Image.Resampling.LANCZOS).save(
    "public/favicon.png", optimize=True
)
print("ok", final.size, "transparent outside circle")
