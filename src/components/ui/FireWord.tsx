import { useState, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import fires from '../../assets/y8.gif';

/**
 * The original portfolio's easter egg, preserved: hovering the word "fire"
 * ignites a flame above it. Now keyboard-accessible and properly anchored.
 */
const FireWord = ({ children }: { children: ReactNode }) => {
  const [burning, setBurning] = useState(false);

  return (
    <span className={`relative inline-block ${burning ? 'z-40' : ''}`}>
      <AnimatePresence>
        {burning && (
          <span className="pointer-events-none absolute bottom-full left-1/2 mb-0.5 -translate-x-1/2">
            <motion.img
              src={fires}
              alt=""
              initial={{ opacity: 0, scale: 0.35, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.35, y: 10 }}
              transition={{ type: 'spring', stiffness: 360, damping: 20 }}
              className="w-14 max-w-none drop-shadow-[0_0_12px_rgba(249,115,22,0.85)] sm:w-16"
            />
          </span>
        )}
      </AnimatePresence>
      <em
        tabIndex={0}
        onPointerEnter={() => setBurning(true)}
        onPointerLeave={() => setBurning(false)}
        onFocus={() => setBurning(true)}
        onBlur={() => setBurning(false)}
        className="cursor-pointer rounded-sm font-black text-orange-600 underline decoration-orange-400/0 decoration-2 underline-offset-4 transition-all hover:text-orange-500 hover:decoration-orange-400 focus:decoration-orange-400 dark:text-orange-500 dark:hover:text-orange-300"
      >
        {children}
      </em>
    </span>
  );
};

export default FireWord;
