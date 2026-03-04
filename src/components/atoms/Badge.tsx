'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'info';
  className?: string;
  whileHover?: any;
}

export const Badge = ({ 
  children, 
  variant = 'default',
  className = '',
  whileHover,
}: BadgeProps) => {
  const variantClasses = {
    default: 'bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-200',
    primary: 'bg-blue-50 dark:bg-blue-900/50 text-blue-700 dark:text-blue-200',
    success: 'bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-200',
    warning: 'bg-yellow-100 dark:bg-yellow-900/50 text-yellow-700 dark:text-yellow-200',
    info: 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-200',
  };

  return (
    <motion.span
      className={`px-3 py-1 rounded-full text-sm font-medium ${variantClasses[variant]} ${className}`}
      whileHover={whileHover || { scale: 1.05 }}
    >
      {children}
    </motion.span>
  );
};
