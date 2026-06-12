function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        THE<span>PLUG</span>
      </div>

      <div className="nav-links">
        <a href="#services">SERVICES</a>
        <a href="#gallery">GALLERY</a>
        <a href="#location">LOCATION</a>
        <a href="#booking">BOOKING</a>
      </div>

      <button className="nav-button">BOOK NOW</button>
    </nav>
  );
}

export default Navbar;