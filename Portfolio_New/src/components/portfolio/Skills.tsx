import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills, skillCategories, type SkillCategory } from "@/data/skills";
import { Section, SectionHeading } from "./primitives";

export function Skills() {
  const [filter, setFilter] = useState<"all" | SkillCategory>("all");
  const list =
    filter === "all" ? skills : skills.filter((s) => s.category === filter);

  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Skills & Expertise"
        title={
          <>
            The stack I build with
          </>
        }
        description="Technologies I've mastered to bring ideas to life — with proficiency levels across every category."
      />

      {/* Filters */}
      <div className="mt-8 flex flex-wrap gap-2">
        {skillCategories.map((cat) => (
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

      {/* Grid */}
      <motion.div
        layout
        className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
      >
        <AnimatePresence mode="popLayout">
          {list.map((skill) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -4 }}
              className="group hairline relative overflow-hidden p-4"
            >
              <div className="flex items-center justify-between">
                <span
                  className="text-2xl transition-transform group-hover:scale-110"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </span>
                <span className="text-[11px] font-semibold tracking-[0.05em] text-smoke">
                  {skill.level}%
                </span>
              </div>
              <h3 className="mt-3 text-[14px] font-medium tracking-tight text-bone">
                {skill.name}
              </h3>
              {/* progress */}
              <div className="mt-2.5 h-1 w-full overflow-hidden rounded-full bg-white/8">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                  className="h-full rounded-full bg-plum"
                />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
