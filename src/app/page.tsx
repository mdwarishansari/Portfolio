"use client";

import React from "react";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Certifications } from "@/components/portfolio/Certifications";
import { Social } from "@/components/portfolio/Social";
import { Footer } from "@/components/portfolio/Footer";
import { Background } from "@/components/portfolio/Background";
import { SmoothScroll } from "@/components/portfolio/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-black text-white selection:bg-purple-600 selection:text-white">
        <Background />
        <Navbar />
        
        <main className="relative z-10 flex flex-col items-center w-full">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <Social />
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
