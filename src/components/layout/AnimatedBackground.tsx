/**
 * Full-viewport decorative background: blueprint grid + drifting gradient
 * blobs. Sits behind all content; purely decorative (aria-hidden).
 */
const AnimatedBackground = () => {
  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/60 via-slate-50 to-slate-50 dark:from-night-700/60 dark:via-night dark:to-night" />

      {/* Blueprint grid, fading toward the bottom */}
      <div className="absolute inset-0 bg-grid" />

      {/* Drifting gradient blobs */}
      <div className="absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-indigo-400/25 dark:bg-indigo-600/20 blur-3xl animate-blob" />
      <div className="absolute top-1/3 -right-40 h-[32rem] w-[32rem] rounded-full bg-violet-400/20 dark:bg-violet-600/15 blur-3xl animate-blob-slow" />
      <div className="absolute bottom-0 left-1/3 h-[24rem] w-[24rem] rounded-full bg-cyan-300/20 dark:bg-cyan-500/10 blur-3xl animate-blob [animation-delay:6s]" />
    </div>
  );
};

export default AnimatedBackground;
