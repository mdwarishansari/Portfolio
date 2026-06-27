import { useEffect, useState, Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { FileText, Github, Mail, ArrowDown } from "lucide-react";
import { personal } from "@/data/personal";
import { socials } from "@/data/socials";

const HeroScene = lazy(() =>
  import("./HeroScene").then((m) => ({ default: m.HeroScene })),
);

function useTypedRole() {
  const roles = personal.hero.roles;
  const [index, setIndex] = useState(0);
  const [sub, setSub] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    if (!deleting && sub === current.length) {
      const t = setTimeout(() => setDeleting(true), 1400);
      return () => clearTimeout(t);
    }
    if (deleting && sub === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % roles.length);
      return;
    }
    const t = setTimeout(
      () => setSub((s) => s + (deleting ? -1 : 1)),
      deleting ? 45 : 80,
    );
    return () => clearTimeout(t);
  }, [sub, deleting, index, roles]);

  return roles[index].slice(0, sub);
}

export function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const typed = useTypedRole();

  return (
    <section
      id="hero"
      className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1200px] scroll-mt-24 flex-col items-center gap-8 px-5 pb-16 pt-28 sm:px-8 lg:flex-row lg:gap-6 lg:pt-24"
    >
      {/* LEFT — text 40% */}
      <div className="order-2 w-full lg:order-1 lg:w-[42%]">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="eyebrow inline-flex items-center gap-2 text-plum"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-lichen opacity-75 pulse-ring" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-lichen" />
          </span>
          {personal.hero.greeting} {personal.hero.availability}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.7 }}
          className="display-thin mt-5 text-[44px] leading-[0.92] text-bone sm:text-[64px] lg:text-[72px]"
        >
          Mohammad
          <br />
          <span className="font-normal">Warish Ansari</span>
        </motion.h1>

        <div className="mt-5 flex h-7 items-center text-[18px] font-medium tracking-[0.01em] text-plum sm:text-[22px]">
          {typed}
          <span className="ml-0.5 inline-block h-5 w-[2px] animate-pulse bg-plum" />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-5 max-w-[52ch] text-[15px] leading-relaxed tracking-[0.01em] text-ash"
        >
          {personal.hero.intro}
        </motion.p>

        {/* CTAs */}
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={personal.resumeLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-plum px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-bone transition-opacity hover:opacity-90"
          >
            <FileText size={15} /> Resume
          </a>
          <a
            href={socials.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-bone transition-colors hover:border-bone"
          >
            <Github size={15} /> GitHub
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-amber/50 px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-amber transition-colors hover:bg-amber/10"
          >
            <Mail size={15} /> Contact
          </a>
        </div>

        {/* Quick highlights */}
        <div className="mt-8 flex flex-wrap gap-2">
          {personal.hero.highlights.map((h) => (
            <span
              key={h}
              className="rounded-full border border-white/10 px-3 py-1.5 text-[11px] tracking-[0.02em] text-smoke"
            >
              {h}
            </span>
          ))}
        </div>

        {/* Current focus */}
        <div className="mt-7 flex items-center gap-3 text-[12px] tracking-[0.02em] text-smoke">
          <span className="h-px w-8 bg-white/15" />
          <span>
            <span className="text-ash">Current focus — </span>
            {personal.hero.currentFocus}
          </span>
        </div>
      </div>

      {/* RIGHT — 3D scene 60% */}
      <div className="relative order-1 h-[44vh] w-full lg:order-2 lg:h-[600px] lg:w-[58%]">
        <div className="absolute inset-0">
          {mounted && (
            <Suspense fallback={null}>
              <HeroScene />
            </Suspense>
          )}
        </div>
        {/* corner labels for a "workstation" framing */}
        <div className="pointer-events-none absolute left-2 top-2 font-mono text-[10px] uppercase tracking-[0.2em] text-smoke">
          ~/workspace
        </div>
        <div className="pointer-events-none absolute bottom-2 right-2 font-mono text-[10px] uppercase tracking-[0.2em] text-smoke">
          interactive · drag-free
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-smoke transition-colors hover:text-bone lg:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </a>
    </section>
  );
}
