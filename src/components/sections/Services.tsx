import { motion } from 'framer-motion';
import {
  Brain,
  CheckCircle2,
  Layout,
  Rocket,
  Server,
  Smartphone,
  Wrench,
  type LucideIcon,
} from 'lucide-react';
import { portfolio } from '../../data/portfolio';
import type { Service } from '../../data/types';
import { fadeUp, staggerContainer } from '../../lib/motion';
import SectionHeading from '../ui/SectionHeading';

const serviceIcons: Record<Service['icon'], LucideIcon> = {
  brain: Brain,
  layout: Layout,
  server: Server,
  smartphone: Smartphone,
  wrench: Wrench,
  rocket: Rocket,
};

const Services = () => {
  return (
    <section id="services" className="section-container scroll-mt-24 py-24">
      <SectionHeading
        eyebrow="What I offer"
        title="Services"
        subtitle="Ways I can help your team or business ship better software."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {portfolio.services.map((service) => {
          const Icon = serviceIcons[service.icon];
          return (
            <motion.article
              key={service.id}
              variants={fadeUp}
              className="glass-card glass-card-hover group flex flex-col gap-4 p-6"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-500/25 transition-transform duration-300 group-hover:scale-110">
                <Icon size={22} aria-hidden="true" />
              </span>

              <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
                {service.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">{service.description}</p>

              <ul className="mt-auto space-y-2 border-t border-slate-200/80 pt-4 dark:border-white/10">
                {service.deliverables.map((d) => (
                  <li
                    key={d}
                    className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
                  >
                    <CheckCircle2
                      size={15}
                      aria-hidden="true"
                      className="mt-0.5 shrink-0 text-indigo-500"
                    />
                    {d}
                  </li>
                ))}
              </ul>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Services;
