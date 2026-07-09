import { motion } from 'framer-motion';
import { Briefcase, Code2, GraduationCap, Layers, MapPin } from 'lucide-react';
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
  },
  { icon: Code2, value: `${portfolio.projects.length}+`, label: 'Projects shipped' },
  { icon: Layers, value: `${portfolio.skills.length}+`, label: 'Technologies used' },
];

const education = portfolio.experience.find((e) => e.type === 'education');

const About = () => {
  return (
    <section id="about" className="section-container scroll-mt-24 py-24">
      <SectionHeading
        eyebrow="My story"
        title="About Me"
        subtitle="From VB.NET desktop systems to AI-powered web products."
      />

      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="glass-card space-y-4 p-8 text-lg leading-relaxed text-slate-700 dark:text-slate-300"
        >
          {portfolio.personal.about.map((paragraph, i) => (
            <p key={i}>{withFire(paragraph)}</p>
          ))}
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Psst — try hovering the word{' '}
            <FireWord>fire</FireWord>.
          </p>
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
            <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
              Quick facts
            </h3>
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
