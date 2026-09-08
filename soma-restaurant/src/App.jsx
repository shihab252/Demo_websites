import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Story from "./components/sections/Story";
import Menu from "./components/sections/Menu";
import Experience from "./components/sections/Experience";
import Gallery from "./components/sections/Gallery";
import Visit from "./components/sections/Visit";
import Reservation from "./components/sections/Reservation";
import Footer from "./components/layout/Footer";
import SomaConcierge from "./components/ai/SomaConcierge";

export default function App() {
  return (
    <main className="bg-[#0b0b0a]">
      <Navbar />

      <Hero />

      <Story />

      <Menu />

      <Experience />

      <Gallery />

      <Visit />
      <Reservation />
      <Footer />
      <SomaConcierge />
    </main>
  );
}