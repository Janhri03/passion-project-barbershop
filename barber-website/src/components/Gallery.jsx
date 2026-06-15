function Gallery() {
  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-top">
        <div>
          <h2>GALLERY.</h2>
        </div>

        <button className="gallery-button">BOOK A CUT</button>
      </div>

      <div className="gallery-grid">
        <div className="gallery-card gallery-large">
          <img src="/thecut.png" alt="Barber cutting hair" />
          <span>THE CUT</span>
        </div>

        <div className="gallery-card gallery-large">
          <img src="/thecraft.png" alt="Barber detailed haircut" />
          <span>THE CRAFT</span>
        </div>

        <div className="gallery-column">
          <div className="gallery-card gallery-small">
            <img src="/thedetail.png" alt="Haircut detail" />
            <span>THE DETAIL</span>
          </div>

          <div className="gallery-card gallery-small">
            <img src="/thelook.png" alt="Finished haircut look" />
            <span>THE LOOK</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;