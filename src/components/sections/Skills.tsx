import { motion, type Variants } from 'framer-motion';
import {
  Brain,
  Cloud,
  Code2,
  Database,
  Layout,
  Server,
  Workflow,
  Wrench,
  type LucideIcon,
} from 'lucide-react';
import { portfolio, skillCategories } from '../../data/portfolio';
import type { SkillCategory } from '../../data/types';
import { staggerContainer } from '../../lib/motion';
import SectionHeading from '../ui/SectionHeading';

/**
 * Each category gets its own tetromino color so the grid below reads like
 * a Tetris board — same card system (glass, rounded, indigo/violet base),
 * just one accent hue per "piece".
 */
const categoryStyles: Record<
  SkillCategory,
  { icon: LucideIcon; bar: string; badge: string; chipHover: string }
> = {
  Languages: {
    icon: Code2,
    bar: 'bg-indigo-500',
    badge: 'from-indigo-500/20 to-indigo-500/5 text-indigo-600 dark:text-indigo-300',
    chipHover:
      'hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:border-indigo-400/40 dark:hover:text-indigo-300 dark:hover:bg-indigo-500/10',
  },
  Frontend: {
    icon: Layout,
    bar: 'bg-violet-500',
    badge: 'from-violet-500/20 to-violet-500/5 text-violet-600 dark:text-violet-300',
    chipHover:
      'hover:border-violet-300 hover:text-violet-600 hover:bg-violet-50 dark:hover:border-violet-400/40 dark:hover:text-violet-300 dark:hover:bg-violet-500/10',
  },
  Backend: {
    icon: Server,
    bar: 'bg-cyan-500',
    badge: 'from-cyan-500/20 to-cyan-500/5 text-cyan-600 dark:text-cyan-300',
    chipHover:
      'hover:border-cyan-300 hover:text-cyan-600 hover:bg-cyan-50 dark:hover:border-cyan-400/40 dark:hover:text-cyan-300 dark:hover:bg-cyan-500/10',
  },
  Databases: {
    icon: Database,
    bar: 'bg-emerald-500',
    badge: 'from-emerald-500/20 to-emerald-500/5 text-emerald-600 dark:text-emerald-300',
    chipHover:
      'hover:border-emerald-300 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:border-emerald-400/40 dark:hover:text-emerald-300 dark:hover:bg-emerald-500/10',
  },
  'AI/ML': {
    icon: Brain,
    bar: 'bg-fuchsia-500',
    badge: 'from-fuchsia-500/20 to-fuchsia-500/5 text-fuchsia-600 dark:text-fuchsia-300',
    chipHover:
      'hover:border-fuchsia-300 hover:text-fuchsia-600 hover:bg-fuchsia-50 dark:hover:border-fuchsia-400/40 dark:hover:text-fuchsia-300 dark:hover:bg-fuchsia-500/10',
  },
  Cloud: {
    icon: Cloud,
    bar: 'bg-sky-500',
    badge: 'from-sky-500/20 to-sky-500/5 text-sky-600 dark:text-sky-300',
    chipHover:
      'hover:border-sky-300 hover:text-sky-600 hover:bg-sky-50 dark:hover:border-sky-400/40 dark:hover:text-sky-300 dark:hover:bg-sky-500/10',
  },
  DevOps: {
    icon: Workflow,
    bar: 'bg-amber-500',
    badge: 'from-amber-500/20 to-amber-500/5 text-amber-600 dark:text-amber-300',
    chipHover:
      'hover:border-amber-300 hover:text-amber-600 hover:bg-amber-50 dark:hover:border-amber-400/40 dark:hover:text-amber-300 dark:hover:bg-amber-500/10',
  },
  Tools: {
    icon: Wrench,
    bar: 'bg-rose-500',
    badge: 'from-rose-500/20 to-rose-500/5 text-rose-600 dark:text-rose-300',
    chipHover:
      'hover:border-rose-300 hover:text-rose-600 hover:bg-rose-50 dark:hover:border-rose-400/40 dark:hover:text-rose-300 dark:hover:bg-rose-500/10',
  },
};

/** Drops each block in from above, like a tetromino settling into the stack. */
const dropIn: Variants = {
  hidden: { opacity: 0, y: -18, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="section-container scroll-mt-24 pt-16 pb-10">
      <SectionHeading
        eyebrow="Capabilities"
        title="Skills"
        subtitle="Every skill is a block — stack enough of them and they clear into shipped software."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        className="grid grid-flow-row-dense gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {skillCategories.map((category) => {
          const skills = portfolio.skills.filter((s) => s.category === category);
          if (skills.length === 0) return null;

          const style = categoryStyles[category];
          const Icon = style.icon;
          const isWidePiece = skills.length >= 5;

          return (
            <motion.div
              key={category}
              variants={dropIn}
              className={`glass-card relative overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/10 dark:hover:shadow-black/30 ${
                isWidePiece ? 'sm:col-span-2' : ''
              }`}
            >
              <span
                className={`absolute inset-x-0 top-0 h-1.5 ${style.bar}`}
                aria-hidden="true"
              />

              <div className="mb-5 flex items-center gap-3">
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${style.badge}`}
                >
                  <Icon size={20} aria-hidden="true" />
                </span>
                <h3 className="font-display font-semibold text-slate-900 dark:text-white">
                  {category}
                </h3>
                <span className="ml-auto rounded-md bg-slate-900/5 px-2 py-0.5 text-xs font-semibold tabular-nums text-slate-500 dark:bg-white/10 dark:text-slate-400">
                  {skills.length}
                </span>
              </div>

              <ul className="flex flex-wrap gap-1.5">
                {skills.map((skill) => (
                  <li
                    key={skill.name}
                    className={`rounded-md border border-slate-200 bg-white/70 px-3 py-1.5 text-sm font-medium text-slate-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] transition-all duration-200 hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] ${style.chipHover}`}
                  >
                    {skill.name}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Skills;
