import { motion } from 'framer-motion';
import { portfolio } from '../../data/portfolio';

/** Brief branded splash shown while the app boots. */
const Loader = () => {
  return (
    <motion.div
      role="status"
      aria-label="Loading"
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
      className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-6 bg-slate-50 dark:bg-night"
    >
      <div className="relative flex h-24 w-24 items-center justify-center">
        <motion.span
          aria-hidden="true"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 rounded-full border-2 border-transparent border-t-indigo-500 border-r-violet-500"
        />
        <span className="font-display text-2xl font-bold gradient-text">
          {portfolio.personal.brand}
        </span>
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-sm text-slate-500 dark:text-slate-400"
      >
        Loading portfolio…
      </motion.p>
    </motion.div>
  );
};

export default Loader;
