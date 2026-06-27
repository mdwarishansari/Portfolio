import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText } from "lucide-react";
import { personal } from "@/data/personal";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Track scroll for glass background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll spy — track which section is in view
  useEffect(() => {
    const ids = personal.navItems.map((n) => n.id);
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.35 },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  const hireMe = () => {
    window.open(
      `mailto:${personal.email}?subject=Job%20Opportunity%20%7C%20Software%20Developer&body=Hi%20Warish%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20I%27m%20interested%20in%20discussing%20a%20potential%20opportunity.%0A%0ARegards`,
    );
    setMobileOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-black/80 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 sm:px-8">
          {/* Brand */}
          <button
            onClick={() => scrollTo("hero")}
            className="eyebrow text-bone transition-opacity hover:opacity-70"
            aria-label="Go to top"
          >
            <span className="text-plum">W</span>arish
          </button>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
            {personal.navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`rounded-full px-4 py-1.5 text-[12px] tracking-[0.06em] transition-all ${
                  activeSection === item.id
                    ? "bg-plum/15 text-bone"
                    : "text-smoke hover:text-bone"
                }`}
                aria-current={activeSection === item.id ? "page" : undefined}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTAs */}
          <div className="flex items-center gap-2">
            <button
              onClick={hireMe}
              className="hidden rounded-full bg-plum px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-bone transition-opacity hover:opacity-90 sm:flex items-center gap-1.5"
              aria-label="Hire me — open email client"
            >
              <FileText size={13} />
              Hire Me
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-bone transition-colors hover:border-plum md:hidden"
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 border-b border-white/10 bg-black/95 backdrop-blur-xl md:hidden"
          >
            <nav
              className="flex flex-col px-5 py-4"
              aria-label="Mobile navigation"
            >
              {personal.navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`rounded-lg px-4 py-3 text-left text-[14px] tracking-[0.04em] transition-colors ${
                    activeSection === item.id
                      ? "text-plum"
                      : "text-ash hover:text-bone"
                  }`}
                  aria-current={activeSection === item.id ? "page" : undefined}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={hireMe}
                className="mt-3 flex items-center gap-2 rounded-full bg-plum px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-bone"
              >
                <FileText size={14} />
                Hire Me
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
