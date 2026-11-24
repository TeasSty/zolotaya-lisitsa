import { MASTERS, SITE } from "../data";

export function Masters() {
  return (
    <section className="masters section" id="masters">
      <div className="section__head reveal">
        <h2>Мастера</h2>
        <p>
          Фанаты своего дела: стрижки, окрашивание и маникюр. Запись к
          удобному специалисту — по телефону{" "}
          <a href={SITE.phoneHref}>{SITE.phone}</a> или в Dikidi.
        </p>
      </div>

      <div className="masters__row">
        {MASTERS.map((master) => (
          <article
            key={master.name + master.role}
            className="masters__item reveal"
          >
            <img
              src={master.src}
              alt={master.name}
              width={600}
              height={800}
              loading="lazy"
            />
            <div className="masters__meta">
              <h3>{master.name}</h3>
              <p className="masters__role">{master.role}</p>
              <p>{master.blurb}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
