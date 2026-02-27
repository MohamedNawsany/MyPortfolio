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
    default: 'bg-gray-100 text-gray-700',
    primary: 'bg-blue-50 text-blue-700',
    success: 'bg-green-100 text-green-700',
    warning: 'bg-yellow-100 text-yellow-700',
    info: 'bg-blue-100 text-blue-700',
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
