# Portfolio Enhancements Checklist

## Phase 1 — Project Previews Automator (Playwright)
- [x] Install Playwright and tsx as devDependencies
- [x] Modify `src/types/index.ts` to add `slug` and `liveUrl` to the `Project` interface
- [x] Modify `src/data/projects.ts` to add `slug` and `liveUrl` for every project
- [x] Create `scripts/generate-project-previews.ts`
- [x] Add `"previews": "tsx scripts/generate-project-previews.ts"` to `package.json`
- [x] Install playwright chromium browser binaries
- [x] Test preview screenshot generation script
- [x] Update `ProjectCard` in `src/components/portfolio/Projects.tsx` to load previews dynamically and handle fallbacks

## Phase 2 — Navbar, ScrollSpy, & Branding
- [x] Rewrite scroll spy listener in `Navbar.tsx` using `getBoundingClientRect()`
- [x] Decorate logo branding ("Warish") in `Navbar.tsx` (increase size, add pseudo-3D shadows and glowing effect)

## Phase 3 — Certifications Tab Sorting
- [x] Update category tabs in `Certifications.tsx` (Highlighted first, then All, then others)
- [x] Set default active filter state to `"highlighted"`
- [x] Sort list in `Certifications.tsx` when filter is `"all"` to show Highlighted certs first

## Phase 4 — Experience Certificate Modal
- [x] Implement active cert modal state in `Experience.tsx`
- [x] Replace postimage redirect link with local lightbox modal overlay trigger in `Experience.tsx`
- [x] Render responsive certificate preview overlay with verify/credential buttons matching certifications

## Phase 5 — Footer & Data-driven Copy
- [x] Bind Footer "Hire Me" button toNavbar's mail client compost trigger
- [x] Migrate all hardcoded copy strings to `src/data/personal.ts`
- [x] Update `About.tsx` to read copy from `personal.about`
- [x] Update `Footer.tsx` to read copy from `personal.footer`
- [x] Update `Experience.tsx` to read copy from `personal.experience`
- [x] Update `Projects.tsx` to read copy from `personal.projects`
- [x] Update `Certifications.tsx` to read copy from `personal.certifications`
- [x] Update `Social.tsx` to read copy from `personal.social`

## Phase 6 — 3D Interactive Typing Effect
- [x] Add `codeSnippet` array to `personal.hero` in `src/data/personal.ts`
- [x] Update `HeroScene.tsx` to render monospaced `<Text>` components in `CodeWindow`
- [x] Implement real-time character-by-character typing animation with blinking block cursor

## Phase 7 — Build & Warning Suppressions
- [x] Modify `vite.config.ts` to set `chunkSizeWarningLimit: 1600`
- [x] Ignore `implementation_plan.md` in `.gitignore`
- [x] Verify `npm run lint` and `npm run build` are clean
- [x] Update tab title and SEO search strings to "MD WARISH ANSARI" in `index.html`

## Phase 8 — Git Commit
- [ ] Git commit all changes
