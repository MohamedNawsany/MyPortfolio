'use client';

import { motion } from 'framer-motion';
import { ExternalLink, MapPin, Briefcase } from 'lucide-react';
import { Experience } from '@/types';
import { Badge } from '@/components/atoms/Badge';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export const ExperienceCard = ({ experience, index }: ExperienceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`relative flex items-center ${
        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {/* Timeline dot */}
      <motion.div 
        className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ scale: 1.2 }}
      />

      {/* Content */}
      <div className={`ml-12 md:ml-0 md:w-1/2 ${
        index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
      }`}>
        <motion.div 
          className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative"
          whileHover={{ y: -5, scale: 1.02 }}
        >
          {/* Company icon */}
          <div className="absolute -top-3 right-6 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <Briefcase className="w-4 h-4 text-white" />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-900">
              {experience.title}
            </h3>
            <Badge variant="primary">{experience.period}</Badge>
          </div>
          
          <div className="flex items-center text-gray-600 mb-2">
            <ExternalLink className="w-4 h-4 mr-2" />
            <span className="font-medium">{experience.company}</span>
          </div>
          
          <div className="flex items-center text-gray-500 mb-4">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{experience.location}</span>
          </div>

          <ul className="space-y-2 mb-6">
            {experience.description.map((item, itemIndex) => (
              <motion.li 
                key={itemIndex} 
                className="text-gray-700 flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
              >
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                {item}
              </motion.li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, techIndex) => (
              <Badge key={techIndex} variant="default">
                {tech}
              </Badge>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
