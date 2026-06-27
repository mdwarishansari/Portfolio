import { motion } from "framer-motion";
import { socialLinks } from "@/data/socials";
import { getIcon } from "@/utils/icon-map";
import { personal } from "@/data/personal";
import { Section, SectionHeading } from "./primitives";

export function Social() {
  return (
    <Section id="social">
      <SectionHeading
        eyebrow={personal.socialCopy.eyebrow}
        title={personal.socialCopy.title}
        description={personal.socialCopy.description}
        align="center"
      />

      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {socialLinks.map((s, i) => (
          <motion.a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.03 }}
            whileHover={{ y: -4 }}
            className="group hairline relative flex items-center gap-3 overflow-hidden p-4"
          >
            <span
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{ background: `radial-gradient(120px circle at 20% 0%, ${s.color}22, transparent 70%)` }}
            />
            <span
              className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-[18px] transition-colors"
              style={{ color: s.color }}
            >
              {getIcon(s.icon)}
            </span>
            <span className="relative min-w-0">
              <span className="block text-[14px] font-medium tracking-tight text-bone">
                {s.name}
              </span>
              <span className="block truncate text-[12px] text-smoke">
                {s.handle}
              </span>
            </span>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
