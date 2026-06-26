import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`relative z-10 mx-auto w-full max-w-[1200px] scroll-mt-24 px-5 py-[60px] sm:px-8 md:py-24 ${className}`}
    >
      {children}
    </section>
  );
}

export function Eyebrow({
  children,
  color = "plum",
}: {
  children: ReactNode;
  color?: "plum" | "bone" | "amber";
}) {
  const c =
    color === "plum" ? "text-plum" : color === "amber" ? "text-amber" : "text-bone";
  return (
    <motion.span
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      className={`eyebrow inline-flex items-center gap-2 ${c}`}
    >
      <span className="h-px w-6 bg-current opacity-60" />
      {children}
    </motion.span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`flex flex-col gap-4 ${align === "center" ? "items-center text-center" : "items-start"}`}
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="display-thin text-[40px] leading-[0.95] text-bone sm:text-[56px] md:text-[68px]"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className={`max-w-[58ch] text-[15px] leading-relaxed tracking-[0.01em] text-ash ${align === "center" ? "mx-auto" : ""}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Pill chip used for technology tags. */
export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-white/12 px-3 py-1 text-[11px] tracking-[0.02em] text-ash transition-colors hover:border-plum/60 hover:text-bone">
      {children}
    </span>
  );
}
