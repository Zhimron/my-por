import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { portfolio } from '../../data/portfolio';
import { fadeUp, staggerContainer } from '../../lib/motion';
import SectionHeading from '../ui/SectionHeading';

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);

  if (portfolio.faq.length === 0) return null;

  return (
    <section id="faq" className="section-container scroll-mt-24 py-24">
      <SectionHeading
        eyebrow="Good to know"
        title="Frequently Asked Questions"
        subtitle="Quick answers about how I work and what I offer."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        className="mx-auto flex max-w-3xl flex-col gap-3"
      >
        {portfolio.faq.map((item, i) => {
          const isOpen = open === i;
          return (
            <motion.div key={item.question} variants={fadeUp} className="glass-card overflow-hidden">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                id={`faq-button-${i}`}
                className="flex w-full items-center justify-between gap-4 p-5 text-left"
              >
                <span className="font-display font-semibold text-slate-900 dark:text-white">
                  {item.question}
                </span>
                <ChevronDown
                  size={18}
                  aria-hidden="true"
                  className={`shrink-0 text-indigo-500 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-button-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default FAQ;
