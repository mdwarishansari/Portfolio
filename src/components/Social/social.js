import React, { useRef, useEffect, useState } from "react";
import "./social.css";
import { socialLinks } from "../../data/socials";

const Social = () => {
  const [inView, setInView] = useState(false);
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

  return (
    <section
      id="social"
      className={`social-section py-20 ${inView ? "in-view" : ""}`}
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="section-header mb-12 text-center">
          <h2 className="section-title">Connect With Me</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle text-center mt-4">
            Find me on these platforms and let's collaborate
          </p>
        </div>

        <div className="social-grid">
          {socialLinks.map((social, index) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
              style={{
                "--hover-bg": social.hoverBg,
                "--icon-color": social.color,
                animationDelay: `${index * 0.08}s`,
                opacity: inView ? 1 : 0,
                transform: inView
                  ? "translateY(0) scale(1)"
                  : "translateY(40px) scale(0.9)",
              }}
            >
              <div className="social-icon-wrapper">
                <div className="social-icon">{social.icon}</div>
                <div className="social-ring"></div>
              </div>
              <span className="social-name">{social.name}</span>
              <div className="social-arrow">
                <i className="bi bi-arrow-up-right"></i>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Social;
