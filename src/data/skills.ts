import type { Skill, SkillCategoryItem } from "@/types";

export type { SkillCategory } from "@/types";

export const skillCategories: SkillCategoryItem[] = [
  { key: "all", label: "All Skills" },
  { key: "languages", label: "Languages" },
  { key: "frameworks", label: "Frameworks" },
  { key: "backend", label: "Backend & DB" },
  { key: "tools", label: "Tools & VCS" },
  { key: "ai", label: "AI & Cloud" },
];

export const skills: Skill[] = [
  // Languages
  { name: "HTML5", icon: "FaHtml5", level: 95, color: "#e34f26", category: "languages" },
  { name: "CSS3", icon: "FaCss3Alt", level: 90, color: "#264de4", category: "languages" },
  { name: "JavaScript", icon: "FaJs", level: 90, color: "#f7df1e", category: "languages" },
  { name: "TypeScript", icon: "SiTypescript", level: 85, color: "#3178c6", category: "languages" },
  { name: "Python", icon: "FaPython", level: 75, color: "#3776ab", category: "languages" },
  { name: "Java", icon: "FaJava", level: 70, color: "#007396", category: "languages" },

  // Frameworks & Libraries
  { name: "React", icon: "FaReact", level: 90, color: "#61dafb", category: "frameworks" },
  { name: "Next.js", icon: "SiNextdotjs", level: 85, color: "#ffffff", category: "frameworks" },
  { name: "Prisma ORM", icon: "SiPrisma", level: 80, color: "#2D3748", category: "frameworks" },
  { name: "MERN Stack", icon: "FaReact", level: 80, color: "#61dafb", category: "frameworks" },
  { name: "Framer Motion", icon: "SiFramer", level: 65, color: "#FF0055", category: "frameworks" },

  {
    name: "Tailwind CSS",
    icon: "SiTailwindcss",
    level: 75,
    color: "#38b2ac",
    category: "frameworks",
  },

  // Backend & Databases
  { name: "Node.js", icon: "FaNodeJs", level: 80, color: "#68a063", category: "backend" },
  { name: "Express.js", icon: "SiExpress", level: 80, color: "#ffffff", category: "backend" },
  { name: "Socket.IO", icon: "SiSocketdotio", level: 75, color: "#010101", category: "backend" },
  { name: "MongoDB", icon: "SiMongodb", level: 80, color: "#47a248", category: "backend" },
  { name: "MySQL", icon: "SiMysql", level: 70, color: "#00758f", category: "backend" },
  { name: "PostgreSQL", icon: "SiPostgresql", level: 80, color: "#336791", category: "backend" },

  // Tools & Version Control
  { name: "Git", icon: "FaGitAlt", level: 85, color: "#f14e32", category: "tools" },
  { name: "GitHub", icon: "FaGithub", level: 90, color: "#ffffff", category: "tools" },
  { name: "Postman", icon: "SiPostman", level: 85, color: "#ff6c37", category: "tools" },
  { name: "Axios", icon: "SiAxios", level: 85, color: "#5a29e4", category: "tools" },
  { name: "Clerk", icon: "SiClerk", level: 70, color: "#6C47FF", category: "tools" },
  { name: "Nodemailer", icon: "SiNodedotjs", level: 65, color: "#6DA55F", category: "tools" },

  {
    name: "GitHub Actions",
    icon: "SiGithubactions",          
    level: 60,
    color: "#2088FF",
    category: "tools",
  },
  { name: "Cloudinary", icon: "SiCloudinary", level: 75, color: "#3448C5", category: "tools" },

];
