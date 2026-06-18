function Navbar() {
  return (
    <nav className="navbar">
      <a className="logo" href="#home" aria-label="The Plug homepage">
        THE<span>PLUG</span>
      </a>

      <div className="nav-links">
        <a href="#services">SERVICES</a>
        <a href="#gallery">GALLERY</a>
        <a href="#location">LOCATION</a>
        <a href="#booking">BOOKING</a>
      </div>

      <a className="nav-button animated-button" href="#booking">
        BOOK NOW
      </a>
    </nav>
  );
}

export default Navbar;