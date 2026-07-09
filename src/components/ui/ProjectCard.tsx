import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import type { Project } from '../../data/types';
import { categoryLabels, statusLabels, statusStyles } from '../../lib/projectMeta';
import SocialIcon from './SocialIcon';

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="glass-card glass-card-hover group flex flex-col overflow-hidden"
    >
      <Link
        to={`/projects/${project.slug}`}
        className="relative block aspect-video overflow-hidden"
        aria-label={`${project.title} details`}
      >
        <img
          src={project.image}
          alt={`${project.title} preview`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span
          className={`absolute right-3 top-3 rounded-full border px-2.5 py-1 text-xs font-semibold backdrop-blur ${statusStyles[project.status]}`}
        >
          {statusLabels[project.status]}
        </span>
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-center justify-between gap-2">
          <span className="chip">{categoryLabels[project.category]}</span>
          <span className="text-xs text-slate-400 dark:text-slate-500">{project.year}</span>
        </div>

        <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
          <Link
            to={`/projects/${project.slug}`}
            className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-300"
          >
            {project.title}
          </Link>
        </h3>

        <p className="line-clamp-3 text-sm text-slate-600 dark:text-slate-400">
          {project.description}
        </p>

        <ul className="flex flex-wrap gap-1.5" aria-label="Technologies used">
          {project.tech.slice(0, 4).map((t) => (
            <li
              key={t}
              className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600 dark:bg-white/5 dark:text-slate-300"
            >
              {t}
            </li>
          ))}
          {project.tech.length > 4 && (
            <li className="rounded-md px-2 py-0.5 text-xs text-slate-400">
              +{project.tech.length - 4}
            </li>
          )}
        </ul>

        <div className="mt-auto flex items-center justify-between border-t border-slate-200/80 pt-4 dark:border-white/10">
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 transition-colors hover:text-indigo-500 dark:text-indigo-300"
          >
            Details
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
          <div className="flex gap-1">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} on GitHub`}
                className="flex h-8 w-8 items-center justify-center rounded-full text-slate-500 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-300"
              >
                <SocialIcon icon="github" size={16} />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live demo`}
                className="flex h-8 w-8 items-center justify-center rounded-full text-slate-500 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-300"
              >
                <ExternalLink size={16} aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
