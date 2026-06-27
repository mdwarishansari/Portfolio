import type { PersonalData } from "@/types";
import profileImage from "@/assets/DP.gif";

export const personal: PersonalData = {
  name: "Mohammad Warish Ansari",
  copyrightName: "Md Warish Ansari",
  title: "Full Stack Developer",
  location: "Ranchi, Jharkhand, India",
  email: "warishdeveloper@gmail.com",
  resumeLink:
    "https://drive.google.com/drive/folders/1oAuFxm0ZOHpSErySDUs6sjHubDo0Wxi-?usp=sharing",
  profileImage,

  navItems: [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "certifications", label: "Certs" },
    { id: "experience", label: "Experience" },
    { id: "social", label: "Social" },
  ],

  hero: {
    greeting: "Hello!",
    availability: "Open to internships & SDE roles",
    roles: [
      "Full Stack Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "TypeScript Engineer",
    "CSE Student",
    "Mohammad Warish Ansari",
    ],
    intro:
    "B.Tech Computer Science student building production-grade web applications with Next.js, TypeScript, PostgreSQL, and the MERN stack — from real-time systems to multi-tenant SaaS platforms.",
    highlights: [
      "Full Stack Developer",
      "Cloud & DevOps Certified",
      "Problem Solver",
      "AI-Focused Engineer",
      "Specialized in MERN Stack Development",
    ],
    currentFocus: "Production Next.js SaaS + DSA",
    codeSnippet: [
      "const developer = {",
      "  name: 'MD WARISH ANSARI',",
      "  role: 'MERN Stack Developer',",
      "  skills: [",
      "    'React', 'Node.js','Next.js'",
      "    'TypeScript', 'PostgreSQL'",
      "  ],",
      "  passion: 'Building scalable apps',",
      "  focus: 'AI & Performance',",
      "  available: true",
      "};"
    ]
  },

  about: {
    eyebrow: "About me",
    greeting: "Hello!",
    titlePart1: "Building software",
    titlePart2: "solves real problems",
    description:
    "I'm a B.Tech Computer Science student specializing in Full Stack Development with Next.js, TypeScript, React, Node.js, PostgreSQL, and MongoDB. I build scalable, performance-driven web applications — from multi-tenant SaaS platforms to real-time quiz systems. My approach is practical: ship production-ready projects, solve real engineering problems, and continuously improve through hands-on work.",
    stats: [
      { id: "projects", count: "5+", title: "Projects" },
      { id: "internships", count: "4+", title: "Internships" },
      { id: "certifications", count: "20+", title: "Certifications" },
    ],
  },

  footer: {
    philosophy:
      "Clean code is not just efficient, it's an art form that communicates ideas beyond functionality.",
    philosophySub: "Every line of code tells a story of problem-solving and innovation",
    journeyTitle: "Development Journey",
    contactTitle: "Contact",
    builtWithText: "Built with",
    backToTopText: "Back to top",
    stats: [
      { label: "Coding Hours", value: "5,000+", width: "75%" },
      { label: "Projects Completed", value:"4+", width: "60%" },
      { label: "Technologies Mastered", value: "30+", width: "75%" },
    ],
  },

  projectsCopy: {
    eyebrow: "Projects",
    title: "Things I've shipped",
    description: "My latest creations. Click any project to explore the full story, architecture, and tech stack."
  },

  certificationsCopy: {
    eyebrow: "Certifications",
    title: "Credential vault",
    description: "Verified credentials across cloud, DevOps, AI, and software engineering — click any to inspect and verify."
  },

  experienceCopy: {
    eyebrow: "Experience",
    title: "Career journey",
    description: "Internships and roles where I've turned learning into shipped, production-grade work."
  },

  socialCopy: {
    eyebrow: "Connect",
    title: "Let's build together",
    description: "Find me across the web — from code platforms to communities. Always open to a good conversation."
  }
};
