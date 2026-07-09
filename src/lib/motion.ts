import type { Variants } from 'framer-motion';

/** Shared Framer Motion variants so sections animate consistently. */

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

/** Default viewport config: animate once, slightly before fully visible. */
export const viewportOnce = { once: true, margin: '-80px' } as const;
