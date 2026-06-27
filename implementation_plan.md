# Implementation Plan — Portfolio Enhancements & Automator

This plan addresses all requested changes and enhancements to make the portfolio fully production-ready, interactive, and data-driven.

---

## Proposed Changes

### 1. Project Previews Automator (Playwright)

Configure Playwright to take screenshots of the project live URLs automatically.

#### [MODIFY] [types/index.ts](file:///home/md-warish-ansari/Projects/Portfolio/src/types/index.ts)
Add `slug` and `liveUrl` keys to the `Project` interface:
```ts
export interface Project {
  id: number;
  slug: string; // e.g., 'festoryx'
  liveUrl: string; // e.g., 'https://festoryx.vercel.app/'
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  skills: string[];
  image: string; // keep for fallback/compatibility
  projectLink: string;
  githubLink: string;
  date: string;
  category: ProjectCategory;
  emoji: string;
  featured: boolean;
}
```

#### [MODIFY] [data/projects.ts](file:///home/md-warish-ansari/Projects/Portfolio/src/data/projects.ts)
Add `slug` and `liveUrl` values to all 4 projects:
- **Festoryx**: `slug: "festoryx"`, `liveUrl: "https://festoryx.vercel.app/"`
- **BlueBlog**: `slug: "blueblog"`, `liveUrl: "https://blueblog-v1.vercel.app/"`
- **CartNest**: `slug: "cartnest"`, `liveUrl: "https://cartnest-shop.vercel.app/"`
- **MoviesVibe**: `slug: "moviesvibe"`, `liveUrl: "https://moviesvibe-lt7u.onrender.com/"`

#### [NEW] [scripts/generate-project-previews.ts](file:///home/md-warish-ansari/Projects/Portfolio/scripts/generate-project-previews.ts)
Write screenshot generator script using Playwright:
- Import `projects` from `./src/data/projects.ts`.
- Launch Chromium.
- For each project, open a page, viewport `1600x900`, visit `liveUrl`, wait for `networkidle`, wait `2000ms`, capture screenshot as WebP, and save to `public/project-previews/${slug}.webp`.
- Handle failures gracefully (e.g. log error, print logs, continue to next project).

#### [MODIFY] [components/portfolio/Projects.tsx](file:///home/md-warish-ansari/Projects/Portfolio/src/components/portfolio/Projects.tsx)
- Load image from `/project-previews/${project.slug}.webp`.
- Track load error using state `const [imgSrc, setImgSrc] = useState(src)` and fallback to `/project-previews/placeholder.webp` if loading fails.
- Apply transition classes (fade-in, object-cover, rounded corners).

#### [MODIFY] [package.json](file:///home/md-warish-ansari/Projects/Portfolio/package.json)
- Add `"previews": "tsx scripts/generate-project-previews.ts"` to scripts.
- Add `playwright` and `tsx` to devDependencies.

---

### 2. ScrollSpy Lazy-Load Fix

#### [MODIFY] [components/portfolio/Navbar.tsx](file:///home/md-warish-ansari/Projects/Portfolio/src/components/portfolio/Navbar.tsx)
Rewrite ScrollSpy using window scroll event listener and `getBoundingClientRect()` rather than mount-time `IntersectionObserver` to support lazy-loaded sections:
- Query layout positions on each scroll frame.
- Set active section to the section whose top is `<= 160px` and bottom is `> 160px`.

---

### 3. Certifications Default Tab & Sorting

#### [MODIFY] [components/portfolio/Certifications.tsx](file:///home/md-warish-ansari/Projects/Portfolio/src/components/portfolio/Certifications.tsx)
- Change default filter value to `"highlighted"`.
- Put "Highlighted" first, then "All", then other categories in the tabs.
- When filter is `"all"`, sort certifications so that items with `category === "highlighted"` are displayed first.

---

### 4. Experience Certificate Modal

#### [MODIFY] [components/portfolio/Experience.tsx](file:///home/md-warish-ansari/Projects/Portfolio/src/components/portfolio/Experience.tsx)
- Add state `const [activeCert, setActiveCert] = useState<ExperienceCertificate | null>(null);`.
- Replace View Certificate hyperlink action with setting `activeCert`.
- Render an interactive popup modal/lightbox in `Experience.tsx` displaying the certificate, close button, verify button, and credential ID matching the certifications style.

---

### 5. Footer "Hire Me" Fix

#### [MODIFY] [components/portfolio/Footer.tsx](file:///home/md-warish-ansari/Projects/Portfolio/src/components/portfolio/Footer.tsx)
Bind the Footer's "Hire Me" button to call an email compose action identical to the Navbar.

---

### 6. Navbar Logo Size & Decoration

#### [MODIFY] [components/portfolio/Navbar.tsx](file:///home/md-warish-ansari/Projects/Portfolio/src/components/portfolio/Navbar.tsx)
- Decorate the logo: increase font size from small eyebrow to `text-[16px]` or `text-[18px]`.
- Add a pseudo-3D letter layering effect using text shadows and neon text-glow on the Plum-colored "W" matching the theme.

---

### 7. Clean Data-Driven Copy (Copy Migration)

Migrate all hardcoded copy strings into the data layer.

#### [MODIFY] [data/personal.ts](file:///home/md-warish-ansari/Projects/Portfolio/src/data/personal.ts)
Expand the schema to include all copy strings:
- `personal.about.headingPart1`: "Building software"
- `personal.about.headingPart2`: "solves real problems"
- `personal.about.eyebrow`: "About me"
- `personal.projects.title`: "Things I've shipped"
- `personal.projects.description`: "My latest creations..."
- `personal.projects.eyebrow`: "Projects"
- `personal.projects.allTechLabel`: "All Technologies"
- `personal.certifications.title`: "Credential vault"
- `personal.certifications.description`: "Verified credentials..."
- `personal.certifications.eyebrow`: "Certifications"
- `personal.experience.title`: "Career journey"
- `personal.experience.description`: "Internships..."
- `personal.experience.eyebrow`: "Experience"
- `personal.experience.responsibilitiesLabel`: "Responsibilities"
- `personal.experience.skillsLabel`: "Skills"
- `personal.footer.philosophy`: "Clean code is..."
- `personal.footer.philosophySub`: "..."
- `personal.footer.journeyTitle`: "Development Journey"
- `personal.footer.contactTitle`: "Contact"
- `personal.footer.builtWithText`: "Built with"
- `personal.footer.backToTopText`: "Back to top"
- `personal.social.title`: "Let's build together"
- `personal.social.description`: "Find me across..."
- `personal.social.eyebrow`: "Connect"

#### [MODIFY] Components
Replace all hardcoded values with data values:
- `About.tsx`
- `Footer.tsx`
- `Experience.tsx`
- `Projects.tsx`
- `Certifications.tsx`
- `Social.tsx`
- `Hero.tsx`

---

### 8. 3D typing code effect in HeroScene

#### [MODIFY] [data/personal.ts](file:///home/md-warish-ansari/Projects/Portfolio/src/data/personal.ts)
Add typing code snippet array:
```ts
hero: {
  ...
  codeSnippet: [
    "const developer = {",
    "  name: 'MD WARISH ANSARI',",
    "  role: 'MERN Stack Developer',",
    "  skills: [",
    "    'React', 'Node.js',",
    "    'TypeScript', 'PostgreSQL'",
    "  ],",
    "  passion: 'Building scalable apps',",
    "  focus: 'AI & Performance',",
    "  available: true",
    "};"
  ]
}
```

#### [MODIFY] [components/portfolio/HeroScene.tsx](file:///home/md-warish-ansari/Projects/Portfolio/src/components/portfolio/HeroScene.tsx)
- Replace static code lines inside `CodeWindow` with `<Text>` elements from `@react-three/drei`.
- Implement animation typing state: type lines character-by-character on a timer loop.
- Add dynamic cursor `█` or `|` flashing at the current typing position.
- Source typing content from `personal.hero.codeSnippet`.

---

### 9. Build Warnings & Git Ignore

#### [MODIFY] [vite.config.ts](file:///home/md-warish-ansari/Projects/Portfolio/vite.config.ts)
Increase the chunk size warning limit to prevent Three.js compile warnings:
```ts
export default defineConfig({
  ...
  build: {
    chunkSizeWarningLimit: 1600,
    ...
  }
});
```

#### [MODIFY] [.gitignore](file:///home/md-warish-ansari/Projects/Portfolio/.gitignore)
Ignore unwanted workspace documentation files:
- `implementation_plan.md`

---

## Verification Plan

### Automated Tests
- Running `npm run previews` (generates preview screenshots successfully).
- Running `npm run lint` (returns zero lint errors).
- Running `npm run build` (compiles production bundle without any warnings).

### Manual Verification
- Verify tab title reads "MD WARISH ANSARI".
- Verify scrollspy highlights correct menu items for lazy loaded sections.
- Verify Certifications loads "Highlighted" by default and orders them correctly.
- Verify Experience "View Certificate" opens an overlay modal instead of redirecting.
- Verify 3D terminal displays real-time typing animation of personal details.
