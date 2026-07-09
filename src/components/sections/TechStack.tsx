import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { portfolio, skillCategories } from '../../data/portfolio';
import type { Skill, SkillCategory } from '../../data/types';
import SectionHeading from '../ui/SectionHeading';

const categoryStyles: Record<SkillCategory, string> = {
  Languages:
    'border-amber-100 bg-amber-300 text-amber-950 shadow-amber-500/30',
  Frontend: 'border-sky-100 bg-sky-300 text-sky-950 shadow-sky-500/30',
  Backend:
    'border-emerald-100 bg-emerald-300 text-emerald-950 shadow-emerald-500/30',
  Databases: 'border-rose-100 bg-rose-300 text-rose-950 shadow-rose-500/30',
  'AI/ML':
    'border-violet-100 bg-violet-300 text-violet-950 shadow-violet-500/30',
  Cloud: 'border-cyan-100 bg-cyan-300 text-cyan-950 shadow-cyan-500/30',
  DevOps:
    'border-orange-100 bg-orange-300 text-orange-950 shadow-orange-500/30',
  Tools: 'border-slate-100 bg-slate-300 text-slate-950 shadow-slate-500/30',
};

const categoryAccents: Record<SkillCategory, string> = {
  Languages: 'bg-amber-400 text-amber-950',
  Frontend: 'bg-sky-400 text-sky-950',
  Backend: 'bg-emerald-400 text-emerald-950',
  Databases: 'bg-rose-400 text-rose-950',
  'AI/ML': 'bg-violet-400 text-violet-950',
  Cloud: 'bg-cyan-400 text-cyan-950',
  DevOps: 'bg-orange-400 text-orange-950',
  Tools: 'bg-slate-300 text-slate-950',
};

const groupVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.055,
    },
  },
};

const spanClasses = ['col-span-2', 'col-span-3', 'col-span-4'] as const;

const getSkillSpan = (skill: Skill) => {
  if (skill.name.length > 9) return 4;
  if (skill.name.length > 5) return 3;
  return 2;
};

const getBlockVariants = (prefersReducedMotion: boolean): Variants => ({
  hidden: prefersReducedMotion
    ? { opacity: 0 }
    : { opacity: 0, y: -72, rotate: -2.5 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: prefersReducedMotion
      ? { duration: 0.16 }
      : {
          duration: 0.52,
          type: 'spring',
          stiffness: 145,
          damping: 15,
        },
  },
});

const SkillBlock = ({ skill }: { skill: Skill }) => {
  const prefersReducedMotion = useReducedMotion();
  const span = spanClasses[getSkillSpan(skill) - 2];

  return (
    <motion.li
      variants={getBlockVariants(Boolean(prefersReducedMotion))}
      className={`relative flex min-h-[3rem] min-w-0 items-center overflow-hidden rounded-[0.35rem] border-2 px-3 py-2 shadow-lg ring-1 ring-white/45 ${span} ${categoryStyles[skill.category]}`}
      style={{
        backgroundImage:
          'linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)',
        backgroundSize: '1.35rem 1.35rem',
      }}
    >
      <span className="relative z-10 block w-full text-pretty text-sm font-black leading-tight">
        {skill.name}
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-1 rounded-[0.25rem] border border-white/35 bg-white/10 shadow-inner"
      />
    </motion.li>
  );
};

const SkillCategoryGroup = ({
  category,
  skills,
}: {
  category: SkillCategory;
  skills: Skill[];
}) => {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="relative overflow-hidden rounded-xl border border-slate-200/80 bg-white/65 p-3 shadow-lg shadow-slate-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04]"
    >
      <div className="bg-grid absolute inset-0 opacity-50" aria-hidden="true" />

      <div className="relative mb-3 flex items-center justify-between gap-3">
        <h3 className="font-display text-base font-bold text-slate-900 dark:text-white">
          {category}
        </h3>
        <span
          className={`rounded-md px-2 py-1 text-xs font-black ${categoryAccents[category]}`}
        >
          {skills.length}
        </span>
      </div>

      <div className="relative flex min-h-[12rem] flex-col justify-end rounded-lg border border-slate-900/10 bg-slate-950/[0.03] p-2 dark:border-white/10 dark:bg-night/30">
        <motion.ul
          variants={groupVariants}
          className="grid grid-cols-4 gap-1.5"
        >
          {skills.map((skill) => (
            <SkillBlock key={skill.name} skill={skill} />
          ))}
        </motion.ul>
        <div
          aria-hidden="true"
          className="mt-2 h-1 rounded-full bg-slate-900/15 dark:bg-white/15"
        />
      </div>
    </motion.article>
  );
};

const TechStack = () => {
  const groupedSkills = skillCategories
    .map((category) => ({
      category,
      skills: portfolio.skills.filter((skill) => skill.category === category),
    }))
    .filter((group) => group.skills.length > 0);

  return (
    <section id="tech-stack" className="section-container scroll-mt-24 pt-6 pb-16">
      <SectionHeading
        eyebrow="Daily drivers"
        title="Tech Stack"
        subtitle="Grouped by category, with each skill dropping into place like a small Tetris block."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {groupedSkills.map(({ category, skills }) => (
          <SkillCategoryGroup key={category} category={category} skills={skills} />
        ))}
      </div>
    </section>
  );
};

export default TechStack;
