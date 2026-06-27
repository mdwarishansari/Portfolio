import type { PersonalData } from "@/types";
import profileImage from "@/assets/dp.png";

export const personal: PersonalData = {
  name: "Mohammad Warish Ansari",
  copyrightName: "Md Warish Ansari",
  title: "MERN Stack Developer",
  location: "Ranchi, Jharkhand, India",
  email: "warishansari018@gmail.com",
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
      "MERN Stack Developer",
      "Web Developer",
      "CSE Student",
      "Full Stack Learner",
      "AI Enthusiast",
      "Mohammad Warish Ansari",
    ],
    intro:
      "B.Tech Computer Science student building scalable, performance-driven web applications with the MERN stack — and bringing intelligent systems into real products.",
    highlights: [
      "Full Stack Developer",
      "Cloud & DevOps Certified",
      "Problem Solver",
      "AI-Focused Engineer",
      "Specialized in MERN Stack Development",
    ],
    currentFocus: "Production MERN apps + ML foundations",
  },

  about: {
    greeting: "Hello!",
    description:
      "I'm a B.Tech Computer Science student specializing in Full Stack Development with the MERN stack. I focus on building scalable, responsive, and performance-driven web applications using modern technologies. Alongside web development, I'm actively strengthening my foundations in machine learning with the goal of integrating intelligent systems into real-world applications. My approach is practical — build meaningful projects, solve real problems, and continuously improve through hands-on experience.",
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
    stats: [
      { label: "Coding Hours", value: "5,000+", width: "75%" },
      { label: "Projects Completed", value: "3+", width: "55%" },
      { label: "Technologies Mastered", value: "30+", width: "75%" },
    ],
  },
};
