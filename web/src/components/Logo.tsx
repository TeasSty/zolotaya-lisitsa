type LogoProps = {
  className?: string;
  title?: string;
  /** Opaque disc for light backgrounds; transparent PNG by default. */
  solid?: boolean;
};

/** Их логотип VK: обрезан до круга «ЗЛ» и подогнан по тону к сайту. */
export function LogoMark({
  className = "",
  title = "Золотая Лисица",
  solid = false,
}: LogoProps) {
  return (
    <img
      className={`logo-mark ${className}`.trim()}
      src={solid ? "/images/logo-mark-disc.png" : "/images/logo-mark.png"}
      alt={title}
      width={720}
      height={720}
      decoding="async"
    />
  );
}
