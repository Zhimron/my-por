# ZHIM — Shimron M. Guray's Portfolio

Premium portfolio built with **React 19 + Vite + TypeScript + Tailwind CSS + Framer Motion**.

Dark/light mode, glassmorphism, scroll-linked animations, project search & filtering, per-project case-study pages, live GitHub activity, and a single-file content layer.

## Quick start

```bash
npm install
npm run dev      # dev server at http://localhost:3000
npm run build    # type-check + production build to /dist
npm run preview  # serve the production build locally
```

## Updating content (no component edits needed)

**Everything on the site is driven by [`src/data/portfolio.ts`](src/data/portfolio.ts)** — typed by [`src/data/types.ts`](src/data/types.ts). Edit that one file to change:

| What | Where in `portfolio.ts` |
|---|---|
| Name, roles, bio, email, location | `personal` |
| Social links | `socials` |
| Skills (8 categories, `featured` → Tech Stack marquee) | `skills` |
| Projects (image, tech, links, features, status, category, tags) | `projects` |
| Experience / education timeline | `experience` |
| Certifications | `certifications` |
| Services | `services` |
| Testimonials | `testimonials` |
| FAQ | `faq` |
| GitHub username (activity section) | `github.username` |
| SEO defaults | `seo` |
| Visitor analytics | `analytics` |

Items marked `[SAMPLE]` in the file are placeholders — replace them with your real work.

### Things to replace

- **Resume**: swap `public/resume.pdf` (current one is a generated placeholder).
- **Project images**: replace the gradient SVGs in `src/assets/projects/` with real screenshots (16:9 works best), then update the imports at the top of `portfolio.ts`.
- **LinkedIn URL** in `socials`, and your deployed **site URL** in `seo.url` + the `og:`/canonical tags in `index.html`.

### Enabling visitor analytics

In `portfolio.ts` set either:

```ts
analytics: { plausibleDomain: 'yourdomain.com' }
// or
analytics: { googleAnalyticsId: 'G-XXXXXXXXXX' }
```

No analytics load when neither is set.

### Contact form

By default the form opens the visitor's email client (mailto). For real form delivery, create a free [Formspree](https://formspree.io) form and set:

```ts
personal: { ..., contactFormEndpoint: 'https://formspree.io/f/yourid' }
```

## Project structure

```
src/
  data/            portfolio.ts (ALL content) + types.ts + navigation.ts
  components/
    layout/        Navbar, Footer, Loader, ScrollProgress, BackToTop, background
    sections/      Hero, About, Skills, TechStack, Projects, AIProjects,
                   Experience, Certifications, Services, GitHubActivity,
                   Testimonials, FAQ, Contact
    ui/            SectionHeading, ProjectCard, SocialIcon, FireWord
  pages/           Home, ProjectDetail (/projects/:slug), NotFound
  context/         ThemeContext (dark/light with system preference)
  hooks/           useGitHub, useActiveSection
  lib/             shared motion variants, project status/category metadata
```

## Deploying

- **Vercel / Netlify**: import the repo, framework = Vite. SPA routing works out of the box (Netlify may need a `/* /index.html 200` redirect).
- **GitHub Pages**: set `base: '/My-Por/'` in `vite.config.ts` and add a 404.html SPA fallback, since deep links like `/projects/x` need rewriting.

## Notes

- The word *fire* in the About section keeps the original portfolio's hover easter egg. 🔥
- Tests were removed with CRA; add [Vitest](https://vitest.dev) + Testing Library if you want them back.
