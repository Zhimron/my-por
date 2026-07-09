import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Blocks,
  BriefcaseBusiness,
  Download,
  Handshake,
  Menu,
  MessageCircle,
  Moon,
  Rocket,
  Sun,
  UserRound,
  X,
} from 'lucide-react';
import { navbarSections } from '../../data/navigation';
import { portfolio } from '../../data/portfolio';
import { useTheme } from '../../context/ThemeContext';

/** Maps the `icon` name on each NavSection to its lucide component. */
const iconMap: Record<string, typeof UserRound> = {
  'user-round': UserRound,
  blocks: Blocks,
  rocket: Rocket,
  'briefcase-business': BriefcaseBusiness,
  handshake: Handshake,
  'message-circle': MessageCircle,
};

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isHome = location.pathname === '/';
  const active = navbarSections.find((section) => {
    if (section.path === '/projects') {
      return location.pathname === '/projects' || location.pathname.startsWith('/projects/');
    }
    if (section.id === 'experience') {
      return ['/experience', '/services', '/contact'].includes(location.pathname);
    }
    return location.pathname === section.path;
  })?.id;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-all duration-300 ${
        scrolled || isHome
          ? 'border-slate-200/70 bg-white/70 shadow-sm shadow-slate-900/5 backdrop-blur-2xl dark:border-white/10 dark:bg-night/70 dark:shadow-black/20'
          : 'border-transparent bg-transparent'
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="section-container flex h-16 items-center justify-between"
      >
        <Link
          to="/"
          className="inline-flex items-center rounded-xl px-1 py-1 font-display text-3xl font-extrabold tracking-tight gradient-text transition-transform duration-300 hover:-translate-y-0.5 sm:text-[2rem]"
          aria-label={`${portfolio.personal.fullName} home`}
          onClick={() => setMenuOpen(false)}
        >
          {portfolio.personal.brand}
        </Link>

        <ul className="hidden items-center gap-1.5 lg:flex">
          {navbarSections.map((section) => {
            const Icon = section.icon ? iconMap[section.icon] : null;
            const isActive = active === section.id;
            return (
              <li key={section.id} className="group relative">
                <Link
                  to={section.path}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative flex items-center gap-1.5 rounded-xl border px-3.5 py-2 text-sm font-semibold transition-all duration-300 xl:px-4 ${
                    isActive
                      ? 'border-indigo-300/70 text-indigo-700 dark:border-cyan-300/30 dark:text-cyan-100'
                      : 'border-slate-200/70 bg-white/60 text-slate-600 shadow-sm shadow-slate-900/5 backdrop-blur-xl hover:-translate-y-0.5 hover:border-indigo-300/60 hover:text-slate-950 hover:shadow-md hover:shadow-slate-900/5 dark:border-white/10 dark:bg-white/[0.045] dark:text-slate-300 dark:hover:border-cyan-300/30 dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/15 to-violet-500/10 shadow-sm shadow-indigo-500/10 dark:from-cyan-300/10 dark:to-indigo-400/10"
                      transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                    />
                  )}
                  {Icon && (
                    <Icon size={15} className="relative z-10" aria-hidden="true" />
                  )}
                  <span className="relative z-10">{section.label}</span>
                </Link>

                {section.hint && (
                  <span
                    role="tooltip"
                    className="pointer-events-none absolute left-1/2 top-full z-20 mt-2 w-max max-w-[11rem] -translate-x-1/2 translate-y-1 rounded-lg border border-slate-200/80 bg-white px-2.5 py-1.5 text-center text-[11px] font-medium leading-snug text-slate-600 opacity-0 shadow-lg shadow-slate-900/10 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 dark:border-white/10 dark:bg-night-700 dark:text-slate-300"
                  >
                    {section.hint}
                  </span>
                )}
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/70 bg-white/70 text-slate-600 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-300 hover:text-indigo-600 dark:border-white/10 dark:bg-white/[0.055] dark:text-slate-300 dark:hover:border-cyan-300/30 dark:hover:text-cyan-200"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href={portfolio.personal.resumeUrl}
            download
            className="btn-primary hidden !rounded-xl !px-4 !py-2 sm:inline-flex"
          >
            <Download size={16} aria-hidden="true" />
            Resume
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/70 bg-white/70 text-slate-600 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/[0.055] dark:text-slate-300 lg:hidden"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-slate-200/70 bg-white/90 shadow-xl shadow-slate-900/10 backdrop-blur-2xl dark:border-white/10 dark:bg-night/95 dark:shadow-black/30 lg:hidden"
          >
            <ul className="section-container grid gap-2 py-4 sm:grid-cols-2">
              {navbarSections.map((section) => {
                const Icon = section.icon ? iconMap[section.icon] : null;
                const isActive = active === section.id;
                return (
                  <li key={section.id}>
                    <Link
                      to={section.path}
                      aria-current={isActive ? 'page' : undefined}
                      className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-sm font-semibold transition-all duration-300 ${
                        isActive
                          ? 'border-indigo-300 bg-indigo-500/10 text-indigo-700 dark:border-cyan-300/30 dark:bg-cyan-300/10 dark:text-cyan-100'
                          : 'border-slate-200/70 bg-white/60 text-slate-700 hover:border-indigo-300 hover:text-indigo-600 dark:border-white/10 dark:bg-white/[0.045] dark:text-slate-200 dark:hover:border-cyan-300/30 dark:hover:text-cyan-200'
                      }`}
                    >
                      {Icon && (
                        <span
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                            isActive
                              ? 'bg-indigo-500/15 text-indigo-600 dark:bg-cyan-300/15 dark:text-cyan-200'
                              : 'bg-slate-900/5 text-slate-500 dark:bg-white/10 dark:text-slate-400'
                          }`}
                        >
                          <Icon size={17} aria-hidden="true" />
                        </span>
                      )}
                      <span className="flex flex-col">
                        <span>{section.label}</span>
                        {section.hint && (
                          <span className="text-xs font-normal text-slate-500 dark:text-slate-400">
                            {section.hint}
                          </span>
                        )}
                      </span>
                    </Link>
                  </li>
                );
              })}
              <li className="sm:col-span-2">
                <a
                  href={portfolio.personal.resumeUrl}
                  download
                  className="btn-primary mt-2 w-full justify-center !rounded-xl"
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
