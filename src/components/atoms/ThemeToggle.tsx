'use client';

import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '@/presentation/contexts/ThemeContext';

interface ThemeToggleProps {
  isScrolled?: boolean;
  className?: string;
}

export function ThemeToggle({ isScrolled = false, className = '' }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  const baseClasses = 'p-2 rounded-lg transition-colors duration-200';
  const scrolledClasses = isScrolled
    ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50 dark:text-gray-200 dark:hover:text-blue-400 dark:hover:bg-gray-700'
    : 'text-white hover:text-blue-200 hover:bg-white/10 dark:text-gray-200 dark:hover:text-blue-400 dark:hover:bg-gray-700';

  return (
    <motion.button
      type="button"
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
      onClick={toggleTheme}
      className={`${baseClasses} ${scrolledClasses} ${className}`}
      whileTap={{ scale: 0.92 }}
      whileHover={{ scale: 1.05 }}
    >
      {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
    </motion.button>
  );
}
