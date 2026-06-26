export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  skills: string[];
  image: string;
  projectLink: string;
  githubLink: string;
  date: string;
  category: "major" | "minor";
  emoji: string;
  featured: boolean;
}

const cover = (file: string) =>
  `https://raw.githubusercontent.com/mdwarishansari/Portfolio/main/src/components/Projects/cover_img/${file}`;

export const projectCategories: { key: "all" | "major" | "minor"; label: string }[] = [
  { key: "all", label: "All Projects" },
  { key: "major", label: "Major Projects" },
  { key: "minor", label: "Minor Projects" },
];

export const projects: Project[] = [
  {
    id: 3,
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
    image: cover("blueblog.png"),
    projectLink: "https://blueblog-v1.vercel.app/",
    githubLink: "https://github.com/mdwarishansari/Blueblog",
    date: "January 2026",
    category: "major",
    emoji: "🚀",
    featured: true,
  },
  {
    id: 2,
    title: "CartNest",
    subtitle: "Multi-Vendor E-Commerce Marketplace",
    description:
      "Built a scalable multi-vendor marketplace with role-based dashboards, Razorpay payment integration, and real-time order management.",
    longDescription:
      "CartNest is a full-stack multi-vendor e-commerce marketplace built using MERN stack with advanced production-level features. It supports multiple user roles (Customer, Seller, Admin, Verifier), secure authentication via Firebase + JWT, Razorpay payment integration, Cloudinary image uploads, and Redis-based stock locking. The platform includes real-time order management, seller dashboards, product verification workflows, and admin-level control over the entire system. Designed with scalability, security, and real-world business logic in mind.",
    skills: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Tailwind CSS",
      "Firebase Auth",
      "Razorpay",
      "Redis",
      "Cloudinary",
      "JWT",
    ],
    image: cover("cartnest.png"),
    projectLink: "https://cartnest-shop.vercel.app/",
    githubLink: "https://github.com/mdwarishansari/CartNest",
    date: "March 2026",
    category: "major",
    emoji: "🛒",
    featured: true,
  },
  {
    id: 1,
    title: "MoviesVibe",
    subtitle: "Movie Discovery App",
    description:
      "Interactive React web app with OMDB API integration for movie data display.",
    longDescription:
      "Deepened understanding of React fundamentals: state management, async API calls, component rendering, and responsive design principles.",
    skills: ["Django", "React", "Python", "API Integration"],
    image: cover("moviesvibe.png"),
    projectLink: "https://moviesvibe-lt7u.onrender.com/",
    githubLink: "https://github.com/mdwarishansari/MoviesVibe",
    date: "February 2025",
    category: "major",
    emoji: "🎬",
    featured: true,
  },
];
