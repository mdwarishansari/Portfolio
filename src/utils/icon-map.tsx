import type { ReactNode } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaPython,
  FaJava,
  FaAws,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaDiscord,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
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
  SiPrisma,
  SiRedis,
  SiCloudinary,
  SiSocketdotio,
  SiGmail,
  SiLeetcode,
  SiGeeksforgeeks,
  SiHackerrank,
  SiLinktree,
  SiStackoverflow,
  SiFramer,
  SiFastapi,
  SiDocker,
  SiVercel,
  SiClerk,
} from "react-icons/si";

const iconMap: Record<string, ReactNode> = {
  // FA icons
  FaHtml5: <FaHtml5 />,
  FaCss3Alt: <FaCss3Alt />,
  FaJs: <FaJs />,
  FaReact: <FaReact />,
  FaGitAlt: <FaGitAlt />,
  FaGithub: <FaGithub />,
  FaNodeJs: <FaNodeJs />,
  FaPython: <FaPython />,
  FaJava: <FaJava />,
  FaLinkedinIn: <FaLinkedinIn />,
  FaInstagram: <FaInstagram />,
  FaFacebookF: <FaFacebookF />,
  FaYoutube: <FaYoutube />,
  FaDiscord: <FaDiscord />,
  FaXTwitter: <FaXTwitter />,

  // SI icons
  SiMongodb: <SiMongodb />,
  SiMysql: <SiMysql />,
  SiTailwindcss: <SiTailwindcss />,
  SiNextdotjs: <SiNextdotjs />,
  SiTypescript: <SiTypescript />,
  SiPostman: <SiPostman />,
  SiAxios: <SiAxios />,
  SiFirebase: <SiFirebase />,
  SiOpenai: <SiOpenai />,
  SiGithubactions: <SiGithubactions />,
  SiExpress: <SiExpress />,
  SiPostgresql: <SiPostgresql />,
  SiPrisma: <SiPrisma />,
  SiRedis: <SiRedis />,
  SiCloudinary: <SiCloudinary />,
  SiSocketdotio: <SiSocketdotio />,
  SiGmail: <SiGmail />,
  SiLeetcode: <SiLeetcode />,
  SiGeeksforgeeks: <SiGeeksforgeeks />,
  SiHackerrank: <SiHackerrank />,
  SiLinktree: <SiLinktree />,
  SiStackoverflow: <SiStackoverflow />,
  SiFramer: <SiFramer />,
  SiFastapi: <SiFastapi />,
  FaAws: <FaAws />,
  SiVercel: <SiVercel />,
  SiDocker: <SiDocker />,
  SiClerk: <SiClerk />,

  // Aliases retained for backward compatibility
  SiNodedotjs: <FaNodeJs />,
  SiLangchain: <SiOpenai />,
};

/**
 * Resolves a string icon key (e.g. "FaHtml5") to its React Icon component.
 * Returns null if the key is not found.
 */
export function getIcon(key: string): ReactNode {
  return iconMap[key] ?? null;
}
