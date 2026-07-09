import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import { portfolio } from '../../data/portfolio';
import { fadeUp, viewportOnce } from '../../lib/motion';
import SectionHeading from '../ui/SectionHeading';

/** Vertical timeline built from the experience entries in the content file. */
const Experience = () => {
  return (
    <section id="experience" className="section-container scroll-mt-24 py-24">
      <SectionHeading
        eyebrow="My journey"
        title="Experience"
        subtitle="Work and education — the road from desktop systems to AI engineering."
      />

      <ol className="relative mx-auto max-w-3xl border-l-2 border-indigo-200 pl-8 dark:border-indigo-500/30">
        {portfolio.experience.map((item) => {
          const Icon = item.type === 'education' ? GraduationCap : Briefcase;
          const isCurrent = item.end === null;

          return (
            <motion.li
              key={item.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="relative pb-12 last:pb-0"
            >
              {/* Timeline node */}
              <span
                aria-hidden="true"
                className={`absolute -left-[2.85rem] top-0 flex h-9 w-9 items-center justify-center rounded-full border-2 ${
                  isCurrent
                    ? 'border-indigo-500 bg-indigo-500 text-white shadow-glow'
                    : 'border-indigo-200 bg-slate-50 text-indigo-500 dark:border-indigo-500/30 dark:bg-night'
                }`}
              >
                <Icon size={16} />
              </span>

              <div className="glass-card glass-card-hover p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
                    {item.role}
                  </h3>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      isCurrent
                        ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                        : 'bg-slate-100 text-slate-500 dark:bg-white/5 dark:text-slate-400'
                    }`}
                  >
                    {item.start} — {item.end ?? 'Present'}
                  </span>
                </div>

                <p className="mt-1 text-sm font-medium text-indigo-600 dark:text-indigo-300">
                  {item.organization}
                  {item.location && (
                    <span className="text-slate-400 dark:text-slate-500"> · {item.location}</span>
                  )}
                </p>

                <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>

                <ul className="mt-3 space-y-1.5">
                  {item.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
                      />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          );
        })}
      </ol>
    </section>
  );
};

export default Experience;
