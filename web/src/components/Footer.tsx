import { SITE } from "../data";
import { LogoMark } from "./Logo";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand-row">
          <LogoMark className="site-footer__logo" solid />
          <div>
            <p className="site-footer__brand">{SITE.name}</p>
            <p className="site-footer__en">{SITE.nameEn}</p>
            <p>
              {SITE.tagline} · {SITE.city}
            </p>
            <p>{SITE.address}</p>
          </div>
        </div>
        <div className="site-footer__links">
          <a href={SITE.phoneHref}>{SITE.phone}</a>
          <a href={SITE.vk} target="_blank" rel="noreferrer">
            ВКонтакте
          </a>
          <a href={SITE.dikidi} target="_blank" rel="noreferrer">
            Dikidi
          </a>
        </div>
      </div>
    </footer>
  );
}
