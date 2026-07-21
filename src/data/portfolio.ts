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

import avatar from "../assets/viber_image_2024-09-02_14-01-28-869.jpg";
import imgPortfolio from '../assets/projects/portfolio-site.svg';
import imgTaskflow from "../assets/projects/image.png";
import imgPythonFileLocker from "../assets/projects/image2.png";
import imgLaundryM from "../assets/projects/image3.png";
import imgTravelLog from "../assets/projects/image4.png";
import imgEnrollment from "../assets/projects/enrollment-admission.svg";
import imgCooperative from "../assets/projects/cooperative-system.svg";
import imgAccounting from "../assets/projects/accounting-system.svg";
import imgLightem from "../assets/projects/lightem-business-platform.svg";
import imgHandGestureRecognition from "../assets/projects/Screenshot 2026-07-15 094741.png";


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
      "I'm Shimron M. Guray. My origin story started with Visual Basic and desktop systems — fewer capes, more forms, buttons, and databases. Then I found web development and willingly opened several hundred browser tabs.",
      "Honest version: I'm productively lazy. If a task is slow, repetitive, or asks me to click the same thing twice, I start plotting its automation. I'd rather teach the machine once than lose the same staring contest with a tedious workflow every day.",
      "That habit followed me into capstone year. Our group needed a leader; I had already automated my part, so apparently that made me qualified. I taught myself enough VB.NET to lead a laundry management system with IoT integration, pushed us beyond the easy version, and helped ship one of the strongest systems in our batch. Leadership, I learned, is mostly caring enough to fix the awkward parts before they become everyone's problem.",
      "The fire that started there is still flaming hot. Web development turned 'this is hard' into 'one more commit.' There is always another tool to learn, another edge case hiding in a corner, and somehow I still enjoy the chase.",
      "Today I work across the stack — React and TypeScript in the browser, Node.js behind the scenes, and a debugger nearby for emotional support. I like clean interfaces, reliable backends, and software that solves the problem without creating three new ones.",
    ],
    location: "Philippines",
    email: "gurayshimron@gmail.com",
    avatar,
    resumeUrl: `${import.meta.env.BASE_URL}resume.pdf`,
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
    { name: "TypeScript", category: "Languages", icon: "typescript", featured: true },
    { name: "JavaScript", category: "Languages", icon: "javascript", featured: true },
    { name: "Python", category: "Languages", icon: "python", featured: true },
    { name: "PHP", category: "Languages", icon: "php", featured: true },
    { name: "VB.NET", category: "Languages", icon: "dotnet" },
    { name: "C#", category: "Languages", icon: "csharp" },
    { name: "SQL", category: "Languages", icon: "sql" },
    // Frontend
    { name: "React", category: "Frontend", icon: "react", featured: true },
    { name: "Tailwind CSS", category: "Frontend", icon: "tailwindcss", featured: true },
    { name: "Framer Motion", category: "Frontend", icon: "framer" },
    { name: "HTML & CSS", category: "Frontend", icon: "html5" },
    { name: "Vite", category: "Frontend", icon: "vite" },
    // Backend
    { name: "Node.js", category: "Backend", icon: "nodejs", featured: true },
    { name: "Laravel", category: "Backend", icon: "laravel" },
    { name: "REST APIs", category: "Backend", icon: "api" },
    // Databases
    { name: "MongoDB", category: "Databases", icon: "mongodb" },
    { name: "MySQL", category: "Databases", icon: "mysql" },
    // Cloud
    { name: "Vercel", category: "Cloud", icon: "vercel", featured: true },
    { name: "Siteground", category: "Cloud", icon: "cloud" },
    // DevOps
    { name: "Docker", category: "DevOps", icon: "docker", featured: true },
    { name: "GitHub Actions", category: "DevOps", icon: "githubactions" },
    // Tools
    { name: "Git", category: "Tools", icon: "git", featured: true },
    { name: "VS Code", category: "Tools", icon: "vscode" },
    { name: "Figma", category: "Tools", icon: "figma" },
    { name: "Postman", category: "Tools", icon: "postman" },
    { name: "Beekeeper", category: "Tools", icon: "beekeeperstudio" },
  ],

  projects: [
    // [SAMPLE] — replace with your real projects
    {
      slug: "lightem-business-platform",
      title: "Lightem Business Management Platform",
      description:
        "Multi-tenant full-stack business platform covering accounting, inventory, POS, HRIS, payroll, sales, ticketing, and reporting.",
      longDescription:
        "Lightem is a full-stack business management platform that I began working on in 2024. I contribute across its React frontend and PHP backend, developing responsive module interfaces, connecting tenant-aware API workflows, maintaining authenticated JSON endpoints, and supporting the MySQL data layer. The platform brings accounting, inventory, point-of-sale, HRIS, payroll, sales, support ticketing, and reporting workflows into one secure application.",
      image: imgLightem,
      tech: [
        "React",
        "Vite",
        "JavaScript",
        "Tailwind CSS",
        "Material UI",
        "TanStack React Query",
        "Zustand",
        "React Hook Form",
        "Zod",
        "PHP 8.2",
        "MySQL",
        "PDO",
        "REST API",
        "JWT",
      ],
      features: [
        "Multi-tenant company login and tenant-specific API routing",
        "JWT access and refresh token authentication",
        "Role-based access to protected application modules",
        "Accounting, inventory, POS, HRIS, and payroll workflows",
        "Sales, support ticketing, and business reporting modules",
        "Responsive React interfaces with reusable query and form patterns",
        "PHP JSON APIs organized around controllers and database gateways",
        "Parameterized MySQL queries through PDO",
        "Frontend and backend validation across business workflows",
        "Scheduled jobs and optional third-party service integrations",
      ],
      status: "in-progress",
      category: "fullstack",
      tags: [
        "Enterprise Software",
        "Business Management",
        "Multi-Tenant",
        "Accounting",
        "Inventory",
        "HRIS",
        "PHP",
        "React",
      ],
      featured: true,
      year: 2024,
    },
    {
      slug: "LaundryM",
      title: "Laundry Management System",
      description:
        "Desktop laundry management system with customer management, inventory tracking, transaction processing, and business reporting.",
      longDescription:
        "LaundryM is a full-featured Windows desktop application developed to streamline daily laundry business operations. Built using VB.NET and SQL Server, the system provides customer management, service configuration, inventory monitoring, transaction processing, receipt generation, audit logging, and secure user authentication. The application follows a modular architecture with an intuitive interface, enabling businesses to efficiently manage orders, monitor inventory, and maintain accurate operational records.",
      image: imgLaundryM,
      tech: [
        "VB.NET",
        ".NET Framework",
        "SQL Server",
        "ADO.NET",
        "Guna.UI2",
        "Windows Forms",
        "FontAwesome",
      ],
      github: "https://github.com/Zhimron/Laundry",
      features: [
        "Customer profile and account management",
        "Laundry service and pricing management",
        "Transaction processing and payment recording",
        "Inventory monitoring and stock management",
        "Receipt generation and printing",
        "Order tracking with ongoing laundry status",
        "Audit logging and activity history",
        "Secure user authentication and account settings",
        "Role-ready modular desktop architecture",
        "Professional Windows desktop interface",
      ],
      status: "completed",
      category: "desktop",
      tags: [
        "Business Management",
        "Desktop Application",
        "Inventory",
        "POS",
        "SQL Server",
      ],
      featured: true,
      year: 2026,
    },
    {
      slug: "HandGestureRecognition",
      title: "Hand Gesture Recognition System",
      description:
        "AI-powered desktop application that recognizes hand gestures in real time for gesture recognition, mouse control, keyboard automation, and custom gesture training.",
      longDescription:
        "Hand Gesture Recognition System is a modular desktop application built with Python, MediaPipe, OpenCV, and PySide6 that enables real-time hand tracking and gesture recognition using a webcam. The system supports multiple AI-powered features including live hand detection, custom gesture recording, mouse control, keyboard automation, and a modern desktop interface. Designed with a multithreaded architecture, it separates camera capture, AI inference, and rendering pipelines to maintain high performance and responsive user interaction while minimizing CPU usage and latency.",
      image: imgHandGestureRecognition,
      tech: [
        "Python",
        "MediaPipe",
        "OpenCV",
        "PySide6",
        "NumPy",
        "JSON",
        "Threading",
        "Computer Vision",
        "AI",
      ],
      github: "https://github.com/Zhimron/Hand-Gesture-Recognition",
      features: [
        "Real-time webcam initialization and camera selection",
        "AI-powered hand detection with MediaPipe",
        "Recognition of multiple predefined hand gestures",
        "Finger state detection (open and closed fingers)",
        "Handedness detection with confidence scoring",
        "Custom gesture recording and JSON-based storage",
        "Automatic loading of custom-trained gestures",
        "Gesture confidence filtering and smoothing",
        "Threaded camera capture, inference, and rendering pipeline",
        "Mouse cursor control using hand gestures",
        "Left click, right click, drag, scroll, and double-click gestures",
        "Keyboard automation using configurable gesture mappings",
        "Live FPS monitoring and performance overlay",
        "Dark-mode desktop application built with PySide6",
        "Gesture recording and settings management interface",
        "Configurable AI detection and tracking confidence",
        "Professional modular architecture for future AI expansion",
      ],
      status: "completed",
      category: "ai",
      tags: [
        "Artificial Intelligence",
        "Computer Vision",
        "Machine Learning",
        "Python",
        "MediaPipe",
        "Automation",
        "Desktop Application",
      ],
      featured: true,
      year: 2026,
    },
    {
      slug: "PythonFileLocker",
      title: "Python File Locker",
      description:
        "Secure file encryption application featuring authenticated encryption, Argon2id key derivation, and password + key-file protection.",
      longDescription:
        "Python File Locker is a desktop security application designed to protect sensitive files, folders, images, and videos using modern cryptographic standards. The application encrypts data with authenticated encryption, securely derives encryption keys using Argon2id, and supports optional key-file authentication for enhanced security. It also includes encrypted metadata, compression, secure temporary file handling, and backward compatibility with legacy encrypted files, making it a practical solution for protecting confidential data.",
      image: imgPythonFileLocker,
      tech: [
        "Python",
        "PySide6",
        "Argon2id",
        "AES-256-GCM",
        "ChaCha20-Poly1305",
        "Cryptography",
        "PyInstaller",
      ],
      github: "https://github.com/Zhimron/FILE-LOCKER",
      features: [
        "Encrypt files, folders, images, videos, and documents",
        "AES-256-GCM and ChaCha20-Poly1305 authenticated encryption",
        "Argon2id memory-hard password key derivation",
        "Optional password + key-file multi-factor protection",
        "Encrypted metadata with original filename and timestamps",
        "Compression before encryption to reduce file size",
        "Secure temporary file opening without permanent decryption",
        "Legacy encrypted file migration to the latest security format",
        "Cross-system standalone Windows executable via PyInstaller",
      ],
      status: "completed",
      category: "security",
      tags: [
        "Cybersecurity",
        "Encryption",
        "Desktop App",
        "Python",
        "Cryptography",
      ],
      featured: true,
      year: 2026,
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
      github: "https://github.com/Zhimron/my-por",
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
    {
      slug: "TaskManager",
      title: "TaskManager",
      description:
        "Full-stack task management system with team collaboration, role-based access, and a PHP + MySQL backend.",
      longDescription:
        "TaskManager is a modern full-stack productivity application built with React, Vite, PHP, and MySQL. It enables individuals and teams to organize projects, assign tasks, monitor progress, and collaborate efficiently through a clean and responsive interface. The system features secure authentication, role-based permissions, team management, dashboard analytics, and RESTful API integration, making it a practical solution for managing daily workflows and team productivity.",
      image: imgTaskflow,
      tech: [
        "React",
        "Vite",
        "JavaScript",
        "PHP",
        "MySQL",
        "REST API",
        "XAMPP",
      ],
      github: "https://github.com/Zhimron/TaskManager",
      features: [
        "User authentication and secure login system",
        "Create, edit, assign, and manage tasks",
        "Team creation and member collaboration",
        "Role-based access control",
        "Interactive dashboard with task statistics",
        "RESTful PHP API with MySQL database",
        "Responsive and modern React interface",
        "Health monitoring endpoint for backend status",
      ],
      status: "in-progress",
      category: "fullstack",
      tags: [
        "Task Management",
        "Team Collaboration",
        "Productivity",
        "Dashboard",
      ],
      featured: true,
      year: 2026,
    },
    {
      slug: "TravelLog",
      title: "Travel Log",
      description:
        "Modern travel planning and journaling platform with user authentication, trip management, and an interactive dashboard.",
      longDescription:
        "Travel Log is a responsive React application designed to help users organize, manage, and document their travel experiences. Built with React, Vite, and Tailwind CSS, the platform provides secure authentication, personalized dashboards, trip planning, travel history management, and archive functionality. The project demonstrates modern frontend development practices through reusable components, Context API state management, responsive design, and engaging user interactions powered by Framer Motion and Lottie animations.",
      image: imgTravelLog,
      tech: [
        "React",
        "Vite",
        "JavaScript",
        "Tailwind CSS",
        "Material UI",
        "React Router",
        "Context API",
        "Framer Motion",
        "Lottie",
        "LocalForage",
      ],
      github: "https://github.com/Zhimron/Travel_Frontend",
      features: [
        "Secure user registration and authentication",
        "Create, edit, archive, and delete travel logs",
        "Personalized travel dashboard",
        "Trip history and archive management",
        "Responsive mobile-friendly interface",
        "Reusable React component architecture",
        "Persistent local storage with LocalForage",
        "Smooth page transitions and animations",
        "Custom 404 page and protected routing",
        "Modern UI built with Tailwind CSS and Material UI",
      ],
      status: "in-progress",
      category: "frontend",
      tags: ["Travel", "Dashboard", "React", "UI/UX", "Responsive"],
      featured: true,
      year: 2026,
    },
    {
      slug: "EnrollmentAdmissionSystem",
      title: "Enrollment and Admission System",
      description:
        "Full-stack school enrollment and admission platform built during my internship, handling student registration end to end.",
      longDescription:
        "Built during my internship at Excellence and Innovation, this system manages server-side logic and API development for student enrollment and admission processes. I was responsible for the backend, including data storage and processing, while working closely with front-end developers to ensure smooth, reliable interactions across the enrollment workflow.",
      image: imgEnrollment,
      tech: ["PHP", "MySQL", "React", "Tailwind CSS", "Postman"],
      features: [
        "Student enrollment and admission workflow",
        "Server-side logic and REST API development",
        "Data storage, retrieval, and processing for student records",
        "Front-end and back-end integration",
      ],
      status: "completed",
      category: "fullstack",
      tags: ["Education", "Enrollment", "PHP", "Internship"],
      year: 2023,
    },
    {
      slug: "CooperativeSystem",
      title: "Cooperative System",
      description:
        "Backend and front-end system mimicking traditional banking features, tailored for cooperatives.",
      longDescription:
        "An ongoing full-stack system that brings core banking-style functionality to cooperatives. I create the APIs and manage backend logic and front-end integration, covering member accounts and transaction-style operations, built with PHP, MySQL, React, and Tailwind CSS.",
      image: imgCooperative,
      tech: ["PHP", "MySQL", "React", "Tailwind CSS", "Postman"],
      features: [
        "Member account management",
        "Banking-style transaction handling for cooperatives",
        "REST API design and backend logic",
        "React + Tailwind front-end integration",
      ],
      status: "in-progress",
      category: "fullstack",
      tags: ["Fintech", "Cooperative", "PHP", "Banking"],
      year: 2026,
    },
    {
      slug: "AccountingSystem",
      title: "Accounting System",
      description:
        "Accounting system focused on petty cash disbursement, journal entries, and other financial components.",
      longDescription:
        "An ongoing accounting system covering core financial operations — petty cash disbursement, journal entries, and related bookkeeping components. Built with PHP and MySQL on the backend and React with Tailwind CSS on the front end.",
      image: imgAccounting,
      tech: ["PHP", "MySQL", "React", "Tailwind CSS", "Postman"],
      features: [
        "Petty cash disbursement tracking",
        "Journal entry management",
        "Financial reporting components",
        "REST API backend with React front end",
      ],
      status: "in-progress",
      category: "fullstack",
      tags: ["Accounting", "Finance", "PHP"],
      year: 2026,
    },
  ],

  experience: [
    // [SAMPLE] — replace with your real experience
    {
      id: "work-2025",
      role: "Programming Specialist & Full-Stack Developer",
      organization: "Lightem Solutions",
      location: "Philippines",
      start: "July 2023",
      end: null,
      description: "Building web applications, desktop systems, and automation tools.",
      highlights: [
        "Delivered full-stack apps from design to deployment",
        "Modernized legacy VB.NET systems with web dashboards",
      ],
      type: "work",
    },
    {
      id: "excellence-innovation",
      role: "Back-End Developer: Intern to Full Time",
      organization: "Excellence and Innovation",
      location: "Philippines",
      start: "May 2023",
      end: null,
      description:
        "Ensured seamless integration between server-side applications and front-end development, handling data storage, retrieval, and processing.",
      highlights: [
        "Built server-side logic and APIs for the Enrollment and Admission System",
        "Collaborated with front-end developers to meet application needs",
        "Promoted from intern to full-time back-end developer",
      ],
      type: "work",
    },
    {
      id: "bsis",
      role: "BS Information System",
      organization: "Richwell Colleges Incorporated",
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
    {
      id: "atec-ict",
      role: "ICT – Programming",
      organization: "Atec Technological College",
      location: "Philippines",
      start: "2017",
      end: "2019",
      description:
        "Senior high school specialization in ICT and programming fundamentals.",
      highlights: [],
      type: "education",
    },
  ],

  certifications: [
    // [SAMPLE] — replace with your real certifications
    {
      id: "tesda",
      title: "NC III in WEB DEVELOPMENT",
      issuer: "Technical education and skills development authority",
      date: "2026",
      url: "https://t2mis.tesda.gov.ph/Learners/S/4B004B00780035006F004D002B004A00320057006F006700460077004D004B006900380043006600780067003D003D00",
    },
    {
      id: "dict",
      title: "Tech Trends:Data Analytics(Intermediate Session)",
      issuer: "DICT",
      date: "2022",
      url: "https://drive.google.com/drive/u/0/folders/1EbfG_mpmEws4jOgVsFjDCs-6eB3fCkGx",
    },
    {
      id: "dict-blockchain",
      title: "Tech Trends:Blockchain(Intermediate Session)",
      issuer: "DICT",
      date: "2022",
      url: "https://drive.google.com/drive/u/0/folders/1EbfG_mpmEws4jOgVsFjDCs-6eB3fCkGx",
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
    url: "https://zhimron.github.io/my-por",
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
