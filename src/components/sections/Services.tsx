import { motion, type Variants } from 'framer-motion';
import {
  Brain,
  Layout,
  Rocket,
  Server,
  Smartphone,
  Terminal,
  Wrench,
  type LucideIcon,
} from 'lucide-react';
import { portfolio } from '../../data/portfolio';
import type { Service } from '../../data/types';
import { viewportOnce } from '../../lib/motion';
import SectionHeading from '../ui/SectionHeading';

const serviceIcons: Record<Service['icon'], LucideIcon> = {
  brain: Brain,
  layout: Layout,
  server: Server,
  smartphone: Smartphone,
  wrench: Wrench,
  rocket: Rocket,
};

const rowMotion: Variants = {
  hidden: { opacity: 0, x: -14 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

/**
 * Rendered as a `--help` command reference, not a grid of gradient-icon
 * feature cards — matches the terminal system used elsewhere on the site.
 */
const Services = () => {
  const services = portfolio.services;

  return (
    <section id="services" className="section-container scroll-mt-24 pt-16 pb-10">
      <SectionHeading
        eyebrow="What I offer"
        title="Services"
        subtitle="Ways I can help your team or business ship better software."
      />

      <div className="glass-card overflow-hidden">
        <div className="flex items-center gap-2 border-b border-slate-200/80 bg-slate-100/60 px-4 py-3 dark:border-white/10 dark:bg-white/[0.03]">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" aria-hidden="true" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" aria-hidden="true" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" aria-hidden="true" />
          <span className="ml-2 flex items-center gap-1.5 rounded-md bg-white/70 px-2.5 py-1 font-mono text-xs text-slate-500 dark:bg-white/5 dark:text-slate-400">
            <Terminal size={12} aria-hidden="true" />
            services.sh
          </span>
          <span className="ml-auto hidden font-mono text-[11px] text-slate-400 dark:text-slate-600 sm:inline">
            $ shimron --help
          </span>
        </div>

        <ul className="relative">
          {services.map((service, i) => {
            const Icon = serviceIcons[service.icon];
            return (
              <motion.li
                key={service.id}
                variants={rowMotion}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className={`group px-5 py-5 transition-colors hover:bg-slate-50/60 dark:hover:bg-white/[0.02] ${
                  i < services.length - 1
                    ? 'border-b border-dashed border-slate-200/70 dark:border-white/10'
                    : ''
                }`}
              >
                <span className="inline-flex items-center gap-1.5 rounded bg-indigo-500/10 px-1.5 py-0.5 font-mono text-xs font-semibold text-indigo-600 dark:text-indigo-300">
                  <Icon size={12} aria-hidden="true" />
                  --{service.id}
                </span>

                <h3 className="mt-1.5 font-display text-lg font-semibold text-slate-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  {service.description}
                </p>

                <ul className="mt-2.5 space-y-1 font-mono text-[13px] leading-relaxed">
                  {service.deliverables.map((d) => (
                    <li key={d} className="flex gap-2">
                      <span aria-hidden="true" className="select-none text-indigo-500/70">
                        ›
                      </span>
                      <span className="text-slate-600 dark:text-slate-300">{d}</span>
                    </li>
                  ))}
                </ul>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Services;
