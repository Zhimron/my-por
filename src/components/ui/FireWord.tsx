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
    <span className="relative inline-block">
      <AnimatePresence>
        {burning && (
          <motion.img
            src={fires}
            alt=""
            initial={{ opacity: 0, scale: 0.4, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.4, y: 8 }}
            transition={{ duration: 0.25 }}
            className="pointer-events-none absolute -top-9 left-1/2 w-9 -translate-x-1/2"
          />
        )}
      </AnimatePresence>
      <em
        tabIndex={0}
        onMouseEnter={() => setBurning(true)}
        onMouseLeave={() => setBurning(false)}
        onFocus={() => setBurning(true)}
        onBlur={() => setBurning(false)}
        className="cursor-pointer font-bold text-orange-600 dark:text-orange-500"
      >
        {children}
      </em>
    </span>
  );
};

export default FireWord;
