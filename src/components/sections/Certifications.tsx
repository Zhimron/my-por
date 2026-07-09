import { motion, type Variants } from 'framer-motion';
import { Check, ExternalLink, ShieldCheck } from 'lucide-react';
import { portfolio } from '../../data/portfolio';
import { viewportOnce } from '../../lib/motion';
import SectionHeading from '../ui/SectionHeading';

const rowMotion: Variants = {
  hidden: { opacity: 0, x: -14 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

/**
 * Rendered as a verification scan, not a badge grid — matches the
 * git-log terminal system introduced in Experience.tsx on the same page.
 */
const Certifications = () => {
  const certs = portfolio.certifications;
  if (certs.length === 0) return null;

  return (
    <section id="certifications" className="section-container scroll-mt-24 pt-6 pb-16">
      <SectionHeading
        eyebrow="Credentials"
        title="Certifications"
        subtitle="Formal validation for the skills I use every day — every entry verifiable, no self-issued badges."
      />

      <div className="glass-card overflow-hidden">
        <div className="flex items-center gap-2 border-b border-slate-200/80 bg-slate-100/60 px-4 py-3 dark:border-white/10 dark:bg-white/[0.03]">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" aria-hidden="true" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" aria-hidden="true" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" aria-hidden="true" />
          <span className="ml-2 flex items-center gap-1.5 rounded-md bg-white/70 px-2.5 py-1 font-mono text-xs text-slate-500 dark:bg-white/5 dark:text-slate-400">
            <ShieldCheck size={12} aria-hidden="true" />
            credentials.sh
          </span>
          <span className="ml-auto hidden font-mono text-[11px] text-slate-400 dark:text-slate-600 sm:inline">
            $ verify --all
          </span>
        </div>

        <div className="flex items-center justify-between border-b border-dashed border-slate-200/70 px-5 py-2.5 font-mono text-xs text-slate-400 dark:border-white/10 dark:text-slate-500">
          <span>scanning credential store…</span>
          <span className="font-semibold text-emerald-600 dark:text-emerald-400">
            {certs.length}/{certs.length} verified
          </span>
        </div>

        <ul className="relative">
          {certs.map((cert, i) => (
            <motion.li
              key={cert.id}
              variants={rowMotion}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className={`group flex items-start gap-3 px-5 py-4 transition-colors hover:bg-slate-50/60 dark:hover:bg-white/[0.02] ${
                i < certs.length - 1 ? 'border-b border-dashed border-slate-200/70 dark:border-white/10' : ''
              }`}
            >
              <span
                aria-hidden="true"
                className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400"
              >
                <Check size={12} strokeWidth={3} />
              </span>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs text-slate-400 dark:text-slate-500">
                  <span>{cert.date}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-indigo-500/80 dark:text-indigo-300/70">
                    signed-by: {cert.issuer}
                  </span>
                </div>
                <h3 className="mt-1 font-display font-semibold text-slate-900 dark:text-white">
                  {cert.title}
                </h3>
                {cert.credentialId && (
                  <p className="mt-0.5 font-mono text-xs text-slate-400 dark:text-slate-500">
                    id: {cert.credentialId}
                  </p>
                )}
              </div>

              {cert.url && (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-1 rounded-md border border-slate-200 px-2 py-1 font-mono text-xs font-medium text-slate-500 transition-colors hover:border-indigo-300 hover:text-indigo-600 dark:border-white/10 dark:text-slate-400 dark:hover:border-indigo-400/40 dark:hover:text-indigo-300"
                >
                  verify
                  <ExternalLink size={11} aria-hidden="true" />
                </a>
              )}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Certifications;
