import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Award, ChevronDown, MapPin, X, ShieldCheck } from "lucide-react";
import { experiences } from "@/data/experience";
import { personal } from "@/data/personal";
import { Section, SectionHeading, Chip } from "./primitives";
import type { ExperienceCertificate } from "@/types";

export function Experience() {
  const [open, setOpen] = useState<number | null>(experiences[0]?.id ?? null);
  const [activeCert, setActiveCert] = useState<ExperienceCertificate | null>(null);

  return (
    <Section id="experience">
      <SectionHeading
        eyebrow={personal.experienceCopy.eyebrow}
        title={personal.experienceCopy.title}
        description={personal.experienceCopy.description}
      />

      <div className="relative mt-10 pl-6 sm:pl-8">
        {/* spine */}
        <div className="absolute left-[7px] top-2 h-full w-px bg-gradient-to-b from-plum/60 via-white/15 to-transparent sm:left-[11px]" />

        <div className="flex flex-col gap-5">
          {experiences.map((exp, i) => {
            const isOpen = open === exp.id;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative"
              >
                {/* node */}
                <span className="absolute -left-6 top-6 flex h-3.5 w-3.5 items-center justify-center sm:-left-8">
                  <span className="absolute h-3.5 w-3.5 rounded-full bg-plum/30" />
                  <span className="relative h-2 w-2 rounded-full bg-plum" />
                </span>

                <div className="hairline overflow-hidden">
                  <button
                    onClick={() => setOpen(isOpen ? null : exp.id)}
                    className="flex w-full items-start justify-between gap-4 p-5 text-left sm:p-6"
                  >
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.12em] text-plum">
                        {exp.period}
                      </p>
                      <h3 className="mt-2 text-[18px] font-semibold tracking-tight text-bone">
                        {exp.role}
                      </h3>
                      <a
                        href={exp.companyLink}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="mt-1 inline-flex items-center gap-1.5 text-[13px] text-ash transition-colors hover:text-plum"
                      >
                        {exp.company} <ExternalLink size={12} />
                      </a>
                      <p className="mt-1 flex items-center gap-1.5 text-[12px] text-smoke">
                        <MapPin size={12} /> {exp.location}
                      </p>
                    </div>
                    <ChevronDown
                      size={18}
                      className={`indigo mt-1 shrink-0 text-ash transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-white/10 p-5 sm:p-6">
                          <p className="text-[14px] leading-relaxed text-ash">
                            {exp.description}
                          </p>

                          <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.12em] text-smoke">
                            Responsibilities
                          </p>
                          <ul className="mt-3 space-y-2">
                            {exp.responsibilities.map((r) => (
                              <li
                                key={r}
                                className="flex gap-2.5 text-[13px] leading-relaxed text-ash"
                              >
                                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-plum" />
                                {r}
                              </li>
                            ))}
                          </ul>

                          <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.12em] text-smoke">
                            Skills
                          </p>
                          <div className="mt-3 flex flex-wrap gap-1.5">
                            {exp.skills.map((s) => (
                              <Chip key={s}>{s}</Chip>
                            ))}
                          </div>

                          {exp.certificateAvailable && (
                            <div className="mt-5 flex flex-wrap items-center gap-3">
                              <button
                                onClick={() => setActiveCert(exp.certificate)}
                                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-[12px] tracking-[0.02em] text-ash transition-colors hover:border-bone hover:text-bone cursor-pointer"
                              >
                                <Award size={14} className="text-plum" /> View Certificate
                              </button>
                              <a
                                href={exp.certificate.verifyUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-amber/50 px-4 py-2 text-[12px] tracking-[0.02em] text-amber transition-colors hover:bg-amber/10"
                              >
                                Verify Certificate
                              </a>
                              {exp.certificate.credential && (
                                <span className="text-[11px] text-smoke">
                                  ID: {exp.certificate.credential}
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal for Experience Certificates */}
      <AnimatePresence>
        {activeCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveCert(null)}
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
                onClick={() => setActiveCert(null)}
                aria-label="Close"
                className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/60 text-bone backdrop-blur transition-colors hover:border-bone"
              >
                <X size={18} />
              </button>
              <img
                src={activeCert.fullImage}
                alt={activeCert.name}
                className="w-full object-contain"
              />
              <div className="p-6">
                <h3 className="text-[20px] font-semibold tracking-tight text-bone">
                  {activeCert.name}
                </h3>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <a
                    href={activeCert.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-plum px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-bone transition-opacity hover:opacity-90"
                  >
                    <ShieldCheck size={15} /> Verify Credential
                    <ExternalLink size={13} />
                  </a>
                  {activeCert.credential && (
                    <span className="text-[12px] text-smoke">
                      Credential ID: {activeCert.credential}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
