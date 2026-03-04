'use client';

import { motion } from 'framer-motion';
import type { Achievement } from '@/domain/entities';

interface AchievementCardProps {
  achievement: Achievement;
  index: number;
}

export const AchievementCard = ({ achievement, index }: AchievementCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center p-4 bg-blue-50 dark:bg-gray-800 rounded-lg hover:bg-blue-100 dark:hover:bg-gray-700 transition-colors duration-300"
    >
      <div className="text-blue-600 dark:text-blue-400 mb-2 flex justify-center">
        {achievement.icon}
      </div>
      <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
        {achievement.title}
      </h4>
      <p className="text-xs text-gray-600 dark:text-gray-300">
        {achievement.description}
      </p>
    </motion.div>
  );
};
