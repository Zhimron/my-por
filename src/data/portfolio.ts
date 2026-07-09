/**
 * ─────────────────────────────────────────────────────────────────
 *  PORTFOLIO CONTENT — single source of truth
 *  Edit this file to update the site. No component changes needed.
 *
 *  Items marked [SAMPLE] are placeholder content — replace them
 *  with your real projects, experience and certifications.
 * ─────────────────────────────────────────────────────────────────
 */
import type { Portfolio } from './types';

import avatar from '../assets/shimron.JPG';
import imgPortfolio from '../assets/projects/portfolio-site.svg';
import imgTaskflow from '../assets/projects/taskflow.svg';
import imgStockSense from '../assets/projects/stocksense.svg';

export const portfolio: Portfolio = {
  personal: {
    name: "Shimron",
    fullName: "Shimron M. Guray",
    brand: "ZHIM",
    roles: [
      "Programming Specialist",
      "Full-Stack Developer",
      "Software Engineer",
    ],
    tagline: "Building intelligent systems, end to end.",
    intro:
      "I design and ship software across the whole stack — from VB.NET desktop systems where I started, to modern full-stack web applications. The fire to learn never went out.",
    about: [
      "I'm Shimron M. Guray. I started as a systems developer working in Visual Basic, building desktop software before deciding to deep-dive into web development.",
      "The fire in me that awakened back then is still flaming hot. Web development showed me a completely different way of building systems: hard, but genuinely enjoyable. There is always more to learn, and I take my time and enjoy the process.",
      "Today I work across the stack — React and TypeScript on the front, Node.js on the back — turning ideas into fast, reliable products.",
    ],
    location: "Philippines",
    email: "gurayshimron@gmail.com",
    avatar,
    resumeUrl: "/resume.pdf",
    availableForWork: true,
  },

  socials: [
    {
      id: "github",
      label: "GitHub",
      url: "https://github.com/Zhimron",
      icon: "github",
    },
    // TODO: replace with your real LinkedIn profile
    {
      id: "linkedin",
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/shimron-guray-a234472b8/",
      icon: "linkedin",
    },
    {
      id: "mail",
      label: "Email",
      url: "mailto:gurayshimron@gmail.com",
      icon: "mail",
    },
  ],

  skills: [
    // Languages
    { name: "TypeScript", category: "Languages", featured: true },
    { name: "JavaScript", category: "Languages", featured: true },
    { name: "Python", category: "Languages", featured: true },
    { name: "VB.NET", category: "Languages" },
    { name: "C#", category: "Languages" },
    { name: "SQL", category: "Languages" },
    // Frontend
    { name: "React", category: "Frontend", featured: true },
    { name: "Tailwind CSS", category: "Frontend", featured: true },
    { name: "Framer Motion", category: "Frontend" },
    { name: "HTML & CSS", category: "Frontend" },
    { name: "Vite", category: "Frontend" },
    // Backend
    { name: "Node.js", category: "Backend", featured: true },
    { name: "REST APIs", category: "Backend" },
    // Databases
    { name: "MongoDB", category: "Databases" },
    { name: "MySQL", category: "Databases" },
    // Cloud
    { name: "Vercel", category: "Cloud", featured: true },
    { name: "Siteground", category: "Cloud" },
    // DevOps
    { name: "Docker", category: "DevOps", featured: true },
    { name: "GitHub Actions", category: "DevOps" },
    // Tools
    { name: "Git", category: "Tools", featured: true },
    { name: "VS Code", category: "Tools" },
    { name: "Figma", category: "Tools" },
    { name: "Postman", category: "Tools" },
    { name: "Beekeeper", category: "Tools" },
  ],

  projects: [
    // [SAMPLE] — replace with your real projects
    {
      slug: "taskflow",
      title: "TaskFlow",
      description:
        "Full-stack kanban and team task manager with real-time collaboration and role-based access.",
      longDescription:
        "TaskFlow is a collaborative project board built to master full-stack fundamentals: optimistic UI updates, WebSocket sync between clients, role-based permissions, and a clean REST API. Boards, columns and cards are drag-and-drop with conflict-free ordering.",
      image: imgTaskflow,
      tech: [
        "React",
        "TypeScript",
        "Node.js",
        "Express",
        "MongoDB",
        "Socket.IO",
      ],
      github: "https://github.com/Zhimron",
      features: [
        "Real-time multi-user board sync",
        "Drag-and-drop cards with fractional ordering",
        "Role-based access control (owner / editor / viewer)",
        "Activity feed and notifications",
      ],
      status: "completed",
      category: "fullstack",
      tags: ["Kanban", "Realtime", "Teams"],
      featured: true,
      year: 2024,
    },
    {
      slug: "stocksense",
      title: "StockSense",
      description:
        "Inventory management system for a campus bookstore — my VB.NET roots, modernized with a web dashboard.",
      longDescription:
        "StockSense began as the VB.NET desktop inventory system I built as a student — the project that made me fall in love with building software. It has since grown a web dashboard for reporting, low-stock alerts and supplier tracking, bridging my desktop-systems background with modern web development.",
      image: imgStockSense,
      tech: ["VB.NET", "MySQL", "React", "Node.js"],
      github: "https://github.com/Zhimron",
      features: [
        "Barcode-based stock in/out workflow",
        "Low-stock alerts and supplier tracking",
        "Sales and inventory reports with charts",
        "Web dashboard alongside the original desktop client",
      ],
      status: "completed",
      category: "software",
      tags: ["Inventory", "Desktop", "VB.NET"],
      year: 2023,
    },
    {
      slug: "portfolio-website",
      title: "This Portfolio",
      description:
        "The site you are looking at — React, TypeScript, Tailwind and Framer Motion with a single-file content layer.",
      longDescription:
        "A premium, AI-inspired portfolio built with Vite, React 19 and TypeScript. Every section is driven by one typed content file, so updating the site never means touching components. Features dark/light mode, glassmorphism, scroll-linked animations, project search and filtering, and per-project detail pages.",
      image: imgPortfolio,
      tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/Zhimron/My-Por",
      demo: undefined,
      features: [
        "Single-file typed content layer (CMS-style)",
        "Dark/light mode with system preference detection",
        "Project search, category filters and detail pages",
        "Scroll-linked animations and glassmorphism UI",
      ],
      status: "in-progress",
      category: "web",
      tags: ["Portfolio", "Design", "Animation"],
      year: 2026,
    },
  ],

  experience: [
    // [SAMPLE] — replace with your real experience
    {
      id: "work-2025",
      role: "Full-Stack & AI Developer",
      organization: "Lightem Solutions",
      location: "Philippines",
      start: "July 2023",
      end: null,
      description:
        "Building web applications and AI-powered tools.",
      highlights: [
        "Delivered full-stack apps from design to deployment",
        "Modernized legacy VB.NET systems with web dashboards",
      ],
      type: "work",
    },
    {
      id: "intern-2024",
      role: "Backend Developer Intern",
      organization: "Exellence and Innovation",
      location: "Philippines",
      start: "Apr 2023",
      end: "Jul 2023",
      description: "Create a server side for a school system",
      highlights: [
        "Maintained VB.NET business applications used daily by staff",
        "Built internal reporting tools with React and Node.js",
      ],
      type: "work",
    },
    {
      id: "bsis",
      role: "BS Information System",
      organization: "College",
      location: "Philippines",
      start: "2019",
      end: "2023",
      description:
        "Focused on systems development. Started in VB.NET desktop systems, then deep-dived into web development — where the fire was lit.",
      highlights: [
        "Capstone: Laundry management system (With IoT)",
        "Self-taught VB.NET and lead deveploper of group, one of the best in Capstone project",
      ],
      type: "education",
    },
  ],

  certifications: [
    // [SAMPLE] — replace with your real certifications
    {
      id: "aws-ccp",
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2025",
      url: "https://aws.amazon.com/certification/",
    },
    {
      id: "fcc-fullstack",
      title: "Full Stack Developer Certification",
      issuer: "freeCodeCamp",
      date: "2024",
      url: "https://www.freecodecamp.org/",
    },
  ],

  services: [
    {
      id: "fullstack-web",
      title: "Full-Stack Web Development",
      description:
        "Modern, fast, responsive web applications — from landing pages to complete SaaS products.",
      icon: "layout",
      deliverables: [
        "React + TypeScript frontends",
        "Node.js / FastAPI backends",
        "Database design",
      ],
    },
    {
      id: "api-backend",
      title: "APIs & Backend Systems",
      description:
        "Reliable REST APIs, authentication, integrations and data pipelines that scale with your product.",
      icon: "server",
      deliverables: [
        "REST API design & build",
        "Auth & role systems",
        "Third-party integrations",
      ],
    },
    {
      id: "legacy-modernization",
      title: "Legacy System Modernization",
      description:
        "Coming from VB.NET desktop systems, I help teams bring legacy business software to the modern web.",
      icon: "wrench",
      deliverables: [
        "VB.NET system audits",
        "Web dashboard companions",
        "Incremental migration plans",
      ],
    },
  ],

  testimonials: [
    // [SAMPLE] — replace with real testimonials
    {
      id: "t1",
      name: "Maria Santos",
      role: "Operations Manager",
      company: "Retail client",
      quote:
        "Shimron modernized our aging inventory system without disrupting daily operations. The new dashboard saves us hours every week.",
    },
    {
      id: "t2",
      name: "James Rivera",
      role: "Startup Founder",
      company: "SaaS client",
      quote:
        "He shipped our MVP fast and it runs flawlessly in production. Communicates clearly and delivers what he promises.",
    },
    {
      id: "t3",
      name: "Prof. A. Cruz",
      role: "Capstone Adviser",
      company: "University",
      quote:
        "One of the most driven students I have advised — the quality of his capstone system was well beyond course requirements.",
    },
  ],

  faq: [
    {
      question: "What kind of projects do you take on?",
      answer:
        "Full-stack web applications, APIs, and modernization of legacy VB.NET/desktop systems. If it involves shipping working software, I am interested.",
    },
    {
      question: "Are you available for freelance or full-time work?",
      answer:
        "Yes — I am currently open to freelance projects and full-time opportunities. The fastest way to reach me is the contact form below or a direct email.",
    },
    {
      question: "What is your typical process?",
      answer:
        "Short discovery call → written scope with milestones → iterative delivery with weekly demos → deployment and handover with documentation. You see progress every week, not just at the end.",
    },
    {
      question: "Which stack do you recommend for a new product?",
      answer:
        "For most products: React + TypeScript on the front, Node.js on the back, MySQL or MongoDB for data, deployed on Vercel or a small cloud VM — a proven stack that stays fast and easy to maintain.",
    },
    {
      question: "Can you work with an existing codebase?",
      answer:
        "Absolutely. I started my career maintaining and extending existing systems, so I am comfortable reading unfamiliar code, adding features safely, and improving things incrementally.",
    },
  ],

  github: { username: "Zhimron" },

  seo: {
    title: "Shimron M. Guray | Full-Stack Developer & Software Engineer",
    description:
      "Portfolio of Shimron M. Guray — Programming Specialist, Full-Stack Developer and Software Engineer. Projects, skills, services and contact.",
    // TODO: set your deployed domain
    url: "https://zhimron.github.io/My-Por",
    keywords: [
      "Programming Specialist",
      "Full-Stack Developer",
      "Software Engineer",
      "React",
      "TypeScript",
      "Portfolio",
      "Shimron Guray",
    ],
  },

  analytics: {
    // Set one of these to enable visitor analytics, e.g.:
    // plausibleDomain: 'yourdomain.com',
    // googleAnalyticsId: 'G-XXXXXXXXXX',
  },
};

/* ── Derived helpers (used by components — no need to edit) ────── */

export const skillCategories = [
  'Languages',
  'Frontend',
  'Backend',
  'Databases',
  'AI/ML',
  'Cloud',
  'DevOps',
  'Tools',
] as const;

export const featuredSkills = portfolio.skills.filter((s) => s.featured);

export const aiProjects = portfolio.projects.filter((p) => p.category === 'ai');

export const getProject = (slug: string) =>
  portfolio.projects.find((p) => p.slug === slug);

export const allProjectTags = [
  ...new Set(portfolio.projects.flatMap((p) => p.tags)),
].sort();
