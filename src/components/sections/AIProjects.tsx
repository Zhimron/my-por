import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BrainCircuit, CheckCircle2 } from 'lucide-react';
import { aiProjects } from '../../data/portfolio';
import { statusLabels, statusStyles } from '../../lib/projectMeta';
import { fadeUp, staggerContainer } from '../../lib/motion';
import SectionHeading from '../ui/SectionHeading';

/**
 * Dedicated AI & ML showcase — richer cards than the main grid,
 * sourced from projects with category "ai".
 */
const AIProjects = () => {
  if (aiProjects.length === 0) return null;

  return (
    <section id="ai-projects" className="scroll-mt-24 py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="Intelligence, applied"
          title="AI Projects"
          subtitle="Machine learning and LLM-powered systems I've designed and built."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid gap-6 lg:grid-cols-3"
        >
          {aiProjects.map((project) => (
            <motion.article
              key={project.slug}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-violet-500/40 via-indigo-500/20 to-transparent p-px transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="glass flex h-full flex-col gap-4 rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-500 dark:text-violet-400">
                    <BrainCircuit size={20} aria-hidden="true" />
                  </span>
                  <span
                    className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${statusStyles[project.status]}`}
                  >
                    {statusLabels[project.status]}
                  </span>
                </div>

                <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {project.description}
                </p>

                <ul className="space-y-2">
                  {project.features.slice(0, 3).map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
                    >
                      <CheckCircle2
                        size={15}
                        aria-hidden="true"
                        className="mt-0.5 shrink-0 text-violet-500"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={`/projects/${project.slug}`}
                  className="mt-auto inline-flex items-center gap-1 pt-2 text-sm font-semibold text-violet-600 transition-colors hover:text-violet-500 dark:text-violet-300"
                >
                  Case study
                  <ArrowRight
                    size={14}
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AIProjects;
