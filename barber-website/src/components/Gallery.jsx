import Reveal from "./Reveal";

function Gallery() {
  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-top">
        <Reveal direction="left">
          <div>
            <p className="gallery-label">03 — THE WORK</p>
            <h2>GALLERY.</h2>
          </div>
        </Reveal>

        <Reveal direction="right" delay={150}>
          <a className="gallery-button animated-button" href="#booking">
            BOOK A CUT
          </a>
        </Reveal>
      </div>

      <div className="gallery-grid">
        <Reveal direction="up" className="gallery-reveal">
          <div className="gallery-card gallery-large">
            <img src="/gallery-cut.png" alt="Barber cutting hair" />
            <span>THE CUT</span>
          </div>
        </Reveal>

        <Reveal direction="up" delay={130} className="gallery-reveal">
          <div className="gallery-card gallery-large">
            <img src="/gallery-craft.png" alt="Detailed barber work" />
            <span>THE CRAFT</span>
          </div>
        </Reveal>

        <div className="gallery-column">
          <Reveal direction="right" delay={220} className="gallery-reveal">
            <div className="gallery-card gallery-small">
              <img src="/gallery-detail.png" alt="Detailed haircut finish" />
              <span>THE DETAIL</span>
            </div>
          </Reveal>

          <Reveal direction="right" delay={320} className="gallery-reveal">
            <div className="gallery-card gallery-small">
              <img src="/gallery-look.png" alt="Finished haircut style" />
              <span>THE LOOK</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Gallery;