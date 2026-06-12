function Hero() {
  return (
    <section className="hero">

      <div className="hero-text">
        <p className="subtitle">EST. 1998</p>

        <h1>
          PRECISION <br />
          CUTS.
        </h1>

        <p>
          Premium grooming experience with professional
          barbers and timeless style.
        </p>

        <button>
          Book Appointment
        </button>
      </div>


      <div className="hero-image">
        <img 
          src="/barber.jpg"
          alt="barber"
        />
      </div>

    </section>
  );
}

export default Hero;