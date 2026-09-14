import { lazy, Suspense, useEffect } from "react";
import { SmoothScroll } from "@/components/portfolio/SmoothScroll";
import { Background } from "@/components/portfolio/Background";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Footer } from "@/components/portfolio/Footer";

// Heavy below-fold sections loaded lazily for initial bundle savings.
// Each has its own Suspense so it can be individually rendered and
// discovered by the hash-scroll handler as soon as it mounts.
const Certifications = lazy(() =>
  import("@/components/portfolio/Certifications").then((m) => ({ default: m.Certifications })),
);
const Experience = lazy(() =>
  import("@/components/portfolio/Experience").then((m) => ({ default: m.Experience })),
);
const Social = lazy(() =>
  import("@/components/portfolio/Social").then((m) => ({ default: m.Social })),
);

/**
 * Handles deep-link hash navigation that arrives before lazy sections mount.
 * After React finishes the initial render, we check window.location.hash and
 * scroll to the target element. We retry up to ~3 s in case the lazy chunk
 * hasn't resolved yet.
 *
 * Aliased hashes (e.g. #certificate → #certifications) are normalised here
 * so external links / SEO tools that use the singular form still work.
 */
function useHashScroll() {
  useEffect(() => {
    const HASH_ALIASES: Record<string, string> = {
      certificate: "certifications",
      cert: "certifications",
      skill: "skills",
      project: "projects",
      experience: "experience",
      social: "social",
    };

    const raw = window.location.hash.slice(1).toLowerCase();
    if (!raw) return;

    const target = HASH_ALIASES[raw] ?? raw;

    let attempts = 0;
    const MAX_ATTEMPTS = 30; // 30 × 100 ms = 3 s

    const tryScroll = () => {
      const el = document.getElementById(target);
      if (el) {
        // Small timeout ensures layout is stable after lazy chunk paint
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 80);
        return;
      }
      if (++attempts < MAX_ATTEMPTS) {
        setTimeout(tryScroll, 100);
      }
    };

    // Start after first paint
    setTimeout(tryScroll, 200);
  }, []);
}

export default function App() {
  useHashScroll();

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
          {/* Individual Suspense per section so each mounts independently,
              allowing the hash-scroll handler to find them as they appear. */}
          <Suspense fallback={null}>
            <Certifications />
          </Suspense>
          <Suspense fallback={null}>
            <Experience />
          </Suspense>
          <Suspense fallback={null}>
            <Social />
          </Suspense>
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
