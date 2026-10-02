# Mohammad Warish Ansari — Portfolio & Gemini AI Assistant

A modern, high-performance, Dala-inspired personal portfolio web application for **Mohammad Warish Ansari** (Full-Stack & AI Engineer). Built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion**, and integrated with an interactive **AI Chatbot** powered by **Google Gemini API** (`@google/genai`).

---

## 🌟 Architecture & Data Flow Diagram

```mermaid
graph TD
    subgraph Client ["Client Layer (Browser)"]
        UI["Next.js App Router Page (page.tsx)"]
        Navbar["Navbar Component"]
        Hero["Hero & 3D Canvas Scene"]
        Sections["Portfolio Sections (About, Skills, Experience, Projects, Certifications)"]
        Widget["AI Chatbot Widget (ChatbotWidget.tsx)"]
        Markdown["React Markdown & Action Buttons"]
    end

    subgraph Server ["Serverless Next.js API Route (/api/chatbot)"]
        Route["POST Route Handler (route.ts)"]
        RateLimiter["In-Memory Rate Limiter (20 req/min/IP)"]
        Sanitizer["Input Sanitization & Payload Validator"]
        GeminiService["Gemini Service Handler (gemini.ts)"]
        ContextTrimmer["Context Trimmer (Last 10 Messages)"]
        KnowledgeBase["Portfolio Knowledge Base (portfolioData.ts)"]
    end

    subgraph External ["External AI Services"]
        GeminiAPI["Google Gemini 2.5 Flash API (@google/genai)"]
    end

    UI --> Navbar
    UI --> Hero
    UI --> Sections
    UI --> Widget
    Widget -->|Fetch POST /api/chatbot| Route
    Route --> RateLimiter
    RateLimiter -->|Passed| Sanitizer
    Sanitizer --> GeminiService
    GeminiService --> ContextTrimmer
    ContextTrimmer --> KnowledgeBase
    GeminiService -->|System Prompt & Context| GeminiAPI
    GeminiAPI -->|Generated Response| GeminiService
    GeminiService -->|JSON Reply| Widget
    Widget -->|Render Rich Markdown & Buttons| Markdown
```

---

## 🚀 Key Features

- **Dala Design System**: "Particle cosmos on a void" aesthetics with pure black background (`#000000`), violet authority color (`#8052ff`), glowing typography, and subtle micro-animations.
- **Interactive AI Chatbot**:
  - Powered by **Google Gemini 2.5 Flash API** (`@google/genai` v2.26.0).
  - Contextual awareness built from a structured knowledge base covering Mohammad Warish Ansari's bio, skills, experience, projects, and credentials.
  - Rich markdown support (**bold**, *italics*, inline code, code block copy button, blockquotes, ordered/unordered lists).
  - **Interactive Action Buttons**: Auto-renders markdown links (e.g. `[Explore Projects](#projects)`) as interactive buttons that smoothly scroll to portfolio sections or open external credentials.
  - Serverless API route with IP-based rate limiting (20 req/min) and robust error fallbacks.
- **Full-Stack & Applied AI Showcase**:
  - Filterable skill matrix with animated proficiency bars.
  - Interactive project cards with 3D tilt effects, tech tag chips, and repository links.
  - Verified credentials modal for Oracle Cloud Infrastructure, Agentic AI, DevOps, Microsoft, Docker, and GitHub certifications.
- **Performance & SEO**:
  - Next.js 16 Turbopack build system with static page pre-rendering.
  - Comprehensive OpenGraph and Twitter card metadata.

---

## 🛠️ Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Framework & Language** | Next.js 16 (App Router), React 19, TypeScript 5 |
| **AI Integration** | Google Gemini 2.5 Flash API (`@google/genai`), RAG Prompt Engineering |
| **Styling & Design System** | Tailwind CSS v4, Custom CSS Tokens, Lucide Icons, React Icons |
| **Animations & Smooth Scroll** | Framer Motion, Lenis Smooth Scroll, Three.js / React Three Fiber |
| **Markdown & Rich UI** | React Markdown, Remark GFM, Prism Code Blocks |
| **Deployment & Hosting** | Vercel, Node.js Serverless Functions |

---

## 🔧 Environment Variables & Vercel Setup

To activate live AI responses via Google Gemini, set the environment variable in your `.env.local` file or in **Vercel Project Settings**:

```env
# Google Gemini API Key (Serverless Route Handler)
GEMINI_API_KEY=your_google_gemini_api_key_here

# Fallback (Supported automatically)
NEXT_PUBLIC_GEMINI_API_KEY=your_google_gemini_api_key_here
```

> **Note**: If `GEMINI_API_KEY` is omitted, the chatbot gracefully switches to a helpful interactive Demo Mode guiding visitors through portfolio sections.

---

## 🏃 Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/mdwarishansari/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Production Build & Typecheck**:
   ```bash
   npm run build
   ```

---

## 📜 Repository Scripts

- `npm run dev` — Starts Next.js development server with Turbopack.
- `npm run build` — Compiles optimized production build.
- `npm run start` — Runs Next.js production server.
- `npm run typecheck` — Executes TypeScript type checking.
- `npm run lint` — Runs ESLint code quality checks.

---

## 👤 Author & Contact

**Mohammad Warish Ansari** — Full-Stack & AI Engineer
- **Email**: [warishansari.official@gmail.com](mailto:warishansari.official@gmail.com)
- **LinkedIn**: [linkedin.com/in/mdwarishansari](https://linkedin.com/in/mdwarishansari)
- **GitHub**: [github.com/mdwarishansari](https://github.com/mdwarishansari)
