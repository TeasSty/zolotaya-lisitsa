import { asset } from "../asset";
import { SITE } from "../data";

export function Kids() {
  return (
    <section className="kids section" id="kids">
      <div className="kids__visual reveal" aria-hidden="true">
        <img
          src={asset("images/kids.jpg")}
          alt=""
          width={1600}
          height={900}
          loading="lazy"
        />
      </div>
      <div className="kids__copy reveal">
        <h2>Обожаем деток</h2>
        <p>
          К услугам маленьких гостей — личный мастер. Модельная детская стрижка
          до 7 лет — от 450 ₽. Спокойный темп, без спешки.
        </p>
        <a className="btn btn--solid" href={SITE.phoneHref}>
          Записать ребёнка
        </a>
      </div>
    </section>
  );
}
