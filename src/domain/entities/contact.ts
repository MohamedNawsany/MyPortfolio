import type { ReactNode } from 'react';

export interface ContactInfo {
  icon: ReactNode;
  title: string;
  value: string;
  link: string;
}

export interface SocialLink {
  icon: ReactNode;
  title: string;
  url: string;
  color: string;
}
