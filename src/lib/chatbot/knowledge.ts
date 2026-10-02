import { personal } from "@/data/personal";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";
import { experiences } from "@/data/experience";
import { certifications } from "@/data/certifications";
import { socialLinks } from "@/data/socials";
import { externalDetails } from "@/data/external-details";

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

  // Build education summary from external details
  const educationSummary = externalDetails.education
    .map((edu) => {
      const scoreInfo = edu.percentage
        ? `Score: ${edu.percentage}`
        : edu.cgpa
          ? `CGPA: ${edu.cgpa}`
          : "";
      const boardInfo = edu.board ? `Board: ${edu.board}` : "";
      const uniInfo = edu.university ? `University: ${edu.university}` : "";
      return `- ${edu.level} at ${edu.institution} (${edu.session}, ${edu.status}): Stream: ${edu.stream}. ${boardInfo} ${uniInfo} ${scoreInfo}. Location: ${edu.location}`;
    })
    .join("\n");

  return `
PORTFOLIO KNOWLEDGE BASE FOR ${personal.name.toUpperCase()}

PERSONAL & CONTACT DETAILS:
- Full Name: ${externalDetails.fullName}
- Nickname: ${externalDetails.nickname}
- Title/Role: ${personal.title}
- Date of Birth: ${externalDetails.dateOfBirth}
- Age: ${externalDetails.age}
- Gender: ${externalDetails.gender}
- Nationality: ${externalDetails.nationality}
- Languages: ${externalDetails.languages.join(", ")}
- Hometown: ${externalDetails.hometown}
- Current City: ${externalDetails.currentCity}
- State: ${externalDetails.state}, ${externalDetails.country}
- Email (Personal): ${externalDetails.personalEmail}
- Email (Professional): ${externalDetails.professionalEmail}
- Resume Link: ${personal.resumeLink}
- Bio Intro: ${personal.hero.intro}
- Availability: ${personal.hero.availability}
- Social Links: ${socialsSummary}

EDUCATION & ACADEMIC BACKGROUND:
${educationSummary}

FAMILY BACKGROUND:
- Father: ${externalDetails.fatherName} (${externalDetails.fatherOccupation})
- Mother: ${externalDetails.motherName}

TECHNICAL SKILLS & EXPERTISE:
${skillsSummary}

WORK & INTERNSHIP EXPERIENCE:
${experienceSummary}

FEATURED & HIGHLIGHTED PROJECTS:
${projectsSummary}

CERTIFICATIONS & CREDENTIALS:
${certsSummary}

HOBBIES & INTERESTS:
- Hobbies: ${externalDetails.hobbies.join(", ")}
- Interests: ${externalDetails.interests.join(", ")}

CAREER GOAL:
${externalDetails.careerGoal}

DREAM COMPANIES: ${externalDetails.dreamCompanies.join(", ")}

FUN FACTS ABOUT WARISH:
${externalDetails.funFacts.map((f) => `- ${f}`).join("\n")}

ABOUT ME:
${personal.about.description}
`;
}
