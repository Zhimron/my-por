import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import TechStack from '../components/sections/TechStack';
import Projects from '../components/sections/Projects';
import AIProjects from '../components/sections/AIProjects';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <TechStack />
      <Projects />
      <AIProjects />
    </>
  );
};

export default Home;
