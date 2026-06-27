import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldCheck, ExternalLink } from "lucide-react";
import {
  certifications,
  certCategories,
  type Certification,
  type CertCategory,
} from "@/data/certifications";
import { Section, SectionHeading, Chip } from "./primitives";

const filters: { key: "all" | CertCategory; label: string }[] = [
  { key: "all", label: "All" },
  ...certCategories,
];

export function Certifications() {
  const [filter, setFilter] = useState<"all" | CertCategory>("all");
  const [active, setActive] = useState<Certification | null>(null);
  const list =
    filter === "all"
      ? certifications
      : certifications.filter((c) => c.category === filter);

  return (
    <Section id="certifications">
      <SectionHeading
        eyebrow="Certifications"
        title="Credential vault"
        description="Verified credentials across cloud, DevOps, AI, and software engineering — click any to inspect and verify."
      />

      <div className="mt-8 flex flex-wrap gap-2">
        {filters.map((cat) => (
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

      <motion.div
        layout
        className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {list.map((cert) => (
            <motion.button
              key={cert.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -4 }}
              onClick={() => setActive(cert)}
              className="group hairline overflow-hidden text-left"
            >
              <div className="relative overflow-hidden">
                <img
                  src={cert.thumbnail}
                  alt={cert.name}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                {cert.category === "highlighted" && (
                  <span className="absolute right-3 top-3 rounded-full border border-amber/50 bg-black/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-amber backdrop-blur">
                    Featured
                  </span>
                )}
              </div>
              <div className="p-5">
                <p className="text-[11px] uppercase tracking-[0.12em] text-plum">
                  {cert.authority} · {cert.date}
                </p>
                <h3 className="mt-2 text-[15px] font-semibold leading-snug tracking-tight text-bone">
                  {cert.name}
                </h3>
                <p className="mt-2 line-clamp-2 text-[13px] leading-relaxed text-ash">
                  {cert.description}
                </p>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[24px] border border-white/10 bg-black"
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Close"
                className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/60 text-bone backdrop-blur transition-colors hover:border-bone"
              >
                <X size={18} />
              </button>
              <img
                src={active.fullImage}
                alt={active.name}
                className="w-full object-contain"
              />
              <div className="p-6">
                <p className="text-[11px] uppercase tracking-[0.12em] text-plum">
                  {active.authority} · {active.date}
                </p>
                <h3 className="mt-2 text-[22px] font-semibold tracking-tight text-bone">
                  {active.name}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-ash">
                  {active.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {active.skills.map((s: string) => (
                    <Chip key={s}>{s}</Chip>
                  ))}
                </div>
                <a
                  href={active.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-plum px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-bone transition-opacity hover:opacity-90"
                >
                  <ShieldCheck size={15} /> Verify Credential
                  <ExternalLink size={13} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
