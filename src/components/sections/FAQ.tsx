import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Terminal } from 'lucide-react';
import { portfolio } from '../../data/portfolio';
import SectionHeading from '../ui/SectionHeading';

/**
 * Rendered as a `man`-page style query/output list, not a rounded
 * accordion-card stack — matches the terminal system used elsewhere.
 */
const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);
  const faq = portfolio.faq;

  if (faq.length === 0) return null;

  return (
    <section id="faq" className="section-container scroll-mt-24 pt-6 pb-16">
      <SectionHeading
        eyebrow="Good to know"
        title="Frequently Asked Questions"
        subtitle="Quick answers about how I work and what I offer."
      />

      <div className="glass-card overflow-hidden">
        <div className="flex items-center gap-2 border-b border-slate-200/80 bg-slate-100/60 px-4 py-3 dark:border-white/10 dark:bg-white/[0.03]">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" aria-hidden="true" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" aria-hidden="true" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" aria-hidden="true" />
          <span className="ml-2 flex items-center gap-1.5 rounded-md bg-white/70 px-2.5 py-1 font-mono text-xs text-slate-500 dark:bg-white/5 dark:text-slate-400">
            <Terminal size={12} aria-hidden="true" />
            faq.sh
          </span>
          <span className="ml-auto hidden font-mono text-[11px] text-slate-400 dark:text-slate-600 sm:inline">
            $ man --topic hiring
          </span>
        </div>

        <div>
          {faq.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.question}
                className={
                  i < faq.length - 1
                    ? 'border-b border-dashed border-slate-200/70 dark:border-white/10'
                    : ''
                }
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-button-${i}`}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-slate-50/60 dark:hover:bg-white/[0.02]"
                >
                  <span className="flex items-center gap-2 font-display font-semibold text-slate-900 dark:text-white">
                    <span
                      aria-hidden="true"
                      className="font-mono text-indigo-500/70 dark:text-indigo-300/60"
                    >
                      $
                    </span>
                    {item.question}
                  </span>
                  <span
                    aria-hidden="true"
                    className="shrink-0 font-mono text-xs font-semibold text-slate-400 dark:text-slate-500"
                  >
                    {isOpen ? '[-]' : '[+]'}
                  </span>
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
                      <p className="ml-5 border-l-2 border-indigo-200 py-1 pb-5 pl-4 pr-5 font-mono text-[13px] leading-relaxed text-slate-600 dark:border-indigo-500/30 dark:text-slate-400">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
