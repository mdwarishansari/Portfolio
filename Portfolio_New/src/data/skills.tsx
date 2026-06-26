import type { ReactNode } from "react";
import { DiDjango } from "react-icons/di";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaPython,
  FaJava,
} from "react-icons/fa";
import {
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiPostman,
  SiAxios,
  SiFirebase,
  SiOpenai,
  SiGithubactions,
  SiExpress,
  SiPostgresql,
} from "react-icons/si";

export type SkillCategory =
  | "languages"
  | "frameworks"
  | "backend"
  | "tools"
  | "ai";

export interface Skill {
  name: string;
  icon: ReactNode;
  level: number;
  color: string;
  category: SkillCategory;
}

export const skillCategories: { key: "all" | SkillCategory; label: string }[] = [
  { key: "all", label: "All Skills" },
  { key: "languages", label: "Languages" },
  { key: "frameworks", label: "Frameworks" },
  { key: "backend", label: "Backend & DB" },
  { key: "tools", label: "Tools & VCS" },
  { key: "ai", label: "AI & Cloud" },
];

export const skills: Skill[] = [
  { name: "HTML5", icon: <FaHtml5 />, level: 95, color: "#e34f26", category: "languages" },
  { name: "CSS3", icon: <FaCss3Alt />, level: 90, color: "#264de4", category: "languages" },
  { name: "JavaScript", icon: <FaJs />, level: 90, color: "#f7df1e", category: "languages" },
  { name: "TypeScript", icon: <SiTypescript />, level: 85, color: "#3178c6", category: "languages" },
  { name: "Python", icon: <FaPython />, level: 75, color: "#3776ab", category: "languages" },
  { name: "Java", icon: <FaJava />, level: 70, color: "#5382a1", category: "languages" },

  { name: "React", icon: <FaReact />, level: 85, color: "#61dafb", category: "frameworks" },
  { name: "Next.js", icon: <SiNextdotjs />, level: 80, color: "#ffffff", category: "frameworks" },
  { name: "MERN Stack", icon: <FaReact />, level: 80, color: "#61dafb", category: "frameworks" },
  { name: "Bootstrap", icon: <FaBootstrap />, level: 85, color: "#7952b3", category: "frameworks" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 75, color: "#38b2ac", category: "frameworks" },

  { name: "Node.js", icon: <FaNodeJs />, level: 80, color: "#68a063", category: "backend" },
  { name: "Express.js", icon: <SiExpress />, level: 75, color: "#ffffff", category: "backend" },
  { name: "MongoDB", icon: <SiMongodb />, level: 75, color: "#47a248", category: "backend" },
  { name: "MySQL", icon: <SiMysql />, level: 70, color: "#00758f", category: "backend" },
  { name: "PostgreSQL", icon: <SiPostgresql />, level: 70, color: "#336791", category: "backend" },
  { name: "Django", icon: <DiDjango />, level: 65, color: "#44b78b", category: "backend" },

  { name: "Git", icon: <FaGitAlt />, level: 85, color: "#f14e32", category: "tools" },
  { name: "GitHub", icon: <FaGithub />, level: 90, color: "#ffffff", category: "tools" },
  { name: "Postman", icon: <SiPostman />, level: 85, color: "#ff6c37", category: "tools" },
  { name: "Axios", icon: <SiAxios />, level: 85, color: "#5a29e4", category: "tools" },
  { name: "GitHub Actions", icon: <SiGithubactions />, level: 60, color: "#2088ff", category: "tools" },

  { name: "OpenAI API", icon: <SiOpenai />, level: 65, color: "#ffffff", category: "ai" },
  { name: "Firebase Auth", icon: <SiFirebase />, level: 60, color: "#ffa611", category: "ai" },
];
