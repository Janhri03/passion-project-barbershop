import Reveal from "./Reveal";

function Hero() {
  return (
    <header className="hero" id="home">
      <div className="hero-main">
        <div className="hero-left">
          <Reveal direction="left">
            <div className="eyebrow">
              <span />
              <p>EST. 2018 · PREMIUM GROOMING</p>
            </div>
          </Reveal>

          <Reveal direction="up" delay={120}>
            <h1>
              PRECI<span>SION</span>
              <br />
              CUTS.
            </h1>
          </Reveal>

          <div className="hero-bottom-content">
            <Reveal direction="up" delay={250}>
              <div className="hero-description">
                <p>
                  Experience the craft of precision barbering in a modern,
                  unhurried space. Every cut is a conversation — yours starts
                  here.
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={350}>
              <a
                className="outline-button animated-button"
                href="#booking"
              >
                RESERVE A CHAIR
              </a>
            </Reveal>
          </div>

          <div className="stats">
            <Reveal direction="up" delay={400}>
              <div className="stat">
                <h3>12+</h3>
                <p>YEARS OF CRAFT</p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={500}>
              <div className="stat">
                <h3>4K+</h3>
                <p>CUTS / YEAR</p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={600}>
              <div className="stat">
                <h3>3</h3>
                <p>MASTER BARBERS</p>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal direction="right" className="hero-image-reveal">
          <div className="hero-right">
            <img src="/barber-work.png" alt="Barber cutting a client's hair" />
          </div>
        </Reveal>
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