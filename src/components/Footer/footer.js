import React from "react";
import {
  BiHeart,
  BiCopyright,
  BiEnvelope,
  BiMap,
  BiCodeAlt,
  BiCoffee,
} from "react-icons/bi";
import GradientButton from "../common/GradientButton";
import "./footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleHireMe = () => {
    const subject = encodeURIComponent("Hire from Portfolio");
    const body = encodeURIComponent(
      "Hii Warish,\n\nI want to hire you and discuss potential opportunities."
    );
    window.location.href = `https://mail.google.com/mail/?view=cm&to=warishansari018@gmail.com&su=${subject}&body=${body}`;
  };

  return (
    <footer className="bg-black text-white py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Contact Information */}
          <div className="md:pr-8">
            <h4 className="text-blue-400 text-xl font-bold mb-6">Get In Touch</h4>
            <div className="flex mb-4">
              <BiEnvelope className="text-blue-400 text-xl mr-3 mt-1 shrink-0" />
              <div>
                <p className="mb-0 text-gray-400 text-sm">Email</p>
                <a
                  href="mailto:warishansari018@gmail.com"
                  className="text-white hover:text-blue-400 transition-colors no-underline text-sm"
                >
                  warishansari018@gmail.com
                </a>
              </div>
            </div>
            <div className="flex mb-6">
              <BiMap className="text-blue-400 text-xl mr-3 mt-1 shrink-0" />
              <div>
                <p className="mb-0 text-gray-400 text-sm">Location</p>
                <p className="text-white mb-0 text-sm">Ranchi Jharkhand, India</p>
              </div>
            </div>

            <GradientButton
              variant="outline"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              ↑ Back to Top
            </GradientButton>
          </div>

          {/* Development Stats */}
          <div>
            <h4 className="text-blue-400 text-xl font-bold mb-6">Development Journey</h4>

            {[
              { label: "Coding Hours", value: "5,000+", width: "75%" },
              { label: "Projects Completed", value: "5+", width: "55%" },
              { label: "Technologies Mastered", value: "30+", width: "75%" },
            ].map((stat) => (
              <div key={stat.label} className="mb-5">
                <div className="flex justify-between mb-2 text-sm">
                  <span className="text-gray-300">{stat.label}</span>
                  <span className="text-white font-semibold">{stat.value}</span>
                </div>
                <div className="footer-progress-track">
                  <div
                    className="footer-progress-bar"
                    style={{ width: stat.width }}
                  ></div>
                </div>
              </div>
            ))}

            <div className="flex items-center text-gray-400 mt-5">
              <BiCoffee className="text-blue-400 mr-2 text-2xl" />
              <span className="text-sm">Fueled by countless cups of coffee</span>
            </div>
          </div>

          {/* Coding Philosophy */}
          <div className="border-l border-blue-800 pl-8">
            <h4 className="text-blue-400 text-xl font-bold mb-6">Development Philosophy</h4>
            <blockquote className="italic text-gray-300 mb-6 leading-relaxed">
              "Clean code is not just efficient, it's an art form that
              communicates ideas beyond functionality."
            </blockquote>

            <div className="flex items-center mb-6">
              <BiCodeAlt className="text-blue-400 text-4xl mr-3 shrink-0" />
              <p className="mb-0 text-gray-300 text-sm">
                Every line of code tells a story of problem-solving and innovation
              </p>
            </div>

            <GradientButton onClick={handleHireMe} className="w-full justify-center">
              <BiEnvelope className="mr-2" />
              Hire Me
            </GradientButton>
          </div>
        </div>

        {/* Copyright row */}
        <div className="mt-12 pt-6 border-t border-gray-800 text-center">
          <p className="mb-1 flex items-center justify-center text-gray-400 text-sm">
            <BiCopyright className="mr-2" />
            {currentYear}&nbsp;
            <span className="text-blue-400 font-semibold">Md Warish Ansari</span>.&nbsp;All
            rights reserved
          </p>
          <p className="mb-0 text-gray-500 text-sm">
            Crafted with <BiHeart className="text-red-500 mx-1 inline" /> using React,
            Tailwind CSS &amp;{" "}
            <a
              href="https://app.spline.design/community/file/8cfb6748-f3dd-44dd-89fb-f46c7ab4186e"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Spline
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
