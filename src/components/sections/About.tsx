import { useEffect, useRef, useState, type PointerEvent } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'framer-motion';
import { Briefcase, Code2, Flame, GraduationCap, Layers, MapPin, Terminal } from 'lucide-react';
import { portfolio } from '../../data/portfolio';
import { fadeUp, staggerContainer, viewportOnce } from '../../lib/motion';
import codingSceneGif from '../../assets/about-coding-scene.gif';
import codingSceneStatic from '../../assets/about-coding-scene.webp';
import pokeballGif from '../../assets/about-reactions/Animation 3D Sticker.gif';
import dragonBallGif from '../../assets/about-reactions/Dragon Ball Sticker.gif';
import runningManGif from '../../assets/about-reactions/Excited Running Man Sticker by Slick Skills.gif';
import faceWowGif from '../../assets/about-reactions/Face Wow Sticker.gif';
import fightPixelGif from '../../assets/about-reactions/Fight Pixel Sticker.gif';
import onePieceGif from '../../assets/about-reactions/One Piece Art Sticker.gif';
import scaredPanicGif from '../../assets/about-reactions/Scared Panic Sticker.gif';
import SectionHeading from '../ui/SectionHeading';
import FireWord from '../ui/FireWord';

/** Wraps every occurrence of "fire"/"flaming" in the easter-egg component. */
const withFire = (text: string) =>
  text.split(/(fire|flaming)/i).map((part, i) =>
    /^(fire|flaming)$/i.test(part) ? <FireWord key={i}>{part}</FireWord> : part
  );

const codingStartYear = Math.min(
  ...portfolio.experience.map((e) => parseInt(e.start.match(/\d{4}/)?.[0] ?? '', 10))
);
const careerStartYear = Math.min(
  ...portfolio.experience
    .filter((experience) => experience.type === 'work')
    .map((experience) => parseInt(experience.start.match(/\d{4}/)?.[0] ?? '', 10))
);

const reactions = {
  origin: {
    id: 'origin',
    src: faceWowGif,
    alt: 'A surprised animated face',
    title: 'Plot twist: Visual Basic.',
    caption: 'The origin story had more forms and buttons than capes.',
    imageClassName: 'object-contain',
  },
  automation: {
    id: 'automation',
    src: onePieceGif,
    alt: 'An excited pixel character eating',
    title: 'Efficient, not lazy.',
    caption: 'I simply refuse to be bored by the same task twice.',
    imageClassName: 'object-contain',
  },
  leadership: {
    id: 'leadership',
    src: runningManGif,
    alt: 'An animated sketch character running',
    title: 'Deadline spotted.',
    caption: 'I automated one task and somehow became the team lead.',
    imageClassName: 'object-contain',
  },
  learning: {
    id: 'learning',
    src: dragonBallGif,
    alt: 'An animated character powering up',
    title: 'Still in the training arc.',
    caption: 'The power level keeps compiling. Eventually.',
    imageClassName: 'object-contain',
  },
  fullStack: {
    id: 'full-stack',
    src: fightPixelGif,
    alt: 'An animated pixel fighter',
    title: 'Frontend. Backend. Bugs.',
    caption: 'Choose your fighter. I usually choose the debugger.',
    imageClassName: 'object-contain',
  },
  years: {
    id: 'years',
    src: scaredPanicGif,
    alt: 'A worried animated face',
    title: 'I checked the calendar.',
    caption: 'The calendar looked worried and checked me back.',
    imageClassName: 'object-contain',
  },
  technologies: {
    id: 'technologies',
    src: pokeballGif,
    alt: 'An animated ball rolling into view',
    title: 'One more tool unlocked.',
    caption: "Frontend, backend, deployment — gotta debug 'em all.",
    imageClassName: 'object-cover object-left',
  },
} as const;

type Reaction = (typeof reactions)[keyof typeof reactions];

const storyReactions: Reaction[] = [
  reactions.origin,
  reactions.automation,
  reactions.leadership,
  reactions.learning,
  reactions.fullStack,
];

const stats = [
  {
    icon: Briefcase,
    value: `${new Date().getFullYear() - careerStartYear}+`,
    label: 'Years building software',
    hint: 'Started in VB.NET. Please be gentle.',
    reaction: reactions.years,
  },
  {
    icon: Code2,
    value: `${portfolio.projects.length}+`,
    label: 'Projects shipped',
    hint: 'Working software beats a perfect idea.',
  },
  {
    icon: Layers,
    value: `${portfolio.skills.length}+`,
    label: 'Technologies used',
    hint: 'And yes, I still read the documentation.',
    reaction: reactions.technologies,
  },
];

const education = portfolio.experience.find((e) => e.type === 'education');

const About = () => {
  const codingGlowRef = useRef<HTMLDivElement>(null);
  const [activeReaction, setActiveReaction] = useState<Reaction | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const rawRotateX = useMotionValue(0);
  const rawRotateY = useMotionValue(0);
  const rotateX = useSpring(rawRotateX, { stiffness: 260, damping: 24 });
  const rotateY = useSpring(rawRotateY, { stiffness: 260, damping: 24 });

  useEffect(() => {
    Object.values(reactions).forEach((reaction) => {
      const image = new Image();
      image.src = reaction.src;
    });
  }, []);

  const handleCodingPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    codingGlowRef.current?.style.setProperty('--coding-x', `${x}px`);
    codingGlowRef.current?.style.setProperty('--coding-y', `${y}px`);

    if (!prefersReducedMotion) {
      rawRotateX.set(-((y / rect.height) - 0.5) * 7);
      rawRotateY.set(((x / rect.width) - 0.5) * 9);
    }
  };

  const resetCodingTilt = () => {
    rawRotateX.set(0);
    rawRotateY.set(0);
  };

  return (
    <section id="about" className="section-container scroll-mt-24 py-16">
      <SectionHeading
        eyebrow="My story"
        title="About Me"
        subtitle="Part builder, part debugger, full-time enemy of repetitive work."
      />

      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="glass-card overflow-hidden"
        >
          {/* Tab bar — this "about" is a file you're reading, not a form you're filling out */}
          <div className="flex items-center gap-2 border-b border-slate-200/80 bg-slate-100/60 px-4 py-3 dark:border-white/10 dark:bg-white/[0.03]">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" aria-hidden="true" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" aria-hidden="true" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" aria-hidden="true" />
            <span className="ml-2 flex items-center gap-1.5 rounded-md bg-white/70 px-2.5 py-1 font-mono text-xs text-slate-500 dark:bg-white/5 dark:text-slate-400">
              <Terminal size={12} aria-hidden="true" />
              about.ts
            </span>
          </div>

          <div className="space-y-5 p-6 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            {portfolio.personal.about.map((paragraph, i) => (
              <motion.p
                key={i}
                whileHover={{ x: 5 }}
                onHoverStart={() => setActiveReaction(storyReactions[i])}
                onHoverEnd={() => setActiveReaction(null)}
                onFocus={() => setActiveReaction(storyReactions[i])}
                onBlur={() => setActiveReaction(null)}
                transition={{ type: 'spring', stiffness: 340, damping: 24 }}
                tabIndex={0}
                aria-describedby="about-reaction-caption"
                className="group flex cursor-help gap-4 rounded-xl px-2 py-1 transition-colors hover:bg-indigo-500/[0.045] focus-visible:bg-indigo-500/[0.045] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60 dark:hover:bg-cyan-300/[0.035] dark:focus-visible:bg-cyan-300/[0.035] dark:focus-visible:ring-cyan-300/50"
              >
                <span className="select-none pt-1 font-mono text-sm text-slate-400 transition-colors group-hover:text-indigo-500 dark:text-slate-600 dark:group-hover:text-cyan-300">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span>{withFire(paragraph)}</span>
              </motion.p>
            ))}
            <p className="flex gap-4 border-t border-dashed border-slate-200/70 pt-4 font-mono text-sm text-slate-400 dark:border-white/10 dark:text-slate-500">
              <span className="select-none pt-0.5">
                {String(portfolio.personal.about.length + 1).padStart(2, '0')}
              </span>
              <span>
                <span className="text-indigo-500/70 dark:text-indigo-400/70">//</span> hover or
                focus a line — this file has reactions. Also, the <FireWord>fire</FireWord> is dramatic.
                <span
                  aria-hidden="true"
                  className="ml-1 inline-block h-4 w-[2px] translate-y-0.5 animate-pulse bg-indigo-400 align-middle"
                />
              </span>
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col gap-4"
        >
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.025 }}
                whileTap={{ scale: 0.98 }}
                onHoverStart={() => stat.reaction && setActiveReaction(stat.reaction)}
                onHoverEnd={() => stat.reaction && setActiveReaction(null)}
                onFocus={() => stat.reaction && setActiveReaction(stat.reaction)}
                onBlur={() => stat.reaction && setActiveReaction(null)}
                transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                title={stat.hint}
                tabIndex={stat.reaction ? 0 : undefined}
                aria-describedby={stat.reaction ? 'about-reaction-caption' : undefined}
                className={`group glass-card flex flex-col items-center gap-1 p-4 text-center hover:border-indigo-300/70 hover:shadow-lg hover:shadow-indigo-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60 dark:hover:border-cyan-300/25 dark:focus-visible:ring-cyan-300/50 ${stat.reaction ? 'cursor-help' : 'cursor-default'}`}
              >
                <motion.span
                  whileHover={{ rotate: -8, scale: 1.12 }}
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-500 transition-colors group-hover:bg-indigo-500 group-hover:text-white dark:bg-cyan-300/10 dark:text-cyan-300 dark:group-hover:bg-cyan-300 dark:group-hover:text-slate-950"
                >
                  <stat.icon size={17} aria-hidden="true" />
                </motion.span>
                <span className="font-display text-2xl font-bold text-slate-900 dark:text-white">
                  {stat.value}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeUp}
            onPointerMove={handleCodingPointerMove}
            onPointerLeave={resetCodingTilt}
            style={{ rotateX, rotateY, transformPerspective: 900 }}
            className="group relative min-h-[16rem] cursor-crosshair overflow-hidden rounded-2xl border border-slate-200/80 bg-night shadow-xl shadow-slate-900/15 transition-[border-color,box-shadow] duration-300 hover:border-cyan-300/50 hover:shadow-cyan-500/20 dark:border-white/10 dark:shadow-black/30"
          >
            <img
              src={codingSceneGif}
              alt="Animated pixel-art coding workspace"
              className="absolute inset-0 h-full w-full object-cover opacity-90 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100 group-hover:saturate-125 motion-reduce:hidden"
            />
            <img
              src={codingSceneStatic}
              alt="Pixel-art coding workspace"
              className="absolute inset-0 hidden h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:block"
            />
            <div
              ref={codingGlowRef}
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-0 mix-blend-screen transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background:
                  'radial-gradient(180px circle at var(--coding-x, 50%) var(--coding-y, 50%), rgba(103, 232, 249, 0.34), transparent 70%)',
              }}
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-night via-night/25 to-transparent"
            />
            <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
              <span className="rounded-full border border-cyan-300/20 bg-night/65 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-cyan-200 backdrop-blur">
                {activeReaction ? 'Reaction unlocked' : 'Hover a story line'}
              </span>
              <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
            </div>
            <div className="absolute inset-x-0 bottom-0 z-20 p-5 text-white" aria-live="polite">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeReaction?.id ?? 'workspace-default'}
                  initial={{ opacity: 0, y: 7 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.18 }}
                >
                  <p className="font-display text-lg font-black">
                    {activeReaction?.title ?? 'Always learning. Always building.'}
                  </p>
                  <p
                    id="about-reaction-caption"
                    className="mt-1 max-w-[75%] text-xs font-medium text-slate-300"
                  >
                    {activeReaction?.caption ??
                      'The workspace stays live. The personality appears on hover or focus.'}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
            <AnimatePresence mode="wait" initial={false}>
              {activeReaction ? (
                <motion.div
                  key={activeReaction.id}
                  initial={{ opacity: 0, scale: 0.72, rotate: -8, y: 12 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotate: 6, y: -8 }}
                  transition={{
                    type: 'spring',
                    stiffness: prefersReducedMotion ? 1000 : 330,
                    damping: prefersReducedMotion ? 100 : 20,
                  }}
                  className="pointer-events-none absolute right-4 top-11 z-10 flex h-32 w-40 items-center justify-center overflow-hidden drop-shadow-[0_12px_18px_rgba(0,0,0,0.45)] sm:right-6 sm:w-44"
                >
                  <img
                    src={activeReaction.src}
                    alt={activeReaction.alt}
                    className={`h-full w-full ${activeReaction.imageClassName}`}
                  />
                </motion.div>
              ) : (
                <motion.span
                  key="code-mark"
                  aria-hidden="true"
                  className="pointer-events-none absolute right-5 top-16 rounded-lg border border-cyan-300/20 bg-night/70 px-2.5 py-1 font-mono text-xs font-black text-cyan-200 opacity-0 backdrop-blur transition-opacity group-hover:opacity-100"
                  animate={{ y: prefersReducedMotion ? 0 : [0, -5, 0] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  {'</>'}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div variants={fadeUp} className="glass-card space-y-4 p-6">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
                Quick facts
              </h3>
              <span className="relative flex h-2 w-2" aria-hidden="true" title="Live-ish">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
            </div>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 rounded-lg p-1 transition-colors hover:bg-indigo-500/5 dark:hover:bg-cyan-300/5"
              >
                <MapPin size={16} className="shrink-0 text-indigo-500" aria-hidden="true" />
                Based in {portfolio.personal.location}
              </motion.li>
              {education && (
                <motion.li
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 rounded-lg p-1 transition-colors hover:bg-indigo-500/5 dark:hover:bg-cyan-300/5"
                >
                  <GraduationCap size={16} className="shrink-0 text-indigo-500" aria-hidden="true" />
                  {education.role}
                </motion.li>
              )}
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 rounded-lg p-1 transition-colors hover:bg-indigo-500/5 dark:hover:bg-cyan-300/5"
              >
                <Briefcase size={16} className="shrink-0 text-indigo-500" aria-hidden="true" />
                {portfolio.personal.availableForWork
                  ? 'Open to freelance & full-time roles'
                  : 'Currently fully booked'}
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 rounded-lg p-1 transition-colors hover:bg-orange-500/5"
              >
                <Flame size={16} className="shrink-0 text-orange-500" aria-hidden="true" />
                Coding since {codingStartYear} — the <FireWord>fire</FireWord> hasn't gone out
              </motion.li>
            </ul>
            <a href={`mailto:${portfolio.personal.email}`} className="btn-ghost w-full justify-center !py-2.5">
              Say hello
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
