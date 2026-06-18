import Reveal from "./Reveal";

const services = [
  {
    number: "01",
    title: "SIGNATURE CUT",
    description:
      "Precision scissor or clipper work tailored to your hair type and face shape.",
    price: "€35",
  },
  {
    number: "02",
    title: "FADE & DESIGN",
    description:
      "Skin to mid fade with optional line design. Crafted to the millimetre.",
    price: "€40",
  },
  {
    number: "03",
    title: "BEARD SCULPT",
    description:
      "Hot towel preparation, straight-razor edge, and beard oil finish.",
    price: "€25",
  },
  {
    number: "04",
    title: "CUT & BEARD",
    description:
      "Full service combining a signature haircut with beard sculpting.",
    price: "€55",
  },
  {
    number: "05",
    title: "HEAD SHAVE",
    description:
      "A smooth scalp shave completed with a soothing hot-towel treatment.",
    price: "€30",
  },
  {
    number: "06",
    title: "KIDS CUT",
    description:
      "Relaxed and patient barbering for the next generation. Under 12.",
    price: "€20",
  },
];

function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-top">
        <Reveal direction="left">
          <div>
            <p className="section-label">02 — WHAT WE DO</p>

            <h2>
              OUR
              <br />
              <span>SERVICES.</span>
            </h2>
          </div>
        </Reveal>

        <Reveal direction="right" delay={120}>
          <p className="services-intro">
            Every service is performed with intent. No rush, no compromise —
            just the right tools, the right technique, and time given freely.
          </p>
        </Reveal>
      </div>

      <div className="services-list">
        {services.map((service, index) => (
          <Reveal
            direction="up"
            delay={index * 70}
            className="service-reveal"
            key={service.number}
          >
            <div className="service-row">
              <span className="service-number">{service.number}</span>

              <div className="service-info">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>

              <strong>{service.price}</strong>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal direction="up" className="services-image-reveal">
        <div className="services-images">
          <div className="service-image">
            <img src="/service-tools.png" alt="Professional barber tools" />
          </div>

          <div className="service-image">
            <img src="/service-chair.png" alt="Premium barber chair" />
          </div>
        </div>
      </Reveal>

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