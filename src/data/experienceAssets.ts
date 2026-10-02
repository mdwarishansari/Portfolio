/**
 * Centralized experience and internship asset registry.
 *
 * All experience/internship certificate image paths live here as public-folder string paths.
 * experience.ts imports from here; never import assets directly there.
 *
 * Assets are served from /public/assets/Certifications/** (stable, cache-friendly paths).
 */

// ─── Internship Certificate Images ───────────────────────────────────────────
const BluestockInternshipCertificate = "/assets/Certifications/internships/bluestock/BlueStock Internship Certificate.jpg";
const SoftNexisInternshipCertificate = "/assets/Certifications/internships/soft-nexis/Soft Nexis Internship Certificate.jpg";
const CodeAlphaInternshipCertificate = "/assets/Certifications/internships/codealpha/CodeAlpha Internship Certificate.jpg";
const FullStackPythonInternshipCertificate = "/assets/Certifications/internships/shashi-infotech/Full Stack with Python Internship Certificate.jpg";

export {
  BluestockInternshipCertificate,
  SoftNexisInternshipCertificate,
  CodeAlphaInternshipCertificate,
  FullStackPythonInternshipCertificate,
};
