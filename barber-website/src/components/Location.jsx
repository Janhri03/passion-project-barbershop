import Reveal from "./Reveal";

function Location() {
  return (
    <section className="location-section" id="location">
      <div className="location-content">
        <Reveal direction="left">
          <div className="location-left">
            <h2>
              LOCAT<span>ION.</span>
            </h2>

            <div className="location-block">
              <p className="small-title">ADDRESS</p>

              <p className="address-text">
                12 Todor Dimov Street
                <br />
                Sofia, 9002
                <br />
                Bulgaria
              </p>
            </div>

            <div className="hours-block">
              <p className="small-title">HOURS</p>

              <div className="hours-row">
                <span>Monday — Friday</span>
                <strong>09:00 - 20:00</strong>
              </div>

              <div className="hours-row">
                <span>Saturday</span>
                <strong>09:00 - 18:00</strong>
              </div>

              <div className="hours-row">
                <span>Sunday</span>
                <strong className="closed">Closed</strong>
              </div>
            </div>

            <div className="contact-row">
              <div>
                <p className="small-title">PHONE</p>
                <p>+359 800 000 000</p>
              </div>

              <div>
                <p className="small-title">EMAIL</p>
                <p>hello@theplug.gr</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal direction="right" delay={150}>
          <div className="location-right">
            <div className="location-image-box">
              <img
                src="/interior.png"
                alt="The Plug barbershop interior"
              />

              <div className="location-badge">THE PLUG — SOFIA</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Location;