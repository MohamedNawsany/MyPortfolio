'use client';

import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { Certification } from '@/types';
import { Badge } from '@/components/atoms/Badge';

interface CertificationCardProps {
  certification: Certification;
  index: number;
}

export const CertificationCard = ({ certification, index }: CertificationCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-300"
      whileHover={{ y: -2, scale: 1.02 }}
    >
      <div className="flex items-start justify-between mb-3">
        <h4 className="text-lg font-semibold text-gray-900">
          {certification.title}
        </h4>
        <div className="flex items-center text-gray-500 text-sm">
          <Calendar className="w-4 h-4 mr-1" />
          {certification.date}
        </div>
      </div>
      
      <p className="text-blue-600 font-medium mb-2">
        {certification.issuer}
      </p>

      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-600">
          Credential ID: {certification.credentialId}
        </p>
        <Badge 
          variant={certification.level === 'Professional' ? 'success' : 'info'}
        >
          {certification.level}
        </Badge>
      </div>
    </motion.div>
  );
};
