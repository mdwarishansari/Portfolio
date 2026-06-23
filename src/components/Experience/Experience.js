// src/components/Experience/Experience.js
import React, { useState, useRef, useEffect } from "react";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaExternalLinkAlt,
  FaChevronDown,
  FaChevronUp,
  FaCertificate,
  FaTimes,
} from "react-icons/fa";
import GradientButton from "../common/GradientButton";
import "./experience.css";
import { experience as experiences } from "../../data/experience";

const Experience = () => {
  const [expandedExperience, setExpandedExperience] = useState(null);
  const [inView, setInView] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentCert, setCurrentCert] = useState(null);
  const sectionRef = useRef(null);

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
    setExpandedExperience(expandedExperience === index ? null : index);
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

  const displayedExperiences = showAll ? experiences : experiences.slice(0, 4);

  return (
    <section
      id="experience"
      className={`experience-section py-20 ${inView ? "in-view" : ""}`}
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="section-header mb-12 text-center">
          <h2 className="section-title">Experience</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle text-center text-gray-300 mt-4">
            My professional journey and growth. Click on any experience to see details.
          </p>
        </div>

        <div className="timeline">
          {displayedExperiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`timeline-item ${exp.id % 2 === 0 ? "right" : "left"} ${expandedExperience === index ? "expanded" : ""}`}
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
                    {expandedExperience === index ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                </div>

                <div className="timeline-meta">
                  <span className="timeline-duration">
                    <FaCalendarAlt className="mr-2 inline" /> {exp.duration}
                  </span>
                  <span className="timeline-location">{exp.location}</span>
                </div>

                <p className="timeline-description">{exp.description}</p>

                {/* Certificate Preview */}
                {exp.certificate && (
                  <div className="cert-preview" onClick={() => openCertModal(exp.certificate)}>
                    <div className="cert-preview-thumb">
                      <img src={exp.certificate.thumbnail} alt={exp.certificate.name} />
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

                <div className={`timeline-details ${expandedExperience === index ? "show" : ""}`}>
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
                        <span key={i} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>

                  {exp.link && (
                    <GradientButton
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="company-link"
                    >
                      <FaExternalLinkAlt className="mr-2 inline" /> Visit Company
                    </GradientButton>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {experiences.length > 4 && (
          <div className="text-center mt-10">
            <GradientButton variant="outline" onClick={() => setShowAll(!showAll)}>
              {showAll ? (
                <><FaChevronUp className="mr-2 inline" /> Show Less</>
              ) : (
                <><FaChevronDown className="mr-2 inline" /> Show More ({experiences.length - 4} more)</>
              )}
            </GradientButton>
          </div>
        )}
      </div>

      {/* Certificate Modal */}
      {modalOpen && currentCert && (
        <div className="cert-modal-exp" onClick={closeCertModal}>
          <div className="modal-content-exp" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn-exp" onClick={closeCertModal}>
              <FaTimes />
            </button>
            <img src={currentCert.fullImage} alt={currentCert.name} className="full-cert-img-exp" />
            <div className="cert-modal-info-exp">
              <h3>{currentCert.name}</h3>
              {currentCert.credential && <p>Credential: {currentCert.credential}</p>}
              <a
                href={currentCert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="verify-btn-exp"
              >
                <FaExternalLinkAlt className="mr-2 inline" /> Verify Credential
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;
