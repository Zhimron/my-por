import { useRef, type PointerEvent } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Download,
  Layers,
  Mail,
  MapPin,
  ShieldCheck,
  Sparkles,
  Workflow,
} from 'lucide-react';
import { portfolio } from '../data/portfolio';
import SocialIcon from '../components/ui/SocialIcon';
import SkillIcon from '../components/ui/SkillIcon';

const professionalTitle = 'Programming Specialist / Full-Stack Developer';

const intro =
  'I design and build reliable web and desktop software—from polished interfaces to backend systems, databases, and practical automation.';

const capabilities = [
  {
    title: 'Full-Stack Products',
    detail: 'Responsive interfaces, APIs, authentication, and data.',
    icon: Layers,
    accent: 'text-indigo-600 dark:text-indigo-300',
  },
  {
    title: 'Business Systems',
    detail: 'Purpose-built tools that simplify real operations.',
    icon: Code2,
    accent: 'text-cyan-600 dark:text-cyan-300',
  },
  {
    title: 'Reliable Delivery',
    detail: 'Maintainable builds with security in the details.',
    icon: ShieldCheck,
    accent: 'text-emerald-600 dark:text-emerald-300',
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

const reveal = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const Home = () => {
  const { personal } = portfolio;
  const panelGlowRef = useRef<HTMLDivElement>(null);
  const featuredProject =
    portfolio.projects.find((project) => project.featured) ?? portfolio.projects[0];
  const yearsExperience = Math.max(1, new Date().getFullYear() - 2023);

  const stats = [
    { label: 'Years building', value: `${yearsExperience}+` },
    { label: 'Projects', value: `${portfolio.projects.length}+` },
    { label: 'Credentials', value: `${portfolio.certifications.length}` },
  ];

  const handlePanelPointerMove = (event: PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    panelGlowRef.current?.style.setProperty('--panel-x', `${x}px`);
    panelGlowRef.current?.style.setProperty('--panel-y', `${y}px`);
  };

  return (
    <section className="relative isolate min-h-[calc(100svh-4rem)] overflow-x-hidden lg:h-[calc(100svh-4rem)] lg:overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#f8fafc_0%,#ffffff_48%,#eef2ff_100%)] dark:bg-[linear-gradient(135deg,#070913_0%,#0b1020_52%,#11152b_100%)]" />
        <div className="absolute inset-0 bg-grid opacity-60 dark:opacity-35" />
        <motion.div
          animate={{ x: ['-6%', '6%', '-6%'], scale: [1, 1.08, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -left-32 top-1/4 h-[28rem] w-[28rem] rounded-full bg-indigo-400/15 blur-[110px] dark:bg-indigo-500/15"
        />
        <div className="absolute -right-32 bottom-[-12rem] h-[34rem] w-[34rem] rounded-full bg-cyan-300/20 blur-[120px] dark:bg-cyan-400/10" />
      </div>

      <div className="section-container relative z-10 grid min-h-[calc(100svh-4rem)] gap-8 py-8 lg:h-full lg:min-h-0 lg:grid-cols-[minmax(0,1.04fr)_minmax(520px,0.96fr)] lg:items-center lg:gap-12 lg:py-6 xl:gap-20">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.09 }}
          className="flex min-w-0 flex-col justify-center"
        >
          <motion.div variants={reveal} className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-emerald-700 dark:text-emerald-300">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for work
            </span>
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-slate-400 dark:text-slate-500">
              Portfolio / 2026
            </span>
          </motion.div>

          <motion.div variants={reveal} className="mt-6 max-w-4xl">
            <div className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-indigo-600 dark:text-cyan-300">
              <Sparkles size={16} aria-hidden="true" />
              Ideas engineered into working software
            </div>
            <h1 className="font-display text-[clamp(3rem,5.2vw,6.25rem)] font-black leading-[0.94] tracking-[-0.055em] text-slate-950 dark:text-white">
              Shimron M. Guray
            </h1>
            <p className="mt-4 bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-600 bg-clip-text font-display text-[clamp(1.25rem,2.1vw,2.25rem)] font-extrabold leading-tight tracking-[-0.025em] text-transparent dark:from-cyan-200 dark:via-indigo-200 dark:to-violet-200">
              {professionalTitle}
            </p>
            <p className="mt-5 max-w-2xl text-base font-medium leading-7 text-slate-600 dark:text-slate-300 lg:text-lg">
              {intro}
            </p>
          </motion.div>

          <motion.div variants={reveal} className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white shadow-xl shadow-slate-950/15 transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-600 hover:shadow-indigo-500/25 dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-200"
            >
              Explore my work
              <ArrowRight
                size={16}
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300/80 bg-white/65 px-5 py-3 text-sm font-bold text-slate-800 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400 hover:text-indigo-700 dark:border-white/15 dark:bg-white/[0.055] dark:text-white dark:hover:border-cyan-300/40 dark:hover:text-cyan-200"
            >
              <Mail size={16} aria-hidden="true" />
              Start a conversation
            </Link>
            <a
              href={personal.resumeUrl}
              download="Shimron-Guray-Resume.pdf"
              className="inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-bold text-slate-500 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-cyan-200"
            >
              <Download size={16} aria-hidden="true" />
              Resume
            </a>
          </motion.div>

          <motion.div
            variants={reveal}
            className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-slate-200/80 pt-5 dark:border-white/10"
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-slate-400">
              <MapPin size={15} aria-hidden="true" />
              {personal.location}
            </span>
            <span className="h-4 w-px bg-slate-200 dark:bg-white/10" aria-hidden="true" />
            <div className="flex items-center gap-2">
              {portfolio.socials.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200/80 bg-white/70 text-slate-500 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400 hover:text-indigo-600 dark:border-white/10 dark:bg-white/[0.05] dark:text-slate-400 dark:hover:border-cyan-300/30 dark:hover:text-cyan-200"
                >
                  <SocialIcon icon={social.icon} size={16} />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, x: 28, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.15, ease: 'easeOut' }}
          onPointerMove={handlePanelPointerMove}
          className="group relative min-w-0 overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white/75 p-4 shadow-2xl shadow-slate-900/10 backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.055] dark:shadow-black/30 sm:p-5 lg:max-h-full"
        >
          <div
            ref={panelGlowRef}
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background:
                'radial-gradient(420px circle at var(--panel-x, 50%) var(--panel-y, 40%), rgba(99, 102, 241, 0.14), transparent 62%)',
            }}
          />
          <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-30 dark:opacity-20" />

          <div className="relative flex items-center justify-between gap-4 border-b border-slate-200/80 pb-4 dark:border-white/10">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-white shadow-lg dark:bg-white dark:text-slate-950">
                <Workflow size={19} aria-hidden="true" />
              </span>
              <div>
                <p className="font-display text-sm font-black text-slate-950 dark:text-white">
                  Development profile
                </p>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  Full-stack systems, end to end
                </p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-bold text-emerald-700 dark:text-emerald-300">
              <CheckCircle2 size={13} aria-hidden="true" />
              Open
            </span>
          </div>

          <div className="relative mt-4 grid gap-2 sm:grid-cols-3">
            {capabilities.map((capability) => {
              const Icon = capability.icon;
              return (
                <motion.div
                  key={capability.title}
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                  className="rounded-xl border border-slate-200/80 bg-white/70 p-3 dark:border-white/10 dark:bg-white/[0.045]"
                >
                  <Icon size={17} className={capability.accent} aria-hidden="true" />
                  <h2 className="mt-2 text-xs font-black text-slate-950 dark:text-white">
                    {capability.title}
                  </h2>
                  <p className="mt-1 line-clamp-2 text-[11px] font-medium leading-4 text-slate-500 dark:text-slate-400">
                    {capability.detail}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <Link
            to="/skills"
            className="relative mt-3 block rounded-xl border border-slate-200/80 bg-slate-950/[0.025] p-3 transition-colors hover:border-indigo-300 dark:border-white/10 dark:bg-black/10 dark:hover:border-cyan-300/25"
          >
            <div className="mb-2.5 flex items-center justify-between gap-3">
              <span className="text-xs font-black uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
                Daily stack
              </span>
              <span className="text-[11px] font-bold text-indigo-600 dark:text-cyan-300">
                View all
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {techHighlights.map((skillName) => {
                const skill = portfolio.skills.find((item) => item.name === skillName);
                return (
                  <span
                    key={skillName}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200/80 bg-white px-2.5 py-1.5 text-[11px] font-bold text-slate-700 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200"
                  >
                    {skill && (
                      <SkillIcon icon={skill.icon} className="h-3.5 w-3.5 shrink-0" />
                    )}
                    {skillName}
                  </span>
                );
              })}
            </div>
          </Link>

          {featuredProject && (
            <Link
              to={`/projects/${featuredProject.slug}`}
              className="relative mt-3 flex items-center gap-3 rounded-xl border border-slate-200/80 bg-white/70 p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-500/10 dark:border-white/10 dark:bg-white/[0.045] dark:hover:border-cyan-300/25"
            >
              <img
                src={featuredProject.image}
                alt=""
                className="h-16 w-24 shrink-0 rounded-lg object-cover"
              />
              <div className="min-w-0">
                <p className="text-[10px] font-black uppercase tracking-[0.14em] text-indigo-600 dark:text-cyan-300">
                  Featured build
                </p>
                <h2 className="mt-1 truncate text-sm font-black text-slate-950 dark:text-white">
                  {featuredProject.title}
                </h2>
                <p className="mt-1 truncate text-xs font-medium text-slate-500 dark:text-slate-400">
                  {featuredProject.tech.slice(0, 3).join(' / ')}
                </p>
              </div>
              <ArrowRight
                size={16}
                aria-hidden="true"
                className="ml-auto shrink-0 text-slate-400"
              />
            </Link>
          )}

          <div className="relative mt-3 grid grid-cols-3 divide-x divide-slate-200 overflow-hidden rounded-xl border border-slate-200/80 bg-white/60 dark:divide-white/10 dark:border-white/10 dark:bg-white/[0.035]">
            {stats.map((stat) => (
              <Link
                key={stat.label}
                to="/experience"
                className="px-3 py-3 text-center transition-colors hover:bg-indigo-500/5 dark:hover:bg-cyan-300/5"
              >
                <p className="font-display text-xl font-black text-slate-950 dark:text-white">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-[10px] font-bold uppercase tracking-wide text-slate-400 dark:text-slate-500">
                  {stat.label}
                </p>
              </Link>
            ))}
          </div>
        </motion.aside>
      </div>
    </section>
  );
};

export default Home;
