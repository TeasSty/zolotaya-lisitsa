import { SERVICES, SITE } from "../data";

export function Services() {
  return (
    <section className="services section section--ink" id="services">
      <div className="section__head reveal">
        <h2>Услуги</h2>
        <p>
          Актуальные позиции из меню салона. Точную стоимость и свободное время
          уточняйте при записи.
        </p>
      </div>

      <div className="services__menu reveal">
        {SERVICES.map((group) => (
          <div key={group.group} className="services__group">
            <h3>{group.group}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item.name}>
                  <span className="services__name">{item.name}</span>
                  <span className="services__rule" aria-hidden="true" />
                  <span className="services__note">{item.note}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="services__footnote reveal">
        Запись по телефону{" "}
        <a href={SITE.phoneHref}>{SITE.phone}</a>
        {" · "}
        <a href={SITE.dikidi} target="_blank" rel="noreferrer">
          онлайн в Dikidi
        </a>
        {" · "}
        <a href={SITE.vk} target="_blank" rel="noreferrer">
          сообщество ВКонтакте
        </a>
      </p>
    </section>
  );
}
