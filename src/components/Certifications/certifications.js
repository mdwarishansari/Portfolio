// src/components/Certifications.js
import React, { useState, useRef, useEffect } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaExternalLinkAlt,
  FaPlus,
  FaMinus,
  FaStar,
  FaCode,
  FaDesktop,
  FaCloud,
} from "react-icons/fa";
import "./certifications.css";
import { certifications } from "../../data/certifications";

const Certifications = () => {
  const [expandedCert, setExpandedCert] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentCert, setCurrentCert] = useState(null);
  const [inView, setInView] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [activeCategory, setActiveCategory] = useState("highlighted");
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleCert = (index) => {
    setExpandedCert(expandedCert === index ? null : index);
  };

  const openModal = (cert) => {
    setCurrentCert(cert);
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const toggleShowAll = () => setShowAll(!showAll);

  const categories = [
    { id: "highlighted", label: "Highlighted", icon: <FaStar /> },
    { id: "cloud", label: "Cloud & DevOps", icon: <FaCloud /> },
    { id: "development", label: "Development", icon: <FaCode /> },
    { id: "foundations", label: "Foundations", icon: <FaDesktop /> },
  ];

  const filteredCerts =
    activeCategory === "highlighted"
      ? certifications.filter((cert) => cert.category === "highlighted")
      : activeCategory === "all"
      ? certifications
      : certifications.filter((cert) => cert.category === activeCategory);

  return (
    <section
      id="certifications"
      className={`certifications-section py-20 ${inView ? "in-view" : ""}`}
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="section-header mb-12 text-center">
          <h2 className="section-title">Certifications</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle text-center text-gray-300 mt-4">
            My professional credentials. Click to view details.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="cert-tabs mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`cert-tab ${activeCategory === category.id ? "active" : ""}`}
              onClick={() => {
                setActiveCategory(category.id);
                setShowAll(false);
                setExpandedCert(null);
              }}
            >
              <span className="tab-icon">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>

        {/* Certs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-items-center">
          {filteredCerts.slice(0, showAll ? filteredCerts.length : 6).map((cert, index) => (
            <div
              key={cert.id}
              className={`cert-card w-full ${expandedCert === index ? "expanded" : ""} ${cert.category === "highlighted" ? "highlighted-cert" : ""}`}
              style={{
                animationDelay: `${index * 0.1}s`,
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(30px)",
              }}
            >
              {cert.category === "highlighted" && <div className="highlight-glow"></div>}

              <div className="cert-header">
                <div className="cert-thumbnail" onClick={() => openModal(cert)}>
                  <img src={cert.thumbnail} alt={cert.name} className="thumbnail-img" />
                  <div className="thumbnail-overlay">
                    <span>🔍 View Full</span>
                  </div>
                  {cert.category === "highlighted" && (
                    <div className="featured-badge">
                      <FaStar /> Featured
                    </div>
                  )}
                </div>
                <div className="cert-info">
                  <div className="cert-title-container">
                    <h3 className="cert-title">{cert.name}</h3>
                    <button className="expand-btn" onClick={() => toggleCert(index)}>
                      {expandedCert === index ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                  </div>
                  <div className="cert-meta">
                    <span className="cert-authority">{cert.authority}</span>
                    <span className="cert-date">{cert.date}</span>
                  </div>
                  <p className="cert-description">{cert.description}</p>
                </div>
              </div>

              <div className={`cert-details ${expandedCert === index ? "show" : ""}`}>
                <div className="skills-acquired">
                  <h4>Skills Acquired:</h4>
                  <div className="skill-tags">
                    {cert.skills.map((skill, i) => (
                      <span key={i} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>

                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="verify-btn"
                >
                  <FaExternalLinkAlt className="mr-2 inline" /> Verify Credential
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredCerts.length > 6 && (
          <div className="text-center mt-12">
            <button className="btn-show-more" onClick={toggleShowAll}>
              {showAll ? (
                <><FaMinus className="mr-2 inline" /> Show Less</>
              ) : (
                <><FaPlus className="mr-2 inline" /> Show More ({filteredCerts.length - 6} more)</>
              )}
            </button>
          </div>
        )}
      </div>

      {/* Full Certificate Modal */}
      {modalOpen && currentCert && (
        <div className="cert-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ marginTop: "20vh" }}>
            <span className="close-btn" onClick={closeModal}>&times;</span>
            <img src={currentCert.fullImage} alt={currentCert.name} className="full-cert-img" />
            <div className="cert-modal-info">
              <h3>{currentCert.name}</h3>
              <p>Issued by: {currentCert.authority}</p>
              <p>Date: {currentCert.date}</p>
              <a href={currentCert.verifyUrl} target="_blank" rel="noopener noreferrer" className="verify-btn">
                <FaExternalLinkAlt className="mr-2 inline" /> Verify Credential
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
