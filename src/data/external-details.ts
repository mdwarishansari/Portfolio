/**
 * External / personal details about Mohammad Warish Ansari
 * that aren't part of the main portfolio UI but should be
 * available to the AI chatbot for answering personal questions.
 */

export interface ExternalDetails {
  fullName: string;
  nickname: string;
  dateOfBirth: string;
  age: string;
  gender: string;
  nationality: string;
  religion: string;
  languages: string[];
  hometown: string;
  currentCity: string;
  state: string;
  country: string;
  pinCode: string;
  phone: string;
  personalEmail: string;
  professionalEmail: string;

  // Education
  education: {
    level: string;
    institution: string;
    board?: string;
    university?: string;
    stream: string;
    session: string;
    percentage?: string;
    cgpa?: string;
    status: string;
    location: string;
  }[];

  // Family & Background
  fatherName: string;
  fatherOccupation: string;
  motherName: string;

  // Hobbies & Interests
  hobbies: string[];
  interests: string[];

  // Career Aspirations
  careerGoal: string;
  dreamCompanies: string[];

  // Fun Facts
  funFacts: string[];
}

export const externalDetails: ExternalDetails = {
  fullName: "Mohammad Warish Ansari",
  nickname: "Warish",
  dateOfBirth: "15th August 2003",
  age: "23 (as of 2026)",
  gender: "Male",
  nationality: "Indian",
  religion: "Islam",
  languages: ["Hindi (Native)", "English (Fluent)", "Urdu (Conversational)"],
  hometown: "Giridih, Jharkhand",
  currentCity: "Ranchi, Jharkhand",
  state: "Jharkhand",
  country: "India",
  pinCode: "834001",
  phone: "+91-XXXXXXXXXX",
  personalEmail: "warishansari.official@gmail.com",
  professionalEmail: "warishdeveloper@gmail.com",

  education: [
    {
      level: "B.Tech in Computer Science & Engineering",
      institution: "Birla Institute of Technology, Mesra (BIT Mesra)",
      university: "BIT Mesra (Deemed University)",
      stream: "Computer Science & Engineering (CSE)",
      session: "2022–2026",
      cgpa: "7.5+ CGPA (Expected)",
      status: "Final Year (8th Semester)",
      location: "Ranchi, Jharkhand",
    },
    {
      level: "Class 12th (Intermediate / +2)",
      institution: "DAV Public School, Giridih",
      board: "CBSE",
      stream: "Science (PCM — Physics, Chemistry, Mathematics)",
      session: "2020–2022",
      percentage: "82%",
      status: "Completed",
      location: "Giridih, Jharkhand",
    },
    {
      level: "Class 10th (Matriculation)",
      institution: "DAV Public School, Giridih",
      board: "CBSE",
      stream: "General (All Subjects)",
      session: "2018–2020",
      percentage: "88%",
      status: "Completed",
      location: "Giridih, Jharkhand",
    },
  ],

  fatherName: "Md. Naushad Ansari",
  fatherOccupation: "Businessman",
  motherName: "Shahnaz Parween",

  hobbies: [
    "Coding & building side projects",
    "Exploring new AI tools & frameworks",
    "Playing cricket",
    "Watching tech YouTube channels",
    "Reading tech blogs & documentation",
  ],

  interests: [
    "Artificial Intelligence & LLMs",
    "Full-Stack Web Development",
    "Startup culture & entrepreneurship",
    "Cloud Computing & DevOps",
    "Open Source contributions",
  ],

  careerGoal:
    "To become a top-tier Applied AI & Full-Stack Engineer at a leading tech company, building intelligent production-grade systems that solve real-world problems at scale.",

  dreamCompanies: [
    "Google",
    "Microsoft",
    "OpenAI",
    "Amazon",
    "Meta",
    "Any exciting AI startup",
  ],

  funFacts: [
    "Born on India's Independence Day (15th August)!",
    "Started coding during COVID lockdown in 2020 with HTML & CSS.",
    "Has 20+ industry certifications including Oracle Cloud, Microsoft, Docker, and GitHub.",
    "Built his first full-stack project within 6 months of learning React.",
    "Believes in 'learn by building' — every project in the portfolio solves a real problem.",
    "Passionate about Agentic AI — building autonomous AI workflows with LangGraph.js.",
  ],
};
