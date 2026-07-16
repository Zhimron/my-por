import { useEffect, useRef, useState, type PointerEvent } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Blocks,
  BriefcaseBusiness,
  Download,
  Handshake,
  Menu,
  MessageCircle,
  Rocket,
  UserRound,
  X,
} from 'lucide-react';
import { navbarSections } from '../../data/navigation';
import { portfolio } from '../../data/portfolio';
import { useTheme } from '../../context/ThemeContext';
import ThemeEye from '../ui/ThemeEye';

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
  const navGlowRef = useRef<HTMLDivElement>(null);
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

  const handleNavPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    navGlowRef.current?.style.setProperty(
      '--nav-x',
      `${event.clientX - rect.left}px`,
    );
    navGlowRef.current?.style.setProperty(
      '--nav-y',
      `${event.clientY - rect.top}px`,
    );
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-all duration-300 ${
        scrolled || isHome
          ? 'border-slate-200/70 bg-white/80 shadow-sm shadow-slate-900/5 backdrop-blur-2xl dark:border-white/10 dark:bg-night/80 dark:shadow-black/20'
          : 'border-transparent bg-transparent'
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="section-container flex h-16 items-center justify-between"
      >
        <motion.div
          whileHover={{ y: -2, scale: 1.025 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 360, damping: 22 }}
        >
          <Link
            to="/"
            className="group relative inline-flex items-center gap-2 py-2"
            aria-label={`${portfolio.personal.fullName} home`}
            onClick={() => setMenuOpen(false)}
          >
            <span className="flex font-display text-[1.65rem] font-black leading-none tracking-[-0.09em] text-slate-950 dark:text-white">
              {portfolio.personal.brand.split('').map((letter, index) => (
                <motion.span
                  key={`${letter}-${index}`}
                  whileHover={{ y: -3 }}
                  transition={{ type: 'spring', stiffness: 450, damping: 20 }}
                  className="bg-gradient-to-br from-slate-950 via-indigo-700 to-cyan-600 bg-clip-text pr-[0.04em] text-transparent dark:from-white dark:via-indigo-200 dark:to-cyan-300"
                >
                  {letter}
                </motion.span>
              ))}
            </span>
            <span className="relative mt-3 h-2 w-2 overflow-hidden rounded-sm bg-indigo-600 transition-transform duration-300 group-hover:rotate-45 dark:bg-cyan-300">
              <span className="absolute inset-0 translate-y-full bg-cyan-400 transition-transform duration-300 group-hover:translate-y-0" />
            </span>
            <span className="absolute inset-x-0 -bottom-0.5 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-indigo-600 to-cyan-400 transition-transform duration-300 group-hover:scale-x-100" />
          </Link>
        </motion.div>

        <div
          onPointerMove={handleNavPointerMove}
          className="group relative hidden overflow-hidden rounded-2xl border border-slate-200/80 bg-white/65 p-1 shadow-sm shadow-slate-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.045] lg:block"
        >
          <div
            ref={navGlowRef}
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background:
                'radial-gradient(110px circle at var(--nav-x, 50%) var(--nav-y, 50%), rgba(99, 102, 241, 0.2), transparent 72%)',
            }}
          />

          <ul className="relative flex items-center gap-1">
            {navbarSections.map((section) => {
              const isActive = active === section.id;
              return (
                <motion.li
                  key={section.id}
                  className="relative"
                  whileHover={{ y: -2, scale: 1.025 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: 'spring', stiffness: 420, damping: 24 }}
                >
                  <Link
                    to={section.path}
                    aria-current={isActive ? 'page' : undefined}
                    className={`group/item relative flex items-center overflow-hidden rounded-xl px-3.5 py-2 text-sm font-bold transition-colors duration-300 xl:px-4 ${
                      isActive
                        ? 'text-slate-950 dark:text-white'
                        : 'text-slate-500 hover:bg-white/55 hover:text-slate-950 dark:text-slate-400 dark:hover:bg-white/[0.055] dark:hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="absolute inset-0 rounded-xl bg-slate-100 shadow-sm dark:bg-white/10"
                        transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                      />
                    )}
                    <span className="relative z-10 transition-transform duration-300 group-hover/item:-translate-y-0.5">
                      {section.label}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`absolute bottom-1 left-1/2 z-10 h-1 w-1 -translate-x-1/2 rounded-full bg-indigo-500 transition-all duration-300 dark:bg-cyan-300 ${
                        isActive
                          ? 'scale-100 opacity-100'
                          : 'scale-0 opacity-0 group-hover/item:scale-100 group-hover/item:opacity-100'
                      }`}
                    />
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </div>

        <div className="flex items-center gap-2">
          <ThemeEye theme={theme} onToggle={toggleTheme} />

          <a
            href={portfolio.personal.resumeUrl}
            download="Shimron-Guray-Resume.pdf"
            className="group hidden items-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-slate-950/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-600 hover:shadow-indigo-500/25 dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-200 sm:inline-flex"
          >
            <Download size={16} aria-hidden="true" />
            Resume
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/70 bg-white/70 text-slate-600 shadow-sm backdrop-blur transition-colors hover:border-indigo-300 hover:text-indigo-600 dark:border-white/10 dark:bg-white/[0.055] dark:text-slate-300 dark:hover:border-cyan-300/30 dark:hover:text-cyan-200 lg:hidden"
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
                  download="Shimron-Guray-Resume.pdf"
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
