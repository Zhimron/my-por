import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Scroll-spy: returns the id of the section currently in the middle of the
 * viewport. Re-attaches observers on route change so it works after
 * navigating back to the home page.
 */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | null>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname !== '/') {
      setActive(null);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: '-35% 0px -60% 0px' }
    );
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [ids, pathname]);

  return active;
}
