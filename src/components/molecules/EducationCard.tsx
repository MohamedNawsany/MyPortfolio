'use client';

import { motion } from 'framer-motion';
import { Star, Trophy } from 'lucide-react';
import { Education } from '@/types';
import { Badge } from '@/components/atoms/Badge';

interface EducationCardProps {
  education: Education;
  index: number;
}

export const EducationCard = ({ education, index }: EducationCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 shadow-lg border border-blue-100"
      whileHover={{ scale: 1.02, y: -5 }}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h4 className="text-xl font-semibold text-gray-900 mb-2">
            {education.degree}
          </h4>
          <p className="text-lg text-blue-600 font-medium mb-1">
            {education.institution}
          </p>
          <p className="text-gray-600">{education.location}</p>
        </div>
        <Badge variant="primary">{education.period}</Badge>
      </div>
      
      <p className="text-gray-700 mb-4">
        {education.description}
      </p>
      
      {education.achievements && education.achievements.length > 0 && (
        <div>
          <h5 className="font-semibold text-gray-900 mb-2 flex items-center">
            <Star className="w-4 h-4 text-yellow-500 mr-2" />
            Achievements:
          </h5>
          <ul className="space-y-2">
            {education.achievements.map((achievement, achievementIndex) => (
              <motion.li 
                key={achievementIndex} 
                className="text-gray-700 flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Trophy className="w-4 h-4 text-yellow-500 mt-0.5 mr-3 flex-shrink-0" />
                {achievement}
              </motion.li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
};
