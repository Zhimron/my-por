import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CalendarDays, CheckCircle2, ExternalLink, Tag } from 'lucide-react';
import { getProject, portfolio } from '../data/portfolio';
import { categoryLabels, statusLabels, statusStyles } from '../lib/projectMeta';
import SocialIcon from '../components/ui/SocialIcon';
import ProjectCard from '../components/ui/ProjectCard';
import NotFound from './NotFound';

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProject(slug) : undefined;

  if (!project) return <NotFound />;

  const others = portfolio.projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <div className="section-container py-16">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-300"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Back to projects
        </Link>

        <div className="mt-6 grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <div className="glass-card overflow-hidden">
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="aspect-video w-full object-cover"
              />
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="chip">{categoryLabels[project.category]}</span>
              <span
                className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${statusStyles[project.status]}`}
              >
                {statusLabels[project.status]}
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
                <CalendarDays size={14} aria-hidden="true" />
                {project.year}
              </span>
            </div>

            <h1 className="mt-4 font-display text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
              {project.title}
            </h1>

            <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              {project.longDescription}
            </p>

            <h2 className="mt-10 font-display text-xl font-semibold text-slate-900 dark:text-white">
              Key features
            </h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="glass-card flex items-start gap-3 p-4 text-sm text-slate-600 dark:text-slate-300"
                >
                  <CheckCircle2
                    size={16}
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-emerald-500"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <aside className="space-y-6 lg:pt-12">
            <div className="glass-card p-6">
              <h2 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
                Tech stack
              </h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <li key={t} className="chip">
                    {t}
                  </li>
                ))}
              </ul>

              <h2 className="mt-6 flex items-center gap-2 font-display text-lg font-semibold text-slate-900 dark:text-white">
                <Tag size={16} aria-hidden="true" className="text-indigo-500" />
                Tags
              </h2>
              <ul className="mt-3 flex flex-wrap gap-2 text-xs text-slate-500 dark:text-slate-400">
                {project.tags.map((t) => (
                  <li key={t} className="rounded-full border border-slate-200 px-3 py-1 dark:border-white/10">
                    {t}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-col gap-3">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary justify-center"
                  >
                    <ExternalLink size={16} aria-hidden="true" />
                    Live demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost justify-center"
                  >
                    <SocialIcon icon="github" size={16} />
                    View source
                  </a>
                )}
              </div>
            </div>
          </aside>
        </div>

        {others.length > 0 && (
          <div className="mt-20">
            <h2 className="mb-6 font-display text-2xl font-bold text-slate-900 dark:text-white">
              More projects
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ProjectDetail;
