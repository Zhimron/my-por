import { useEffect, useRef } from 'react';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'framer-motion';

type ThemeEyeProps = {
  theme: 'light' | 'dark';
  onToggle: () => void;
};

const eyePath =
  'M2 11C5.5 6 10 3.5 16 3.5S26.5 6 30 11c-3.5 5-8 7.5-14 7.5S5.5 16 2 11Z';

const ThemeEye = ({ theme, onToggle }: ThemeEyeProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const pupilX = useMotionValue(0);
  const pupilY = useMotionValue(0);
  const smoothX = useSpring(pupilX, { stiffness: 240, damping: 24, mass: 0.45 });
  const smoothY = useSpring(pupilY, { stiffness: 240, damping: 24, mass: 0.45 });

  useEffect(() => {
    if (prefersReducedMotion) return;

    let frame = 0;
    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight / 2;

    const updatePupil = () => {
      frame = 0;
      const rect = buttonRef.current?.getBoundingClientRect();
      if (!rect) return;

      const deltaX = pointerX - (rect.left + rect.width / 2);
      const deltaY = pointerY - (rect.top + rect.height / 2);
      const angle = Math.atan2(deltaY, deltaX);
      const distance = Math.min(3.8, Math.hypot(deltaX, deltaY) / 45);

      pupilX.set(Math.cos(angle) * distance);
      pupilY.set(Math.sin(angle) * distance);
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;

      if (!frame) frame = window.requestAnimationFrame(updatePupil);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [prefersReducedMotion, pupilX, pupilY]);

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={onToggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="group flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/70 bg-white/70 text-slate-600 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-300 hover:text-indigo-600 dark:border-white/10 dark:bg-white/[0.055] dark:text-slate-300 dark:hover:border-cyan-300/30 dark:hover:text-cyan-200"
    >
      <motion.svg
        viewBox="0 0 32 22"
        className="h-[22px] w-8 overflow-visible transition-transform duration-300 group-hover:scale-105"
        aria-hidden="true"
        whileTap={{ scaleY: 0.2 }}
        transition={{ duration: 0.12 }}
      >
        <defs>
          <clipPath id="theme-eye-clip">
            <path d={eyePath} />
          </clipPath>
        </defs>

        <path
          d={eyePath}
          fill="currentColor"
          fillOpacity="0.1"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />

        <motion.g
          style={{ x: smoothX, y: smoothY }}
          clipPath="url(#theme-eye-clip)"
        >
          <motion.circle
            cx="16"
            cy="11"
            r="5.25"
            animate={{ fill: theme === 'dark' ? '#67e8f9' : '#6366f1' }}
            transition={{ duration: 0.3 }}
          />
          <circle cx="16" cy="11" r="2.45" fill="#020617" />
          <circle cx="14.7" cy="9.7" r="1" fill="white" fillOpacity="0.95" />
        </motion.g>
      </motion.svg>
    </button>
  );
};

export default ThemeEye;
