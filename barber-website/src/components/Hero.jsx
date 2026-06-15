function Hero() {
  return (
    <header className="hero">
      <div className="hero-main">
        <div className="hero-left">
          <div className="eyebrow">
            <span></span>
            <p>EST. 2018 · PREMIUM GROOMING</p>
          </div>

          <h1>
            PRECISION
            <br></br>
            <span>CUTS.</span>
          </h1>

          <div className="hero-bottom-content">
            <div className="hero-description">
              <p>
                Experience the craft of precision barbering in a modern,
                unhurried space. Every cut is a conversation - yours starts
                here.
              </p>
            </div>

            <button className="outline-button">RESERVE A CHAIR</button>
          </div>

          <div className="stats">
            <div className="stat">
              <h3>12+</h3>
              <p>YEARS OF CRAFT</p>
            </div>

            <div className="stat">
              <h3>4K+</h3>
              <p>CUTS / YEAR</p>
            </div>

            <div className="stat">
              <h3>3</h3>
              <p>MASTER BARBERS</p>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <img src="/barber-work.png" alt="Barber cutting hair" />
        </div>
      </div>

      <div className="marquee">
        <div className="marquee-track">
          <span>
            PRECISION · CRAFT · LEGACY · THE PLUG BARBERSHOP · TIMELESS STYLE ·
            BOOK YOUR CHAIR ·
          </span>
          <span>
            PRECISION · CRAFT · LEGACY · THE PLUG BARBERSHOP · TIMELESS STYLE ·
            BOOK YOUR CHAIR ·
          </span>
          <span>
            PRECISION · CRAFT · LEGACY · THE PLUG BARBERSHOP · TIMELESS STYLE ·
            BOOK YOUR CHAIR ·
          </span>
        </div>
      </div>
    </header>
  );
}

export default Hero;