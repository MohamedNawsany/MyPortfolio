'use client';

import { motion } from 'framer-motion';
import type { Skill } from '@/domain/entities';

interface SkillItemProps {
  skill: Skill;
  color: string;
  index: number;
}

export const SkillItem = ({ skill, color, index }: SkillItemProps) => {
  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">
          {skill.name}
        </span>
        <span className="text-sm text-gray-500">
          {skill.level}%
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <motion.div
          className={`bg-gradient-to-r ${color} h-2 rounded-full`}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ 
            duration: 1.5, 
            delay: index * 0.1,
            ease: 'easeOut' 
          }}
        />
      </div>
    </div>
  );
};
