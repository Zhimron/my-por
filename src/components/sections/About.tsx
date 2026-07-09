import { motion } from 'framer-motion';
import { Briefcase, Code2, Flame, GraduationCap, Layers, MapPin, Terminal } from 'lucide-react';
import { portfolio } from '../../data/portfolio';
import { fadeUp, staggerContainer, viewportOnce } from '../../lib/motion';
import SectionHeading from '../ui/SectionHeading';
import FireWord from '../ui/FireWord';

/** Wraps every occurrence of "fire"/"flaming" in the easter-egg component. */
const withFire = (text: string) =>
  text.split(/(fire|flaming)/i).map((part, i) =>
    /^(fire|flaming)$/i.test(part) ? <FireWord key={i}>{part}</FireWord> : part
  );

const startYear = Math.min(
  ...portfolio.experience.map((e) => parseInt(e.start.match(/\d{4}/)?.[0] ?? '', 10))
);

const stats = [
  {
    icon: Briefcase,
    value: `${new Date().getFullYear() - startYear}+`,
    label: 'Years building software',
    hint: 'Started in VB.NET. Please be gentle.',
  },
  { icon: Code2, value: `${portfolio.projects.length}+`, label: 'Projects shipped' },
  { icon: Layers, value: `${portfolio.skills.length}+`, label: 'Technologies used' },
];

const education = portfolio.experience.find((e) => e.type === 'education');

const About = () => {
  return (
    <section id="about" className="section-container scroll-mt-24 py-16">
      <SectionHeading
        eyebrow="My story"
        title="About Me"
        subtitle="From VB.NET desktop systems to AI-powered web products."
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
              <p key={i} className="flex gap-4">
                <span className="select-none pt-1 font-mono text-sm text-slate-400 dark:text-slate-600">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span>{withFire(paragraph)}</span>
              </p>
            ))}
            <p className="flex gap-4 border-t border-dashed border-slate-200/70 pt-4 font-mono text-sm text-slate-400 dark:border-white/10 dark:text-slate-500">
              <span className="select-none pt-0.5">
                {String(portfolio.personal.about.length + 1).padStart(2, '0')}
              </span>
              <span>
                <span className="text-indigo-500/70 dark:text-indigo-400/70">//</span> psst — hover{' '}
                <FireWord>fire</FireWord> up there
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
                title={stat.hint}
                className="glass-card glass-card-hover flex flex-col items-center gap-1 p-4 text-center"
              >
                <stat.icon size={20} className="text-indigo-500" aria-hidden="true" />
                <span className="font-display text-2xl font-bold text-slate-900 dark:text-white">
                  {stat.value}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>

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
              <li className="flex items-center gap-3">
                <MapPin size={16} className="shrink-0 text-indigo-500" aria-hidden="true" />
                Based in {portfolio.personal.location}
              </li>
              {education && (
                <li className="flex items-center gap-3">
                  <GraduationCap size={16} className="shrink-0 text-indigo-500" aria-hidden="true" />
                  {education.role}
                </li>
              )}
              <li className="flex items-center gap-3">
                <Briefcase size={16} className="shrink-0 text-indigo-500" aria-hidden="true" />
                {portfolio.personal.availableForWork
                  ? 'Open to freelance & full-time roles'
                  : 'Currently fully booked'}
              </li>
              <li className="flex items-center gap-3">
                <Flame size={16} className="shrink-0 text-orange-500" aria-hidden="true" />
                Coding since {startYear} — the <FireWord>fire</FireWord> hasn't gone out
              </li>
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
