import { motion, type Variants } from 'framer-motion';
import { Briefcase, GitBranch, GraduationCap } from 'lucide-react';
import { portfolio } from '../../data/portfolio';
import { viewportOnce } from '../../lib/motion';
import SectionHeading from '../ui/SectionHeading';

/** Cheap, deterministic 7-char hex "commit hash" — cosmetic only, not a real hash. */
const commitHash = (id: string) => {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0;
  return h.toString(16).padStart(7, '0').slice(0, 7);
};

const rowMotion: Variants = {
  hidden: { opacity: 0, x: -14 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

/**
 * Career history rendered as a git log, not a dot-and-line timeline —
 * every role is a "commit" on either the work or school branch, with the
 * current role tagged HEAD. Reuses the terminal-window chrome from About.tsx
 * so both sections read as the same designed system.
 */
const Experience = () => {
  const items = portfolio.experience;

  return (
    <section id="experience" className="section-container scroll-mt-24 pt-16 pb-10">
      <SectionHeading
        eyebrow="My journey"
        title="Experience"
        subtitle="Work and education, one commit at a time — from desktop systems to full-stack development."
      />

      <div className="glass-card overflow-hidden">
        <div className="flex items-center gap-2 border-b border-slate-200/80 bg-slate-100/60 px-4 py-3 dark:border-white/10 dark:bg-white/[0.03]">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" aria-hidden="true" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" aria-hidden="true" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" aria-hidden="true" />
          <span className="ml-2 flex items-center gap-1.5 rounded-md bg-white/70 px-2.5 py-1 font-mono text-xs text-slate-500 dark:bg-white/5 dark:text-slate-400">
            <GitBranch size={12} aria-hidden="true" />
            career.log
          </span>
          <span className="ml-auto hidden font-mono text-[11px] text-slate-400 dark:text-slate-600 sm:inline">
            git log --oneline --graph
          </span>
        </div>

        <ol className="relative">
          {items.map((item, i) => {
            const isCurrent = item.end === null;
            const isLast = i === items.length - 1;
            const Icon = item.type === 'education' ? GraduationCap : Briefcase;

            return (
              <motion.li
                key={item.id}
                variants={rowMotion}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="group relative flex gap-4 border-b border-dashed border-slate-200/70 px-5 py-5 transition-colors last:border-b-0 hover:bg-slate-50/60 dark:border-white/10 dark:hover:bg-white/[0.02]"
              >
                {/* Graph column */}
                <div className="relative flex w-4 shrink-0 flex-col items-center">
                  <span
                    aria-hidden="true"
                    className={`relative z-10 mt-1.5 flex h-3 w-3 shrink-0 items-center justify-center rounded-full ring-4 ${
                      isCurrent
                        ? 'bg-emerald-500 ring-emerald-500/15'
                        : 'bg-indigo-400 ring-indigo-400/10 dark:bg-indigo-500'
                    }`}
                  >
                    {isCurrent && (
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                    )}
                  </span>
                  {!isLast && (
                    <span
                      aria-hidden="true"
                      className="mt-1 w-px flex-1 bg-slate-200 dark:bg-white/10"
                    />
                  )}
                </div>

                {/* Commit body */}
                <div className="min-w-0 flex-1 pb-1">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs">
                    <span className="text-indigo-500/70 dark:text-indigo-300/60">
                      #{commitHash(item.id)}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1 rounded px-1.5 py-0.5 font-semibold uppercase tracking-wide ${
                        item.type === 'education'
                          ? 'bg-violet-500/10 text-violet-600 dark:text-violet-300'
                          : 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-300'
                      }`}
                    >
                      <Icon size={11} aria-hidden="true" />
                      {item.type === 'education' ? 'branch: school' : 'branch: work'}
                    </span>
                    {isCurrent && (
                      <span className="rounded bg-emerald-500/10 px-1.5 py-0.5 font-semibold text-emerald-600 dark:text-emerald-400">
                        HEAD → main
                      </span>
                    )}
                    <span className="text-slate-400 dark:text-slate-500">
                      {item.start} — {item.end ?? 'Present'}
                    </span>
                  </div>

                  <h3 className="mt-1.5 font-display text-lg font-semibold text-slate-900 dark:text-white">
                    {item.role}
                  </h3>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    {item.organization}
                    {item.location && <span> · {item.location}</span>}
                  </p>

                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>

                  <ul className="mt-2.5 space-y-1 font-mono text-[13px] leading-relaxed">
                    {item.highlights.map((h) => (
                      <li key={h} className="flex gap-2 text-emerald-700 dark:text-emerald-400">
                        <span aria-hidden="true" className="select-none opacity-70">
                          +
                        </span>
                        <span className="text-slate-600 dark:text-slate-300">{h}</span>
                      </li>
                    ))}
                  </ul>

                  {isLast && (
                    <span
                      aria-hidden="true"
                      className="mt-2 inline-block h-3.5 w-[2px] translate-y-0.5 animate-pulse bg-indigo-400 align-middle"
                    />
                  )}
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
