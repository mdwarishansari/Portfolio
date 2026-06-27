// ─── Navigation ───────────────────────────────────────────────────────────────

export interface NavItem {
  id: string;
  label: string;
}

// ─── Personal / Hero / About ───────────────────────────────────────────────────

export interface HeroData {
  greeting: string;
  availability: string;
  roles: string[];
  intro: string;
  highlights: string[];
  currentFocus: string;
}

export interface AboutStat {
  id: string;
  count: string;
  title: string;
}

export interface AboutData {
  greeting: string;
  description: string;
  stats: AboutStat[];
}

export interface FooterStat {
  label: string;
  value: string;
  width: string;
}

export interface FooterData {
  philosophy: string;
  philosophySub: string;
  stats: FooterStat[];
}

export interface PersonalData {
  name: string;
  copyrightName: string;
  title: string;
  location: string;
  email: string;
  resumeLink: string;
  profileImage: string;
  navItems: NavItem[];
  hero: HeroData;
  about: AboutData;
  footer: FooterData;
}

// ─── Skills ───────────────────────────────────────────────────────────────────

export type SkillCategory = "languages" | "frameworks" | "backend" | "tools" | "ai";

export interface Skill {
  name: string;
  /** Key matching an entry in the icon map (e.g. "FaHtml5") */
  icon: string;
  level: number;
  color: string;
  category: SkillCategory;
}

export interface SkillCategoryItem {
  key: "all" | SkillCategory;
  label: string;
}

// ─── Projects ─────────────────────────────────────────────────────────────────

export type ProjectCategory = "major" | "minor";

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  skills: string[];
  image: string;
  projectLink: string;
  githubLink: string;
  date: string;
  category: ProjectCategory;
  emoji: string;
  featured: boolean;
}

export interface ProjectCategoryItem {
  key: "all" | ProjectCategory;
  label: string;
}

// ─── Certifications ───────────────────────────────────────────────────────────

export type CertCategory = "highlighted" | "cloud" | "development" | "foundations";

export interface Certification {
  id: number;
  name: string;
  authority: string;
  date: string;
  description: string;
  thumbnail: string;
  fullImage: string;
  verifyUrl: string;
  category: CertCategory;
  skills: string[];
}

export interface CertCategoryItem {
  key: CertCategory;
  label: string;
}

// ─── Experience ───────────────────────────────────────────────────────────────

export interface ExperienceCertificate {
  name: string;
  thumbnail: string;
  fullImage: string;
  verifyUrl: string;
  credential: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  certificate: ExperienceCertificate;
  certificateAvailable: boolean;
  responsibilities: string[];
  skills: string[];
  companyLink: string;
}

// ─── Socials ──────────────────────────────────────────────────────────────────

export interface SocialLink {
  name: string;
  /** Key matching an entry in the icon map (e.g. "FaLinkedinIn") */
  icon: string;
  url: string;
  color: string;
  handle: string;
}
