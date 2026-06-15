function Gallery() {
  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-top">
        <div>
          <p className="gallery-label">03 — THE WORK</p>
          <h2>GALLERY.</h2>
        </div>

        <button className="gallery-button">BOOK A CUT</button>
      </div>

      <div className="gallery-grid">
        <div className="gallery-card gallery-large">
          <img src="/gallery-cut.png" alt="Barber cutting hair" />
          <span>THE CUT</span>
        </div>

        <div className="gallery-card gallery-large">
          <img src="/gallery-craft.png" alt="Barber detailed haircut" />
          <span>THE CRAFT</span>
        </div>

        <div className="gallery-column">
          <div className="gallery-card gallery-small">
            <img src="/gallery-detail.png" alt="Haircut detail" />
            <span>THE DETAIL</span>
          </div>

          <div className="gallery-card gallery-small">
            <img src="/gallery-look.png" alt="Finished haircut look" />
            <span>THE LOOK</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;