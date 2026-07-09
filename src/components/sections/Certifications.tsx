import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { portfolio } from '../../data/portfolio';
import { fadeUp, staggerContainer } from '../../lib/motion';
import SectionHeading from '../ui/SectionHeading';

const Certifications = () => {
  if (portfolio.certifications.length === 0) return null;

  return (
    <section id="certifications" className="section-container scroll-mt-24 py-24">
      <SectionHeading
        eyebrow="Credentials"
        title="Certifications"
        subtitle="Formal validation for the skills I use every day."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {portfolio.certifications.map((cert) => (
          <motion.article
            key={cert.id}
            variants={fadeUp}
            className="glass-card glass-card-hover flex flex-col gap-4 p-6"
          >
            <div className="flex items-center justify-between">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400/20 to-orange-500/20 text-amber-500">
                <Award size={22} aria-hidden="true" />
              </span>
              <span className="text-sm font-semibold text-slate-400 dark:text-slate-500">
                {cert.date}
              </span>
            </div>

            <div className="flex-1">
              <h3 className="font-display font-semibold text-slate-900 dark:text-white">
                {cert.title}
              </h3>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{cert.issuer}</p>
              {cert.credentialId && (
                <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">
                  ID: {cert.credentialId}
                </p>
              )}
            </div>

            {cert.url && (
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 transition-colors hover:text-indigo-500 dark:text-indigo-300"
              >
                Verify credential
                <ExternalLink size={13} aria-hidden="true" />
              </a>
            )}
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default Certifications;
