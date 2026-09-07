import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Specialties from "./components/sections/Specialties";
import Services from "./components/sections/Services";
import WhyChoose from "./components/sections/WhyChoose";
import Appointment from "./components/sections/Appointment";
import Testimonials from "./components/sections/Testimonials";
import FAQ from "./components/sections/FAQ";
import Clinic from "./components/sections/Clinic";
import FinalCTA from "./components/sections/FinalCTA";

function App() {
  return (
    <main className="min-h-screen bg-[#f5f4ef] text-[#17211f]">
      <Navbar />

      <Hero />
      <About />
      <Specialties />
      <Services />
      <WhyChoose />
      <Appointment />
      <Testimonials />
      <FAQ />
      <Clinic />
      <FinalCTA />

      <Footer />
    </main>
  );
}

export default App;