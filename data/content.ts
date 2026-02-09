import {
  AboutContent,
  ContactContent,
  ExperienceItem,
  HeroContent,
  NavigationLink,
  SkillCategory,
  SocialLink,
} from "../types/content";

export const navigationLinks: NavigationLink[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const heroContent: HeroContent = {
  eyebrow: "Frontend Developer",
  title: "Muhammad Kevin Alviansyah",
  subtitle:
    "Turning client requirements into modern, responsive, production-ready interfaces.",
  description:
    "Frontend developer based in Jakarta with experience shipping React, Vue, and Next.js apps on Linux environments. I focus on building mobile-first UI that integrates neatly with APIs and is maintainable for teams.",
  primaryAction: { label: "View Projects", href: "#projects" },
  secondaryAction: { label: "Contact Me", href: "#contact" },
  highlights: [
    "Professional experience since 2022 across agencies and product teams",
    "Translate Figma designs into reusable components",
    "Performance, accessibility, and DX focused",
  ],
};

export const aboutContent: AboutContent = {
  heading: "Frontend developer who enjoys crafting smart web experiences",
  intro:
    "Based in Jagakarsa, Jakarta and comfortable working remotely on Linux. I build interactive interfaces that stay maintainable for product teams.",
  paragraphs: [
    "I have experience bootstrapping apps from scratch and leveling up existing products. My habit is to keep the UI polished, the design consistent, and the UX effortless.",
    "My core stack combines JavaScript/TypeScript with React, Next.js, and Vue. I handle REST integrations, CMS such as Sanity, and payment gateways like Stripe.",
    "Collaboration is key: I slice designs into components, test across devices, and ensure performance so the interface feels snappy.",
  ],
  stackTitle: "Core stack",
  stackItems: [
    "Linux",
    "JavaScript & TypeScript",
    "React.js",
    "Next.js",
    "Vue.js",
    "Tailwind / Bootstrap / Material UI / Ant Design",
    "RESTful API integration",
  ],
  quickFacts: [
    { label: "Location", value: "Jagakarsa, Jakarta" },
    { label: "Experience", value: "Merkle Innovation, Maven Digital Asia" },
    { label: "Focus", value: "Responsive, high-performance web apps" },
  ],
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages & Environment",
    skills: ["Linux", "JavaScript (ES6+)", "TypeScript"],
  },
  {
    title: "Frameworks",
    skills: ["React.js", "Next.js", "Vue.js"],
  },
  {
    title: "UI Tooling",
    skills: [
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Material UI",
      "Ant Design",
    ],
  },
  {
    title: "Workflow & Integration",
    skills: [
      "Git & Github",
      "RESTful API",
      "Stripe",
      "Sanity CMS",
      "Responsive testing",
    ],
  },
];

export const experienceTimeline: ExperienceItem[] = [
  {
    role: "Frontend Developer",
    company: "Merkle Innovation — Jakarta Barat",
    period: "Jul 2023 — Present",
    summary:
      "Delivering client-facing web interfaces with React/Next.js for enterprise projects.",
    achievements: [
      "Converted Figma screens into accessible, reusable components.",
      "Integrated frontend modules with backend APIs and shipped on schedule.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Maven Digital Asia — Jakarta Barat",
    period: "Nov 2022 — May 2023",
    summary: "Supported the agency team by developing client web applications.",
    achievements: [
      "Built interactive UI features that adhered to the internal design system.",
      "Collaborated with backend engineers to ensure data surfaced accurately.",
    ],
  },
];

export const socials: SocialLink[] = [
  {
    label: "Email",
    handle: "kevinpalowa@gmail.com",
    href: "mailto:kevinpalowa@gmail.com",
  },
  {
    label: "LinkedIn",
    handle: "Muhammad Kevin Alviansyah",
    href: "https://linkedin.com/in/kevinpalowa",
  },
  {
    label: "GitHub",
    handle: "@kevinpalowa",
    href: "https://github.com/kevinpalowa",
  },
  {
    label: "Phone",
    handle: "+62 838-0706-5796",
    href: "https://wa.me/6283807065796",
  },
];

export const contactContent: ContactContent = {
  heading: "Ready to keep your web app moving fast",
  copy:
    "Share the context around your frontend build, API integration, or design handoff. I respond within 24 hours on working days.",
  availability: "Based in Jagakarsa, DKI Jakarta (GMT+7).",
  email: "kevinpalowa@gmail.com",
  phone: "+62 838-0706-5796",
  socials,
};
