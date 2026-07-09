import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, viewportOnce } from '../../lib/motion';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
}

const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
}: SectionHeadingProps) => {
  const alignClass = align === 'center' ? 'items-center text-center' : 'items-start text-left';

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={`mb-8 flex flex-col gap-3 ${alignClass}`}
    >
      <motion.span
        variants={fadeUp}
        className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400"
      >
        {eyebrow}
      </motion.span>
      <motion.h2
        variants={fadeUp}
        className="font-display text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          className="max-w-2xl text-slate-600 dark:text-slate-400"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
