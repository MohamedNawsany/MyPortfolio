'use client';

import { motion } from 'framer-motion';

interface StatCardProps {
  value: string;
  label: string;
  delay?: number;
}

export const StatCard = ({ value, label, delay = 0 }: StatCardProps) => {
  return (
    <div className="text-center">
      <motion.div 
        className="text-3xl font-bold text-white"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
      >
        {value}
      </motion.div>
      <div className="text-sm text-blue-200">{label}</div>
    </div>
  );
};
