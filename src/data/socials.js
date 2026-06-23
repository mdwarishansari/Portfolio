import React from "react";
import {
  SiGmail,
  SiLeetcode,
  SiGeeksforgeeks,
  SiHackerrank,
  SiLinktree,
  SiStackoverflow,
} from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaDiscord,
} from "react-icons/fa";

export const socials = {
  github: "https://github.com/mdwarishansari",
  linkedin: "https://www.linkedin.com/in/md-warish-ansari/",
  email: "warishansari018@gmail.com",
  leetcode: "https://leetcode.com/u/mdwarishansari/",
  twitter: "https://x.com/mdwarishansari0",
  stackoverflow: "https://stackoverflow.com/users/31790291/codewarish",
  geeksforgeeks: "https://www.geeksforgeeks.org/user/warishann144/",
  hackerrank: "https://www.hackerrank.com/profile/warishansari018",
  instagram: "https://www.instagram.com/mohammadwarish_ansari",
  facebook: "https://www.facebook.com/profile.php?id=100074841669595",
  youtube: "https://youtube.com/channel",
  discord: "https://discord.com/mohammadwarishansari_47491",
  linktree: "https://linktr.ee/mdwarishansari"
};

export const socialLinks = [
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn />,
    url: socials.linkedin,
    color: "#0077B5",
    hoverBg: "linear-gradient(135deg, #0077B5, #00a0dc)",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    url: socials.github,
    color: "#ffffff",
    hoverBg: "linear-gradient(135deg, #333, #181717)",
  },
  {
    name: "X (Twitter)",
    icon: <FaXTwitter />,
    url: socials.twitter,
    color: "#ffffff",
    hoverBg: "linear-gradient(135deg, #333, #000000)",
  },
  {
    name: "Gmail",
    icon: <SiGmail />,
    url: `mailto:${socials.email}`,
    color: "#D14836",
    hoverBg: "linear-gradient(135deg, #D14836, #e55b4e)",
  },
  {
    name: "Stack Overflow",
    icon: <SiStackoverflow />,
    url: socials.stackoverflow,
    color: "#F48024",
    hoverBg: "linear-gradient(135deg, #F48024, #f7a550)",
  },
  {
    name: "LeetCode",
    icon: <SiLeetcode />,
    url: socials.leetcode,
    color: "#FFA116",
    hoverBg: "linear-gradient(135deg, #FFA116, #ffb74d)",
  },
  {
    name: "GeeksforGeeks",
    icon: <SiGeeksforgeeks />,
    url: socials.geeksforgeeks,
    color: "#2F8D46",
    hoverBg: "linear-gradient(135deg, #2F8D46, #4caf50)",
  },
  {
    name: "HackerRank",
    icon: <SiHackerrank />,
    url: socials.hackerrank,
    color: "#2EC866",
    hoverBg: "linear-gradient(135deg, #2EC866, #4caf50)",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    url: socials.instagram,
    color: "#E1306C",
    hoverBg: "linear-gradient(135deg, #833AB4, #E1306C, #FCAF45)",
  },
  {
    name: "Facebook",
    icon: <FaFacebookF />,
    url: socials.facebook,
    color: "#1877F2",
    hoverBg: "linear-gradient(135deg, #1877F2, #4299e1)",
  },
  {
    name: "YouTube",
    icon: <FaYoutube />,
    url: socials.youtube,
    color: "#FF0000",
    hoverBg: "linear-gradient(135deg, #FF0000, #ff4444)",
  },
  {
    name: "Discord",
    icon: <FaDiscord />,
    url: socials.discord,
    color: "#5865F2",
    hoverBg: "linear-gradient(135deg, #5865F2, #7289da)",
  },
  {
    name: "Linktree",
    icon: <SiLinktree />,
    url: socials.linktree,
    color: "#43E660",
    hoverBg: "linear-gradient(135deg, #43E660, #6bef8a)",
  },
];
