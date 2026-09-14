import type { Skill, SkillCategoryItem } from "@/types";

export type { SkillCategory } from "@/types";

export const skillCategories: SkillCategoryItem[] = [
  { key: "all", label: "All Skills" },
  { key: "languages", label: "Languages" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend & DB" },
  { key: "ai-llm", label: "AI & LLM" },
  { key: "tools", label: "Tools & Cloud" },
];

export const skills: Skill[] = [
  // ─── Languages ─────────────────────────────────────────────────────────────
  { name: "TypeScript", icon: "SiTypescript", level: 88, color: "#3178c6", category: "languages" },
  { name: "JavaScript", icon: "FaJs", level: 90, color: "#f7df1e", category: "languages" },
  { name: "Python", icon: "FaPython", level: 78, color: "#3776ab", category: "languages" },
  { name: "Java", icon: "FaJava", level: 70, color: "#007396", category: "languages" },
  { name: "HTML5", icon: "FaHtml5", level: 95, color: "#e34f26", category: "languages" },
  { name: "CSS3", icon: "FaCss3Alt", level: 90, color: "#264de4", category: "languages" },

  // ─── Frontend ──────────────────────────────────────────────────────────────
  { name: "React", icon: "FaReact", level: 90, color: "#61dafb", category: "frontend" },
  { name: "Next.js", icon: "SiNextdotjs", level: 88, color: "#ffffff", category: "frontend" },
  { name: "Tailwind CSS", icon: "SiTailwindcss", level: 85, color: "#38b2ac", category: "frontend" },
  { name: "Framer Motion", icon: "SiFramer", level: 70, color: "#FF0055", category: "frontend" },

  // ─── Backend & DB ──────────────────────────────────────────────────────────
  { name: "Node.js", icon: "FaNodeJs", level: 82, color: "#68a063", category: "backend" },
  { name: "Express.js", icon: "SiExpress", level: 80, color: "#ffffff", category: "backend" },
  { name: "FastAPI", icon: "SiFastapi", level: 65, color: "#009688", category: "backend" },
  { name: "PostgreSQL", icon: "SiPostgresql", level: 82, color: "#336791", category: "backend" },
  { name: "MongoDB", icon: "SiMongodb", level: 80, color: "#47a248", category: "backend" },
  { name: "MySQL", icon: "SiMysql", level: 70, color: "#00758f", category: "backend" },
  { name: "Prisma ORM", icon: "SiPrisma", level: 82, color: "#2D3748", category: "backend" },
  { name: "Socket.IO", icon: "SiSocketdotio", level: 75, color: "#010101", category: "backend" },
  { name: "REST APIs", icon: "SiOpenai", level: 88, color: "#6c6c6c", category: "backend" },

  // ─── AI & LLM ──────────────────────────────────────────────────────────────
  { name: "LangChain", icon: "SiLangchain", level: 72, color: "#1c7a3d", category: "ai-llm" },
  { name: "LangGraph", icon: "SiLangchain", level: 70, color: "#1c7a3d", category: "ai-llm" },
  { name: "LLMs / Groq", icon: "SiOpenai", level: 75, color: "#ff6f00", category: "ai-llm" },
  { name: "Prompt Engineering", icon: "SiOpenai", level: 78, color: "#8052ff", category: "ai-llm" },
  { name: "Agentic AI", icon: "SiOpenai", level: 70, color: "#8052ff", category: "ai-llm" },
  { name: "RAG Systems", icon: "SiOpenai", level: 65, color: "#6c6c6c", category: "ai-llm" },

  // ─── Tools & Cloud ─────────────────────────────────────────────────────────
  { name: "Git", icon: "FaGitAlt", level: 88, color: "#f14e32", category: "tools" },
  { name: "GitHub", icon: "FaGithub", level: 90, color: "#ffffff", category: "tools" },
  { name: "Docker", icon: "SiDocker", level: 62, color: "#2496ed", category: "tools" },
  { name: "Vercel", icon: "SiVercel", level: 82, color: "#ffffff", category: "tools" },
  { name: "AWS", icon: "FaAws", level: 55, color: "#ff9900", category: "tools" },
  { name: "Postman", icon: "SiPostman", level: 85, color: "#ff6c37", category: "tools" },
  { name: "Cloudinary", icon: "SiCloudinary", level: 78, color: "#3448C5", category: "tools" },
  { name: "GitHub Actions", icon: "SiGithubactions", level: 62, color: "#2088FF", category: "tools" },
  { name: "Clerk", icon: "SiClerk", level: 75, color: "#6C47FF", category: "tools" },
];
