"use client";

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
  FaRobot,
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
  SiOpenai: <FaRobot />,
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
  SiCodechef: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
      <path d="M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0zm0 4.5a3.84 3.84 0 0 1 3.84 3.84c0 1.25-.6 2.36-1.52 3.06v1.36h-4.64v-1.36a3.84 3.84 0 0 1-1.52-3.06C8.16 6.22 9.88 4.5 12 4.5zm-3.68 10.92h7.36v1.28H8.32v-1.28zm1.28 2.56h4.8v1.28h-4.8v-1.28z" />
    </svg>
  ),
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
  SiLangchain: <FaRobot />,
};

/**
 * Resolves a string icon key (e.g. "FaHtml5") to its React Icon component.
 * Returns null if the key is not found.
 */
export function getIcon(key: string): ReactNode {
  return iconMap[key] ?? null;
}
