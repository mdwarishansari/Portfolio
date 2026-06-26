export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  certificate: string;
  certificateAvailable: boolean;
  responsibilities: string[];
  skills: string[];
  companyLink: string;
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Software Development Engineer (SDE) Intern",
    company: "Bluestock Fintech",
    period: "Dec 2025 – Jan 2026",
    location: "Remote",
    description:
      "Worked as a Software Development Engineer Intern contributing to fintech platform development across backend and frontend systems, focusing on building reliable and scalable features.",
    certificate:
      "https://i.postimg.cc/d13RGyk6/Bluestock-Internship-certificate.jpg",
    certificateAvailable: true,
    responsibilities: [
      "Designed and implemented RESTful APIs for backend financial workflows",
      "Integrated frontend components with backend services for seamless data flow",
      "Debugged production-level issues and improved system stability",
      "Wrote unit and integration tests to maintain code quality",
      "Participated in code reviews and followed structured Git workflows",
    ],
    skills: [
      "Node.js",
      "Express.js",
      "React.js",
      "MongoDB",
      "RESTful APIs",
      "Git",
      "Backend Development",
      "System Debugging",
    ],
    companyLink: "https://bluestock.in/",
  },
  {
    id: 2,
    role: "MERN Stack Intern",
    company: "Soft Nexis Technology",
    period: "January 2025 – January 2025",
    location: "Remote / Online",
    description:
      "Completed a structured internship focused on MERN stack development, strengthening my understanding of full-stack architecture, API integration, and real-world development workflows.",
    certificate: "https://i.postimg.cc/525LKyTw/Soft-Nexis-Internship-page-0001.jpg",
    certificateAvailable: true,
    responsibilities: [
      "Practiced building modular backend APIs using Node.js and Express",
      "Worked with MongoDB for schema design and data handling",
      "Developed responsive UI components using React",
      "Understood authentication flows and RESTful API integration",
      "Followed Git-based version control and collaborative development practices",
    ],
    skills: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Full Stack Development",
      "RESTful APIs",
      "Version Control (Git)",
      "Team Collaboration",
    ],
    companyLink: "https://www.softnexis.com/",
  },
  {
    id: 3,
    role: "Full Stack Web Development Intern",
    company: "CodeAlpha",
    period: "July 2025 - August 2025",
    location: "Remote",
    description:
      'Built "NexusShop," a full-stack e-commerce web application using the MERN stack, implementing authentication, product management, and dynamic cart functionality with clean backend architecture.',
    certificate: "https://i.postimg.cc/BQ9z2Mm7/Code-Alpha-Certificate-page-0001.jpg",
    certificateAvailable: true,
    responsibilities: [
      "Designed and developed a complete e-commerce platform using MongoDB, Express.js, React.js, and Node.js",
      "Implemented secure user authentication and authorization",
      "Built product listing, cart management, and order processing features",
      "Created RESTful APIs for structured frontend-backend communication",
      "Deployed and tested the application in a live environment",
    ],
    skills: ["Django", "PostgreSQL", "Bootstrap", "Full Stack Development", "Deployment"],
    companyLink: "https://codealpha-shopping-web.onrender.com/",
  },
  {
    id: 4,
    role: "Full Stack Web Development Intern (Python)",
    company: "Shashi Infotech",
    period: "Feb 2025 - Mar 2025",
    location: "Ranchi, Jharkhand",
    description:
      "Completed a hands-on internship in Full Stack Web Development with Python, working on both frontend and backend technologies.",
    certificate:
      "https://i.postimg.cc/fWGsQ52w/INTERNSHIP-FULL-STACK-WITH-PYTHON-page-0001.jpg",
    certificateAvailable: true,
    responsibilities: [
      "Built responsive web pages using HTML, CSS, and Bootstrap",
      "Implemented server-side logic with Python and Django",
      "Learned to connect front-end with back-end services",
      "Worked under real-time project scenarios and feedback",
    ],
    skills: ["Python", "HTML", "CSS", "Bootstrap", "Django"],
    companyLink: "https://www.shashiinfotech.com/",
  },
];
