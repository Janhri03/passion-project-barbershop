import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Booking from "./components/Booking";
import Location from "./components/Location";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Booking />
      <Location />
      <Footer />
    </>
  );
}

export default App;