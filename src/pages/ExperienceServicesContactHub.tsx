import { Link, useLocation } from 'react-router-dom';
import { BriefcaseBusiness, Handshake, MessageCircle, type LucideIcon } from 'lucide-react';
import Experience from '../components/sections/Experience';
import Certifications from '../components/sections/Certifications';
import Services from '../components/sections/Services';
import FAQ from '../components/sections/FAQ';
import Contact from '../components/sections/Contact';

type TabId = 'experience' | 'services' | 'contact';

const tabs: { id: TabId; label: string; path: string; icon: LucideIcon }[] = [
  { id: 'experience', label: 'Experience', path: '/experience', icon: BriefcaseBusiness },
  { id: 'services', label: 'Services', path: '/services', icon: Handshake },
  { id: 'contact', label: 'Contact', path: '/contact', icon: MessageCircle },
];

/**
 * Experience, Services and Contact share one page with a tab bar instead of
 * three separate routes — the URL still drives which tab is active (so
 * direct links, the navbar's active state, and #hash anchors all keep
 * working), the tabs are just links styled as a switcher.
 */
const ExperienceServicesContactHub = () => {
  const location = useLocation();
  const active = tabs.find((t) => t.path === location.pathname)?.id ?? 'experience';

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <div className="sticky top-16 z-20 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-night/80">
        <div
          role="tablist"
          aria-label="Experience, services and contact"
          className="section-container flex gap-1.5 pt-3"
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = tab.id === active;
            return (
              <Link
                key={tab.id}
                to={tab.path}
                role="tab"
                aria-selected={isActive}
                className={`flex items-center gap-2 rounded-t-xl border border-b-0 px-4 py-2.5 text-sm font-semibold transition-colors ${
                  isActive
                    ? 'border-slate-200/70 bg-white text-indigo-700 dark:border-white/10 dark:bg-night dark:text-cyan-200'
                    : 'border-transparent text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white'
                }`}
              >
                <Icon size={15} aria-hidden="true" />
                {tab.label}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="min-h-[calc(100vh-4rem)]">
        {active === 'experience' && (
          <>
            <Experience />
            <Certifications />
          </>
        )}
        {active === 'services' && (
          <>
            <Services />
            <FAQ />
          </>
        )}
        {active === 'contact' && <Contact />}
      </div>
    </div>
  );
};

export default ExperienceServicesContactHub;
