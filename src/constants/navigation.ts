import { NavItem } from '@/types';

export const getNavItems = (t: (key: string) => string): NavItem[] => [
  { href: '#home', label: t('nav.home') },
  { href: '#about', label: t('nav.about') },
  { href: '#skills', label: t('nav.skills') },
  { href: '#experience', label: t('nav.experience') },
  { href: '#projects', label: t('nav.projects') },
  { href: '#education', label: t('nav.education') },
  { href: '#contact', label: t('nav.contact') },
];
