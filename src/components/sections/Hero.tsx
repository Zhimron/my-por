import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, MapPin, Sparkles } from 'lucide-react';
import { portfolio } from '../../data/portfolio';
import SocialIcon from '../ui/SocialIcon';

/** Cycles through the roles defined in the content file. */
const RotatingRole = () => {
  const roles = portfolio.personal.roles;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2600);
    return () => clearInterval(timer);
  }, [roles.length]);

  return (
    <span className="relative inline-flex h-[1.4em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="gradient-text whitespace-nowrap"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

const Hero = () => {
  const { personal } = portfolio;

  return (
    <section id="hero" className="section-container flex min-h-[calc(100vh-4rem)] items-center py-16">
      <div className="grid w-full items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
        {/* Copy */}
        <div className="order-2 text-center lg:order-1 lg:text-left">
          {personal.availableForWork && (
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="chip mb-6 gap-2 !py-1.5"
            >
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for work
            </motion.span>
          )}

          <motion.h1
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="font-display text-4xl font-bold leading-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl"
          >
            Hi, I'm {personal.name}!
            <span className="mt-3 block text-3xl sm:text-4xl lg:text-5xl">
              <RotatingRole />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="mx-auto mt-6 max-w-xl text-lg text-slate-600 dark:text-slate-300 lg:mx-0"
          >
            {personal.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <Link to="/#projects" className="btn-primary">
              View Projects
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link to="/#contact" className="btn-ghost">
              Contact Me
            </Link>
            <div className="flex gap-2">
              {portfolio.socials.map((s) => (
                <a
                  key={s.id}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="glass flex h-11 w-11 items-center justify-center rounded-full text-slate-600 transition-all hover:-translate-y-0.5 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-300"
                >
                  <SocialIcon icon={s.icon} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 flex items-center justify-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 lg:justify-start"
          >
            <MapPin size={14} aria-hidden="true" />
            {personal.location}
          </motion.p>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="order-1 flex justify-center lg:order-2"
        >
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-full bg-gradient-to-tr from-indigo-500 via-violet-500 to-cyan-400 opacity-30 blur-2xl"
            />
            <div className="relative rounded-full bg-gradient-to-tr from-indigo-500 via-violet-500 to-cyan-400 p-1.5">
              <img
                src={personal.avatar}
                alt={`Portrait of ${personal.fullName}`}
                width={320}
                height={320}
                className="h-56 w-56 rounded-full object-cover sm:h-72 sm:w-72 lg:h-80 lg:w-80"
              />
            </div>

            <motion.div
              animate={{ y: [-6, 6] }}
              transition={{ repeat: Infinity, repeatType: 'reverse', duration: 2.4 }}
              className="glass-card absolute -left-6 top-8 flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200"
            >
              <Sparkles size={14} className="text-violet-500" aria-hidden="true" />
              {personal.roles[0]}
            </motion.div>
            <motion.div
              animate={{ y: [6, -6] }}
              transition={{ repeat: Infinity, repeatType: 'reverse', duration: 2.8 }}
              className="glass-card absolute -right-8 bottom-10 flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200"
            >
              <span aria-hidden="true">{'</>'}</span>
              {personal.roles[1] ?? personal.roles[0]}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
