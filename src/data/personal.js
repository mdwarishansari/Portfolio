import profileGif from "../components/About/img/DP.gif";

export const personal = {
  name: "Mohammad Warish Ansari",
  copyrightName: "Md Warish Ansari",
  title: "MERN Stack Developer",
  location: "Ranchi Jharkhand, India",
  email: "warishansari018@gmail.com",
  resumeLink: "https://drive.google.com/drive/folders/1oAuFxm0ZOHpSErySDUs6sjHubDo0Wxi-?usp=sharing",
  
  navItems: [
    { id: "hero",           icon: "bi-house-door",     label: "Home" },
    { id: "about",          icon: "bi-person",          label: "About" },
    { id: "skills",         icon: "bi-tools",           label: "Skills" },
    { id: "projects",       icon: "bi-rocket-takeoff",  label: "Projects" },
    { id: "certifications", icon: "bi-award",           label: "Certs" },
    { id: "experience",     icon: "bi-briefcase",       label: "Experience" },
    { id: "social",         icon: "bi-person-plus",     label: "Social" },
  ],

  hero: {
    greeting: "Hello!",
    typeSequencePrefix: [
      "I",
      500,
      "I am",
      1000,
    ],
    roles: [
      "MERN Stack Developer",
      1500,
      "Web Developer",
      1500,
      "CSE Student",
      1500,
      "Full Stack Learner",
      1500,
      "AI Enthusiast",
      1500,
      "Mohammad Warish Ansari",
    ],
    highlights: [
      "Full Stack Developer",
      "Cloud & DevOps Certified",
      "Problem Solver",
      "AI-Focused Engineer",
      "Specialized in MERN Stack Development",
    ],
    splineScene: "https://prod.spline.design/9jQjS9lHCqJMjgSL/scene.splinecode",
  },

  about: {
    profileImage: profileGif,
    greeting: "Hello!",
    description: "I'm a B.Tech Computer Science student specializing in Full Stack Development with the MERN stack. I focus on building scalable, responsive, and performance-driven web applications using modern technologies. Alongside web development, I'm actively strengthening my foundations in machine learning with the goal of integrating intelligent systems into real-world applications. My approach is practical — build meaningful projects, solve real problems, and continuously improve through hands-on experience.",
    stats: [
      { id: "projects",       count: "5+",  title: "Projects",       icon: "bi-code-square" },
      { id: "internships",    count: "4+",  title: "Internships",    icon: "bi-lightning-charge" },
      { id: "certifications", count: "20+", title: "Certifications", icon: "bi-award" },
    ],
  },

  footer: {
    philosophy: "Clean code is not just efficient, it's an art form that communicates ideas beyond functionality.",
    philosophySub: "Every line of code tells a story of problem-solving and innovation",
    splineLink: "https://app.spline.design/community/file/8cfb6748-f3dd-44dd-89fb-f46c7ab4186e",
    stats: [
      { label: "Coding Hours", value: "5,000+", width: "75%" },
      { label: "Projects Completed", value: "3+", width: "55%" },
      { label: "Technologies Mastered", value: "30+", width: "75%" },
    ],
  },
};
