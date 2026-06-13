function Services() {
  const services = [
    {
      number: "01",
      title: "SIGNATURE CUT",
      description: "Precision scissor or clipper work tailored to your hair type and face shape.",
      price: "€35",
    },
    {
      number: "02",
      title: "FADE & DESIGN",
      description: "Skin to mid fade with optional line design. Crafted to the millimetre.",
      price: "€40",
    },
    {
      number: "03",
      title: "BEARD SCULPT",
      description: "Hot towel prep, straight-razor edge, and beard oil finish.",
      price: "€25",
    },
    {
      number: "04",
      title: "CUT & BEARD",
      description: "Full service — signature cut paired with beard sculpting.",
      price: "€55",
    },
    {
      number: "05",
      title: "HEAD SHAVE",
      description: "Smooth, clean scalp shave with soothing hot-towel treatment.",
      price: "€30",
    },
    {
      number: "06",
      title: "KIDS CUT",
      description: "Relaxed, patient cuts for the next generation. Under 12.",
      price: "€20",
    },
  ];

  return (
    <section className="services-section" id="services">
      <div className="services-top">
        <div>
          <h2>
            OUR <br />
            <span>SERVICES.</span>
          </h2>
        </div>

        <p className="services-intro">
          Every service is performed with intent. No rush, no compromise - just
          the right tools, the right technique, and time given freely.
        </p>
      </div>

      <div className="services-list">
        {services.map((service) => (
          <div className="service-row" key={service.number}>
            <span className="service-number">{service.number}</span>

            <div className="service-info">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>

            <strong>{service.price}</strong>
          </div>
        ))}
      </div>

      <div className="services-images">
        <img src="/barber-tools.png" alt="Barber tools" />
        <img src="/barber-chair.png" alt="Barber chair" />
      </div>

      <div className="marquee services-marquee">
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
    </section>
  );
}

export default Services;