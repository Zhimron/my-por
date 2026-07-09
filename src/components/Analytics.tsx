import { useEffect } from 'react';
import { portfolio } from '../data/portfolio';

/**
 * Visitor analytics, opt-in via the content file:
 * set `analytics.plausibleDomain` or `analytics.googleAnalyticsId`
 * in src/data/portfolio.ts and the matching script is injected.
 * With neither set, nothing loads (no tracking by default).
 */
const Analytics = () => {
  useEffect(() => {
    const { plausibleDomain, googleAnalyticsId } = portfolio.analytics;

    if (plausibleDomain) {
      const script = document.createElement('script');
      script.defer = true;
      script.src = 'https://plausible.io/js/script.js';
      script.setAttribute('data-domain', plausibleDomain);
      document.head.appendChild(script);
    }

    if (googleAnalyticsId) {
      const loader = document.createElement('script');
      loader.async = true;
      loader.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`;
      document.head.appendChild(loader);

      const init = document.createElement('script');
      init.textContent = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${googleAnalyticsId}');`;
      document.head.appendChild(init);
    }
  }, []);

  return null;
};

export default Analytics;
