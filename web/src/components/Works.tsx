import { WORKS } from "../data";

export function Works() {
  return (
    <section className="works section" id="works">
      <div className="section__head reveal">
        <h2>Работы</h2>
        <p>
          Стрижки, окрашивание, маникюр и детские образы — как после визита в
          салон.
        </p>
      </div>
      <div className="works__strip">
        {WORKS.map((work) => (
          <figure key={work.src} className="works__item">
            <img
              src={work.src}
              alt={work.alt}
              width={800}
              height={600}
              loading="lazy"
            />
            <figcaption>{work.label}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
