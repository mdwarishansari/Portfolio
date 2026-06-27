import type { Experience } from "@/types";

export type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Software Development Engineer (SDE) Intern",
    company: "Bluestock Fintech",
    period: "Dec 2025 – Jan 2026",
    location: "Remote",
    description:
  "Built BlueBlog, a production-ready Next.js CMS and blogging platform with PostgreSQL, Prisma, JWT auth, and a multi-stage editorial workflow (Draft → Verification → Published), deployed on Vercel.",

certificate: {
      name: "Software Development Engineer (SDE) Internship – Bluestock Fintech",
      thumbnail: "https://i.postimg.cc/d13RGyk6/Bluestock-Internship-certificate.jpg",
      fullImage: "https://i.postimg.cc/d13RGyk6/Bluestock-Internship-certificate.jpg",
      verifyUrl: "https://bluestock.in/hr/emp",
      credential: "BFSD184972",
    },
    certificateAvailable: true,
    responsibilities: [
      "Implemented role-based access control (RBAC) and secure authentication workflows",
      "Built REST APIs and optimized PostgreSQL database operations using Prisma ORM",
      "Developed content publishing and editorial management features",
      "Participated in testing, debugging, deployment, and code review activities",
      "Collaborated using Git workflows and agile software development practices",
    ],
    skills: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
      "REST APIs",
      "Git",
      "SEO",
      "Full Stack Development",
    ],
    companyLink: "https://bluestock.in/",
  },
  {
    id: 2,
    role: "MERN Stack Intern",
    company: "Soft Nexis Technology",
    period: "Oct 2025 – Nov 2025",
    location: "Remote / Online",
   description:
  "Built and maintained MERN stack features including React UI components, MongoDB schema design, and Express.js REST APIs; contributed to debugging, optimization, and agile delivery workflows.",

   certificate: {
      name: "MERN Stack Internship Certificate",
      thumbnail: "https://i.postimg.cc/525LKyTw/Soft-Nexis-Internship-page-0001.jpg",
      fullImage: "https://i.postimg.cc/525LKyTw/Soft-Nexis-Internship-page-0001.jpg",
      verifyUrl: "https://www.softnexis.com/",
      credential: "SN1000356",
    },
    certificateAvailable: true,
    responsibilities: [
      "Built responsive React.js components and integrated REST APIs",
      "Developed backend services using Node.js and Express.js",
      "Managed MongoDB schemas, queries, and data validation",
      "Improved application performance through debugging and optimization",
      "Worked with Git version control and agile development processes",
      "Developed React.js components and Express.js REST APIs integrated with MongoDB schemas for MERN stack features.",
      "Resolved API integration bugs, improved component performance, and supported production deployment workflows in an agile team.",
    ],
    skills: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "REST APIs",
      "Git",
      "Agile Development",
      "Full Stack Development",
    ],
    companyLink: "https://www.softnexis.com/",
  },
  {
    id: 3,
    role: "Full Stack Web Development Intern",
    company: "CodeAlpha",
    period: "Jul 2025 – Aug 2025",
    location: "Remote",
    description:
      'Built "NexusShop," a full-stack e-commerce web application using the MERN stack, implementing authentication, product management, and dynamic cart functionality with clean backend architecture.',
    certificate: {
      name: "Full Stack Development Internship",
      thumbnail: "https://i.postimg.cc/BQ9z2Mm7/Code-Alpha-Certificate-page-0001.jpg",
      fullImage: "https://i.postimg.cc/BQ9z2Mm7/Code-Alpha-Certificate-page-0001.jpg",
      verifyUrl: "http://www.codealpha.tech",
      credential: "CA-FS-2025",
    },
    certificateAvailable: true,
    responsibilities: [
      "Implemented Customer, Seller, Verifier, and Admin role-based dashboards",
      "Integrated Firebase Authentication, JWT authorization, and Razorpay payments",
      "Developed inventory management, order processing, and product workflows",
      "Built RESTful APIs using Node.js, Express.js, and MongoDB",
      "Integrated Cloudinary media storage and optimized deployment workflows",
    ],
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "Firebase", "Razorpay", "Cloudinary", "REST APIs"],
    companyLink: "https://codealpha-shopping-web.onrender.com/",
  },
  {
    id: 4,
    role: "Full Stack Web Development Intern (Python)",
    company: "Shashi Infotech",
    period: "Feb 2025 – Mar 2025",
    location: "Ranchi, Jharkhand",
    description:
      "Developed MoviesVibe, a movie recommendation and review platform while gaining hands-on experience in backend development, authentication systems, and database optimization.",
    certificate: {
      name: "Full Stack Web Development with Python",
      thumbnail: "https://i.postimg.cc/fWGsQ52w/INTERNSHIP-FULL-STACK-WITH-PYTHON-page-0001.jpg",
      fullImage: "https://i.postimg.cc/fWGsQ52w/INTERNSHIP-FULL-STACK-WITH-PYTHON-page-0001.jpg",
      verifyUrl: "https://shashiinfotech.com/",
      credential: "SI-FSP-2025",
    },
    certificateAvailable: true,
    responsibilities: [
      "Built full-stack features using Django, Python, HTML, CSS, and Bootstrap",
      "Implemented authentication, user management, and CRUD workflows",
      "Developed backend APIs and optimized database queries",
      "Designed responsive user interfaces and improved user experience",
      "Worked in an agile environment with testing and debugging practices",
    ],
    skills: ["Python", "Django", "HTML", "CSS", "Bootstrap", "REST APIs", "SQL", "Full Stack Development"],
    companyLink: "https://www.shashiinfotech.com/",
  },
];
