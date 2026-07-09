import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Scrolls to the element referenced by the URL hash after navigation,
 * or to the top when navigating to a page without a hash.
 */
const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0 });
      return;
    }

    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    window.scrollTo({ top: 0 });
  }, [location]);

  return null;
};

export default ScrollToHash;
