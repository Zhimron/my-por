import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Code2,
  Download,
  Layers,
  Mail,
  MapPin,
  ShieldCheck,
  Sparkles,
  Terminal,
} from 'lucide-react';
import { featuredSkills, portfolio } from '../data/portfolio';
import SocialIcon from '../components/ui/SocialIcon';

const professionalTitle = 'AI Engineer / Full Stack Developer';

const intro =
  'I build production-minded AI and full-stack systems: clean interfaces, reliable backends, and automation that turns ideas into useful software.';

const coreSkills = [
  {
    title: 'AI Workflows',
    detail: 'Practical automation, data flows, and AI-assisted product features.',
    icon: BrainCircuit,
  },
  {
    title: 'Full-Stack Apps',
    detail: 'React interfaces, typed APIs, authentication, and deployable systems.',
    icon: Layers,
  },
  {
    title: 'Secure Systems',
    detail: 'Desktop, web, and backend builds with reliability in the details.',
    icon: ShieldCheck,
  },
];

const techHighlights = [
  'React',
  'TypeScript',
  'Python',
  'Node.js',
  'Tailwind CSS',
  'SQL',
  'Docker',
  'Git',
];

const itemMotion = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const Home = () => {
  const { personal } = portfolio;
  const selectedProjects = portfolio.projects.filter((p) => p.featured).slice(0, 3);
  const yearsExperience = Math.max(1, new Date().getFullYear() - 2023);
  const topSkills = featuredSkills.slice(0, 8);

  const stats = [
    { label: 'Years Experience', shortLabel: 'Years', value: `${yearsExperience}+` },
    {
      label: 'Projects Completed',
      shortLabel: 'Projects',
      value: `${portfolio.projects.length}+`,
    },
    { label: 'Certifications', shortLabel: 'Certs', value: `${portfolio.certifications.length}` },
  ];

  return (
    <section className="relative isolate h-[calc(100svh-4rem)] overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-cyan-50 dark:from-[#070913] dark:via-night dark:to-[#101424]" />
        <div className="absolute inset-0 bg-grid opacity-70 dark:opacity-50" />
        <motion.div
          animate={{ x: ['-8%', '8%', '-8%'], opacity: [0.32, 0.5, 0.32] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-y-[-20%] left-1/2 w-2/3 -translate-x-1/2 rotate-12 bg-[linear-gradient(90deg,transparent,rgba(34,211,238,0.18),rgba(168,85,247,0.12),transparent)] blur-3xl"
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-night dark:via-night/80" />
      </div>

      <div className="section-container relative z-10 flex h-full flex-col gap-2 py-2 sm:gap-4 sm:py-5 lg:gap-5 lg:py-6">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="flex shrink-0 items-center justify-between gap-3"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-700 shadow-sm shadow-emerald-500/10 dark:text-emerald-300">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for work
          </span>

          <span className="hidden items-center gap-2 rounded-full border border-slate-200/70 bg-white/70 px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/[0.05] dark:text-slate-300 sm:inline-flex">
            <MapPin size={14} aria-hidden="true" />
            {personal.location}
          </span>
        </motion.div>

        <div className="grid min-h-0 flex-1 gap-3 lg:grid-cols-[minmax(0,1.02fr)_minmax(390px,0.98fr)] lg:gap-6">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.08 }}
            className="flex min-h-0 min-w-0 flex-col justify-center gap-3 lg:gap-6"
          >
            <motion.div variants={itemMotion} className="max-w-3xl">
              <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-indigo-300/40 bg-white/70 px-3 py-1.5 text-xs font-semibold text-indigo-700 shadow-sm backdrop-blur dark:border-cyan-300/20 dark:bg-white/[0.05] dark:text-cyan-200 sm:mb-3">
                <Sparkles size={14} aria-hidden="true" />
                Modern AI-powered software
              </div>

              <h1 className="font-display text-3xl font-bold leading-[1.02] text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
                {personal.fullName}
              </h1>
              <p className="mt-2 bg-gradient-to-r from-indigo-600 via-cyan-500 to-emerald-500 bg-clip-text font-display text-xl font-semibold text-transparent dark:from-cyan-200 dark:via-violet-200 dark:to-emerald-200 sm:text-2xl lg:text-3xl">
                {professionalTitle}
              </p>
              <p className="mt-3 line-clamp-2 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-300 sm:mt-4 sm:line-clamp-none sm:text-base">
                {intro}
              </p>
            </motion.div>

            <motion.div
              variants={itemMotion}
              className="grid min-w-0 grid-cols-3 items-center gap-2 sm:flex sm:flex-wrap sm:gap-3"
            >
              <Link
                to="/projects"
                className="btn-primary min-w-0 justify-center !rounded-lg !px-2 !py-2.5 !text-xs sm:!px-4 sm:!text-sm"
              >
                <Terminal size={16} aria-hidden="true" />
                View Projects
              </Link>
              <Link
                to="/contact"
                className="btn-ghost min-w-0 justify-center !rounded-lg !px-2 !py-2.5 !text-xs sm:!px-4 sm:!text-sm"
              >
                <Mail size={16} aria-hidden="true" />
                Contact Me
              </Link>
              <a
                href={personal.resumeUrl}
                download
                className="btn-ghost min-w-0 justify-center !rounded-lg !px-2 !py-2.5 !text-xs sm:!px-4 sm:!text-sm"
              >
                <Download size={16} aria-hidden="true" />
                Resume
              </a>
            </motion.div>

            <motion.div variants={itemMotion} className="flex min-w-0 flex-wrap items-center gap-3">
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                Connect
              </span>
              <div className="flex gap-2">
                {portfolio.socials.map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200/70 bg-white/70 text-slate-600 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-300 hover:text-indigo-600 hover:shadow-lg hover:shadow-indigo-500/10 dark:border-white/10 dark:bg-white/[0.05] dark:text-slate-300 dark:hover:border-cyan-300/30 dark:hover:text-cyan-200"
                  >
                    <SocialIcon icon={social.icon} />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.08, delayChildren: 0.15 }}
            className="grid min-h-0 min-w-0 gap-2 overflow-y-auto sm:grid-cols-2 sm:gap-3 lg:grid-rows-[auto_auto_auto]"
          >
            <motion.div
              variants={itemMotion}
              className="grid min-w-0 grid-cols-3 gap-2 sm:col-span-2"
            >
              {stats.map((stat) => (
                <Link
                  key={stat.label}
                  to="/experience"
                  className="min-w-0 rounded-lg border border-slate-200/70 bg-white/75 p-2.5 shadow-sm shadow-slate-900/5 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/70 dark:border-white/10 dark:bg-white/[0.055] dark:shadow-black/20 sm:p-3"
                >
                  <p className="font-display text-xl font-bold text-slate-950 dark:text-white sm:text-2xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[0.68rem] font-medium leading-4 text-slate-500 dark:text-slate-400 sm:text-xs">
                    <span className="sm:hidden">{stat.shortLabel}</span>
                    <span className="hidden sm:inline">{stat.label}</span>
                  </p>
                </Link>
              ))}
            </motion.div>

            <motion.article
              variants={itemMotion}
              className="min-w-0 rounded-lg border border-slate-200/70 bg-white/75 p-3 shadow-sm shadow-slate-900/5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300/80 dark:border-white/10 dark:bg-white/[0.055] dark:shadow-black/20 sm:p-4"
            >
              <Link to="/skills" className="group block">
                <div className="flex items-center gap-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white dark:bg-cyan-300/10 dark:text-cyan-200">
                    <Code2 size={18} aria-hidden="true" />
                  </span>
                  <div>
                    <h2 className="font-display text-sm font-semibold text-slate-950 dark:text-white">
                      Tech Stack
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Tools I ship with
                    </p>
                  </div>
                </div>

                <div className="mt-3 flex flex-wrap gap-2 sm:mt-4">
                  {[...new Set([...techHighlights, ...topSkills.map((s) => s.name)])]
                    .slice(0, 10)
                    .map((skill, index) => (
                      <span
                        key={skill}
                        className={`rounded-lg border border-slate-200/80 bg-slate-50/90 px-2.5 py-1 text-xs font-semibold text-slate-700 transition-colors group-hover:border-indigo-300 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200 ${
                          index > 7 ? 'hidden sm:inline-flex' : ''
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                </div>
              </Link>
            </motion.article>

            <motion.article
              variants={itemMotion}
              className="min-w-0 rounded-lg border border-slate-200/70 bg-white/75 p-3 shadow-sm shadow-slate-900/5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300/80 dark:border-white/10 dark:bg-white/[0.055] dark:shadow-black/20 sm:p-4"
            >
              <Link to="/services" className="group block">
                <div className="flex items-center gap-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white dark:bg-emerald-300/10 dark:text-emerald-200">
                    <BrainCircuit size={18} aria-hidden="true" />
                  </span>
                  <div>
                    <h2 className="font-display text-sm font-semibold text-slate-950 dark:text-white">
                      Core Skills
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      How I create value
                    </p>
                  </div>
                </div>

                <div className="mt-3 space-y-2 sm:mt-4 sm:space-y-3">
                  {coreSkills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <div key={skill.title} className="flex gap-3">
                        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-700 dark:bg-white/[0.07] dark:text-slate-200">
                          <Icon size={15} aria-hidden="true" />
                        </span>
                        <div>
                          <h3 className="text-xs font-semibold text-slate-950 dark:text-white">
                            {skill.title}
                          </h3>
                          <p className="mt-0.5 hidden line-clamp-1 text-xs leading-5 text-slate-500 dark:text-slate-400 sm:block">
                            {skill.detail}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Link>
            </motion.article>

            <motion.article
              variants={itemMotion}
              className="hidden rounded-lg border border-slate-200/70 bg-white/75 p-4 shadow-sm shadow-slate-900/5 backdrop-blur transition-all duration-300 hover:border-violet-300/80 dark:border-white/10 dark:bg-white/[0.055] dark:shadow-black/20 sm:col-span-2 md:block"
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h2 className="font-display text-sm font-semibold text-slate-950 dark:text-white">
                    Selected Work
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Compact preview of recent builds
                  </p>
                </div>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white/80 px-3 py-2 text-xs font-semibold text-slate-700 transition-all hover:-translate-y-0.5 hover:border-indigo-300 hover:text-indigo-600 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200 dark:hover:border-cyan-300/30 dark:hover:text-cyan-200"
                >
                  Explore
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>

              <div className="mt-4 grid gap-2 md:grid-cols-3">
                {selectedProjects.map((project) => (
                  <Link
                    key={project.slug}
                    to={`/projects/${project.slug}`}
                    className="group rounded-lg border border-slate-200/80 bg-slate-50/80 p-2.5 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:bg-white hover:shadow-lg hover:shadow-indigo-500/10 dark:border-white/10 dark:bg-white/[0.045] dark:hover:border-cyan-300/30 dark:hover:bg-white/[0.075]"
                  >
                    <div className="flex items-center gap-3 md:block">
                      <img
                        src={project.image}
                        alt=""
                        className="h-12 w-12 shrink-0 rounded-lg object-cover md:h-16 md:w-full"
                        loading="lazy"
                      />
                      <div className="min-w-0 md:mt-2">
                        <h3 className="truncate text-xs font-semibold text-slate-950 transition-colors group-hover:text-indigo-600 dark:text-white dark:group-hover:text-cyan-200">
                          {project.title}
                        </h3>
                        <p className="mt-1 line-clamp-2 text-xs leading-4 text-slate-500 dark:text-slate-400">
                          {project.tech.slice(0, 2).join(' / ')}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.article>

            <motion.div
              variants={itemMotion}
              className="hidden items-center gap-2 rounded-lg border border-slate-200/70 bg-white/75 p-3 text-xs text-slate-600 shadow-sm shadow-slate-900/5 backdrop-blur dark:border-white/10 dark:bg-white/[0.055] dark:text-slate-300 sm:col-span-2 lg:flex"
            >
              <CheckCircle2
                size={16}
                aria-hidden="true"
                className="shrink-0 text-emerald-500"
              />
              <span className="font-medium">
                Use the navbar to open full pages for about, skills, projects,
                experience, services, and contact.
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
