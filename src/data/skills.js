import React from "react";
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

export const skills = [
  // Frontend - Languages
  { name: "HTML5", icon: <FaHtml5 />, level: 95, color: "#e34f26", category: "languages" },
  { name: "CSS3", icon: <FaCss3Alt />, level: 90, color: "#264de4", category: "languages" },
  { name: "JavaScript", icon: <FaJs />, level: 90, color: "#f7df1e", category: "languages" },
  { name: "TypeScript", icon: <SiTypescript />, level: 85, color: "#3178c6", category: "languages" },
  { name: "Python", icon: <FaPython />, level: 75, color: "#3776ab", category: "languages" },
  { name: "Java", icon: <FaJava />, level: 70, color: "#007396", category: "languages" },

  // Frameworks & Libraries
  { name: "React", icon: <FaReact />, level: 85, color: "#61dafb", category: "frameworks" },
  { name: "Next.js", icon: <SiNextdotjs />, level: 80, color: "#000000", category: "frameworks" },
  { name: "MERN Stack", icon: <FaReact />, level: 80, color: "#61dafb", category: "frameworks" },
  { name: "Bootstrap", icon: <FaBootstrap />, level: 85, color: "#7952b3", category: "frameworks" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 75, color: "#38b2ac", category: "frameworks" },

  // Backend & Databases
  { name: "Node.js", icon: <FaNodeJs />, level: 80, color: "#68a063", category: "backend" },
  { name: "Express.js", icon: <SiExpress />, level: 75, color: "#000000", category: "backend" },
  { name: "MongoDB", icon: <SiMongodb />, level: 75, color: "#47a248", category: "backend" },
  { name: "MySQL", icon: <SiMysql />, level: 70, color: "#00758f", category: "backend" },
  { name: "PostgreSQL", icon: <SiPostgresql />, level: 70, color: "#336791", category: "backend" },
  { name: "Django", icon: <DiDjango />, level: 65, color: "#092e20", category: "backend" },

  // Tools & Version Control
  { name: "Git", icon: <FaGitAlt />, level: 85, color: "#f14e32", category: "tools" },
  { name: "GitHub", icon: <FaGithub />, level: 90, color: "#181717", category: "tools" },
  { name: "Postman", icon: <SiPostman />, level: 85, color: "#ff6c37", category: "tools" },
  { name: "Axios", icon: <SiAxios />, level: 85, color: "#5a29e4", category: "tools" },
  { name: "GitHub Actions", icon: <SiGithubactions />, level: 60, color: "#2088FF", category: "tools" },

  // AI & Cloud
  { name: "OpenAI API", icon: <SiOpenai />, level: 65, color: "#000000", category: "ai" },
  { name: "Firebase Auth", icon: <SiFirebase />, level: 60, color: "#FFA611", category: "ai" },
];
