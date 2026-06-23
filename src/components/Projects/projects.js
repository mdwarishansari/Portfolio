import React, { useState, useRef, useEffect } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaChevronDown,
  FaChevronUp,
  FaRegCalendarAlt,
  FaStar,
} from "react-icons/fa";
import "./projects.css";
import { projects } from "../../data/projects";

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);
  const [inView, setInView] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
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

  const toggleProject = (projectId) => {
    setExpandedProject((prev) => (prev === projectId ? null : projectId));
  };

  const categories = [
    { id: "all", label: "All Projects", icon: "bi-grid-3x3-gap" },
    { id: "major", label: "Major Projects", icon: "bi-star-fill" },
    { id: "minor", label: "Minor Projects", icon: "bi-collection" },
  ];

  const sortedProjects = [...projects].sort((a, b) => b.id - a.id);
  const filteredProjects =
    activeCategory === "all"
      ? sortedProjects
      : sortedProjects.filter((project) => project.category === activeCategory);
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4);

  return (
    <section
      id="projects"
      className={`projects-section py-20 ${inView ? "in-view" : ""}`}
      ref={sectionRef}
    >
      <div className="section-container">
        <div className="section-header mb-12 text-center">
          <h2 className="section-title">Projects</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle text-center mt-4">
            My latest creations. Click on any project to explore details.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="project-tabs mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`project-tab ${activeCategory === category.id ? "active" : ""}`}
              onClick={() => {
                setActiveCategory(category.id);
                setShowAll(false);
                setExpandedProject(null);
              }}
            >
              <i className={`bi ${category.icon} mr-2`}></i>
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {displayedProjects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card w-full ${expandedProject === project.id ? "expanded" : ""} ${project.category === "major" ? "major-project" : ""}`}
              onClick={() => toggleProject(project.id)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow Effect for Major */}
              {project.category === "major" && (
                <div className="major-glow"></div>
              )}

              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <span className="project-emoji">{project.emoji}</span>
                </div>
                <div className="project-date-badge">
                  <FaRegCalendarAlt className="mr-1 inline" /> {project.date}
                </div>
                {project.category === "major" && (
                  <div className="major-badge">
                    <FaStar className="mr-1 inline" /> Featured
                  </div>
                )}
              </div>

              <div className="project-info">
                <div className="project-header">
                  <div>
                    <h3 className="project-title">
                      {project.emoji} {project.title}
                    </h3>
                    <p className="project-subtitle">{project.subtitle}</p>
                  </div>
                  <button className="expand-toggle">
                    {expandedProject === project.id ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    )}
                  </button>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.skills.slice(0, 4).map((skill, i) => (
                    <span key={i} className="tech-tag">
                      {skill}
                    </span>
                  ))}
                  {project.skills.length > 5 && (
                    <span className="tech-tag more">
                      +{project.skills.length - 4}
                    </span>
                  )}
                </div>

                <div
                  className={`project-expanded ${expandedProject === project.id ? "show" : ""}`}
                >
                  <p className="project-long-desc">{project.longDescription}</p>

                  <div className="all-tech">
                    <h5>All Technologies</h5>
                    <div className="tech-list">
                      {project.skills.map((skill, i) => (
                        <span key={i} className="tech-chip">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="project-actions">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="action-btn github-btn"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaGithub /> Code
                      </a>
                    )}
                    {project.projectLink && (
                      <a
                        href={project.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="action-btn live-btn"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length > 4 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-show-more"
            >
              {showAll ? (
                <>
                  <FaChevronUp className="mr-2 inline" /> Show Less
                </>
              ) : (
                <>
                  <FaChevronDown className="mr-2 inline" /> Show More (
                  {filteredProjects.length - 4} more)
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
