import type { ProjectCategory, ProjectStatus } from '../data/types';

export const statusLabels: Record<ProjectStatus, string> = {
  completed: 'Completed',
  'in-progress': 'In progress',
  planned: 'Planned',
};

export const statusStyles: Record<ProjectStatus, string> = {
  completed:
    'border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
  'in-progress':
    'border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400',
  planned: 'border-slate-400/30 bg-slate-500/10 text-slate-600 dark:text-slate-400',
};

export const categoryLabels: Record<ProjectCategory, string> = {
  ai: 'AI & ML',
  web: 'Web',
  fullstack: 'Full-Stack',
  software: 'Software',
  desktop: 'Desktop',
  security: 'Security',
  frontend: 'Frontend',
};
