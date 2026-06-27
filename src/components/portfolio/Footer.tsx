import { motion } from "framer-motion";
import { ArrowUp, Mail, MapPin, Heart } from "lucide-react";
import { personal } from "@/data/personal";
import { socialLinks } from "@/data/socials";
import { getIcon } from "@/utils/icon-map";

export function Footer() {
  const year = new Date().getFullYear();
  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative z-10 mx-auto w-full max-w-[1200px] px-5 pb-12 pt-8 sm:px-8">
      <div className="hairline overflow-hidden">
        {/* Philosophy */}
        <div className="border-b border-white/10 p-8 text-center sm:p-12">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="display-thin mx-auto max-w-[34ch] text-[24px] leading-[1.15] text-bone sm:text-[34px]"
          >
            “{personal.footer.philosophy}”
          </motion.p>
          <p className="mt-4 text-[13px] text-smoke">
            {personal.footer.philosophySub}
          </p>
        </div>

        {/* Development journey / statistics */}
        <div className="grid gap-8 border-b border-white/10 p-8 sm:p-12 md:grid-cols-2">
          <div>
            <h3 className="eyebrow text-plum">Development Journey</h3>
            <div className="mt-6 space-y-5">
              {personal.footer.stats.map((s, i) => (
                <div key={s.label}>
                  <div className="flex items-baseline justify-between">
                    <span className="text-[13px] text-ash">{s.label}</span>
                    <span className="text-[15px] font-semibold text-bone">
                      {s.value}
                    </span>
                  </div>
                  <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-white/8">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: s.width }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className="h-full rounded-full bg-plum"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:text-right">
            <h3 className="eyebrow text-plum md:justify-end">Contact</h3>
            <div className="mt-6 space-y-3">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-2.5 text-[14px] text-ash transition-colors hover:text-bone md:justify-end"
              >
                <Mail size={15} className="text-plum" /> {personal.email}
              </a>
              <p className="flex items-center gap-2.5 text-[14px] text-ash md:justify-end">
                <MapPin size={15} className="text-plum" /> {personal.location}
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 md:justify-end">
              {socialLinks.slice(0, 6).map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.name}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-ash transition-colors hover:border-plum hover:text-bone"
                >
                  {getIcon(s.icon)}
                </a>
              ))}
            </div>

            <a
              href="#social"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-plum px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-bone transition-opacity hover:opacity-90"
            >
              Hire Me
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 p-6 sm:flex-row">
          <p className="flex items-center gap-1.5 text-[12px] text-smoke">
            © {year} {personal.copyrightName}. Built with{" "}
            <Heart size={12} className="text-plum" /> & code.
          </p>
          <button
            onClick={scrollTop}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-[12px] tracking-[0.02em] text-ash transition-colors hover:border-bone hover:text-bone"
          >
            <ArrowUp size={14} /> Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
