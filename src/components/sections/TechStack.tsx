import { featuredSkills } from '../../data/portfolio';
import type { SkillCategory } from '../../data/types';
import SectionHeading from '../ui/SectionHeading';

const categoryDot: Record<SkillCategory, string> = {
  Languages: 'bg-amber-400',
  Frontend: 'bg-sky-400',
  Backend: 'bg-emerald-400',
  Databases: 'bg-rose-400',
  'AI/ML': 'bg-violet-400',
  Cloud: 'bg-cyan-400',
  DevOps: 'bg-orange-400',
  Tools: 'bg-slate-400',
};

/** Skills marked `featured: true` in the content file, doubled for a seamless loop. */
const marqueeItems = [...featuredSkills, ...featuredSkills];

const TechStack = () => {
  return (
    <section id="tech-stack" className="scroll-mt-24 py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="Daily drivers"
          title="Tech Stack"
          subtitle="The technologies I reach for first when building something new."
        />
      </div>

      <div
        className="group relative overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        aria-label="Featured technologies"
      >
        <div className="flex w-max gap-4 animate-marquee group-hover:[animation-play-state:paused]">
          {marqueeItems.map((skill, i) => (
            <span
              key={`${skill.name}-${i}`}
              aria-hidden={i >= featuredSkills.length}
              className="glass-card flex items-center gap-2.5 whitespace-nowrap px-5 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200"
            >
              <span
                className={`h-2 w-2 rounded-full ${categoryDot[skill.category]}`}
                aria-hidden="true"
              />
              {skill.name}
              <span className="text-xs font-normal text-slate-400 dark:text-slate-500">
                {skill.category}
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
