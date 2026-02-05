import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./about.css";
// import profileImage from "./img/dp.jpeg"; // Import your profile image
import profileGif from "./img/DP.gif";

const About = () => {
  useEffect(() => {
    // Initialize animation effects
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
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="about-photo-col">
            <div className="about-photo-container">
              <div className="photo-frame">
                <div className="photo-img">
                  {/* <div
                    className="profile-image"
                    style={{ backgroundImage: `url(${profileImage})` }}
                  ></div> */}
                  <img
  src={profileGif}
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
          </Col>

          <Col lg={6} className="about-content">
            <div className="content-wrapper">
              <div className="greeting-text">Hello!</div>
              <h1 className="name-title">
                I am <span className="highlight">Mohammad Warish Ansari</span>
              </h1>

              <p className="about-text">
                I’m a B.Tech Computer Science student specializing in Full Stack Development with the MERN stack. I focus on building scalable, responsive, and performance-driven web applications using modern technologies. Alongside web development, I’m actively strengthening my foundations in machine learning with the goal of integrating intelligent systems into real-world applications. My approach is practical — build meaningful projects, solve real problems, and continuously improve through hands-on experience.
              </p>

              <div className="cta-container">
                <Button
                  href="https://drive.google.com/drive/folders/1oAuFxm0ZOHpSErySDUs6sjHubDo0Wxi-?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-resume-btn"
                >
                  <i className="bi bi-file-earmark-pdf me-2"></i>
                  View Resume
                </Button>
                <Button variant="outline-primary" href="#projects">
                  <i className="bi bi-code-slash me-2"></i>
                  See What I've Built
                </Button>
              </div>

              <div className="experience-container">
                <div className="experience-item">
                  <div className="exp-icon">
                    <i className="bi bi-code-square"></i>
                  </div>
                  <div className="exp-details">
                    <div className="exp-count">5+</div>
                    <div className="exp-title">Projects</div>
                  </div>
                </div>

                <div className="experience-item">
                  <div className="exp-icon">
                    <i className="bi bi-lightning-charge"></i>
                  </div>
                  <div className="exp-details">
                    <div className="exp-count">4+</div>
                    <div className="exp-title">Internships</div>
                  </div>
                </div>

                <div className="experience-item">
                  <div className="exp-icon">
                    <i className="bi bi-award"></i>
                  </div>
                  <div className="exp-details">
                    <div className="exp-count">20+</div>
                    <div className="exp-title">Certifications</div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
