import type { PersonalData } from "@/types";

export const personal: PersonalData = {
  name: "Mohammad Warish Ansari",
  copyrightName: "Md Warish Ansari",
  title: "Full Stack Developer",
  location: "Ranchi, Jharkhand, India",
  email: "warishdeveloper@gmail.com",
  resumeLink:
    "https://drive.google.com/drive/folders/1oAuFxm0ZOHpSErySDUs6sjHubDo0Wxi-?usp=sharing",
  profileImage: "/assets/DP.gif",

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
      "Next.js / TypeScript Engineer",
      "Applied AI Engineer",
      "Python / FastAPI Developer",
      "CSE Student",
      "Mohammad Warish Ansari",
    ],
    intro:
      "Full Stack Developer building production-grade web applications and agentic AI systems — Next.js, TypeScript, Python, PostgreSQL, and modern LLM tooling from real-time SaaS to autonomous AI workflows.",
    highlights: [
      "Full Stack Developer",
      "Applied AI / Agentic AI",
      "LangGraph.js · LangChain",
      "Next.js · TypeScript · Python",
      "Cloud & DevOps Certified",
    ],
    currentFocus: "Agentic AI systems · Production Next.js SaaS · DSA",
    codeSnippet: [
      "const developer = {",
      "  name: 'MD WARISH ANSARI',",
      "  role: 'Full Stack + AI Engineer',",
      "  stack: [",
      "    'Next.js', 'TypeScript', 'Python',",
      "    'LangGraph.js', 'PostgreSQL'",
      "  ],",
      "  building: 'Agentic AI systems',",
      "  focus: 'Applied AI engineering',",
      "  available: true",
      "};"
    ]
  },

  about: {
    eyebrow: "About me",
    greeting: "Hello!",
    titlePart1: "Building software that",
    titlePart2: "solves real problems",
    description:
    "I'm a B.Tech Computer Science student evolving from full-stack development toward applied AI and agentic software engineering. I build production-grade web applications with Next.js, TypeScript, and PostgreSQL, and increasingly with Python, FastAPI, LangGraph.js, and modern LLM tooling. My approach: ship real systems, solve real engineering problems, and build towards the intersection of scalable web architecture and autonomous AI workflows.",
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
      { label: "Projects Completed", value: "5+", width: "65%" },
      { label: "Technologies Mastered", value: "35+", width: "80%" },
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
