import React, { useEffect } from "react";
import GradientButton from "../common/GradientButton";
import "./about.css";
import { personal } from "../../data/personal";

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.1 }
    );

    document
      .querySelectorAll(".about-content, .about-photo-container")
      .forEach((el) => {
        observer.observe(el);
      });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <div className="section-row">
          {/* Photo Column */}
          <div className="about-photo-col section-col">
            <div className="about-photo-container">
              <div className="photo-frame">
                <div className="photo-img">
                  <img
                    src={personal.about.profileImage}
                    alt="Warish animated"
                    className="profile-image"
                  />
                  <div className="decoration-circle blue"></div>
                  <div className="decoration-circle purple"></div>
                  <div className="decoration-ring"></div>
                  <div className="tech-dot dot1"></div>
                  <div className="tech-dot dot2"></div>
                  <div className="tech-dot dot3"></div>
                  <div className="tech-dot dot4"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="about-content section-col">
            <div className="content-wrapper">
              <div className="greeting-text">{personal.about.greeting}</div>
              <h1 className="name-title">
                I am <span className="highlight">{personal.name}</span>
              </h1>

              <p className="about-text">
                {personal.about.description}
              </p>

              <div className="cta-container">
                <GradientButton
                  href={personal.resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-resume-btn"
                >
                  <i className="bi bi-file-earmark-pdf mr-2"></i>
                  View Resume
                </GradientButton>
                <GradientButton variant="outline" href="#projects">
                  <i className="bi bi-code-slash mr-2"></i>
                  See What I've Built
                </GradientButton>
              </div>

              <div className="experience-container">
                {personal.about.stats.map((stat) => (
                  <div key={stat.id} className="experience-item">
                    <div className="exp-icon">
                      <i className={`bi ${stat.icon}`}></i>
                    </div>
                    <div className="exp-details">
                      <div className="exp-count">{stat.count}</div>
                      <div className="exp-title">{stat.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
