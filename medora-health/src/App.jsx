import Navbar from "./components/layout/Navbar";

import Hero from "./components/sections/Hero";
import CareOverview from "./components/sections/CareOverview";
import Conditions from "./components/sections/Conditions";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Appointment from "./components/sections/Appointment";
import PatientStories from "./components/sections/PatientStories";
import FAQ from "./components/sections/FAQ";
import Clinic from "./components/sections/Clinic";
import FinalCTA from "./components/sections/FinalCTA";
import NexaAssist from "./components/sections/NexaAssist";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <main className="min-h-screen bg-[#f4f8fa] text-[#102a43]">
      <Navbar />

      <Hero />
      <CareOverview />
      <Conditions />
      <About />
      <Services />
      <Appointment />
      <PatientStories />
      <FAQ />
      <Clinic />
      <FinalCTA />

      <Footer />

      <NexaAssist />
    </main>
  );
}

export default App;