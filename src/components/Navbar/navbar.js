import React, { useState, useEffect } from "react";
import GradientButton from "../common/GradientButton";
import "./navbar.css";

const CustomNavbar = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleHireMe = () => {
    const subject = encodeURIComponent("Hire from Portfolio");
    const body = encodeURIComponent(
      "Hii Warish,\n\nI want to hire you and discuss potential opportunities.",
    );
    window.location.href = `https://mail.google.com/mail/?view=cm&to=warishansari018@gmail.com&su=${subject}&body=${body}`;
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sectionIds = [
        "hero", "about", "skills", "projects",
        "certifications", "experience", "social",
      ];

      const scrollY = window.scrollY + 200;
      let currentSection = sectionIds[0];

      for (let id of sectionIds) {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollY) {
          currentSection = id;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero",           icon: "bi-house-door",     label: "Home" },
    { id: "about",          icon: "bi-person",          label: "About" },
    { id: "skills",         icon: "bi-tools",           label: "Skills" },
    { id: "projects",       icon: "bi-rocket-takeoff",  label: "Projects" },
    { id: "certifications", icon: "bi-award",           label: "Certs" },
    { id: "experience",     icon: "bi-briefcase",       label: "Experience" },
    { id: "social",         icon: "bi-person-plus",     label: "Social" },
  ];

  return (
    <nav className={`custom-navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-inner">
        {/* Brand */}
        <a href="/" className="brand-logo">
          <i className="bi bi-laptop"></i>
          Portfolio
        </a>

        {/* Desktop Nav Links */}
        <div className="nav-desktop">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link-custom ${activeSection === item.id ? "active" : ""}`}
            >
              <i className={`bi ${item.icon}`}></i>
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA + Hamburger */}
        <div className="nav-actions">
          <div className="nav-cta-desktop">
            <GradientButton onClick={handleHireMe}>
              <i className="bi bi-envelope-arrow-up" style={{ marginRight: "8px" }}></i>
              Hire Me
            </GradientButton>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`navbar-toggler ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`nav-link-custom mobile-nav-link ${activeSection === item.id ? "active" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            <i className={`bi ${item.icon}`} style={{ marginRight: "8px" }}></i>
            {item.label}
          </a>
        ))}
        <div className="mobile-cta">
          <GradientButton onClick={handleHireMe}>
            <i className="bi bi-envelope-arrow-up" style={{ marginRight: "8px" }}></i>
            Hire Me
          </GradientButton>
        </div>
      </div>
    </nav>
  );
};

export default CustomNavbar;
