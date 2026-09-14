<p align="center">
  <img src="./src/assets/DP.gif" alt="Mohammad Warish Ansari" width="120" style="border-radius: 50%;" />
</p>

<h1 align="center">Mohammad Warish Ansari — Portfolio</h1>

<p align="center">
  <strong>Full Stack Developer · Applied AI Engineer · CSE Student</strong><br/>
  Ranchi, Jharkhand, India
</p>

<p align="center">
  <a href="https://portfolio.warishlabs.in/" target="_blank">🌐 Live Portfolio</a> ·
  <a href="https://github.com/mdwarishansari" target="_blank">GitHub</a> ·
  <a href="https://www.linkedin.com/in/md-warish-ansari/" target="_blank">LinkedIn</a>
</p>

---

## Overview

Personal developer portfolio for **MD Warish Ansari** — a B.Tech Computer Science student building production-grade web applications and applied AI systems.

**Technical direction:**
- Full-stack web engineering (Next.js · TypeScript · PostgreSQL · Node.js)
- Applied AI / LLM / Agentic AI (LangGraph.js · LangChain · Groq · Gemini)
- Python / FastAPI backend systems
- Real-time systems · Multi-tenant SaaS · Authentication & authorization

---

## ✨ Portfolio Features

- 🎪 **Interactive 3D hero scene** built with React Three Fiber + Drei
- 🎬 **Framer Motion animations** on every section, card, and transition
- 🌌 **Canvas particle background** with mouse repulsion
- 📱 **Fully responsive** layout (mobile-first)
- 🔍 **Production SEO** — JSON-LD structured data, Open Graph, Twitter Cards, sitemap
- ♿ **Accessible** — ARIA labels, focus-visible styles, keyboard navigation
- ⚡ **Performance-optimized** — code splitting, lazy loading, preloaded fonts

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 + TypeScript + Vite |
| Styling | Tailwind CSS v4 + tw-animate-css |
| Animations | Framer Motion |
| 3D Scene | Three.js + React Three Fiber + Drei |
| Smooth Scroll | Lenis |
| Icons | React Icons (FA + SI) + Lucide React |
| Deployment | Vercel |

---

## 🚀 Project Showcase

### 🤖 ForgeFlow AI *(Flagship — Applied AI)*
**Autonomous Agentic AI Platform for Software Architecture & Implementation Blueprints**

- Transforms software concepts into persistent, structured engineering blueprints
- LangGraph.js multi-agent orchestration with human-in-the-loop proposal workflows
- Groq (Llama 3.3 70B) primary reasoning · Google Gemini fallback · Tavily research
- PostgreSQL + Prisma 6 + Supabase · Clerk auth · Next.js 15 Server Actions
- Accept/Reject workflow with audit-event logging and project-state mutation control

🔗 Live: https://forgeflow.warishlabs.in  
🔗 GitHub: https://github.com/mdwarishansari/ForgeFlow-AI

---

### 🎪 Festoryx *(Production SaaS)*
**Multi-Tenant Event Operating System & Real-Time Quiz Platform**

- Multi-tenant architecture with real-time Quiz Arena (Socket.IO)
- Live leaderboards, buzzer rounds, and auditorium screens
- 55+ routes, 22+ server actions, Clerk auth, Cloudinary

🔗 Live: https://festoryx.vercel.app  
🔗 GitHub: https://github.com/mdwarishansari/Festoryx

---

### 📝 BlueBlog *(Production)*
**SEO-First Role-Based Blogging Platform**

- Admin CMS with ADMIN | EDITOR | WRITER role system
- JWT auth with refresh tokens · Neon PostgreSQL + Prisma
- Lighthouse scores ~100 across all public pages

🔗 Live: https://blueblog-warish.vercel.app  
🔗 GitHub: https://github.com/mdwarishansari/Blueblog

---

### 🛒 CartNest *(Production)*
**Multi-Vendor E-Commerce Marketplace**

- Customer, Seller, Verifier, Admin dashboards
- Firebase auth · Razorpay payments · Cloudinary media

🔗 Live: https://cartnest-warish.vercel.app  
🔗 GitHub: https://github.com/mdwarishansari/CartNest

---

## 📁 Project Structure

```
Portfolio/
├── public/
│   ├── logo.gif                 # Site favicon & OG image
│   ├── project-previews/        # WebP preview images (generated via npm run previews)
│   ├── robots.txt
│   ├── sitemap.xml
│   └── manifest.json            # PWA manifest
├── src/
│   ├── assets/                  # Profile images, certificate assets
│   ├── components/portfolio/
│   │   ├── About.tsx
│   │   ├── Background.tsx       # Canvas particle animation
│   │   ├── Certifications.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── HeroScene.tsx        # Three.js 3D scene (R3F)
│   │   ├── Navbar.tsx           # Fixed nav with scroll-spy
│   │   ├── Projects.tsx         # Project cards with Show More
│   │   ├── Skills.tsx           # Filterable skill grid
│   │   ├── SmoothScroll.tsx     # Lenis wrapper
│   │   ├── Social.tsx
│   │   └── primitives.tsx       # Section, Eyebrow, Chip, Reveal
│   ├── data/                    # Pure TypeScript data (no JSX)
│   │   ├── certificationAssets.ts
│   │   ├── certifications.ts
│   │   ├── experience.ts
│   │   ├── personal.ts
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   └── socials.ts
│   ├── hooks/
│   │   └── use-mobile.tsx
│   ├── lib/
│   │   └── utils.ts             # cn() helper
│   ├── types/
│   │   └── index.ts             # All TypeScript interfaces
│   ├── utils/
│   │   └── icon-map.tsx         # String → ReactNode icon resolver
│   ├── App.tsx
│   ├── main.tsx
│   └── styles.css               # Dala design system (Tailwind v4)
├── scripts/
│   └── generate-project-previews.ts  # Playwright-based preview screenshotter
├── index.html                   # Full SEO meta tags + JSON-LD
├── package.json
├── vite.config.ts
└── tsconfig.json
```

---

## 🚀 Getting Started

**Prerequisites:** Node.js 18+

```bash
# Clone
git clone https://github.com/mdwarishansari/Portfolio.git
cd Portfolio

# Install
npm install

# Develop
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint
npm run lint

# Generate project preview screenshots (requires Playwright)
npm run previews
```

---

## 🌍 Deployment

### Vercel (Recommended)
1. Import the repository on [vercel.com](https://vercel.com)
2. Framework: **Vite**
3. Build Command: `npm run build`
4. Output Directory: `dist`

---

## 🎨 Customization

### Update personal data
Edit the files in `src/data/`:

| File | Contains |
|------|----------|
| `personal.ts` | Name, email, bio, hero text, about stats, footer |
| `projects.ts` | Project cards (title, description, links, preview slug, order) |
| `skills.ts` | Skills with levels, colors, categories |
| `certifications.ts` | All certification cards |
| `experience.ts` | Work experience timeline |
| `socials.ts` | Social media links |

### Change colors
Edit `src/styles.css` under `@theme inline`:
```css
--color-plum: #8052ff;   /* Primary brand color */
--color-void: #000000;   /* Background */
--color-bone: #ffffff;   /* Primary text */
--color-amber: #ffb829;  /* Accent */
```

### Add a project
1. Add an entry to `src/data/projects.ts` with a unique `slug` and `order`
2. Place a preview image at `public/project-previews/<slug>.webp`
   — Or run `npm run previews` to auto-capture from the live URL

---

## 🔍 SEO

- **JSON-LD** `Person` schema structured data
- **Open Graph** meta tags for social sharing
- **Twitter Card** meta tags
- **Canonical URL** and sitemap.xml
- **Semantic HTML5** with single `<h1>` per page
- **Inter font** preloaded for fastest text rendering

---

## 🔒 Three.js Scene Architecture

| Component | Description |
|-----------|-------------|
| `HeroScene` | Canvas setup, camera, lights |
| `CodeWindow` | Holographic editor window with typed code |
| `TechNode` | Orbiting tech geometry nodes (hover to scale) |
| `Connections` | Dashed lines connecting nodes to centre |
| `ParticleCloud` | 400 particles in a sphere shell |
| `Rig` | Mouse-pointer tilt wrapper for the whole scene |

---

## 📄 License

MIT © Mohammad Warish Ansari
