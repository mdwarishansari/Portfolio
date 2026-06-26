import { createFileRoute } from "@tanstack/react-router";
import { SmoothScroll } from "@/components/portfolio/SmoothScroll";
import { Background } from "@/components/portfolio/Background";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Certifications } from "@/components/portfolio/Certifications";
import { Experience } from "@/components/portfolio/Experience";
import { Social } from "@/components/portfolio/Social";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mohammad Warish Ansari — MERN Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Mohammad Warish Ansari, a MERN Stack Developer building scalable, performance-driven web applications and AI-focused systems.",
      },
      { property: "og:title", content: "Mohammad Warish Ansari — MERN Stack Developer" },
      {
        property: "og:description",
        content:
          "Premium engineering portfolio — projects, skills, experience, and certifications.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-void text-bone">
        <Background />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Experience />
          <Social />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
