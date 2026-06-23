import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import GradientButton from "../common/GradientButton";
import "./hero.css";
import Spline from "@splinetool/react-spline";
import { personal } from "../../data/personal";
import { socials } from "../../data/socials";

const Hero = () => {
  const [showRoleAnimation, setShowRoleAnimation] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  const handleHireMe = () => {
    const subject = encodeURIComponent("Hire from Portfolio");
    const body = encodeURIComponent(
      "Hii Warish,\n\nI want to hire you and discuss potential opportunities."
    );
    window.location.href = `https://mail.google.com/mail/?view=cm&to=${socials.email}&su=${subject}&body=${body}`;
  };

  useEffect(() => {
    if (showRoleAnimation) {
      setCursorVisible(false);
      const timer = setTimeout(() => setCursorVisible(true), 300);
      return () => clearTimeout(timer);
    }
  }, [showRoleAnimation]);

  const introSequence = [
    ...personal.hero.typeSequencePrefix,
    () => setShowRoleAnimation(true),
  ];

  return (
    <section id="hero" className="py-20">
      <div className="section-container">
        <div className="hero-inner-row">
          {/* Text Content */}
          <div className="hero-text">
            <h2 className="text-blue-400 text-2xl font-semibold mb-0">{personal.hero.greeting}</h2>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mt-0 leading-tight">
              <TypeAnimation
                sequence={introSequence}
                wrapper="span"
                speed={30}
                style={{ display: "inline-block", color: "#ffffff" }}
                cursor={false}
                repeat={0}
              />
              {showRoleAnimation ? (
                <>
                  <br />
                  <TypeAnimation
                    sequence={personal.hero.roles}
                    wrapper="span"
                    speed={30}
                    deletionSpeed={70}
                    style={{
                      display: "inline-block",
                      color: "#0d6efd",
                      position: "relative",
                      fontWeight: "800",
                    }}
                    repeat={50}
                    cursor={cursorVisible}
                  />
                </>
              ) : (
                <span className="blinking-cursor" style={{ color: "#0d6efd" }}>|</span>
              )}
            </h1>

            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              {personal.hero.highlights.map((highlight, index) => (
                <React.Fragment key={index}>
                  {highlight}
                  {index < personal.hero.highlights.length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>

            <div className="hero-buttons">
              <GradientButton onClick={handleHireMe}>
                <i className="bi bi-envelope-arrow-up mr-2"></i>
                Hire Me
              </GradientButton>

              <GradientButton variant="outline" href="#projects">
                <i className="bi bi-rocket-takeoff mr-2"></i>
                See What I've Built
              </GradientButton>
            </div>
          </div>

          {/* Spline Column */}
          <div className="spline-col">
            <div className="spline-container">
              <Spline
                scene={personal.hero.splineScene}
                className="spline-scene"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
