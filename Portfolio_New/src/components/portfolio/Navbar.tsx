import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, ChevronDown, Calendar } from "lucide-react";
import { projects, projectCategories, type Project } from "@/data/projects";
import { Section, SectionHeading, Chip } from "./primitives";

function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -6, y: px * 6 });
  };

  const visibleSkills = project.skills.slice(0, 4);
  const extra = project.skills.length - visibleSkills.length;

  return (
    <motion.div
      ref={ref}
      layout
      onMouseMove={onMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{ transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
      className="group hairline relative flex flex-col overflow-hidden transition-[border-color] duration-300 hover:border-plum/50"
    >
      {/* spotlight border accent */}
      <div className="pointer-events-none absolute inset-0 rounded-[24px] opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ boxShadow: "inset 0 0 60px -20px rgba(128,82,255,0.5)" }} />

      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        {project.featured && (
          <span className="absolute right-3 top-3 rounded-full border border-plum/50 bg-black/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-plum backdrop-blur">
            Featured
          </span>
        )}
        <span className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-[10px] tracking-[0.06em] text-ash backdrop-blur">
          <Calendar size={11} /> {project.date}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="flex items-center gap-2 text-[20px] font-semibold tracking-tight text-bone">
          <span>{project.emoji}</span> {project.title}
        </h3>
        <p className="mt-1 text-[13px] font-medium text-plum">{project.subtitle}</p>
        <p className="mt-3 text-[14px] leading-relaxed text-ash">
          {project.description}
        </p>

        {/* tech chips */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {visibleSkills.map((s) => (
            <Chip key={s}>{s}</Chip>
          ))}
          {extra > 0 && !expanded && (
            <span className="rounded-full border border-plum/30 px-3 py-1 text-[11px] text-plum">
              +{extra}
            </span>
          )}
        </div>

        {/* expandable long description + all tech */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <p className="mt-4 border-t border-white/10 pt-4 text-[13px] leading-relaxed text-ash">
                {project.longDescription}
              </p>
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-smoke">
                All Technologies
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {project.skills.map((s) => (
                  <Chip key={s}>{s}</Chip>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-auto flex items-center gap-2 pt-5">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 text-[12px] tracking-[0.02em] text-bone transition-colors hover:border-bone"
          >
            <Github size={14} /> Code
          </a>
          <a
            href={project.projectLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-plum px-4 py-2 text-[12px] font-semibold tracking-[0.02em] text-bone transition-opacity hover:opacity-90"
          >
            <ExternalLink size={14} /> Live Demo
          </a>
          <button
            onClick={() => setExpanded((v) => !v)}
            aria-label={expanded ? "Collapse details" : "Expand details"}
            className="ml-auto flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-ash transition-colors hover:border-plum hover:text-plum"
          >
            <ChevronDown
              size={16}
              className={`transition-transform ${expanded ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<"all" | "major" | "minor">("all");
  const list =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Things I've shipped"
        description="My latest creations. Click any project to explore the full story, architecture, and tech stack."
      />

      <div className="mt-8 flex flex-wrap gap-2">
        {projectCategories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setFilter(cat.key)}
            className={`rounded-full border px-4 py-2 text-[12px] tracking-[0.02em] transition-all ${
              filter === cat.key
                ? "border-plum bg-plum/15 text-bone"
                : "border-white/10 text-smoke hover:border-white/30 hover:text-bone"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
