/**
 * Centralized certification asset registry.
 *
 * All certificate image paths live here as public-folder string paths.
 * certifications.ts imports from here; never import assets directly there.
 *
 * Assets are served from /public/assets/Certifications/** (stable, cache-friendly paths).
 */

// ─── Microsoft & LinkedIn Learning ───────────────────────────────────────────
const MicrosoftSoftwareDevelopment = "/assets/Certifications/highlighted/microsoft/Career Essentials in Software Development.png";
const MicrosoftGenerativeAI = "/assets/Certifications/highlighted/microsoft/Career Essentials in Generative AI.png";
const GitHubProfessional = "/assets/Certifications/highlighted/github/Career Essentials in GitHub Professional Certificate.png";
const DockerFoundations = "/assets/Certifications/highlighted/docker/Docker Foundations Professional Certificate.png";
const LinkedInMasterReact19 = "/assets/Certifications/highlighted/linkedin-learning/Master React 19.png";
const LinkedInTypeScript = "/assets/Certifications/highlighted/linkedin-learning/TypeScript for JavaScript Developers.png";

// ─── Oracle: OCI Architect Associate ─────────────────────────────────────────
const OracleOCIArchitectBadge = "/assets/Certifications/oracle/architect/Oracle OCI Architect Associate Badge.png";
const OracleOCIArchitectCertificate = "/assets/Certifications/oracle/architect/Oracle OCI Architect Associate Certificate.png";

// ─── Oracle: Agentic AI Certified Foundations Associate ──────────────────────
const OracleAgenticAIBadge = "/assets/Certifications/oracle/agentic-ai/Oracle Agentic AI Badge.png";
const OracleAgenticAICertificate = "/assets/Certifications/oracle/agentic-ai/Oracle Agentic AI Certificate.png";

// ─── Oracle: Generative AI Professional ──────────────────────────────────────
const OracleGenAIBadge = "/assets/Certifications/oracle/generative-ai/Oracle Generative AI Professional Badge.png";
const OracleGenAICertificate = "/assets/Certifications/oracle/generative-ai/Oracle Generative AI Professional Certificate.png";

// ─── Oracle: DevOps Professional ─────────────────────────────────────────────
const OracleDevOpsBadge = "/assets/Certifications/oracle/devops/Oracle DevOps Professional Badge.png";
const OracleDevOpsCertificate = "/assets/Certifications/oracle/devops/Oracle DevOps Professional Certificate.png";

// ─── Oracle: Data Science Professional ───────────────────────────────────────
const OracleDataScienceBadge = "/assets/Certifications/oracle/data-science/Oracle Data Science Professional Badge.png";
const OracleDataScienceCertificate = "/assets/Certifications/oracle/data-science/Oracle Data Science Professional Certificate.png";

// ─── Oracle: Cloud Infrastructure 2025 Foundations ───────────────────────────
const OracleCloudInfra2025Badge = "/assets/Certifications/oracle/foundations/Oracle Cloud Infrastructure 2025 Badge.png";
const OracleCloudInfra2025Certificate = "/assets/Certifications/oracle/foundations/Oracle Cloud Infrastructure 2025 Certificate.png";

// ─── Oracle: Data Platform Foundations ───────────────────────────────────────
const OracleDataPlatform2025Badge = "/assets/Certifications/oracle/data-platform/Oracle Data Platform 2025 Badge.png";
const OracleDataPlatform2025Certificate = "/assets/Certifications/oracle/data-platform/Oracle Data Platform 2025 Certificate.jpg";

// ─── AWS ─────────────────────────────────────────────────────────────────────
const AWSCertifiedDeveloper = "/assets/Certifications/development/misc/AWS Certified Developer Associate Cert Prep.png";

// ─── HackerRank ───────────────────────────────────────────────────────────────
const HackerRankSoftwareEngineer = "/assets/Certifications/highlighted/hackerrank/HackerRank Software Engineer Certificate.jpg";
const HackerRankSoftwareEngineerIntern = "/assets/Certifications/highlighted/hackerrank/HackerRank Software Engineer Intern Certificate.jpg";
const HackerRankJavaScriptIntermediate = "/assets/Certifications/highlighted/hackerrank/HackerRank JavaScript Intermediate Certificate.jpg";
const HackerRankJavaScriptBasic = "/assets/Certifications/highlighted/hackerrank/HackerRank JavaScript Basic Certificate.jpg";

// ─── Forage ───────────────────────────────────────────────────────────────────
const ForageSoftwareEngineering = "/assets/Certifications/highlighted/forage/Forage Software Engineering Job Simulation.jpg";

// ─── Udemy ────────────────────────────────────────────────────────────────────
const UdemyMERNStack = "/assets/Certifications/highlighted/udemy/Udemy MERN Stack Full Stack Development.jpg";

// ─── IBM ─────────────────────────────────────────────────────────────────────
const IBMWebDevBasics = "/assets/Certifications/development/ibm/IBM SkillsBuild Web Development Basics.jpg";
const IBMJava = "/assets/Certifications/development/ibm/IBM SkillsBuild Java.jpg";
const IBMPython101 = "/assets/Certifications/development/ibm/IBM Cognitive Class Python 101.jpg";

// ─── Infosys ──────────────────────────────────────────────────────────────────
const InfosysBootstrap = "/assets/Certifications/development/infosys/Infosys Bootstrap Responsive Web Pages.jpg";
const InfosysFullStack = "/assets/Certifications/development/infosys/Infosys Learning Full Stack Development.jpg";
const InfosysDSAJava = "/assets/Certifications/development/infosys/Infosys Data Structures and Algorithms Using Java.jpg";

// ─── STP Computer Education ───────────────────────────────────────────────────
const STPAdvancedDiploma = "/assets/Certifications/foundations/stp/STP Advanced Diploma in Computer Applications.jpg";
const STPDiploma = "/assets/Certifications/foundations/stp/STP Diploma in Computer Applications.jpg";
const STPBasicComputer = "/assets/Certifications/foundations/stp/STP Basic Computer Course.jpg";
const STPGraphicDesign = "/assets/Certifications/foundations/stp/STP Graphic Design Course.jpg";
const STPPhotoshop = "/assets/Certifications/foundations/stp/STP Adobe Photoshop Course.jpg";

// ─── RKDF University ──────────────────────────────────────────────────────────
const RKDFAutoCAD = "/assets/Certifications/foundations/rkdf/RKDF AutoCAD 2D 3D Modelling Workshop.jpg";

// ─── UIDAI ────────────────────────────────────────────────────────────────────
const UIDAIEnrolment = "/assets/Certifications/foundations/uidai/UIDAI Enrolment and Update Process.jpg";

// ─── Named exports ────────────────────────────────────────────────────────────

export {
  // Microsoft & LinkedIn Learning
  MicrosoftSoftwareDevelopment,
  MicrosoftGenerativeAI,
  GitHubProfessional,
  DockerFoundations,
  LinkedInMasterReact19,
  LinkedInTypeScript,
  // Oracle: OCI Architect Associate
  OracleOCIArchitectBadge,
  OracleOCIArchitectCertificate,
  // Oracle: Agentic AI Certified Foundations Associate
  OracleAgenticAIBadge,
  OracleAgenticAICertificate,
  // Oracle: Generative AI Professional
  OracleGenAIBadge,
  OracleGenAICertificate,
  // Oracle: DevOps Professional
  OracleDevOpsBadge,
  OracleDevOpsCertificate,
  // Oracle: Data Science Professional
  OracleDataScienceBadge,
  OracleDataScienceCertificate,
  // Oracle: Cloud Infrastructure 2025 Foundations
  OracleCloudInfra2025Badge,
  OracleCloudInfra2025Certificate,
  // Oracle: Data Platform 2025 Foundations
  OracleDataPlatform2025Badge,
  OracleDataPlatform2025Certificate,
  // AWS
  AWSCertifiedDeveloper,
  // HackerRank
  HackerRankSoftwareEngineer,
  HackerRankSoftwareEngineerIntern,
  HackerRankJavaScriptIntermediate,
  HackerRankJavaScriptBasic,
  // Forage
  ForageSoftwareEngineering,
  // Udemy
  UdemyMERNStack,
  // IBM
  IBMWebDevBasics,
  IBMJava,
  IBMPython101,
  // Infosys
  InfosysBootstrap,
  InfosysFullStack,
  InfosysDSAJava,
  // STP
  STPAdvancedDiploma,
  STPDiploma,
  STPBasicComputer,
  STPGraphicDesign,
  STPPhotoshop,
  // RKDF
  RKDFAutoCAD,
  // UIDAI
  UIDAIEnrolment,
};
