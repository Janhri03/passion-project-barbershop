import Reveal from "./Reveal";

function Booking() {
  return (
    <section className="booking-section" id="booking">
      <div className="booking-content">
        <Reveal direction="left">
          <div className="booking-text">
            <p className="booking-label">04 — RESERVE YOUR TIME</p>

            <h2>
              BOOK AN
              <br />
              <span>APPOINT</span>
              <br />
              MENT.
            </h2>

            <p className="booking-description">
              We take pride in delivering a premium barbering experience from
              the moment you walk through our doors. Select your preferred
              barber and time at your convenience. Reschedules require at least
              24 hours notice.
            </p>

            <a className="booking-button animated-button" href="#location">
              BOOK NOW
            </a>
          </div>
        </Reveal>

        <div className="booking-images">
          <Reveal direction="up" delay={100} className="booking-image-reveal">
            <img
              className="booking-img booking-img-left"
              src="/booking-cut.png"
              alt="Barber creating a precise haircut"
            />
          </Reveal>

          <Reveal direction="up" delay={250} className="booking-image-reveal">
            <img
              className="booking-img booking-img-right"
              src="/booking-look.png"
              alt="Finished premium haircut"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Booking;