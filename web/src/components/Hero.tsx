import { SITE } from "../data";

export function Hero() {
  return (
    <section className="hero" id="top" aria-label="Главный экран">
      <div className="hero__media" aria-hidden="true">
        <img
          src="/images/hero.jpg"
          alt=""
          className="hero__img"
          width={1920}
          height={1080}
          fetchPriority="high"
        />
        <div className="hero__scrim" />
        <div className="hero__gloss" />
      </div>

      <div className="hero__content">
        <p className="hero__eyebrow">
          {SITE.tagline} · {SITE.city}
        </p>
        <h1 className="hero__brand">
          <span className="hero__brand-ru">{SITE.name}</span>
          <span className="hero__brand-en">{SITE.nameEn}</span>
        </h1>
        <p className="hero__line">Свой образ. Свой имидж.</p>
        <p className="hero__support">
          Салон на Советском проспекте, 66 — стрижки, окрашивание, маникюр,
          брови. Для маленьких гостей — отдельный мастер.
        </p>
        <div className="hero__cta">
          <a className="btn btn--solid" href={SITE.phoneHref}>
            Записаться
          </a>
          <a className="btn btn--ghost" href="#works">
            Смотреть работы
          </a>
        </div>
      </div>
    </section>
  );
}
