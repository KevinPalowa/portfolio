## Kevin Palowa — Portfolio

Next.js + Tailwind landing page that showcases Kevin Palowa as a senior Frontend Developer. Minimal, mobile-first, SEO friendly, and powered by structured data for every section.

### Tech stack
- Next.js 13 (Pages Router) + React 18 + TypeScript
- Tailwind CSS 3 + Framer Motion + next-themes
- Content lives inside `data/` (TypeScript modules + JSON for projects)

### Folder structure
```
├── components
│   ├── Layout.tsx
│   ├── NavBar.tsx
│   ├── Footer.tsx
│   ├── ThemeToggle.tsx
│   ├── common/SectionHeading.tsx
│   └── sections/
│       ├── HeroSection.tsx
│       ├── AboutSection.tsx
│       ├── SkillsSection.tsx
│       ├── ProjectsSection.tsx
│       ├── ExperienceSection.tsx
│       └── ContactSection.tsx
├── data
│   ├── content.ts         // copy + metadata for hero/about/skills/experience/contact
│   └── projects.json      // project list with stacks, features, links
├── pages
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── 404.tsx
│   └── index.tsx          // stitches all sections together
├── styles/globals.css
└── tailwind.config.js
```

### Getting started
```bash
# install dependencies
pnpm install   # or npm install

# run development server
pnpm dev

# build for production
pnpm build
# run production build locally
pnpm start

# lint
pnpm lint
```

### Content data
- Update section copy in `data/content.ts`.
- Projects pull from `data/projects.json`; add new objects using the same shape (`title`, `summary`, `technologies`, `features`, `links`).
- Interfaces in `types/content.ts` keep autocomplete/snippets accurate.

### Deployment (Vercel)
1. Push this repo to GitHub/GitLab.
2. Import it on [Vercel](https://vercel.com/new) and select the Next.js preset.
3. Ensure `pnpm build` (or `npm run build`) passes in preview.
4. Point production to `main` and deploy. Attach a custom domain if desired.

No environment variables are required right now. If you add external services (forms, analytics, etc.), document the needed variables in this section.
