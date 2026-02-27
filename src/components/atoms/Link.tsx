'use client';

import NextLink from 'next/link';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface LinkProps {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
  whileHover?: any;
  whileTap?: any;
}

export const Link = ({
  href,
  children,
  external = false,
  className = '',
  whileHover,
  whileTap,
}: LinkProps) => {
  const defaultWhileHover = { scale: 1.05, y: -2 };
  const defaultWhileTap = { scale: 0.95 };

  if (external || href.startsWith('http')) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        whileHover={whileHover || defaultWhileHover}
        whileTap={whileTap || defaultWhileTap}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.div whileHover={whileHover || defaultWhileHover} whileTap={whileTap || defaultWhileTap}>
      <NextLink href={href} className={className}>
        {children}
      </NextLink>
    </motion.div>
  );
};
