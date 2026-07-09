import { motion, useScroll, useSpring } from 'framer-motion';

/** Thin gradient bar at the very top showing reading progress. */
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-50 h-1 origin-left bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400"
    />
  );
};

export default ScrollProgress;
