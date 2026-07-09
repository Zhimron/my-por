import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import AnimatedBackground from './components/layout/AnimatedBackground';
import Navbar from './components/layout/Navbar';
import BackToTop from './components/layout/BackToTop';
import Loader from './components/layout/Loader';
import ScrollToHash from './components/layout/ScrollToHash';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import ExperiencePage from './pages/ExperiencePage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import ProjectDetail from './pages/ProjectDetail';
import NotFound from './pages/NotFound';
import Analytics from './components/Analytics';

function AppShell() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('home-route', isHome);
    document.body.classList.toggle('home-route', isHome);

    return () => {
      document.documentElement.classList.remove('home-route');
      document.body.classList.remove('home-route');
    };
  }, [isHome]);

  return (
    <>
      <AnimatePresence>{loading && <Loader key="loader" />}</AnimatePresence>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-indigo-600 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>
      <Analytics />
      <AnimatedBackground />
      <ScrollToHash />
      <Navbar />
      <main id="main" className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {!isHome && <BackToTop />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AppShell />
    </BrowserRouter>
  );
}

export default App;
