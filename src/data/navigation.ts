/** Section anchors used by the navbar, footer and scroll-spy. */
export interface NavSection {
  label: string;
  id: string;
  /** Shown in the top navbar (the footer lists all of them). */
  inNavbar: boolean;
}

export const sections: NavSection[] = [
  { label: 'About', id: 'about', inNavbar: true },
  { label: 'Skills', id: 'skills', inNavbar: true },
  { label: 'Projects', id: 'projects', inNavbar: true },
  { label: 'Experience', id: 'experience', inNavbar: true },
  { label: 'Certifications', id: 'certifications', inNavbar: false },
  { label: 'Services', id: 'services', inNavbar: true },
  { label: 'Testimonials', id: 'testimonials', inNavbar: false },
  { label: 'FAQ', id: 'faq', inNavbar: false },
  { label: 'Contact', id: 'contact', inNavbar: true },
];

export const navbarSections = sections.filter((s) => s.inNavbar);
