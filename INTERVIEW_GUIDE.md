# 📋 Portfolio Project — Complete Interview Guide

> **Project:** Personal Portfolio Website  
> **Developer:** Mohammad Warish Ansari  
> **Live URL:** [portfolio-warish.vercel.app](https://portfolio-warish.vercel.app)  
> **GitHub:** [github.com/mdwarishansari/Portfolio](https://github.com/mdwarishansari/Portfolio)  
> **Tech Stack:** React.js · Bootstrap 5 · Vanilla CSS · Spline 3D · Vercel

---

## 1. 🏗️ Project Overview

This is a **single-page portfolio website** built from scratch using **React.js** (created via Create React App). It showcases personal information, skills, projects, certifications, internship experience, and social links — all in one smooth-scrolling dark-themed page with a **blue-purple neon color scheme**.

### Why I Built It

- To present my skills, projects, and certifications professionally in one place.
- To learn and practice React component architecture, CSS animations, and SEO best practices.
- To deploy a production-ready website using Vercel.

---

## 2. 🧰 Complete Technology Stack

### Core Framework & Libraries

| Package            | Version | Purpose                                                       |
| ------------------ | ------- | ------------------------------------------------------------- |
| `react`            | ^19.1.0 | Core UI library (latest React 19)                             |
| `react-dom`        | ^19.1.0 | DOM rendering for React                                       |
| `react-scripts`    | ^5.0.1  | Create React App build tooling (Webpack, Babel, ESLint)       |
| `react-router-dom` | ^7.5.2  | Client-side routing (installed but not actively used for SPA) |

### UI & Styling

| Package           | Version  | Purpose                                                                                           |
| ----------------- | -------- | ------------------------------------------------------------------------------------------------- |
| `bootstrap`       | ^5.3.5   | CSS framework for grid system, utility classes, components                                        |
| `react-bootstrap` | ^2.10.10 | React wrappers for Bootstrap components (`Container`, `Row`, `Col`, `Button`, `Nav`, `Navbar`)    |
| `bootstrap-icons` | ^1.11.3  | Icon font library (used in navbar, buttons, section icons)                                        |
| `react-icons`     | ^5.5.0   | SVG icon library (Font Awesome, Simple Icons, Boxicons — used for skills, social links, projects) |

### Animation & 3D

| Package                    | Version  | Purpose                                                         |
| -------------------------- | -------- | --------------------------------------------------------------- |
| `react-type-animation`     | ^3.2.0   | Typing/typewriter effect in Hero section for role titles        |
| `@splinetool/react-spline` | ^4.0.0   | React wrapper to embed interactive Spline 3D scenes             |
| `@splinetool/runtime`      | ^1.10.14 | Core runtime engine for the Spline 3D scene                     |
| `@google/model-viewer`     | ^4.1.0   | 3D model viewer component (installed, available for future use) |

### Testing (pre-installed by CRA)

| Package                       | Version | Purpose                              |
| ----------------------------- | ------- | ------------------------------------ |
| `@testing-library/react`      | ^16.3.0 | React component testing              |
| `@testing-library/jest-dom`   | ^6.6.3  | Jest DOM matchers                    |
| `@testing-library/dom`        | ^10.4.0 | DOM testing utilities                |
| `@testing-library/user-event` | ^13.5.0 | User interaction simulation          |
| `web-vitals`                  | ^2.1.4  | Core web vitals performance tracking |

### Important Clarification: No Tailwind CSS

> ⚠️ **This portfolio does NOT use Tailwind CSS.** The styling is done entirely with:
>
> 1. **Bootstrap 5** — for grid system (`Container`, `Row`, `Col`), spacing utilities (`mb-5`, `mt-4`, `py-5`), responsive breakpoints, and pre-built components.
> 2. **Vanilla/Custom CSS** — for all animations, gradients, glassmorphism effects, hover transitions, and the blue-purple theme. Each component has its own `.css` file.
> 3. **CSS Custom Properties (Variables)** — defined in `index.css` for consistent theming.

However, **other projects** listed in the portfolio (NexusShop, She Can Intern, BlueBlog) do use Tailwind CSS — those are separate repositories.

---

## 3. 📁 Project Architecture & File Structure

```
Portfolio/
├── public/
│   ├── index.html          # Root HTML with SEO meta tags, Open Graph, JSON-LD
│   ├── style.css           # Minimal public styles
│   ├── dp.png              # Profile image (favicon + OG image)
│   ├── DP.gif              # Animated profile image
│   ├── robots.txt          # Search engine crawling rules
│   └── sitemap.xml         # XML sitemap for SEO
│
├── src/
│   ├── index.js            # ReactDOM entry point (React 19 createRoot API)
│   ├── index.css           # Global CSS variables, animations, button styles
│   ├── App.js              # Root component — composes all 9 sections
│   │
│   └── components/         # 9 feature-based component directories
│       ├── Navbar/          # navbar.js + navbar.css
│       ├── Hero/            # hero.js + hero.css + Splinesceen.js
│       ├── About/           # about.js + about.css + img/ (dp.jpeg, DP.gif)
│       ├── Skills/          # skills.js + skills.css
│       ├── Projects/        # projects.js + projects.css + cover_img/ (8 PNGs)
│       ├── Certifications/  # certifications.js + certifications.css
│       ├── Experience/      # Experience.js + experience.css
│       ├── Social/          # social.js + social.css
│       └── Footer/          # footer.js + footer.css
│
├── package.json            # Dependencies & scripts
├── .gitignore              # Git ignore rules
└── README.md               # Project documentation
```

### Architecture Pattern

- **Component-Based Architecture**: Each section is an isolated directory with its own `.js` + `.css` files.
- **Single Page Application (SPA)**: All sections render on one page, no routing needed.
- **Composition Pattern**: `App.js` simply imports and composes all 9 components in order.
- **No State Management Library**: Uses only React's built-in `useState` and `useEffect` hooks.

---

## 4. 🧩 Component-by-Component Deep Dive

### 4.1 Navbar (`src/components/Navbar/`)

**File:** `navbar.js` (100 lines) | `navbar.css` (206 lines)

**What it does:**

- Fixed-top navigation bar using `react-bootstrap`'s `<Navbar>` component.
- **Scroll-Spy**: Uses `useEffect` + `window.addEventListener('scroll')` to detect which section is in view and highlights the active nav link.
- **Glassmorphism on Scroll**: When user scrolls past 50px, a CSS class `scrolled` is added, applying `backdrop-filter: blur(20px)` and a semi-transparent dark background.
- **7 Navigation Links**: Home, About, Skills, Projects, Certifications, Experience, Social — rendered via `.map()` over an array of objects.
- **Hire Me Button**: Opens Gmail compose with pre-filled subject and body.

**React Concepts Used:**

- `useState` for `activeSection` and `scrolled` state
- `useEffect` with scroll event listener and cleanup
- Dynamic `className` binding based on state
- Array `.map()` for rendering navigation items

**CSS Techniques:**

- `backdrop-filter: blur()` for glass effect
- `::before` pseudo-element for animated underline on active link
- `cubic-bezier(0.4, 0, 0.2, 1)` easing curves
- Custom gradient brand logo with `background-clip: text`
- Mobile responsive collapse with gradient background at `@media (max-width: 991px)`

---

### 4.2 Hero (`src/components/Hero/`)

**Files:** `hero.js` (134 lines) | `hero.css` (352 lines) | `Splinesceen.js` (10 lines)

**What it does:**

- Full-viewport landing section with two columns (Bootstrap grid).
- **Left column**: Typing animation using `react-type-animation` package.
  - First animation: Types "I am" then triggers the second animation via callback.
  - Second animation: Cycles through roles ("Warish", "Web Developer", "CSE Student", "Full Stack Learner", "AI & Cybersecurity Enthusiast", "Mohammad Warish Ansari") with a blinking cursor.
- **Right column**: Interactive **Spline 3D scene** loaded from `https://prod.spline.design/...`.
- Two CTA buttons: "Hire Me" (opens Gmail) and "See What I've Built" (scrolls to #projects).

**How TypeAnimation Works:**

```jsx
<TypeAnimation
  sequence={["Warish", 1500, "Web Developer", 1500, ...]}
  speed={30}
  deletionSpeed={70}
  repeat={50}
  cursor={cursorVisible}
/>
```

- `sequence` array alternates between text strings and pause durations (ms).
- `speed` controls typing speed, `deletionSpeed` controls deletion speed.
- `repeat={50}` cycles the animation 50 times.
- A custom `cursorVisible` state prevents cursor flicker during animation transition.

**How Spline 3D Works:**

```jsx
import Spline from "@splinetool/react-spline";
<Spline scene="https://prod.spline.design/9jQjS9lHCqJMjgSL/scene.splinecode" />;
```

- Embeds an interactive 3D graphic created in Spline tool.
- The scene is hosted on Spline's CDN and rendered via WebGL.
- Users can rotate/interact with the 3D model.

**CSS Techniques:**

- Radial gradient backgrounds with multiple color stops
- `min-height: 100vh` for full viewport
- `@keyframes shimmer-hero` for animated background shimmer
- `@keyframes fadeInUp` and `@keyframes fadeInRight` for entrance animations
- 4 breakpoints for responsive design (992px, 768px, 576px)

---

### 4.3 About (`src/components/About/`)

**Files:** `about.js` (127 lines) | `about.css` (578 lines) | `img/DP.gif`, `img/dp.jpeg`

**What it does:**

- Two-column layout: animated GIF profile photo (left) + bio text (right).
- **IntersectionObserver API**: Detects when section scrolls into view and applies `.animate` CSS class for slide-in animations.
- Bio text with gradient-highlighted name.
- Two CTA buttons: "View Resume" (Google Drive link) and "See What I've Built".
- Stats counters: 5+ Projects, 4+ Internships, 20+ Certifications.

**IntersectionObserver Pattern (used in 6 components):**

```javascript
useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      });
    },
    { threshold: 0.1 }, // Triggers when 10% of element is visible
  );
  document
    .querySelectorAll(".about-content, .about-photo-container")
    .forEach((el) => observer.observe(el));
  return () => observer.disconnect(); // Cleanup on unmount
}, []);
```

**CSS Techniques:**

- Floating animation on profile image: `@keyframes float` with `translateY`
- Decorative blurred circles using `filter: blur(40px)` for background glow effects
- Rotating dashed ring: `@keyframes rotate` with `border: 2px dashed`
- Tech dots with ripple effects: `@keyframes ripple`
- Slide-in transitions from left/right using `transform: translateX(±50px)`

---

### 4.4 Skills (`src/components/Skills/`)

**Files:** `skills.js` (196 lines) | `skills.css` (466 lines)

**What it does:**

- Displays **23 skills** organized into 5 categories: Languages, Frameworks, Backend & DB, Tools & VCS, AI & Cloud.
- **Category Filter Tabs**: Clicking a tab filters the skills shown using array `.filter()`.
- **Proficiency Progress Bars**: Each skill has a percentage (60%–95%) animated with `width` transition when section enters viewport.
- **Show More/Less**: Initially shows 8 skills; button expands to show all.
- Uses `react-icons` for technology-specific SVG icons (FaReact, SiMongodb, etc.)

**Skills Data Structure:**

```javascript
const skills = [
  {
    name: "HTML5",
    icon: <FaHtml5 />,
    level: 95,
    color: "#e34f26",
    category: "languages",
  },
  {
    name: "React",
    icon: <FaReact />,
    level: 85,
    color: "#61dafb",
    category: "frameworks",
  },
  // ... 23 total skills
];
```

**CSS Techniques:**

- Animated skill cards with `rotateX(10deg)` entrance and `rotateY(5deg)` hover
- Shimmer effect on progress bars using `::after` pseudo-element
- CSS custom property `--skill-color` passed from JS via `style` prop
- `backdrop-filter: blur(15px)` on skill cards
- 3D perspective hover: `translateY(-15px) scale(1.05) rotateY(5deg)`

---

### 4.5 Projects (`src/components/Projects/`)

**Files:** `projects.js` (346 lines) | `projects.css` (658 lines) | 8 cover images

**What it does:**

- Showcases **5 projects** with cover images, tech stacks, and descriptions.
- **Expandable Cards**: Click to expand/collapse with smooth `max-height` transition.
- **Category Tabs**: "All Projects", "Major Projects", "Minor Projects".
- **Featured Badge**: Major projects have a pulsing "Featured" badge with star icon.
- Each project has GitHub and Live Demo links.

**5 Projects Listed:**

1. **BlueBlog** — SEO-based blogging platform (Next.js, TypeScript, PostgreSQL, Prisma, Tailwind CSS)
2. **TravelEase** — Travel booking platform (Django, Python, Bootstrap)
3. **NexusShop** — E-commerce platform (MERN Stack, Tailwind CSS)
4. **She Can Intern** — Fundraising portal (MERN Stack, Tailwind CSS)
5. **MoviesVibe** — Movie discovery app (Django, React, Python)

**CSS Techniques:**

- `perspective: 1500px` on parent for 3D card effects
- Rotating glow background on major project cards
- Image zoom on hover: `transform: scale(1.1)` with `filter: brightness(1.1)`
- Gradient overlay on images: `linear-gradient(180deg, transparent, rgba(0,0,0,0.8))`
- Floating emoji animation on hover

---

### 4.6 Certifications (`src/components/Certifications/`)

**Files:** `certifications.js` (521 lines) | `certifications.css` (646 lines)

**What it does:**

- Displays **20+ certifications** from Oracle, HackerRank, Udemy, IBM, Infosys, etc.
- **4 Category Tabs**: Highlighted, Cloud & DevOps, Development, Foundations.
- **Thumbnail + Expand**: Each cert card has a clickable thumbnail image and expandable details.
- **Modal Viewer**: Clicking the thumbnail opens a full-screen overlay modal displaying the full certificate image.
- **Verify Link**: Each certification has a "Verify Credential" button linking to the issuer's verification page.

**Modal Implementation:**

```javascript
const openModal = (cert) => {
  setCurrentCert(cert);
  setModalOpen(true);
  document.body.style.overflow = "hidden"; // Prevents background scrolling
};
const closeModal = () => {
  setModalOpen(false);
  document.body.style.overflow = "auto";
};
```

- Modal rendered conditionally: `{modalOpen && currentCert && (<div className="cert-modal">...)}`
- Click on backdrop closes modal via `onClick={closeModal}`
- Inner content uses `e.stopPropagation()` to prevent backdrop click from firing

**CSS Techniques:**

- `z-index: 9999` for modal overlay
- `backdrop-filter: blur(10px)` on modal background
- Floating blob animation: `@keyframes float-blob` with `translate` and `scale`
- Pulsing featured badge: `@keyframes pulse-badge`

---

### 4.7 Experience (`src/components/Experience/`)

**Files:** `Experience.js` (391 lines) | `experience.css` (760 lines)

**What it does:**

- **Vertical Timeline Layout** showing 4 internship experiences.
- Central animated line with gradient glow.
- Timeline items alternate left/right based on `id % 2`.
- Each item has expandable details (responsibilities, skills, company link).
- **Certificate Preview**: Each experience has a certificate thumbnail that opens in a modal.

**4 Experiences Listed:**

1. **SDE Intern — Bluestock Fintech** (Dec 2025–Jan 2026)
2. **MERN Stack Intern — Soft Nexis Technology** (Jan 2025)
3. **Full Stack Web Dev Intern — CodeAlpha** (Jul–Aug 2025)
4. **Full Stack Web Dev Intern (Python) — Shashi Infotech** (Feb–Mar 2025)

**CSS Timeline Implementation:**

- Central line: `timeline::before` pseudo-element at `left: 50%` with gradient background
- Pulsing dots at connection points: `@keyframes dot-pulse`
- On mobile (`<768px`), timeline shifts to single-column left-aligned
- Separate modal system (`.cert-modal-exp`) with `@keyframes scaleIn` entrance animation

---

### 4.8 Social (`src/components/Social/`)

**Files:** `social.js` (188 lines) | `social.css` (306 lines)

**What it does:**

- **CSS Grid layout** (`grid-template-columns: repeat(auto-fit, minmax(180px, 1fr))`) displaying 13 social platform cards.
- Each card has unique brand color applied via CSS custom properties.
- Icons from `react-icons` (Font Awesome, Simple Icons).
- Arrow indicator appears on hover.

**13 Social Platforms:** LinkedIn, GitHub, X (Twitter), Gmail, Stack Overflow, LeetCode, GeeksforGeeks, HackerRank, Instagram, Facebook, YouTube, Discord, Linktree.

**CSS Techniques:**

- CSS Custom Properties passed via `style` prop: `--hover-bg`, `--icon-color`
- Ring pulse effect: `@keyframes ring-pulse`
- Icon scale + glow on hover: `filter: drop-shadow(0 0 20px currentColor)`
- Responsive grid: 4-col → 3-col → 2-col across breakpoints

---

### 4.9 Footer (`src/components/Footer/`)

**Files:** `footer.js` (173 lines) | `footer.css` (485 lines)

**What it does:**

- Three-column layout: Contact Info + Development Stats + Philosophy.
- Contact email and location with icons.
- Development Journey progress bars (Coding Hours: 5,000+, Projects: 5+, Technologies: 30+).
- Inspirational quote section.
- "Back to Top" button with smooth scroll.
- Copyright with year auto-calculated: `new Date().getFullYear()`.
- Credits: "Crafted with ❤️ using React, Bootstrap & Spline".

**CSS Techniques:**

- Animated gradient top border: `@keyframes gradient-move`
- Progress bars with shimmer effect
- Floating particles animation: `@keyframes float-up`
- Heartbeat animation on heart icon

---

## 5. 🎨 Design System & CSS Architecture

### Global Theme (defined in `src/index.css`)

```css
:root {
  /* Base Colors */
  --bg-color: #0a0a0a;
  --bg-secondary: #0d0d0d;
  --text-main: #ffffff;
  --text-secondary: #b3b3b3;

  /* Blue-Purple Palette */
  --primary-blue: #0072ff;
  --light-blue: #00c6ff;
  --primary-purple: #8a2be2;
  --light-purple: #bc13fe;
  --neon-cyan: #00f3ff;

  /* Gradients */
  --gradient-primary: linear-gradient(
    135deg,
    #00c6ff 0%,
    #0072ff 50%,
    #8a2be2 100%
  );
  --gradient-button: linear-gradient(
    135deg,
    #00c6ff 0%,
    #0072ff 40%,
    #8a2be2 100%
  );

  /* Glass Effects */
  --glass-bg: rgba(10, 10, 10, 0.85);
  --glass-border: rgba(138, 43, 226, 0.3);
}
```

### Global Animations Defined in `index.css`

| Animation       | Usage                                        |
| --------------- | -------------------------------------------- |
| `gradient-flow` | Button gradient shifts position continuously |
| `float`         | Profile image gentle up/down motion          |
| `pulse-glow`    | Neon glow intensity pulsing                  |
| `shimmer`       | Light streak across progress bars            |
| `rotate-slow`   | Background decoration rotation               |
| `fadeInUp`      | Element entrance from bottom                 |
| `title-glow`    | Section title glow pulsing                   |

### Button Design System

All CTA buttons share a global style defined in `index.css`:

- Gradient background with `background-size: 200% 200%` for animation
- `border-radius: 50px` (pill shape)
- `::before` pseudo-element for hover shine sweep effect
- Hover: `translateY(-5px) scale(1.02)` with enhanced box-shadow
- Active: `translateY(-2px) scale(0.98)` for press-down feel

### Component-Level CSS Pattern

Each component uses:

- **Section background**: Multi-layered radial gradients over dark base
- **`::before` pseudo-elements**: For animated background effects
- **Glassmorphism**: `backdrop-filter: blur(15-20px)` on cards
- **Hover transforms**: `translateY(-10px to -15px)` + `scale(1.02-1.05)`
- **Border glow**: `border: 2px solid rgba(138, 43, 226, 0.2)` → brighter on hover
- **Box shadows**: Multi-layered blue + purple glow shadows

### Responsive Breakpoints

| Breakpoint | Target                     |
| ---------- | -------------------------- |
| `992px`    | Tablets / small laptops    |
| `768px`    | Mobile landscape / tablets |
| `576px`    | Mobile portrait            |

---

## 6. 🔍 SEO & Performance Optimizations

### SEO (implemented in `public/index.html`)

- **Title tag**: `Warish | Portfolio`
- **Meta description**: Descriptive portfolio summary
- **Meta keywords**: Relevant search terms
- **Open Graph tags**: For Facebook/LinkedIn share previews
- **Twitter Card**: `summary_large_image` for X/Twitter
- **JSON-LD Structured Data**: `Person` schema with name, job title, social links
- **Google Search Console**: Verification meta tag included
- **Canonical URL**: `https://portfolio-warish.vercel.app/`
- **Sitemap**: `public/sitemap.xml` with monthly update frequency
- **Robots.txt**: Allows all crawlers

### Performance Techniques

- **Google Fonts Preconnect**: `rel="preconnect"` for faster font loading
- **Font**: Inter (weights 400, 600, 700) loaded via Google Fonts CDN
- **Smooth scrolling**: `html { scroll-behavior: smooth; scroll-padding-top: 80px; }`
- **Custom scrollbar**: Styled with gradient thumb
- **Image optimization**: Local cover images for projects, external CDN (postimg.cc) for certificates
- **`-webkit-font-smoothing: antialiased`**: Better text rendering
- **Build command**: `NODE_OPTIONS='--no-deprecation' react-scripts build` (suppresses deprecation warnings)

---

## 7. 📦 Deployment

- **Platform**: Vercel (serverless)
- **Build command**: `npm run build` → generates optimized production bundle via Webpack
- **URL**: `https://portfolio-warish.vercel.app/`
- **Auto-deploy**: Connected to GitHub repository — pushes to main branch trigger automatic builds

---

## 8. 🔑 Key React Concepts Demonstrated

| Concept                   | Where Used                                                                       |
| ------------------------- | -------------------------------------------------------------------------------- |
| **Functional Components** | All 9 components                                                                 |
| **useState Hook**         | Active section, expanded items, modal state, show more toggles, category filters |
| **useEffect Hook**        | Scroll listeners, IntersectionObserver setup/cleanup                             |
| **Conditional Rendering** | Modals (`{modalOpen && ...}`), expanded sections, featured badges                |
| **Array .map()**          | Rendering lists of skills, projects, certs, social links, nav items              |
| **Array .filter()**       | Category-based filtering                                                         |
| **Array .slice()**        | Show more/less pagination                                                        |
| **Spread operator**       | `[...projects].sort()` for immutable sorting                                     |
| **Event handling**        | Click handlers, `e.stopPropagation()` for modals                                 |
| **Template literals**     | Dynamic classNames, Gmail compose URLs                                           |
| **Cleanup functions**     | `return () => observer.disconnect()` in useEffect                                |
| **React.StrictMode**      | Wrapping `<App />` in index.js                                                   |
| **CSS Modules (manual)**  | Component-scoped CSS files imported per component                                |

---

## 9. ❓ Possible Interview Questions & Answers

### Q: What framework/tooling did you use?

**A:** React.js via Create React App (CRA). CRA provides Webpack for bundling, Babel for JSX transpilation, ESLint for linting, and a development server with hot reloading.

### Q: Did you use Tailwind CSS?

**A:** No, this portfolio uses **Bootstrap 5** for the grid system and utility classes, plus **custom vanilla CSS** for all animations, gradients, and visual effects. However, some of my other projects (NexusShop, BlueBlog) do use Tailwind.

### Q: How do animations work without a library like Framer Motion?

**A:** All animations are done with **pure CSS** — `@keyframes`, `transition`, `transform`, and `animation` properties. I use `IntersectionObserver` API to trigger CSS class additions when elements scroll into view, which activates the animations.

### Q: How does the scroll-spy navigation work?

**A:** In the Navbar component, a `useEffect` hook adds a scroll event listener. On each scroll, it loops through section IDs, checks their `offsetTop` against `window.scrollY + 200`, and sets the active section state. The corresponding nav link gets an `active` CSS class.

### Q: What is Spline and why did you use it?

**A:** Spline is a 3D design tool for the web. I used `@splinetool/react-spline` to embed an interactive 3D model in the Hero section. The 3D scene loads from Spline's CDN and renders via WebGL, adding a premium visual element.

### Q: How is the typing effect implemented?

**A:** Using the `react-type-animation` package. I pass a `sequence` array with alternating text and delay values. Two chained `<TypeAnimation>` components handle the intro ("I am") and the role cycling. A callback function triggers the second animation after the first completes.

### Q: How do you manage state?

**A:** Only React's built-in `useState` and `useEffect` hooks. No Redux, Context API, or state management library — the app is simple enough that local component state is sufficient.

### Q: How is the site responsive?

**A:** Three approaches: (1) Bootstrap's grid system (`Col lg={6} md={4} sm={6}`), (2) CSS media queries at 992px, 768px, and 576px breakpoints, (3) CSS Flexbox/Grid with `auto-fit` and `minmax()`.

### Q: What about SEO?

**A:** I implemented Open Graph tags, Twitter Card meta, JSON-LD structured data (Person schema), canonical URL, sitemap.xml, robots.txt, and Google Search Console verification — all in `public/index.html`.

### Q: How are certificate images handled?

**A:** Certificate thumbnails and full images are hosted on **PostImg CDN** (free image hosting). When a user clicks a thumbnail, a custom modal opens showing the full-resolution image with a "Verify Credential" link.

### Q: How do you prevent background scrolling when modal is open?

**A:** Setting `document.body.style.overflow = "hidden"` when opening and resetting to `"auto"` when closing the modal.

### Q: How is the glassmorphism effect achieved?

**A:** Using `backdrop-filter: blur(20px)` with semi-transparent backgrounds (e.g., `rgba(10, 10, 10, 0.95)`) and subtle border colors.

### Q: What is the gradient text effect?

**A:** Using CSS `background-clip: text` with `-webkit-text-fill-color: transparent`, which clips a gradient background to the text shape, creating the colorful text effect.

### Q: How do progress bars animate?

**A:** The `width` is set to `0%` initially and changes to the actual percentage (e.g., `85%`) when `inView` is true (detected by IntersectionObserver). The `transition: width 1.5s cubic-bezier(...)` creates the smooth animation.

### Q: What is the CSS custom property `--skill-color`?

**A:** Each skill card receives its brand color via the `style` prop: `style={{ "--skill-color": skill.color }}`. The CSS uses `color: var(--skill-color)` to apply it, enabling dynamic per-component theming from JavaScript.

---

## 10. 📊 Lines of Code Summary

| File Type                | Files  | Approx. Lines |
| ------------------------ | ------ | ------------- |
| JavaScript (Components)  | 10     | ~2,200        |
| CSS (Styles)             | 10     | ~4,600        |
| HTML                     | 1      | 86            |
| Config (JSON, XML, etc.) | 4      | ~100          |
| **Total**                | **25** | **~7,000**    |

---

## 11. 📝 npm Scripts

```bash
npm start     # Starts dev server on localhost:3000
npm run build # Creates optimized production build in /build
npm test      # Runs test suite (Jest + React Testing Library)
npm run eject # Ejects CRA config (not recommended, irreversible)
```

**Build Note:** The build command includes `NODE_OPTIONS='--no-deprecation'` to suppress Node.js deprecation warnings from older CRA dependencies.

---

## 12. 🌐 External Services Used

| Service                   | Purpose                                        |
| ------------------------- | ---------------------------------------------- |
| **Vercel**                | Hosting & deployment (auto-deploy from GitHub) |
| **Spline CDN**            | 3D scene hosting and WebGL rendering           |
| **PostImg**               | Certificate image hosting (CDN)                |
| **Google Fonts**          | Inter font family                              |
| **Google Accounts**       | Gmail compose redirection for hire button      |
| **Google Drive**          | Resume PDF hosting                             |
| **Google Search Console** | Website indexing verification                  |

---

_This document covers every aspect of the portfolio project to help you answer any interview question about its architecture, code, styling, packages, animations, deployment, and design decisions._
