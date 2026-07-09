import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { portfolio } from '../../data/portfolio';
import { fadeUp, staggerContainer } from '../../lib/motion';
import SectionHeading from '../ui/SectionHeading';

const Testimonials = () => {
  if (portfolio.testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="section-container scroll-mt-24 pt-6 pb-16">
      <SectionHeading
        eyebrow="Kind words"
        title="Testimonials"
        subtitle="What clients, teammates and mentors say about working with me."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        className="grid gap-6 md:grid-cols-3"
      >
        {portfolio.testimonials.map((t) => (
          <motion.figure
            key={t.id}
            variants={fadeUp}
            className="glass-card glass-card-hover flex flex-col gap-4 p-6"
          >
            <Quote size={24} aria-hidden="true" className="text-indigo-400 dark:text-indigo-500" />
            <blockquote className="flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              “{t.quote}”
            </blockquote>
            <figcaption className="flex items-center gap-3 border-t border-slate-200/80 pt-4 dark:border-white/10">
              <span
                aria-hidden="true"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 font-display text-sm font-bold text-white"
              >
                {t.name.charAt(0)}
              </span>
              <span>
                <span className="block text-sm font-semibold text-slate-900 dark:text-white">
                  {t.name}
                </span>
                <span className="block text-xs text-slate-500 dark:text-slate-400">
                  {t.role} · {t.company}
                </span>
              </span>
            </figcaption>
          </motion.figure>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;
