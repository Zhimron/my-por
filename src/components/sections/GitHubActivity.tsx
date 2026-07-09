import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, GitFork, Star, Users } from 'lucide-react';
import { portfolio } from '../../data/portfolio';
import { useGitHub } from '../../hooks/useGitHub';
import { fadeUp, staggerContainer } from '../../lib/motion';
import SectionHeading from '../ui/SectionHeading';
import SocialIcon from '../ui/SocialIcon';

const languageColors: Record<string, string> = {
  TypeScript: 'bg-[#3178c6]',
  JavaScript: 'bg-[#f1e05a]',
  Python: 'bg-[#3572A5]',
  HTML: 'bg-[#e34c26]',
  CSS: 'bg-[#563d7c]',
  'C#': 'bg-[#178600]',
  'Visual Basic .NET': 'bg-[#945db7]',
  Java: 'bg-[#b07219]',
};

const GitHubActivity = () => {
  const { username } = portfolio.github;
  const { data, loading, error } = useGitHub(username);

  const totalStars = data?.repos.reduce((sum, r) => sum + r.stargazers_count, 0) ?? 0;

  return (
    <section id="github" className="section-container scroll-mt-24 py-24">
      <SectionHeading
        eyebrow="Open source"
        title="GitHub Activity"
        subtitle={`Live from github.com/${username} — profile stats and recently updated repositories.`}
      />

      {loading && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" aria-label="Loading GitHub data">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="glass-card h-36 animate-pulse p-6" />
          ))}
        </div>
      )}

      {error && (
        <div className="glass-card mx-auto max-w-md p-8 text-center">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Couldn't reach the GitHub API right now (rate limit or network).
          </p>
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost mt-4"
          >
            <SocialIcon icon="github" size={16} />
            Visit my GitHub instead
          </a>
        </div>
      )}

      {data && (
        <>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="mb-8 grid grid-cols-3 gap-4"
          >
            {[
              { icon: BookOpen, value: data.publicRepos, label: 'Public repos' },
              { icon: Users, value: data.followers, label: 'Followers' },
              { icon: Star, value: totalStars, label: 'Stars (recent repos)' },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                className="glass-card flex flex-col items-center gap-1 p-5 text-center"
              >
                <stat.icon size={20} className="text-indigo-500" aria-hidden="true" />
                <span className="font-display text-2xl font-bold text-slate-900 dark:text-white">
                  {stat.value}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {data.repos.map((repo) => (
              <motion.a
                key={repo.id}
                variants={fadeUp}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card glass-card-hover flex flex-col gap-3 p-6"
              >
                <div className="flex items-center justify-between gap-2">
                  <h3 className="truncate font-display font-semibold text-slate-900 dark:text-white">
                    {repo.name}
                  </h3>
                  <ExternalLink size={14} aria-hidden="true" className="shrink-0 text-slate-400" />
                </div>
                <p className="line-clamp-2 flex-1 text-sm text-slate-600 dark:text-slate-400">
                  {repo.description ?? 'No description yet.'}
                </p>
                <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                  {repo.language && (
                    <span className="inline-flex items-center gap-1.5">
                      <span
                        aria-hidden="true"
                        className={`h-2.5 w-2.5 rounded-full ${languageColors[repo.language] ?? 'bg-indigo-400'}`}
                      />
                      {repo.language}
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1">
                    <Star size={12} aria-hidden="true" />
                    {repo.stargazers_count}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <GitFork size={12} aria-hidden="true" />
                    {repo.forks_count}
                  </span>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </>
      )}
    </section>
  );
};

export default GitHubActivity;
