'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  whileHover?: any;
  whileTap?: any;
}

export const Button = ({
  children,
  variant = 'primary',
  onClick,
  disabled = false,
  type = 'button',
  className = '',
  whileHover,
  whileTap,
}: ButtonProps) => {
  const baseClasses = 'px-6 py-3 rounded-lg font-semibold transition-all duration-300';
  
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1',
    secondary: 'border-2 border-white text-white hover:bg-white hover:text-blue-600 hover:shadow-lg hover:-translate-y-1',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:-translate-y-1',
  };

  const defaultWhileHover = disabled ? {} : { scale: 1.05, y: -2 };
  const defaultWhileTap = disabled ? {} : { scale: 0.95 };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      whileHover={whileHover || defaultWhileHover}
      whileTap={whileTap || defaultWhileTap}
    >
      {children}
    </motion.button>
  );
};
