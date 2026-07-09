import { Link } from 'react-router-dom';
import { portfolio } from '../../data/portfolio';
import { sections } from '../../data/navigation';
import SocialIcon from '../ui/SocialIcon';

const Footer = () => {
  const { personal } = portfolio;

  return (
    <footer className="relative mt-24 border-t border-slate-200/80 dark:border-white/10">
      <div className="section-container py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl font-bold gradient-text">
              {personal.brand}
            </p>
            <p className="mt-3 max-w-xs text-sm text-slate-600 dark:text-slate-400">
              {personal.tagline}
            </p>
            <div className="mt-4 flex gap-2">
              {portfolio.socials.map((s) => (
                <a
                  key={s.id}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="glass flex h-10 w-10 items-center justify-center rounded-full text-slate-600 transition-all hover:-translate-y-0.5 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-300"
                >
                  <SocialIcon icon={s.icon} />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Explore
            </h2>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {sections.map((s) => (
                <li key={s.id}>
                  <Link
                    to={`/#${s.id}`}
                    className="text-sm text-slate-600 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-300"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Get in touch
            </h2>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
              {personal.availableForWork
                ? 'Currently open to freelance projects and full-time roles.'
                : 'Not currently taking new projects.'}
            </p>
            <a
              href={`mailto:${personal.email}`}
              className="mt-2 inline-block text-sm font-medium text-indigo-600 hover:underline dark:text-indigo-300"
            >
              {personal.email}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-slate-200/80 pt-6 text-xs text-slate-500 dark:border-white/10 dark:text-slate-400 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {personal.fullName}. All rights reserved.
          </p>
          <p>Built with React, TypeScript, Tailwind CSS & Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
