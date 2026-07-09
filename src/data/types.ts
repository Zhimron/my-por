/**
 * Type definitions for the portfolio content layer.
 * All site content lives in `portfolio.ts` — edit that file to update the site.
 */

export interface Personal {
  /** Short display name used in headings. */
  name: string;
  fullName: string;
  /** Brand mark shown in the navbar / footer. */
  brand: string;
  /** Rotating roles shown in the hero. */
  roles: string[];
  tagline: string;
  /** Short paragraph for the hero. */
  intro: string;
  /** Longer story paragraphs for the About section. */
  about: string[];
  location: string;
  email: string;
  avatar: string;
  /** Path (from /public) to the downloadable resume. */
  resumeUrl: string;
  availableForWork: boolean;
  /**
   * Optional form endpoint (e.g. Formspree/FormSubmit URL). When unset,
   * the contact form falls back to opening the visitor's email client.
   */
  contactFormEndpoint?: string;
}

export interface SocialLink {
  id: string;
  label: string;
  url: string;
  icon: 'github' | 'linkedin' | 'twitter' | 'mail' | 'globe';
}

export type SkillCategory =
  | 'Languages'
  | 'Frontend'
  | 'Backend'
  | 'Databases'
  | 'AI/ML'
  | 'Cloud'
  | 'DevOps'
  | 'Tools';

export interface Skill {
  name: string;
  category: SkillCategory;
  /** Proficiency 0–100, drives the skill bar width. */
  level: number;
  /** Featured skills also appear in the Tech Stack marquee. */
  featured?: boolean;
}

export type ProjectStatus = 'completed' | 'in-progress' | 'planned';
export type ProjectCategory = 'ai' | 'web' | 'fullstack' | 'software';

export interface Project {
  /** URL slug — the detail page lives at /projects/<slug>. */
  slug: string;
  title: string;
  description: string;
  /** Longer write-up shown on the detail page. */
  longDescription: string;
  image: string;
  tech: string[];
  github?: string;
  demo?: string;
  features: string[];
  status: ProjectStatus;
  category: ProjectCategory;
  tags: string[];
  featured?: boolean;
  year: number;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location?: string;
  /** e.g. "Jan 2025" */
  start: string;
  /** null means "Present". */
  end: string | null;
  description: string;
  highlights: string[];
  type: 'work' | 'education';
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  url?: string;
  credentialId?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: 'brain' | 'layout' | 'server' | 'smartphone' | 'wrench' | 'rocket';
  deliverables: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SeoConfig {
  title: string;
  description: string;
  /** Canonical site URL (no trailing slash). */
  url: string;
  keywords: string[];
}

export interface AnalyticsConfig {
  /** Set to your domain to enable Plausible (e.g. "shimron.dev"). */
  plausibleDomain?: string;
  /** Set to a GA4 measurement id to enable Google Analytics (e.g. "G-XXXXXXX"). */
  googleAnalyticsId?: string;
}

export interface Portfolio {
  personal: Personal;
  socials: SocialLink[];
  skills: Skill[];
  projects: Project[];
  experience: ExperienceItem[];
  certifications: Certification[];
  services: Service[];
  testimonials: Testimonial[];
  faq: FaqItem[];
  github: { username: string };
  seo: SeoConfig;
  analytics: AnalyticsConfig;
}
