import { lazy, Suspense } from "react";
import { SmoothScroll } from "@/components/portfolio/SmoothScroll";
import { Background } from "@/components/portfolio/Background";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Footer } from "@/components/portfolio/Footer";

// Lazy-load below-fold heavy sections for better initial load performance
const Certifications = lazy(() =>
  import("@/components/portfolio/Certifications").then((m) => ({ default: m.Certifications })),
);
const Experience = lazy(() =>
  import("@/components/portfolio/Experience").then((m) => ({ default: m.Experience })),
);
const Social = lazy(() =>
  import("@/components/portfolio/Social").then((m) => ({ default: m.Social })),
);

export default function App() {
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
          <Suspense fallback={null}>
            <Certifications />
            <Experience />
            <Social />
          </Suspense>
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
