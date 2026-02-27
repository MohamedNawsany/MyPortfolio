'use client';

import { motion } from 'framer-motion';
import { SocialLink as SocialLinkType } from '@/types';

interface SocialLinkProps {
  social: SocialLinkType;
  index: number;
  isScrolled?: boolean;
}

export const SocialLink = ({ social, index, isScrolled = false }: SocialLinkProps) => {
  return (
    <motion.a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/10 backdrop-blur-sm border border-white/20 text-white' 
          : 'bg-white/10 backdrop-blur-sm border border-white/20 text-white'
      } group`}
      whileHover={{ scale: 1.1, y: -4 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
    >
      <div className={`w-6 h-6 text-white group-hover:text-blue-200 transition-colors duration-300`}>
        {social.icon}
      </div>
    </motion.a>
  );
};

export const SocialLinksGroup = ({ 
  socials, 
  isScrolled = false 
}: { 
  socials: SocialLinkType[];
  isScrolled?: boolean;
}) => {
  return (
    <div className="flex justify-center space-x-6">
      {socials.map((social, index) => (
        <SocialLink key={social.title} social={social} index={index} isScrolled={isScrolled} />
      ))}
    </div>
  );
};
