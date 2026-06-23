import React, { useRef, useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./skills.css";
import { skills } from "../../data/skills";

const Skills = () => {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const categories = [
    { id: "all", label: "All Skills", icon: "bi-grid-3x3-gap" },
    { id: "languages", label: "Languages", icon: "bi-code-slash" },
    { id: "frameworks", label: "Frameworks", icon: "bi-layers" },
    { id: "backend", label: "Backend & DB", icon: "bi-server" },
    { id: "tools", label: "Tools & VCS", icon: "bi-tools" },
    { id: "ai", label: "AI & Cloud", icon: "bi-cloud" },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  const displayedSkills = showAll ? filteredSkills : filteredSkills.slice(0, 8);

  return (
    <section
      id="skills"
      className={`skills-section py-20 ${inView ? "in-view" : ""}`}
      ref={sectionRef}
    >
      <div className="section-container">
        <div className="section-header mb-12 text-center">
          <h2 className="section-title">Skills &amp; Expertise</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle text-center mt-4">
            Technologies I've mastered to bring ideas to life
          </p>
        </div>

        {/* Skills Category Tabs */}
        <div className="skills-tabs mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`skill-tab ${activeCategory === category.id ? "active" : ""}`}
              onClick={() => {
                setActiveCategory(category.id);
                setShowAll(false);
              }}
            >
              <i className={`bi ${category.icon} mr-2`}></i>
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {displayedSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-card w-full"
              style={{
                animationDelay: `${index * 0.08}s`,
                "--skill-color": skill.color,
              }}
            >
              <div className="skill-icon-wrapper">
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-glow"></div>
              </div>
              <h3 className="skill-name">{skill.name}</h3>
              <div className="skill-bar-wrapper">
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: inView ? `${skill.level}%` : "0%" }}
                  ></div>
                </div>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>

        {filteredSkills.length > 8 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-show-more"
            >
              {showAll ? (
                <>
                  <FaChevronUp className="mr-2 inline" />
                  Show Less
                </>
              ) : (
                <>
                  <FaChevronDown className="mr-2 inline" />
                  Show More ({filteredSkills.length - 8} more)
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
