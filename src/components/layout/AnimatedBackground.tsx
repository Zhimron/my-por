import { useEffect, useRef } from 'react';

/**
 * Full-viewport decorative background: a plain surface with a faint grid
 * and a soft glow that follows the cursor. Sits behind all content;
 * purely decorative (aria-hidden). The cursor position is written straight
 * to a CSS variable via a ref (no React state) so it never triggers a
 * re-render on mousemove.
 */
const AnimatedBackground = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let frame = 0;
    const handleMove = (event: MouseEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        glowRef.current?.style.setProperty('--x', `${event.clientX}px`);
        glowRef.current?.style.setProperty('--y', `${event.clientY}px`);
      });
    };

    window.addEventListener('mousemove', handleMove);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden bg-slate-50 dark:bg-night">
      {/* Faint blueprint grid */}
      <div className="absolute inset-0 bg-grid opacity-40 dark:opacity-30" />

      {/* Soft glow that tracks the cursor */}
      <div
        ref={glowRef}
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(500px circle at var(--x, 50%) var(--y, 15%), rgba(99, 102, 241, 0.14), transparent 70%)',
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
