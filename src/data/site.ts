/**
 * ────────────────────────────────────────────────────────────────────────
 *  SINGLE SOURCE OF TRUTH  —  edit everything about your portfolio here.
 *  No need to touch the React components. Change text, add projects,
 *  reorder skills, update links — it all flows from this file.
 *
 *  👉 FIRST: update `profile` (name, email, socials, location, resume).
 * ────────────────────────────────────────────────────────────────────────
 */

export const profile = {
  name: "Md. Nazmus Sadat",            
  initials: "SADAT",                   
  role: "Technical Support Engineer",
  tagline: "I keep web infrastructure online and engineers unblocked.",
  location: "Uttara, Dhaka, Bangladesh",
  availability: "Open to support / infra roles",
  email: "nazmus.sadat.sohagh@gmail.com",        // ← CHANGE ME
  resumeUrl: "/resume.pdf",            // ← drop a resume.pdf in /public (optional)
  socials: [
    { label: "GitHub", handle: "github.com/Sadat-github", href: "https://github.com/Sadat-github" },
    { label: "LinkedIn", handle: "linkedin.com/in/md-nazmus-sadat", href: "https://www.linkedin.com/in/md-nazmus-sadat-307787a7/" },
    { label: "Email", handle: "nazmus.sadat.sohagh@gmail.com", href: "mailto:nazmus.sadat.sohagh@gmail.com" },
  ],
};

/** Hero terminal — the lines "typed" out on load, and the boot log. */
export const hero = {
  prompt: "visitor@portfolio:~$",
  commands: ["whoami", "cat about.txt"],
  whoami: `${profile.name} — ${profile.role}`,
  about: [
    "Linux & web-server troubleshooting on production VPS fleets.",
    "OpenLiteSpeed / Nginx · DNS · SSL/TLS · MySQL · WordPress.",
    "Calm under SEV-1. Methodical. Customer-obsessed.",
  ],
  boot: [
    "[ OK ]  Mounting infrastructure ...",
    "[ OK ]  Starting nginx / openlitespeed ...",
    "[ OK ]  Resolving DNS ...",
    "[ OK ]  Validating SSL certificates ...",
    "[ OK ]  Reticulating splines ...",
    "[ OK ]  System ready..............................................",
  ],
};

/** Animated counters in the stats strip. */
export type Stat = { value: number; suffix: string; label: string; decimals?: number };

export const stats: Stat[] = [
  { value: 500, suffix: "+", label: "tickets resolved" },
  { value: 120, suffix: "+", label: "servers managed" },
  { value: 99.9, suffix: "%", label: "uptime maintained", decimals: 1 },
  { value: 24, suffix: "/7", label: "on-call coverage" },
];

export const about = {
  heading: "About",
  lead: "I'm a Technical Support Engineer who lives in the terminal.",
  body: [
    "I troubleshoot production web hosting — when a site is down, slow, or throwing 500s, I'm the person who SSHes in, reads the logs, finds root cause, and ships a durable fix without taking the rest of the box down with it.",
    "Day to day that means OpenLiteSpeed / Nginx vhosts, PHP-FPM pools, DNS and SSL, MySQL/MariaDB tuning, WordPress incidents, and the occasional 2am OOM-killer mystery. I document everything so the next engineer doesn't have to relearn it.",
  ],
  facts: [
    { k: "Focus", v: "Web hosting & Linux infra support" },
    { k: "Stack", v: "OpenLiteSpeed · Nginx · MySQL · PHP" },
    { k: "Approach", v: "Investigate → confirm → backup → fix → verify" },
    { k: "Status", v: profile.availability },
  ],
};

export type SkillGroup = { title: string; tag: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    title: "Systems & Servers",
    tag: "systems",
    items: ["Linux (Ubuntu/Debian)", "OpenLiteSpeed", "Nginx", "PHP-FPM", "systemd", "Bash", "Docker"],
  },
  {
    title: "Networking & Delivery",
    tag: "network",
    items: ["DNS", "SSL/TLS · Let's Encrypt", "Cloudflare", "Email deliverability", "Reverse proxy", "Firewall / WAF"],
  },
  {
    title: "Platforms & Data",
    tag: "data",
    items: ["WordPress / WooCommerce", "MySQL / MariaDB", "Redis", "LiteSpeed Cache", "Git", "Migrations"],
  },
];

export const softSkills = ["Root-cause analysis", "Clear written comms", "Incident calm", "Documentation", "Customer empathy"];

export type Experience = {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  points: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: "xCloud Hosting",
    role: "Technical Support Engineer",
    period: "Jan 2026 — Present",
    current: true,
    points: [
      "Front-line and escalation support for managed VPS customers on the OpenLiteSpeed stack.",
      "Diagnose and resolve outages: PHP-FPM 502s, MySQL OOM crash-loops, cache permission 500s, SSL/DNS misconfig.",
      "Write durable, regeneration-proof fixes via persistent vhost includes; document each incident for the team.",
    ],
    stack: ["OpenLiteSpeed", "Nginx", "MySQL", "PHP-FPM", "Cloudflare", "Bash"],
  },
  {
    company: "Previous Company",          // ← CHANGE ME
    role: "Support / Junior Engineer",
    period: "2024 — 2025",
    points: [
      "Resolved customer tickets across hosting, email, and DNS.",
      "Performed site migrations and post-migration verification.",
      "Built internal docs and runbooks for common incidents.",
    ],
    stack: ["Linux", "WordPress", "DNS", "cPanel"],
  },
];

/**
 * Case studies — this is the section that sets the portfolio apart.
 * Short, real-world "incident → diagnosis → fix" write-ups. Swap in your own.
 */
export type CaseStudy = {
  id: string;
  title: string;
  severity: "SEV-1" | "SEV-2" | "SEV-3";
  problem: string;
  diagnosis: string;
  fix: string;
  tags: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: "mysql-oom",
    title: "MySQL OOM crash-loop on a multi-tenant box",
    severity: "SEV-1",
    problem: "Sites across a shared VPS intermittently 502'd with DB-connection errors; mysqld was being OOM-killed repeatedly.",
    diagnosis: "One PHP-FPM pool with an oversized min_spare was pinning 50+ idle workers, thrashing swap until the kernel killed the lowest-priority process — mysqld.",
    fix: "Right-sized the pool's pm.* values, graceful-reloaded FPM, and hardened mysqld with OOMScoreAdjust=-600 so it stops being the kernel's first victim.",
    tags: ["MySQL", "PHP-FPM", "OOM", "systemd"],
  },
  {
    id: "ssl-acme",
    title: "Reverse-proxy site stuck on a self-signed cert",
    severity: "SEV-2",
    problem: "A Node app behind OpenLiteSpeed kept serving the default self-signed certificate; Let's Encrypt issuance failed.",
    diagnosis: "The catch-all proxy context forwarded /.well-known/acme-challenge/ to the Node app, so certbot's webroot check 404'd.",
    fix: "Added a permanent static carve-out for .well-known in a persistent vhost include, issued an ECDSA cert via certbot --webroot, then attached SSL — survives panel regeneration and auto-renews.",
    tags: ["SSL/TLS", "OpenLiteSpeed", "certbot", "Node"],
  },
  {
    id: "scraper-slowdown",
    title: "WooCommerce store crawled to a halt",
    severity: "SEV-2",
    problem: "A store went sluggish (not down) under heavy CPU and swap; the site itself looked healthy.",
    diagnosis: "A faceted-navigation scraper hammered uncacheable filter URLs, forcing repeated unserialize of a 67MB layered-nav transient and saturating CPU.",
    fix: "Added a targeted query-string block at the web-server layer (preserving legitimate filtering), flushed the bloated transients, and locked the origin firewall to Cloudflare ranges.",
    tags: ["WooCommerce", "Performance", "WAF", "Caching"],
  },
];

export type EducationItem = { school: string; degree: string; period: string; note?: string };

export const education: EducationItem[] = [
  {
    school: "Ahsanullah University Of Science & Technology",
    degree: "B.Sc. in Computer Science & Engineering",
    period: "2010-2014",
    note: "Foundations in networking, operating systems, and databases that underpin my infra work today.",
  },
];

export const certifications: string[] = [
  // Add any you have, e.g. "Linux Foundation LFCS", "AWS Cloud Practitioner"
];

export const contact = {
  heading: "Contact",
  lead: "Got a server on fire, or a role to fill? Let's talk.",
  cta: "Send a message",
};

/** Navigation — section ids must match the <section id="..."> rendered on the page. */
export const nav = [
  { id: "about", label: "about" },
  { id: "skills", label: "skills" },
  { id: "experience", label: "experience" },
  { id: "work", label: "case studies" },
  { id: "education", label: "education" },
  { id: "contact", label: "contact" },
];

export const meta = {
  title: `${profile.name} — ${profile.role}`,
  description: `${profile.name} is a ${profile.role} specializing in Linux, OpenLiteSpeed/Nginx, DNS, SSL and web-hosting incident response.`,
  url: "https://portfolio.nsadat.online",        // ← CHANGE ME (used for SEO/OG)
};
