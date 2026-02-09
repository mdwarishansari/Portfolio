// src/components/Experience/Experience.js
import React, { useState, useRef, useEffect } from "react";
import { Container } from "react-bootstrap";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaExternalLinkAlt,
  FaChevronDown,
  FaChevronUp,
  FaCertificate,
  FaTimes,
} from "react-icons/fa";
import "./experience.css";

const Experience = () => {
  const [expandedExperience, setExpandedExperience] = useState(null);
  const [inView, setInView] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentCert, setCurrentCert] = useState(null);
  const sectionRef = useRef(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleExperience = (index) => {
    if (expandedExperience === index) {
      setExpandedExperience(null);
    } else {
      setExpandedExperience(index);
    }
  };

  const openCertModal = (cert) => {
    setCurrentCert(cert);
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeCertModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "auto";
  };

  // Experience data with certificate info
  const experiences = [
    {
      id: 4,
      role: "Software Development Engineer (SDE) Intern",
      company: "Bluestock Fintech",
      duration: "Dec 2025 – Jan 2026",
      location: "Remote",
      description:
        "Worked as a Software Development Engineer Intern contributing to fintech platform development across backend and frontend systems, focusing on building reliable and scalable features.",
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
      link: "https://bluestock.in/",
      certificate: {
        name: "Software Development Engineer (SDE) Internship – Bluestock Fintech",
        thumbnail:
          "https://i.postimg.cc/d13RGyk6/Bluestock-Internship-certificate.jpg",
        fullImage:
          "https://i.postimg.cc/d13RGyk6/Bluestock-Internship-certificate.jpg",
        verifyUrl: "https://bluestock.in/hr/emp",
        credential: "BFSD184972",
      },
    },

    {
      id: 3,
      role: "MERN Stack Intern",
      company: "Soft Nexis Technology",
      duration: "January 2025 – January 2025",
      location: "Remote / Online",
      description:
        "Completed a structured internship focused on MERN stack development, strengthening my understanding of full-stack architecture, API integration, and real-world development workflows.",
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
      link: "https://www.softnexis.com/",
      certificate: {
        name: "MERN Stack Internship Certificate",
        thumbnail:
          "https://i.postimg.cc/525LKyTw/Soft-Nexis-Internship-page-0001.jpg",
        fullImage:
          "https://i.postimg.cc/525LKyTw/Soft-Nexis-Internship-page-0001.jpg",
        verifyUrl: "https://www.softnexis.com/",
        credential: "SN1000356",
      },
    },
    {
      id: 2,
      role: "Full Stack Web Development Intern",
      company: "CodeAlpha",
      duration: "July 2025 - August 2025",
      location: "Remote",
      description:
        "Built “NexusShop,” a full-stack e-commerce web application using the MERN stack, implementing authentication, product management, and dynamic cart functionality with clean backend architecture.",
      responsibilities: [
        "Designed and developed a complete e-commerce platform using MongoDB, Express.js, React.js, and Node.js",

        "Implemented secure user authentication and authorization",

        "Built product listing, cart management, and order processing features",

        "Created RESTful APIs for structured frontend-backend communication",

        "Deployed and tested the application in a live environment",
      ],
      skills: [
        "Django",
        "PostgreSQL",
        "Bootstrap",
        "Full Stack Development",
        "Deployment",
      ],
      link: "https://codealpha-shopping-web.onrender.com/",
      certificate: {
        name: "Full Stack Development Internship",
        thumbnail:
          "https://i.postimg.cc/BQ9z2Mm7/Code-Alpha-Certificate-page-0001.jpg",
        fullImage:
          "https://i.postimg.cc/BQ9z2Mm7/Code-Alpha-Certificate-page-0001.jpg",
        verifyUrl: "http://www.codealpha.tech",
        credential: "CA-FS-2025",
      },
    },
    {
      id: 1,
      role: "Full Stack Web Development Intern (Python)",
      company: "Shashi Infotech",
      duration: "Feb 2025 - Mar 2025",
      location: "Ranchi, Jharkhand",
      description:
        "Completed a hands-on internship in Full Stack Web Development with Python, working on both frontend and backend technologies.",
      responsibilities: [
        "Built responsive web pages using HTML, CSS, and Bootstrap",
        "Implemented server-side logic with Python and Django",
        "Learned to connect front-end with back-end services",
        "Worked under real-time project scenarios and feedback",
      ],
      skills: ["Python", "HTML", "CSS", "Bootstrap", "Django"],
      link: "https://moviesvibe-lt7u.onrender.com/",
      certificate: {
        name: "Full Stack Web Development with Python",
        thumbnail:
          "https://i.postimg.cc/fWGsQ52w/INTERNSHIP-FULL-STACK-WITH-PYTHON-page-0001.jpg",
        fullImage:
          "https://i.postimg.cc/fWGsQ52w/INTERNSHIP-FULL-STACK-WITH-PYTHON-page-0001.jpg",
        verifyUrl: "https://shashiinfotech.com/",
        credential: "SI-FSP-2025",
      },
    },
  ];

  // Filter experiences based on showAll state
  const displayedExperiences = showAll ? experiences : experiences.slice(0, 4);

  return (
    <section
      id="experience"
      className={`experience-section py-5 ${inView ? "in-view" : ""}`}
      ref={sectionRef}
    >
      <Container>
        <div className="section-header mb-5">
          <h2 className="section-title">Experience</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle text-center text-light mt-4">
            My professional journey and growth. Click on any experience to see
            details.
          </p>
        </div>

        <div className="timeline">
          {displayedExperiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`timeline-item ${
                exp.id % 2 === 0 ? "right" : "left"
              } ${expandedExperience === index ? "expanded" : ""}`}
              style={{
                animationDelay: `${index * 0.1}s`,
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(30px)",
              }}
            >
              <div className="timeline-content">
                <div className="timeline-header">
                  <div className="timeline-icon">
                    <FaBriefcase />
                  </div>
                  <div className="timeline-title">
                    <h3>{exp.role}</h3>
                    <h4>{exp.company}</h4>
                  </div>
                  <button
                    className="expand-btn"
                    onClick={() => toggleExperience(index)}
                  >
                    {expandedExperience === index ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    )}
                  </button>
                </div>

                <div className="timeline-meta">
                  <span className="timeline-duration">
                    <FaCalendarAlt className="me-2" /> {exp.duration}
                  </span>
                  <span className="timeline-location">{exp.location}</span>
                </div>

                <p className="timeline-description">{exp.description}</p>

                {/* Certificate Preview */}
                {exp.certificate && (
                  <div
                    className="cert-preview"
                    onClick={() => openCertModal(exp.certificate)}
                  >
                    <div className="cert-preview-thumb">
                      <img
                        src={exp.certificate.thumbnail}
                        alt={exp.certificate.name}
                      />
                      <div className="cert-preview-overlay">
                        <FaCertificate />
                        <span>View Certificate</span>
                      </div>
                    </div>
                    <div className="cert-preview-info">
                      <FaCertificate className="cert-icon" />
                      <span>Certificate Available</span>
                    </div>
                  </div>
                )}

                <div
                  className={`timeline-details ${
                    expandedExperience === index ? "show" : ""
                  }`}
                >
                  <div className="responsibilities">
                    <h5>Key Responsibilities:</h5>
                    <ul>
                      {exp.responsibilities.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="skills-used">
                    <h5>Skills Applied:</h5>
                    <div className="skill-tags">
                      {exp.skills.map((skill, i) => (
                        <span key={i} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {exp.link && (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="company-link"
                    >
                      <FaExternalLinkAlt className="me-2" /> Visit Company
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More/Less button */}
        {experiences.length > 4 && (
          <div className="text-center mt-4">
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn btn-outline-primary"
            >
              {showAll ? (
                <>
                  <FaChevronUp className="me-2" />
                  Show Less
                </>
              ) : (
                <>
                  <FaChevronDown className="me-2" />
                  Show More ({experiences.length - 4} more)
                </>
              )}
            </button>
          </div>
        )}
      </Container>

      {/* Certificate Modal */}
      {modalOpen && currentCert && (
        <div className="cert-modal-exp" onClick={closeCertModal}>
          <div
            className="modal-content-exp"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn-exp" onClick={closeCertModal}>
              <FaTimes />
            </button>
            <img
              src={currentCert.fullImage}
              alt={currentCert.name}
              className="full-cert-img-exp"
            />
            <div className="cert-modal-info-exp">
              <h3>{currentCert.name}</h3>
              {currentCert.credential && (
                <p>Credential: {currentCert.credential}</p>
              )}
              <a
                href={currentCert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="verify-btn-exp"
              >
                <FaExternalLinkAlt className="me-2" /> Verify Credential
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;
