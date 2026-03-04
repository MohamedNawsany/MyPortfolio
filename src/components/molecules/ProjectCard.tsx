'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Github, Eye } from 'lucide-react';
import type { Project } from '@/domain/entities';
import { Badge } from '@/components/atoms/Badge';

interface ProjectCardProps {
  project: Project;
  index: number;
  featured?: boolean;
}

export const ProjectCard = ({ project, index, featured = false }: ProjectCardProps) => {
  if (featured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl dark:shadow-gray-900/50 dark:hover:shadow-gray-900/70 transition-all duration-300 group border border-gray-100 dark:border-gray-700"
        whileHover={{ y: -5 }}
      >
        <div className="relative overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={400}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 dark:group-hover:bg-opacity-30 transition-all duration-300"
            whileHover={{ backgroundColor: 'rgba(0,0,0,0.2)' }}
          />
          <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/90 dark:bg-gray-700/90 rounded-full hover:bg-white dark:hover:bg-gray-600 transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-4 h-4 text-gray-700 dark:text-gray-200" />
            </motion.a>
            <motion.a
              href={project.liveUrl}
              className="p-2 bg-white/90 dark:bg-gray-700/90 rounded-full hover:bg-white dark:hover:bg-gray-600 transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-4 h-4 text-gray-700 dark:text-gray-200" />
            </motion.a>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, techIndex) => (
              <Badge key={techIndex} variant="primary">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex space-x-4">
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              whileHover={{ x: 2 }}
            >
              <Github className="w-5 h-5" />
              <span>Code</span>
            </motion.a>
            <motion.a
              href={project.liveUrl}
              className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
              whileHover={{ x: 2 }}
            >
              <ExternalLink className="w-5 h-5" />
              <span>Live Demo</span>
            </motion.a>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl dark:shadow-gray-900/50 dark:hover:shadow-gray-900/70 transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
      whileHover={{ y: -5 }}
    >
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
          {project.title}
        </h4>
        <div className="flex space-x-2">
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-4 h-4" />
          </motion.a>
          <motion.a
            href={project.liveUrl}
            className="p-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Eye className="w-4 h-4" />
          </motion.a>
        </div>
      </div>
      
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-1">
        {project.technologies.slice(0, 3).map((tech, techIndex) => (
          <Badge key={techIndex} variant="default">
            {tech}
          </Badge>
        ))}
        {project.technologies.length > 3 && (
          <span className="px-2 py-1 text-gray-500 dark:text-gray-400 text-xs">
            +{project.technologies.length - 3} more
          </span>
        )}
      </div>
    </motion.div>
  );
};
