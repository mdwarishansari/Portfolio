// src/components/Projects.js
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

// imgs
import moviesvibe from "./cover_img/moviesvibe.png";
import cartnest from "./cover_img/cartnest.png";
import blueblog from "./cover_img/blueblog.png";

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

  const projects = [
    {
      id: 3,
      title: "BlueBlog",
      subtitle: "Full-Scale SEO-Based Role-Based Blogging Platform",
      description:
        "Production-ready SEO-first blogging platform with full CMS, role-based access, PostgreSQL, Prisma, JWT auth, Cloudinary, and Vercel deployment.",
      longDescription:
        "BlueBlog is a full-stack production blogging system built using Next.js App Router and TypeScript. It includes a complete public SEO-optimized blog and a secure admin CMS with role-based access control (ADMIN | EDITOR | WRITER). Features include draft/publish workflow, post verification system, category & media management, site settings control, JWT authentication with refresh tokens, Cloudinary image optimization, Neon PostgreSQL database with Prisma ORM, guarded database seeding, migration-based schema management, skeleton loading for performance, Open Graph + JSON-LD structured data, and Lighthouse scores close to 100 across all public pages. Deployed serverlessly on Vercel using automated Prisma migrations.",
      skills: [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "PostgreSQL (Neon)",
        "Prisma ORM",
        "Tailwind CSS",
        "JWT Authentication",
        "Cloudinary",
        "SEO Optimization",
        "Role-Based Access Control",
        "Tiptap Editor",
        "Vercel Deployment",
      ],
      image: blueblog,
      projectLink: "https://blueblog-v1.vercel.app/",
      githubLink: "https://github.com/mdwarishansari/Blueblog",
      date: "January 2026",
      category: "major",
      emoji: "🚀",
    },
    {
      id: 2,
      title: "CartNest",
      subtitle: "Multi-Vendor E-Commerce Marketplace",
      description:
        "Built a scalable multi-vendor marketplace with role-based dashboards, Razorpay payment integration, and real-time order management.",
      longDescription:
        "CartNest is a full-stack multi-vendor e-commerce marketplace built using MERN stack with advanced production-level features. It supports multiple user roles (Customer, Seller, Admin, Verifier), secure authentication via Firebase + JWT, Razorpay payment integration, Cloudinary image uploads, and Redis-based stock locking. The platform includes real-time order management, seller dashboards, product verification workflows, and admin-level control over the entire system. Designed with scalability, security, and real-world business logic in mind.",
      skills: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "Tailwind CSS",
        "Firebase Auth",
        "Razorpay",
        "Redis",
        "Cloudinary",
        "JWT",
      ],
      image: cartnest,
      projectLink: "https://cartnest-shop.vercel.app/",
      githubLink: "https://github.com/mdwarishansari/CartNest",
      date: "March 2026",
      category: "major",
      emoji: "🛒",
    },
    {
      id: 1,
      title: "MoviesVibe",
      subtitle: "Movie Discovery App",
      description:
        "Interactive React web app with OMDB API integration for movie data display.",
      longDescription:
        "Deepened understanding of React fundamentals: state management, async API calls, component rendering, and responsive design principles.",
      skills: ["Django", "React", "Python", "API Integration"],
      image: moviesvibe,
      projectLink: "https://moviesvibe-lt7u.onrender.com/",
      githubLink: "https://github.com/mdwarishansari/MoviesVibe",
      date: "February 2025",
      category: "major",
      emoji: "🎬",
    },
  ];

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
                  {project.skills.length > 4 && (
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
