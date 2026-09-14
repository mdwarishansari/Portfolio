import type { Project } from "@/types";

export type { Project } from "@/types";

const cover = (file: string) =>
  `https://raw.githubusercontent.com/mdwarishansari/Portfolio/main/src/components/Projects/cover_img/${file}`;

export const projects: Project[] = [
  // ─── ForgeFlow AI ──────────────────────────────────────────────────────────
  {
    id: 5,
    slug: "forgeflow-ai",
    liveUrl: "https://forgeflow.warishlabs.in",
    title: "ForgeFlow AI",
    subtitle: "Autonomous Agentic AI Platform for Software Architecture & Implementation Blueprints",
    description:
      "Agentic AI platform that transforms software concepts into persistent, structured engineering blueprints — powered by LangGraph.js orchestration, LLM reasoning, and human-in-the-loop proposal workflows.",
    longDescription:
      "ForgeFlow AI is an autonomous agentic platform that turns high-level software concepts into persistent, structured engineering blueprints. It combines LangGraph.js multi-agent orchestration, Groq (Llama 3.3 70B) as the primary reasoning model with Google Gemini as fallback, and Tavily for external web research. Each project maintains relational state across requirements, technology stacks, data models, Architecture Decision Records (ADRs), and sequential delivery roadmaps. The Agent Copilot generates structured Proposal Cards that must be explicitly accepted or rejected by the user before any project-state mutation occurs — enforcing a human-in-the-loop architecture throughout. Every state change is captured through audit-event logging for full traceability. Built with Next.js 15 Server Actions, Clerk authentication, PostgreSQL + Prisma 6 on Supabase, Upstash Redis for rate-limiting, Admin Broadcast Studio with Resend email delivery, and a watchlist/telemetry system for operational visibility.",
    skills: [
      "Next.js 15",
      "React 19",
      "TypeScript 5",
      "LangGraph.js",
      "Groq / Llama 3.3 70B",
      "Google Gemini",
      "Tavily Research",
      "PostgreSQL",
      "Supabase",
      "Prisma 6",
      "Clerk",
      "Upstash Redis",
      "Resend",
      "Tailwind CSS",
    ],
    image: cover("ForgeFlowAI.png"),
    projectLink: "https://forgeflow.warishlabs.in",
    githubLink: "https://github.com/mdwarishansari/ForgeFlow-AI",
    date: "September 2026",
    emoji: "🤖",
    featured: true,
    order: 1,
  },

  // ─── Festoryx ──────────────────────────────────────────────────────────────
  {
    id: 4,
    slug: "festoryx",
    liveUrl: "https://festoryx.vercel.app/",
    title: "Festoryx",
    subtitle: "Multi-Tenant Event Operating System & Real-Time Quiz Platform",
    description:
      "Enterprise-ready event management SaaS featuring multi-tenant architecture, real-time competitions, automated workflows, and role-based access control.",
    longDescription:
      "Festoryx is a production-ready Event Operating System and Competition SaaS built with Next.js 16, TypeScript, PostgreSQL, Prisma, Clerk, Socket.IO, and Cloudinary. The platform enables organizations to manage events, registrations, payments, participants, and competition workflows through dedicated dashboards. It includes a real-time Quiz Arena with buzzer rounds, live leaderboards, auditorium screens, session-based competition management, automated email notifications, dynamic registration forms, manual payment verification, and strict multi-tenant database isolation. The architecture supports scalable event operations through 55+ routes, 22+ server actions, and a dedicated Socket.IO relay server.",
    skills: [
      "Next.js 16",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
      "Socket.IO",
      "Clerk Authentication",
      "Tailwind CSS",
      "Cloudinary",
      "Nodemailer",
      "RBAC",
      "Multi-Tenant Architecture",
      "Real-Time Systems",
    ],
    image: cover("Festoryx.png"),
    projectLink: "https://festoryx.vercel.app/",
    githubLink: "https://github.com/mdwarishansari/Festoryx",
    date: "June 2026",
    emoji: "🎪",
    featured: true,
    order: 2,
  },

  // ─── BlueBlog ──────────────────────────────────────────────────────────────
  {
    id: 3,
    slug: "blueblog",
    liveUrl: "https://blueblog-warish.vercel.app/",
    title: "BlueBlog",
    subtitle: "Full-Scale SEO-Based Role-Based Blogging Platform",
    description:
      "Production-ready SEO-first blogging platform with full CMS, role-based access, PostgreSQL, Prisma, JWT auth, Cloudinary, and Vercel deployment.",
    longDescription:
      "BlueBlog is a full-stack production blogging system built using Next.js App Router and TypeScript. It includes a complete public SEO-optimized blog and a secure admin CMS with role-based access control (ADMIN | EDITOR | WRITER). Features include draft/publish workflow, post verification system, category & media management, site settings control, JWT authentication with refresh tokens, Cloudinary image optimization, Neon PostgreSQL database with Prisma ORM, guarded database seeding, migration-based schema management, skeleton loading for performance, Open Graph + JSON-LD structured data, and Lighthouse scores close to 100 across all public pages. Deployed serverlessly on Vercel using automated Prisma migrations.",
    skills: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "PostgreSQL (Neon)",
      "Prisma ORM",
      "Tailwind CSS",
      "JWT Authentication",
      "Cloudinary",
      "SEO Optimization",
      "Role-Based Access Control",
      "Tiptap Editor",
      "Vercel Deployment",
    ],
    image: cover("Blueblog.png"),
    projectLink: "https://blueblog-warish.vercel.app/",
    githubLink: "https://github.com/mdwarishansari/Blueblog",
    date: "January 2026",
    emoji: "📝",
    featured: true,
    order: 3,
  },

  // ─── CartNest ──────────────────────────────────────────────────────────────
  {
    id: 2,
    slug: "cartnest",
    // Fixed: was "cartnest-wari.vercel.app" (incomplete domain)
    liveUrl: "https://cartnest-warish.vercel.app/",
    title: "CartNest",
    subtitle: "Multi-Vendor E-Commerce Marketplace",
    description:
      "Full-stack marketplace with role-based dashboards, Firebase authentication, Razorpay payments, Cloudinary media handling, and scalable business workflows.",
    longDescription:
      "CartNest is a full-stack multi-vendor e-commerce marketplace built using React, Node.js, Express.js, MongoDB, Firebase Authentication, Razorpay, and Cloudinary. The platform supports Customer, Seller, Verifier, and Admin roles with dedicated dashboards and access controls. Features include product management, catalog moderation, inventory tracking, order lifecycle management, secure payment verification, seller analytics, commission handling, and customer support workflows. Built using a decoupled architecture focused on scalability, security, and production deployment.",
    skills: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Firebase Authentication",
      "Razorpay",
      "Cloudinary",
      "Tailwind CSS",
      "JWT",
      "REST APIs",
      "Role-Based Access Control",
      "Mongoose",
    ],
    image: cover("Cartnest.png"),
    projectLink: "https://cartnest-warish.vercel.app/",
    githubLink: "https://github.com/mdwarishansari/CartNest",
    date: "August 2025",
    emoji: "🛒",
    featured: true,
    order: 4,
  },
];
