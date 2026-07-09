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
import imgNeuralNotes from '../assets/projects/neural-notes.svg';
import imgVisionInspect from '../assets/projects/vision-inspect.svg';
import imgRagChat from '../assets/projects/rag-chat.svg';
import imgPortfolio from '../assets/projects/portfolio-site.svg';
import imgTaskflow from '../assets/projects/taskflow.svg';
import imgStockSense from '../assets/projects/stocksense.svg';

export const portfolio: Portfolio = {
  personal: {
    name: 'Shimron',
    fullName: 'Shimron M. Guray',
    brand: 'ZHIM',
    roles: ['AI Engineer', 'Full-Stack Developer', 'Software Engineer'],
    tagline: 'Building intelligent systems, end to end.',
    intro:
      'I design and ship software across the whole stack — from VB.NET desktop systems where I started, to modern web apps, to AI-powered products. The fire to learn never went out.',
    about: [
      "I'm Shimron M. Guray. I started as a systems developer working in Visual Basic, building desktop software before deciding to deep-dive into web development — and from there, into AI engineering.",
      'The fire in me that awakened back then is still flaming hot. Web development showed me a completely different way of building systems: hard, but genuinely enjoyable. There is always more to learn, and I take my time and enjoy the process.',
      'Today I work across the stack — React and TypeScript on the front, Node.js and Python on the back, and machine-learning tooling on top — turning ideas into products that feel intelligent.',
    ],
    location: 'Philippines',
    email: 'lightemdev@gmail.com',
    avatar,
    resumeUrl: '/resume.pdf',
    availableForWork: true,
  },

  socials: [
    { id: 'github', label: 'GitHub', url: 'https://github.com/Zhimron', icon: 'github' },
    // TODO: replace with your real LinkedIn profile
    { id: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/shimron-guray', icon: 'linkedin' },
    { id: 'mail', label: 'Email', url: 'mailto:lightemdev@gmail.com', icon: 'mail' },
  ],

  skills: [
    // Languages
    { name: 'TypeScript', category: 'Languages', level: 88, featured: true },
    { name: 'JavaScript', category: 'Languages', level: 90, featured: true },
    { name: 'Python', category: 'Languages', level: 82, featured: true },
    { name: 'VB.NET', category: 'Languages', level: 92 },
    { name: 'C#', category: 'Languages', level: 70 },
    { name: 'SQL', category: 'Languages', level: 80 },
    // Frontend
    { name: 'React', category: 'Frontend', level: 90, featured: true },
    { name: 'Tailwind CSS', category: 'Frontend', level: 88, featured: true },
    { name: 'Framer Motion', category: 'Frontend', level: 78 },
    { name: 'HTML & CSS', category: 'Frontend', level: 92 },
    { name: 'Vite', category: 'Frontend', level: 80 },
    // Backend
    { name: 'Node.js', category: 'Backend', level: 82, featured: true },
    { name: 'Express', category: 'Backend', level: 78 },
    { name: 'FastAPI', category: 'Backend', level: 72 },
    { name: 'REST APIs', category: 'Backend', level: 85 },
    // Databases
    { name: 'PostgreSQL', category: 'Databases', level: 78, featured: true },
    { name: 'MongoDB', category: 'Databases', level: 74 },
    { name: 'MySQL', category: 'Databases', level: 80 },
    { name: 'Redis', category: 'Databases', level: 60 },
    // AI/ML
    { name: 'PyTorch', category: 'AI/ML', level: 70, featured: true },
    { name: 'LangChain', category: 'AI/ML', level: 75, featured: true },
    { name: 'Claude / OpenAI APIs', category: 'AI/ML', level: 85, featured: true },
    { name: 'RAG Pipelines', category: 'AI/ML', level: 78 },
    { name: 'Hugging Face', category: 'AI/ML', level: 65 },
    // Cloud
    { name: 'AWS', category: 'Cloud', level: 65 },
    { name: 'Vercel', category: 'Cloud', level: 85, featured: true },
    { name: 'Supabase', category: 'Cloud', level: 75 },
    { name: 'Firebase', category: 'Cloud', level: 72 },
    // DevOps
    { name: 'Docker', category: 'DevOps', level: 70, featured: true },
    { name: 'GitHub Actions', category: 'DevOps', level: 75 },
    { name: 'CI/CD', category: 'DevOps', level: 72 },
    { name: 'Linux', category: 'DevOps', level: 68 },
    // Tools
    { name: 'Git', category: 'Tools', level: 88, featured: true },
    { name: 'VS Code', category: 'Tools', level: 92 },
    { name: 'Figma', category: 'Tools', level: 65 },
    { name: 'Postman', category: 'Tools', level: 80 },
  ],

  projects: [
    // [SAMPLE] — replace with your real projects
    {
      slug: 'neural-notes',
      title: 'Neural Notes',
      description:
        'AI-powered note-taking app that summarizes, tags and links your notes automatically using LLMs.',
      longDescription:
        'Neural Notes is a knowledge base that thinks with you. Every note is embedded and indexed, so related ideas surface automatically as you write. A summarization pipeline condenses long notes, an auto-tagger keeps the library organized, and a chat interface lets you ask questions across everything you have ever written.',
      image: imgNeuralNotes,
      tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'pgvector', 'Claude API'],
      github: 'https://github.com/Zhimron',
      demo: undefined,
      features: [
        'Semantic search across all notes with vector embeddings',
        'One-click AI summaries and automatic tagging',
        'Chat with your knowledge base (RAG)',
        'Offline-first with background sync',
      ],
      status: 'in-progress',
      category: 'ai',
      tags: ['LLM', 'RAG', 'Productivity', 'Embeddings'],
      featured: true,
      year: 2026,
    },
    {
      slug: 'vision-inspect',
      title: 'VisionInspect',
      description:
        'Computer-vision quality control tool that flags product defects from camera images in real time.',
      longDescription:
        'VisionInspect brings automated quality control to small manufacturers. A fine-tuned detection model inspects items on the line via an ordinary webcam, highlights defects with bounding boxes, and logs every result to a dashboard where trends and defect rates can be reviewed per batch.',
      image: imgVisionInspect,
      tech: ['Python', 'PyTorch', 'FastAPI', 'React', 'OpenCV'],
      github: 'https://github.com/Zhimron',
      features: [
        'Real-time defect detection from webcam streams',
        'Fine-tuned YOLO model with custom dataset tooling',
        'Batch analytics dashboard with defect-rate trends',
        'Runs fully on-premise — no cloud dependency',
      ],
      status: 'completed',
      category: 'ai',
      tags: ['Computer Vision', 'Manufacturing', 'PyTorch'],
      featured: true,
      year: 2025,
    },
    {
      slug: 'rag-docs-chat',
      title: 'DocsChat RAG',
      description:
        'Retrieval-augmented chatbot that answers questions from any uploaded PDF or documentation set, with citations.',
      longDescription:
        'DocsChat ingests PDFs, markdown and web pages into a vector store, then answers questions with inline citations pointing back to the exact source passage. Built to explore chunking strategies, hybrid search and answer-grounding techniques for production RAG systems.',
      image: imgRagChat,
      tech: ['Python', 'LangChain', 'FastAPI', 'React', 'Chroma'],
      github: 'https://github.com/Zhimron',
      features: [
        'Drag-and-drop ingestion for PDF / MD / HTML',
        'Hybrid keyword + vector retrieval',
        'Inline citations with source highlighting',
        'Streaming responses with token-level latency metrics',
      ],
      status: 'completed',
      category: 'ai',
      tags: ['RAG', 'LangChain', 'Chatbot'],
      year: 2025,
    },
    {
      slug: 'taskflow',
      title: 'TaskFlow',
      description:
        'Full-stack kanban and team task manager with real-time collaboration and role-based access.',
      longDescription:
        'TaskFlow is a collaborative project board built to master full-stack fundamentals: optimistic UI updates, WebSocket sync between clients, role-based permissions, and a clean REST API. Boards, columns and cards are drag-and-drop with conflict-free ordering.',
      image: imgTaskflow,
      tech: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Socket.IO'],
      github: 'https://github.com/Zhimron',
      features: [
        'Real-time multi-user board sync',
        'Drag-and-drop cards with fractional ordering',
        'Role-based access control (owner / editor / viewer)',
        'Activity feed and notifications',
      ],
      status: 'completed',
      category: 'fullstack',
      tags: ['Kanban', 'Realtime', 'Teams'],
      featured: true,
      year: 2024,
    },
    {
      slug: 'stocksense',
      title: 'StockSense',
      description:
        'Inventory management system for a campus bookstore — my VB.NET roots, modernized with a web dashboard.',
      longDescription:
        'StockSense began as the VB.NET desktop inventory system I built as a student — the project that made me fall in love with building software. It has since grown a web dashboard for reporting, low-stock alerts and supplier tracking, bridging my desktop-systems background with modern web development.',
      image: imgStockSense,
      tech: ['VB.NET', 'MySQL', 'React', 'Node.js'],
      github: 'https://github.com/Zhimron',
      features: [
        'Barcode-based stock in/out workflow',
        'Low-stock alerts and supplier tracking',
        'Sales and inventory reports with charts',
        'Web dashboard alongside the original desktop client',
      ],
      status: 'completed',
      category: 'software',
      tags: ['Inventory', 'Desktop', 'VB.NET'],
      year: 2023,
    },
    {
      slug: 'portfolio-website',
      title: 'This Portfolio',
      description:
        'The site you are looking at — React, TypeScript, Tailwind and Framer Motion with a single-file content layer.',
      longDescription:
        'A premium, AI-inspired portfolio built with Vite, React 19 and TypeScript. Every section is driven by one typed content file, so updating the site never means touching components. Features dark/light mode, glassmorphism, scroll-linked animations, project search and filtering, and per-project detail pages.',
      image: imgPortfolio,
      tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/Zhimron/My-Por',
      demo: undefined,
      features: [
        'Single-file typed content layer (CMS-style)',
        'Dark/light mode with system preference detection',
        'Project search, category filters and detail pages',
        'Scroll-linked animations and glassmorphism UI',
      ],
      status: 'in-progress',
      category: 'web',
      tags: ['Portfolio', 'Design', 'Animation'],
      year: 2026,
    },
  ],

  experience: [
    // [SAMPLE] — replace with your real experience
    {
      id: 'freelance-2025',
      role: 'Freelance Full-Stack & AI Developer',
      organization: 'Self-employed',
      location: 'Remote',
      start: 'Jan 2025',
      end: null,
      description:
        'Building web applications and AI-powered tools for small businesses and startups.',
      highlights: [
        'Shipped LLM-powered document automation for client back-offices',
        'Delivered full-stack apps from design to deployment',
        'Modernized legacy VB.NET systems with web dashboards',
      ],
      type: 'work',
    },
    {
      id: 'intern-2024',
      role: 'Software Developer Intern',
      organization: 'Local IT Solutions Company',
      location: 'Philippines',
      start: 'Jun 2024',
      end: 'Dec 2024',
      description:
        'Worked on internal business systems — desktop and web — as part of the development team.',
      highlights: [
        'Maintained VB.NET business applications used daily by staff',
        'Built internal reporting tools with React and Node.js',
      ],
      type: 'work',
    },
    {
      id: 'bsit',
      role: 'BS in Information Technology',
      organization: 'University',
      location: 'Philippines',
      start: '2020',
      end: '2024',
      description:
        'Focused on systems development. Started in VB.NET desktop systems, then deep-dived into web development — where the fire was lit.',
      highlights: [
        'Capstone: inventory management system (StockSense)',
        'Self-taught modern web stack alongside coursework',
      ],
      type: 'education',
    },
  ],

  certifications: [
    // [SAMPLE] — replace with your real certifications
    {
      id: 'aws-ccp',
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2025',
      url: 'https://aws.amazon.com/certification/',
    },
    {
      id: 'fcc-fullstack',
      title: 'Full Stack Developer Certification',
      issuer: 'freeCodeCamp',
      date: '2024',
      url: 'https://www.freecodecamp.org/',
    },
    {
      id: 'dl-specialization',
      title: 'Deep Learning Specialization',
      issuer: 'DeepLearning.AI / Coursera',
      date: '2025',
      url: 'https://www.deeplearning.ai/',
    },
  ],

  services: [
    {
      id: 'ai-solutions',
      title: 'AI Solutions & Integrations',
      description:
        'LLM-powered features, chatbots, RAG pipelines and automation built into your product or workflow.',
      icon: 'brain',
      deliverables: ['RAG & chatbot systems', 'LLM API integration', 'Prompt & pipeline design'],
    },
    {
      id: 'fullstack-web',
      title: 'Full-Stack Web Development',
      description:
        'Modern, fast, responsive web applications — from landing pages to complete SaaS products.',
      icon: 'layout',
      deliverables: ['React + TypeScript frontends', 'Node.js / FastAPI backends', 'Database design'],
    },
    {
      id: 'api-backend',
      title: 'APIs & Backend Systems',
      description:
        'Reliable REST APIs, authentication, integrations and data pipelines that scale with your product.',
      icon: 'server',
      deliverables: ['REST API design & build', 'Auth & role systems', 'Third-party integrations'],
    },
    {
      id: 'legacy-modernization',
      title: 'Legacy System Modernization',
      description:
        'Coming from VB.NET desktop systems, I help teams bring legacy business software to the modern web.',
      icon: 'wrench',
      deliverables: ['VB.NET system audits', 'Web dashboard companions', 'Incremental migration plans'],
    },
  ],

  testimonials: [
    // [SAMPLE] — replace with real testimonials
    {
      id: 't1',
      name: 'Maria Santos',
      role: 'Operations Manager',
      company: 'Retail client',
      quote:
        'Shimron modernized our aging inventory system without disrupting daily operations. The new dashboard saves us hours every week.',
    },
    {
      id: 't2',
      name: 'James Rivera',
      role: 'Startup Founder',
      company: 'SaaS client',
      quote:
        'He shipped our MVP fast and the AI features actually work in production. Communicates clearly and delivers what he promises.',
    },
    {
      id: 't3',
      name: 'Prof. A. Cruz',
      role: 'Capstone Adviser',
      company: 'University',
      quote:
        'One of the most driven students I have advised — the quality of his capstone system was well beyond course requirements.',
    },
  ],

  faq: [
    {
      question: 'What kind of projects do you take on?',
      answer:
        'AI integrations (chatbots, RAG, automation), full-stack web applications, APIs, and modernization of legacy VB.NET/desktop systems. If it involves shipping working software, I am interested.',
    },
    {
      question: 'Are you available for freelance or full-time work?',
      answer:
        'Yes — I am currently open to freelance projects and full-time opportunities. The fastest way to reach me is the contact form below or a direct email.',
    },
    {
      question: 'What is your typical process?',
      answer:
        'Short discovery call → written scope with milestones → iterative delivery with weekly demos → deployment and handover with documentation. You see progress every week, not just at the end.',
    },
    {
      question: 'Which stack do you recommend for a new product?',
      answer:
        'For most products: React + TypeScript on the front, Node.js or FastAPI on the back, PostgreSQL for data, deployed on Vercel or a small cloud VM. For AI features, I integrate Claude or OpenAI APIs with a RAG layer when your own data is involved.',
    },
    {
      question: 'Can you work with an existing codebase?',
      answer:
        'Absolutely. I started my career maintaining and extending existing systems, so I am comfortable reading unfamiliar code, adding features safely, and improving things incrementally.',
    },
  ],

  github: { username: 'Zhimron' },

  seo: {
    title: 'Shimron M. Guray | AI Engineer & Full-Stack Developer',
    description:
      'Portfolio of Shimron M. Guray — AI Engineer, Full-Stack Developer and Software Engineer. Projects, skills, services and contact.',
    // TODO: set your deployed domain
    url: 'https://zhimron.github.io/My-Por',
    keywords: [
      'AI Engineer',
      'Full-Stack Developer',
      'Software Engineer',
      'React',
      'TypeScript',
      'Machine Learning',
      'Portfolio',
      'Shimron Guray',
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
