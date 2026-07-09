import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Download, Menu, Moon, Sun, X } from 'lucide-react';
import { navbarSections } from '../../data/navigation';
import { portfolio } from '../../data/portfolio';
import { useTheme } from '../../context/ThemeContext';
import { useActiveSection } from '../../hooks/useActiveSection';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const sectionIds = useMemo(() => navbarSections.map((s) => s.id), []);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg shadow-slate-900/5' : 'bg-transparent'
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="section-container flex h-16 items-center justify-between"
      >
        <Link
          to="/"
          className="font-display text-2xl font-bold gradient-text"
          aria-label={`${portfolio.personal.fullName} — home`}
          onClick={() => setMenuOpen(false)}
        >
          {portfolio.personal.brand}
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navbarSections.map((s) => (
            <li key={s.id}>
              <Link
                to={`/#${s.id}`}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active === s.id
                    ? 'text-indigo-600 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-500/10'
                    : 'text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-300'
                }`}
              >
                {s.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="glass flex h-10 w-10 items-center justify-center rounded-full text-slate-600 transition-colors hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-300"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href={portfolio.personal.resumeUrl}
            download
            className="btn-primary hidden !px-4 !py-2 sm:inline-flex"
          >
            <Download size={16} aria-hidden="true" />
            Resume
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="glass flex h-10 w-10 items-center justify-center rounded-full text-slate-600 dark:text-slate-300 lg:hidden"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="glass overflow-hidden border-t-0 lg:hidden"
          >
            <ul className="section-container flex flex-col gap-1 py-4">
              {navbarSections.map((s) => (
                <li key={s.id}>
                  <Link
                    to={`/#${s.id}`}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-indigo-50 hover:text-indigo-600 dark:text-slate-200 dark:hover:bg-indigo-500/10 dark:hover:text-indigo-300"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={portfolio.personal.resumeUrl}
                  download
                  className="btn-primary mt-2 w-full justify-center"
                  onClick={() => setMenuOpen(false)}
                >
                  <Download size={16} aria-hidden="true" />
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
