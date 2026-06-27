import { motion } from "framer-motion";
import { MapPin, Briefcase } from "lucide-react";
import { personal } from "@/data/personal";
import { Section, Eyebrow, Reveal } from "./primitives";

export function About() {
  return (
    <Section id="about">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
        {/* Floating identity card */}
        <Reveal>
          <div className="relative mx-auto w-full max-w-sm">
            <div className="hairline relative overflow-hidden p-6">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <motion.img
                    src={personal.profileImage}
                    alt="Mohammad Warish Ansari"
                    className="float-slow h-20 w-20 rounded-full border border-plum/50 object-cover"
                  />
                  <span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-black bg-lichen" />
                </div>
                <div>
                  <h3 className="text-[18px] font-semibold tracking-tight text-bone">
                    {personal.name}
                  </h3>
                  <p className="text-[13px] text-plum">{personal.title}</p>
                </div>
              </div>

              <div className="mt-5 space-y-2.5 text-[13px] text-ash">
                <p className="flex items-center gap-2.5">
                  <MapPin size={14} className="text-plum" /> {personal.location}
                </p>
                <p className="flex items-center gap-2.5">
                  <Briefcase size={14} className="text-plum" />{" "}
                  {personal.hero.availability}
                </p>
              </div>

              {/* stats inside card */}
              <div className="mt-6 grid grid-cols-3 gap-2 border-t border-white/10 pt-5">
                {personal.about.stats.map((s) => (
                  <div key={s.id} className="text-center">
                    <div className="display-thin text-[26px] text-bone">
                      {s.count}
                    </div>
                    <div className="mt-1 text-[10px] uppercase tracking-[0.12em] text-smoke">
                      {s.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -left-3 -top-3 -z-10 h-full w-full rounded-[24px] border border-plum/20" />
          </div>
        </Reveal>

        {/* Copy */}
        <div>
          <Eyebrow>{personal.about.greeting} {personal.about.eyebrow}</Eyebrow>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="display-thin mt-4 text-[34px] leading-[1.0] text-bone sm:text-[46px]"
          >
            {personal.about.titlePart1}
            <br />
            that <span className="font-normal text-plum">{personal.about.titlePart2}</span>
          </motion.h2>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-[60ch] text-[15px] leading-relaxed tracking-[0.01em] text-ash">
              {personal.about.description}
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
