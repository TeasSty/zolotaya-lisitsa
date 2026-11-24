import { useEffect, useState } from "react";
import { NAV, SITE } from "../data";
import { LogoMark } from "./Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="site-header__inner">
        <a className="brand-mark" href="#top" aria-label={SITE.name}>
          <LogoMark className="brand-mark__logo" solid />
          <span className="brand-mark__text">
            <span className="brand-mark__name">{SITE.name}</span>
            <span className="brand-mark__city">{SITE.city}</span>
          </span>
        </a>

        <nav className="site-nav" aria-label="Основная навигация">
          {NAV.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="site-header__phone" href={SITE.phoneHref}>
          {SITE.phone}
        </a>

        <button
          className="site-header__menu"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Закрыть" : "Меню"}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`mobile-nav${open ? " is-open" : ""}`}
        hidden={!open}
      >
        {NAV.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
        <a href={SITE.phoneHref} onClick={() => setOpen(false)}>
          {SITE.phone}
        </a>
      </div>
    </header>
  );
}
