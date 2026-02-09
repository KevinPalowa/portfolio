export interface NavigationLink {
  label: string;
  href: string;
}

export interface HeroContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  primaryAction: CTA;
  secondaryAction: CTA;
  highlights: string[];
}

export interface CTA {
  label: string;
  href: string;
}

export interface AboutContent {
  heading: string;
  intro: string;
  paragraphs: string[];
  stackTitle: string;
  stackItems: string[];
  quickFacts: { label: string; value: string }[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Project {
  title: string;
  summary: string;
  technologies: string[];
  features: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  summary: string;
  achievements: string[];
}

export interface ContactContent {
  heading: string;
  copy: string;
  availability: string;
  email: string;
  phone: string;
  socials: SocialLink[];
}

export interface SocialLink {
  label: string;
  handle: string;
  href: string;
}
