import { SITE } from "../data";

export function Booking() {
  return (
    <section className="booking section section--russet" id="book">
      <div className="booking__inner reveal">
        <h2>Запись</h2>
        <p>
          {SITE.about} Позвоните или запишитесь онлайн — подберём время. Мы в
          центре Березников, на Советском проспекте.
        </p>

        <div className="booking__grid">
          <a className="booking__tile" href={SITE.phoneHref}>
            <span className="booking__label">Телефон</span>
            <span className="booking__value">{SITE.phone}</span>
          </a>
          <div className="booking__tile">
            <span className="booking__label">Адрес</span>
            <span className="booking__value">
              {SITE.address}
              <small>
                {SITE.city}, {SITE.addressNote}
              </small>
            </span>
          </div>
          <div className="booking__tile">
            <span className="booking__label">Часы</span>
            <span className="booking__value">{SITE.hours}</span>
          </div>
          <a
            className="booking__tile"
            href={SITE.dikidi}
            target="_blank"
            rel="noreferrer"
          >
            <span className="booking__label">Онлайн</span>
            <span className="booking__value">Запись в Dikidi →</span>
          </a>
        </div>
      </div>
    </section>
  );
}
