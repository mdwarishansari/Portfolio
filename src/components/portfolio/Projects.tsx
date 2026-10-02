"use client";

import { useState, useRef, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronDown, Calendar, ChevronUp } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";
import { projects, type Project } from "@/data/projects";
import { personal } from "@/data/personal";
import { Section, SectionHeading, Chip } from "./primitives";

/** Number of projects visible before "Show More" */
const INITIAL_VISIBLE = 6;

const ProjectCard = memo(function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [imgSrc, setImgSrc] = useState(`/project-previews/${project.slug}.webp`);
  const [imgLoaded, setImgLoaded] = useState(false);

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

      <div className="relative overflow-hidden bg-void">
        <img
          src={imgSrc}
          alt={`${project.title} project preview`}
          loading="lazy"
          onLoad={() => setImgLoaded(true)}
          onError={() => setImgSrc("/project-previews/placeholder.webp")}
          className={`aspect-video w-full object-cover transition-all duration-700 group-hover:scale-105 ${
            imgLoaded ? "opacity-100" : "opacity-0"
          }`}
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

        {/* tech chips — shows first 4, rest revealed on expand */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {visibleSkills.map((s: string) => (
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
                {project.skills.map((s: string) => (
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
            aria-label={`View ${project.title} source code on GitHub`}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 text-[12px] tracking-[0.02em] text-bone transition-colors hover:border-bone"
          >
            <Github size={14} /> Code
          </a>
          <a
            href={project.projectLink}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${project.title} live demo`}
            className="inline-flex items-center gap-1.5 rounded-full bg-plum px-4 py-2 text-[12px] font-semibold tracking-[0.02em] text-bone transition-opacity hover:opacity-90"
          >
            <ExternalLink size={14} /> Live Demo
          </a>
          <button
            onClick={() => setExpanded((v) => !v)}
            aria-label={expanded ? "Collapse project details" : "Expand project details"}
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
});

/** Sorted project list — newest/highest-order first (ascending order number) */
const sortedProjects = [...projects].sort((a, b) => a.order - b.order);

export function Projects() {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? sortedProjects : sortedProjects.slice(0, INITIAL_VISIBLE);
  const hasMore = sortedProjects.length > INITIAL_VISIBLE;

  return (
    <Section id="projects">
      <SectionHeading
        eyebrow={personal.projectsCopy.eyebrow}
        title={personal.projectsCopy.title}
        description={personal.projectsCopy.description}
      />

      <motion.div layout className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Show More / Show Less — only rendered when project count exceeds INITIAL_VISIBLE */}
      {hasMore && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setShowAll((v) => !v)}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-[13px] tracking-[0.04em] text-bone transition-colors hover:border-plum hover:text-plum"
          >
            {showAll ? (
              <>
                <ChevronUp size={15} /> Show Less
              </>
            ) : (
              <>
                <ChevronDown size={15} /> Show More ({sortedProjects.length - INITIAL_VISIBLE} more)
              </>
            )}
          </button>
        </div>
      )}
    </Section>
  );
}
