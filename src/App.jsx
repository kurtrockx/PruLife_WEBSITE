import About from "./components/About";
import Announcements from "./components/Announcements";
import Banner from "./components/Banner";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";
import Mobile from "./components/Mobile";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

export default function App() {
  return (
    <div className="bg-neutral-200">
      <Navbar />
      <Banner />
      <Announcements />
      <Services />
      <Benefits />
      <Mobile />
      <About />
      <Footer/>
    </div>
  );
}
