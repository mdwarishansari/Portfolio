import type { SocialLink } from "@/types";

/** Quick lookup for URL-only access (e.g. Hero CTA GitHub link) */
export const socials = {
  github: "https://github.com/mdwarishansari",
  linkedin: "https://www.linkedin.com/in/md-warish-ansari",
  email: "warishdeveloper@gmail.com",
  leetcode: "https://leetcode.com/u/mdwarishansari/",
  twitter: "https://x.com/mdwarishansari0",
  stackoverflow: "https://stackoverflow.com/users/31790291/codewarish",
  geeksforgeeks: "https://www.geeksforgeeks.org/user/warishann144/",
  hackerrank: "https://www.hackerrank.com/profile/warishansari018",
  instagram: "https://www.instagram.com/mohammadwarish_ansari",
  facebook: "https://www.facebook.com/profile.php?id=100074841669595",
  discord: "https://discord.com/mohammadwarishansari_47491",
  linktree: "https://linktr.ee/mdwarishansari",
};

/** Full social links array used by the Social section */
export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    icon: "FaLinkedinIn",
    url: socials.linkedin,
    color: "#0a66c2",
    handle: "md-warish-ansari",
  },
  {
    name: "GitHub",
    icon: "FaGithub",
    url: socials.github,
    color: "#ffffff",
    handle: "mdwarishansari",
  },
  {
    name: "X (Twitter)",
    icon: "FaXTwitter",
    url: socials.twitter,
    color: "#ffffff",
    handle: "@mdwarishansari0",
  },
  {
    name: "Gmail",
    icon: "SiGmail",
    url: `mailto:${socials.email}`,
    color: "#ea4335",
    handle: "warishdeveloper",
  },
  {
    name: "Linktree",
    icon: "SiLinktree",
    url: socials.linktree,
    color: "#43e660",
    handle: "mdwarishansari",
  },
  {
    name: "LeetCode",
    icon: "SiLeetcode",
    url: socials.leetcode,
    color: "#ffa116",
    handle: "mdwarishansari",
  },
  {
    name: "Stack Overflow",
    icon: "SiStackoverflow",
    url: socials.stackoverflow,
    color: "#f48024",
    handle: "codewarish",
  },
  
  {
    name: "GeeksforGeeks",
    icon: "SiGeeksforgeeks",
    url: socials.geeksforgeeks,
    color: "#2f8d46",
    handle: "warishann144",
  },
  {
    name: "HackerRank",
    icon: "SiHackerrank",
    url: socials.hackerrank,
    color: "#2ec866",
    handle: "warishansari018",
  },
  {
    name: "Instagram",
    icon: "FaInstagram",
    url: socials.instagram,
    color: "#e1306c",
    handle: "mohammadwarish_ansari",
  },
  {
    name: "Facebook",
    icon: "FaFacebookF",
    url: socials.facebook,
    color: "#1877f2",
    handle: "Mohammad Warish",
  },
  {
    name: "Discord",
    icon: "FaDiscord",
    url: socials.discord,
    color: "#5865f2",
    handle: "mohammadwarishansari",
  },
  
];
