function Booking() {
  return (
    <section className="booking-section" id="booking">
      <div className="booking-content">
        <div className="booking-text">

          <h2>
            BOOK AN <br />
            <span>APPOINT</span>
            <br />
            MENT.
          </h2>

          <p className="booking-description">
            We take pride in delivering a premium barbering experience from the
            moment you walk through our doors. Select your preferred barber and
            time at your convenience. Reschedules require at least 24 hours
            notice.
          </p>

          <button className="booking-button">BOOK NOW</button>
        </div>

        <div className="booking-images">
          <img
            className="booking-img booking-img-left"
            src="/cuttinghair.png"
            alt="Barber cutting hair"
          />

          <img
            className="booking-img booking-img-right"
            src="/thecut.png"
            alt="Finished haircut"
          />
        </div>
      </div>
    </section>
  );
}

export default Booking;