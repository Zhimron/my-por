import { Link } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, BrainCircuit, Terminal } from 'lucide-react';
import { aiProjects } from '../../data/portfolio';
import type { ProjectStatus } from '../../data/types';
import { statusLabels, statusStyles } from '../../lib/projectMeta';
import { viewportOnce } from '../../lib/motion';
import SectionHeading from '../ui/SectionHeading';

const BAR_WIDTH = 20;

/**
 * Playful stand-in for a "training progress" readout — maps real project
 * status onto ML-flavored copy instead of a made-up accuracy score.
 */
const readiness: Record<ProjectStatus, { value: number; label: string; tone: string }> = {
  completed: {
    value: 100,
    label: 'trained & shipped',
    tone: 'text-emerald-600 dark:text-emerald-400',
  },
  'in-progress': {
    value: 65,
    label: 'model training…',
    tone: 'text-amber-600 dark:text-amber-400',
  },
  planned: { value: 12, label: 'dataset: TBD', tone: 'text-slate-400 dark:text-slate-500' },
};

/** Renders a percentage as an ASCII progress bar, like a CLI training run. */
const progressBar = (value: number) => {
  const filled = Math.round((value / 100) * BAR_WIDTH);
  return '█'.repeat(filled) + '░'.repeat(BAR_WIDTH - filled);
};

const rowMotion: Variants = {
  hidden: { opacity: 0, x: -14 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

/**
 * Dedicated AI & ML showcase, sourced from projects with category "ai" —
 * rendered as a training-run log rather than a grid of gradient-bordered
 * feature cards, matching the terminal system used by About/Experience/
 * Certifications elsewhere on the site.
 */
const AIProjects = () => {
  if (aiProjects.length === 0) return null;

  return (
    <section id="ai-projects" className="scroll-mt-24 pt-6 pb-16">
      <div className="section-container">
        <SectionHeading
          eyebrow="Intelligence, applied"
          title="AI Projects"
          subtitle="Machine learning and LLM-powered systems — trained on real problems, validated in production, not just in a notebook."
        />

        <div className="mx-auto max-w-3xl glass-card overflow-hidden">
          <div className="flex items-center gap-2 border-b border-slate-200/80 bg-slate-100/60 px-4 py-3 dark:border-white/10 dark:bg-white/[0.03]">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" aria-hidden="true" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" aria-hidden="true" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" aria-hidden="true" />
            <span className="ml-2 flex items-center gap-1.5 rounded-md bg-white/70 px-2.5 py-1 font-mono text-xs text-slate-500 dark:bg-white/5 dark:text-slate-400">
              <Terminal size={12} aria-hidden="true" />
              models.log
            </span>
            <span className="ml-auto hidden font-mono text-[11px] text-slate-400 dark:text-slate-600 sm:inline">
              $ python train.py --list
            </span>
          </div>

          <ul className="relative">
            {aiProjects.map((project, i) => {
              const ready = readiness[project.status];
              return (
                <motion.li
                  key={project.slug}
                  variants={rowMotion}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  className={`group px-5 py-5 transition-colors hover:bg-slate-50/60 dark:hover:bg-white/[0.02] ${
                    i < aiProjects.length - 1
                      ? 'border-b border-dashed border-slate-200/70 dark:border-white/10'
                      : ''
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs">
                    <span className="inline-flex items-center gap-1 rounded bg-violet-500/10 px-1.5 py-0.5 font-semibold uppercase tracking-wide text-violet-600 dark:text-violet-300">
                      <BrainCircuit size={11} aria-hidden="true" />
                      model
                    </span>
                    <span
                      className={`rounded border px-1.5 py-0.5 font-semibold ${statusStyles[project.status]}`}
                    >
                      {statusLabels[project.status]}
                    </span>
                    <span className="text-slate-400 dark:text-slate-500">./{project.slug}</span>
                  </div>

                  <h3 className="mt-1.5 font-display text-lg font-semibold text-slate-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    {project.description}
                  </p>

                  <ul className="mt-2.5 space-y-1 font-mono text-[13px] leading-relaxed">
                    {project.features.slice(0, 3).map((feature) => (
                      <li key={feature} className="flex gap-2">
                        <span aria-hidden="true" className="select-none text-violet-500/70">
                          ›
                        </span>
                        <span className="text-slate-600 dark:text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs">
                    <span className={ready.tone}>{progressBar(ready.value)}</span>
                    <span className="tabular-nums text-slate-400 dark:text-slate-500">
                      {ready.value}%
                    </span>
                    <span className="text-slate-400 dark:text-slate-500">{ready.label}</span>
                  </div>

                  <Link
                    to={`/projects/${project.slug}`}
                    className="mt-3 inline-flex items-center gap-1 font-mono text-sm font-semibold text-violet-600 transition-colors hover:text-violet-500 dark:text-violet-300"
                  >
                    $ open case-study
                    <ArrowRight
                      size={14}
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AIProjects;
