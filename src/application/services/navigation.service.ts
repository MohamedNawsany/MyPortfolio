import type { NavItem } from '@/domain/entities';

export type TranslateFunction = (key: string) => string;

const NAV_KEYS: Record<string, string> = {
  home: 'nav.home',
  about: 'nav.about',
  skills: 'nav.skills',
  experience: 'nav.experience',
  projects: 'nav.projects',
  education: 'nav.education',
  contact: 'nav.contact',
};

export const getNavItems = (t: TranslateFunction): NavItem[] => [
  { href: '#home', label: t(NAV_KEYS.home) },
  { href: '#about', label: t(NAV_KEYS.about) },
  { href: '#skills', label: t(NAV_KEYS.skills) },
  { href: '#experience', label: t(NAV_KEYS.experience) },
  { href: '#projects', label: t(NAV_KEYS.projects) },
  { href: '#education', label: t(NAV_KEYS.education) },
  { href: '#contact', label: t(NAV_KEYS.contact) },
];
