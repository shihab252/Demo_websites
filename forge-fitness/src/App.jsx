import Navbar from "./components/layout/Navbar";

import Hero from "./components/sections/Hero";
import Experience from "./components/sections/Experience";
import TrainingFloor from "./components/sections/TrainingFloor";
import Programs from "./components/sections/Programs";
import Facilities from "./components/sections/Facilities";
import Coaches from "./components/sections/Coaches";
import Membership from "./components/sections/Membership";
import Contact from "./components/sections/Contact";

import Footer from "./components/layout/Footer";
import ForgeAI from "./components/ai/ForgeAI";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Experience />
        <TrainingFloor />
        <Programs />
        <Facilities />
        <Coaches />
        <Membership />
        <Contact />
      </main>

      <Footer />

      <ForgeAI />
    </>
  );
}

export default App;