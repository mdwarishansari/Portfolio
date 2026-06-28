<p align="center">
  <img src="./src/assets/DP.gif" alt="Mohammad Warish Ansari" width="120" style="border-radius: 50%;" />
</p>

<h1 align="center">Mohammad Warish Ansari — Portfolio</h1>

<p align="center">
  <strong>MERN Stack Developer · Full Stack Developer · CSE Student</strong><br/>
  Ranchi, Jharkhand, India
</p>

<p align="center">
  <a href="https://portfolio.warishlabs.in/" target="_blank">🌐 Live Portfolio</a> ·
  <a href="https://github.com/mdwarishansari" target="_blank">GitHub</a> ·
  <a href="https://www.linkedin.com/in/md-warish-ansari/" target="_blank">LinkedIn</a>
</p>

---

## ✨ About

A production-ready personal portfolio built with **React 19 + TypeScript + Vite**, featuring:

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
| Deployment | Vercel / Render |

---

## 📁 Project Structure

```
Portfolio/
├── public/
│   ├── logo.gif          # Site favicon & OG image
│   ├── dp.png            # Profile photo
│   ├── robots.txt
│   ├── sitemap.xml
│   └── manifest.json     # PWA manifest
├── src/
│   ├── assets/           # Profile images
│   ├── components/portfolio/
│   │   ├── About.tsx
│   │   ├── Background.tsx    # Canvas particle animation
│   │   ├── Certifications.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── HeroScene.tsx     # Three.js 3D scene (R3F)
│   │   ├── Navbar.tsx        # Fixed nav with scroll-spy
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── SmoothScroll.tsx  # Lenis wrapper
│   │   ├── Social.tsx
│   │   └── primitives.tsx    # Section, Eyebrow, Chip, Reveal
│   ├── data/             # Pure TypeScript data (no JSX)
│   │   ├── certifications.ts
│   │   ├── experience.ts
│   │   ├── personal.ts
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   └── socials.ts
│   ├── hooks/
│   │   └── use-mobile.tsx
│   ├── lib/
│   │   └── utils.ts          # cn() helper
│   ├── types/
│   │   └── index.ts          # All TypeScript interfaces
│   ├── utils/
│   │   └── icon-map.tsx      # String → ReactNode icon resolver
│   ├── App.tsx
│   ├── main.tsx
│   └── styles.css            # Dala design system (Tailwind v4)
├── index.html            # Full SEO meta tags + JSON-LD
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
```

---

## 🌍 Deployment

### Vercel (Recommended)
1. Import the repository on [vercel.com](https://vercel.com)
2. Framework: **Vite**
3. Build Command: `npm run build`
4. Output Directory: `dist`

### Render
1. Create a new Static Site
2. Build Command: `npm install && npm run build`
3. Publish Directory: `dist`

---

## 🎨 Customization

### Update your personal data
Edit the files in `src/data/`:

| File | Contains |
|------|----------|
| `personal.ts` | Name, email, bio, hero text, about stats, footer |
| `projects.ts` | Project cards (title, description, links, image) |
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

### Update 3D scene
Edit `src/components/portfolio/HeroScene.tsx` to change:
- Geometry shapes and positions of tech nodes
- Particle cloud density
- Color palette

---

## 🔍 SEO

This portfolio implements:
- **JSON-LD** `Person` schema structured data
- **Open Graph** meta tags for social sharing
- **Twitter Card** meta tags
- **Canonical URL**
- **Google Search Console** verification token
- **sitemap.xml** and **robots.txt**
- **Semantic HTML5** with single `<h1>` per page
- **Inter font** preloaded for fastest text rendering

---

## 🔒 Three.js Scene Architecture

The hero scene uses **React Three Fiber** and consists of:

| Component | Description |
|-----------|-------------|
| `HeroScene` | Canvas setup, camera, lights |
| `CodeWindow` | Holographic editor window with code lines |
| `Cursor` | Blinking cursor animation |
| `TechNode` | Orbiting tech geometry nodes (hover to scale) |
| `Connections` | Dashed lines connecting nodes to centre |
| `ParticleCloud` | 400 particles in a sphere shell |
| `Rig` | Mouse-pointer tilt wrapper for the whole scene |

---

## 📄 License

MIT © Mohammad Warish Ansari
