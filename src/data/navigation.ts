/** Section anchors used by the navbar, footer and scroll-spy. */
export interface NavSection {
  label: string;
  id: string;
  path: string;
  /** Shown in the top navbar (the footer lists all of them). */
  inNavbar: boolean;
  /** Lucide icon name shown in the navbar block (see iconMap in Navbar.tsx). */
  icon?: string;
  /** Witty one-liner shown in the navbar hover tooltip / mobile subtext. */
  hint?: string;
}

export const sections: NavSection[] = [
  {
    label: 'About',
    id: 'about',
    path: '/about',
    inNavbar: true,
    icon: 'user-round',
    hint: 'Meet the human behind the code',
  },
  {
    label: 'Skills',
    id: 'skills',
    path: '/skills',
    inNavbar: true,
    icon: 'blocks',
    hint: 'The building blocks I work with',
  },
  {
    label: 'Projects',
    id: 'projects',
    path: '/projects',
    inNavbar: true,
    icon: 'rocket',
    hint: 'Things I have shipped',
  },
  {
    label: 'Experience',
    id: 'experience',
    path: '/experience',
    inNavbar: true,
    icon: 'briefcase-business',
    hint: 'Journey, services & how to reach me',
  },
  {
    label: 'Certifications',
    id: 'certifications',
    path: '/experience#certifications',
    inNavbar: false,
  },
  {
    label: 'Services',
    id: 'services',
    path: '/services',
    inNavbar: false,
    icon: 'handshake',
    hint: 'How I can help you build',
  },
  { label: 'FAQ', id: 'faq', path: '/services#faq', inNavbar: false },
  {
    label: 'Contact',
    id: 'contact',
    path: '/contact',
    inNavbar: false,
    icon: 'message-circle',
    hint: "Let's start a conversation",
  },
];

export const navbarSections = sections.filter((s) => s.inNavbar);
