import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import TechStack from '../components/sections/TechStack';
import Projects from '../components/sections/Projects';
import AIProjects from '../components/sections/AIProjects';
import Experience from '../components/sections/Experience';
import Certifications from '../components/sections/Certifications';
import Services from '../components/sections/Services';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <TechStack />
      <Projects />
      <AIProjects />
      <Experience />
      <Certifications />
      <Services />
    </>
  );
};

export default Home;
