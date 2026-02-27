export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  color: string;
  skills: Skill[];
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  level: string;
}

export interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  value: string;
  link: string;
}

export interface SocialLink {
  icon: React.ReactNode;
  title: string;
  url: string;
  color: string;
}

export interface NavItem {
  href: string;
  label: string;
}

export interface Achievement {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
