import { motion } from 'framer-motion';
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
import { fadeUp, staggerContainer, viewportOnce } from '../../lib/motion';
import SectionHeading from '../ui/SectionHeading';

const categoryIcons: Record<SkillCategory, LucideIcon> = {
  Languages: Code2,
  Frontend: Layout,
  Backend: Server,
  Databases: Database,
  'AI/ML': Brain,
  Cloud: Cloud,
  DevOps: Workflow,
  Tools: Wrench,
};

const Skills = () => {
  return (
    <section id="skills" className="section-container scroll-mt-24 py-24">
      <SectionHeading
        eyebrow="Capabilities"
        title="Skills"
        subtitle="Grouped by discipline — from the languages I think in to the tools I ship with."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {skillCategories.map((category) => {
          const Icon = categoryIcons[category];
          const skills = portfolio.skills.filter((s) => s.category === category);
          if (skills.length === 0) return null;

          return (
            <motion.div
              key={category}
              variants={fadeUp}
              className="glass-card glass-card-hover p-6"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/15 to-violet-500/15 text-indigo-600 dark:text-indigo-400">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <h3 className="font-display font-semibold text-slate-900 dark:text-white">
                  {category}
                </h3>
              </div>

              <ul className="space-y-4">
                {skills.map((skill) => (
                  <li key={skill.name}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="font-medium text-slate-700 dark:text-slate-200">
                        {skill.name}
                      </span>
                      <span className="text-xs text-slate-400 dark:text-slate-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      role="progressbar"
                      aria-valuenow={skill.level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`${skill.name} proficiency`}
                      className="h-1.5 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10"
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={viewportOnce}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
                      />
                    </div>
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
