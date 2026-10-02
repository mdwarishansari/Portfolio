import { personal } from "@/data/personal";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";
import { experiences } from "@/data/experience";
import { certifications } from "@/data/certifications";
import { socialLinks } from "@/data/socials";

export function buildPortfolioKnowledge(): string {
  const skillsSummary = skills
    .map((s) => `${s.name} (${s.category}, Level: ${s.level}%)`)
    .join(", ");

  const projectsSummary = projects
    .map(
      (p) =>
        `- ${p.title} (${p.subtitle}): ${p.description} ${p.longDescription}. Tech Stack: ${p.skills.join(
          ", "
        )}. GitHub: ${p.githubLink}, Live Demo: ${p.projectLink}`
    )
    .join("\n");

  const experienceSummary = experiences
    .map(
      (e) =>
        `- ${e.role} at ${e.company} (${e.period}, ${e.location}): ${e.description} Responsibilities: ${e.responsibilities.join("; ")}. Skills: ${e.skills.join(", ")}`
    )
    .join("\n");

  const certsSummary = certifications
    .map(
      (c) =>
        `- ${c.name} by ${c.authority} (${c.date}, Category: ${c.category}): ${c.description}. Verify URL: ${c.verifyUrl}`
    )
    .join("\n");

  const socialsSummary = socialLinks
    .map((s) => `${s.name} (${s.handle}): ${s.url}`)
    .join(", ");

  return `
PORTFOLIO KNOWLEDGE BASE FOR ${personal.name.toUpperCase()}

PERSONAL & CONTACT DETAILS:
- Name: ${personal.name}
- Title/Role: ${personal.title}
- Location: ${personal.location}
- Email: ${personal.email}
- Resume Link: ${personal.resumeLink}
- Bio Intro: ${personal.hero.intro}
- Availability: ${personal.hero.availability}
- Social Links: ${socialsSummary}

TECHNICAL SKILLS & EXPERTISE:
${skillsSummary}

WORK & INTERNSHIP EXPERIENCE:
${experienceSummary}

FEATURED & HIGHLIGHTED PROJECTS:
${projectsSummary}

CERTIFICATIONS & CREDENTIALS:
${certsSummary}

ABOUT ME:
${personal.about.description}
`;
}
