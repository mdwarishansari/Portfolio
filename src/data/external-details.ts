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
  funFacts?: string[];
}

export const externalDetails: ExternalDetails = {
  fullName: "Mohammad Warish Ansari",
  nickname: "Warish",
  dateOfBirth: "20th August 2005",
  age: "21 (as of 2026)",
  gender: "Male",
  nationality: "Indian",
  religion: "Islam",
  languages: ["Hindi (Native)", "English (Fluent)", "Urdu (Conversational)"],
  hometown: "Ranchi, Jharkhand",
  currentCity: "Ranchi, Jharkhand",
  state: "Jharkhand",
  country: "India",
  pinCode: "834004",
  phone: "+91-XXXXXXXXXX",
  personalEmail: "warishdeveloper@gmail.com",
  professionalEmail: "warishdeveloper@gmail.com",

  education: [
    {
      level: "B.Tech in Computer Science & Engineering",
      institution: "Ram Krishna Dharmarth Foundation University (RKDF University) Ranchi",
      university: "RKDF University, Ranchi",
      stream: "Computer Science & Engineering (CSE)",
      session: "2023–2027",
      cgpa: "8.8+ CGPA (Expected)",
      status: "Final Year (7th Semester)",
      location: "Pundag Ranchi, Jharkhand",
    },
    {
      level: "Class 12th (Intermediate / +2)",
      institution: "High School Saunda D",
      board: "JAC Board, Jharkhand",
      stream: "Science (PCM — Physics, Chemistry, Mathematics)",
      session: "2021–2023",
      percentage: "63%",
      status: "Completed",
      location: "Ramgarh, Jharkhand",
    },
    {
      level: "Class 10th (Matriculation)",
      institution: "Middle School Saunda D",
      board: "JAC Board, Jharkhand",
      stream: "General (All Subjects)",
      session: "2021",
      percentage: "73%",
      status: "Completed",
      location: "Ramgarh, Jharkhand",
    },
  ],

  fatherName: "MD Akhtar Ansari",
  fatherOccupation: "Businessman",
  motherName: "Gulshan Khatun",

  hobbies: [
    "Coding & building side projects",
    "Exploring new AI tools & frameworks",
    "Watching tech YouTube channels",
    "Reading tech blogs & documentation",
    "Astronomical observations & stargazing",
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

  funFacts: [],
};
