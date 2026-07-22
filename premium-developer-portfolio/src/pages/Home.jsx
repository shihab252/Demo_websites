import MainLayout from "../layouts/MainLayout";
import Hero from "../components/sections/Hero";
import FeaturedProjects from "../components/sections/FeaturedProjects";
import AboutMe from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Experience from "../components/sections/Experience";
import Contact from "../components/sections/Contact";
const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <AboutMe />
      <Skills />
      <FeaturedProjects />
      <Experience />
      <Contact />
    </MainLayout>
  );
};

export default Home;