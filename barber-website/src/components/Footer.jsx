import Reveal from "./Reveal";

function Footer() {
  return (
    <footer className="footer">
      <Reveal direction="left">
        <a className="footer-logo" href="#home">
          THE<span>PLUG</span>
        </a>
      </Reveal>

      <Reveal direction="up" delay={100}>
        <p className="footer-copy">
          © 2026 THE PLUG BARBERSHOP. ALL RIGHTS RESERVED.
        </p>
      </Reveal>

      <Reveal direction="right" delay={200}>
        <div className="footer-socials">
          <a href="#" aria-label="Instagram">
            INSTAGRAM
          </a>

          <a href="#" aria-label="Facebook">
            FACEBOOK
          </a>

          <a href="#" aria-label="Twitter">
            TWITTER
          </a>
        </div>
      </Reveal>
    </footer>
  );
}

export default Footer;