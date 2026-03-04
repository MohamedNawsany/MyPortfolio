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
