'use client';

import { motion } from 'framer-motion';
import { scrollToSection } from '@/hooks/useScroll';

interface NavItemProps {
  href: string;
  label: string;
  isScrolled: boolean;
  index: number;
}

export const NavItem = ({ href, label, isScrolled, index }: NavItemProps) => {
  return (
    <motion.button
      onClick={() => scrollToSection(href)}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:scale-105 ${
        isScrolled 
          ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' 
          : 'text-white/90 hover:text-white hover:bg-white/10'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -2 }}
    >
      {label}
    </motion.button>
  );
};
