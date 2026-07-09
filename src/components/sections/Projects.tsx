import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { allProjectTags, portfolio } from '../../data/portfolio';
import type { ProjectCategory } from '../../data/types';
import { categoryLabels } from '../../lib/projectMeta';
import SectionHeading from '../ui/SectionHeading';
import ProjectCard from '../ui/ProjectCard';

type CategoryFilter = ProjectCategory | 'all';

const categories: CategoryFilter[] = ['all', 'ai', 'web', 'fullstack', 'software'];

const Projects = () => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<CategoryFilter>('all');
  const [tag, setTag] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return portfolio.projects.filter((p) => {
      if (category !== 'all' && p.category !== category) return false;
      if (tag && !p.tags.includes(tag)) return false;
      if (!q) return true;
      const haystack = [p.title, p.description, ...p.tech, ...p.tags]
        .join(' ')
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [query, category, tag]);

  const hasFilters = query !== '' || category !== 'all' || tag !== null;

  return (
    <section id="projects" className="section-container scroll-mt-24 py-24">
      <SectionHeading
        eyebrow="My work"
        title="Projects"
        subtitle="Search or filter by category and tag — every card opens a full case study."
      />

      {/* Controls */}
      <div className="mb-8 flex flex-col gap-4">
        <div className="flex flex-col items-stretch justify-between gap-4 sm:flex-row sm:items-center">
          <div className="relative w-full sm:max-w-xs">
            <Search
              size={16}
              aria-hidden="true"
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects…"
              aria-label="Search projects"
              className="glass w-full rounded-full py-2.5 pl-10 pr-4 text-sm text-slate-700 placeholder:text-slate-400 dark:text-slate-200"
            />
          </div>

          <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                aria-pressed={category === c}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  category === c
                    ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/25'
                    : 'glass text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-300'
                }`}
              >
                {c === 'all' ? 'All' : categoryLabels[c]}
              </button>
            ))}
          </div>
        </div>

        <div role="group" aria-label="Filter by tag" className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
            Tags
          </span>
          {allProjectTags.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTag(tag === t ? null : t)}
              aria-pressed={tag === t}
              className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
                tag === t
                  ? 'border-indigo-500 bg-indigo-500/10 text-indigo-600 dark:text-indigo-300'
                  : 'border-slate-200 text-slate-500 hover:border-indigo-300 hover:text-indigo-600 dark:border-white/10 dark:text-slate-400 dark:hover:text-indigo-300'
              }`}
            >
              {t}
            </button>
          ))}
          {hasFilters && (
            <button
              type="button"
              onClick={() => {
                setQuery('');
                setCategory('all');
                setTag(null);
              }}
              className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold text-rose-500 hover:underline"
            >
              <X size={12} aria-hidden="true" />
              Clear filters
            </button>
          )}
        </div>
      </div>

      <p className="mb-6 text-sm text-slate-500 dark:text-slate-400" aria-live="polite">
        {filtered.length} project{filtered.length === 1 ? '' : 's'} found
      </p>

      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <div className="glass-card mx-auto max-w-md p-10 text-center">
          <p className="font-display text-lg font-semibold text-slate-900 dark:text-white">
            No projects match
          </p>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Try a different search term or clear the filters.
          </p>
        </div>
      )}
    </section>
  );
};

export default Projects;
