'use client';

import { motion } from 'framer-motion';
import { SectionContainer } from '@/components/templates/SectionContainer';
import { Heading, Paragraph } from '@/components/atoms/Typography';
import type { SkillCategory } from '@/domain/entities';
import { containerVariants, itemVariants } from '@/presentation/lib/animations';
import {
  Code2,
  Server,
  Database,
  Wrench,
} from 'lucide-react';

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    color: "from-blue-500 to-blue-600",
    skills: [
      { name: "HTML/CSS", level: 95 },
      { name: "JavaScript/TypeScript", level: 90 },
      { name: "React", level: 85 },
      { name: "Bootstrap", level: 85 },
      { name: "Tailwind CSS", level: 80 },
    ],
  },
  {
    title: "Backend Development",
    color: "from-green-500 to-green-600",
    skills: [
      { name: ".NET Core", level: 80 },
      { name: "Python", level: 85 },
      { name: "Java", level: 95 },
      { name: "C#", level: 85 },
    ],
  },
  {
    title: "Database & Cloud",
    color: "from-purple-500 to-purple-600",
    skills: [
      { name: "T-SQL", level: 90 },
      { name: "MySQL", level: 85 },
      { name: "Docker", level: 65 },
    ],
  },
  {
    title: "Tools & Others",
    color: "from-orange-500 to-orange-600",
    skills: [
      { name: "Git/GitHub", level: 95 },
      { name: "VS Code", level: 95 },
      { name: "Agile/Scrum", level: 85 },
      { name: "Testing with Pytest", level: 80 },
    ],
  },
];

const categoryIcons: Record<string, React.ReactNode> = {
  "Frontend Development": <Code2 className="w-7 h-7" />,
  "Backend Development": <Server className="w-7 h-7" />,
  "Database & Cloud": <Database className="w-7 h-7" />,
  "Tools & Others": <Wrench className="w-7 h-7" />,
};

// Stagger float delays so cards don't move in sync (like hero photo)
const floatDelays = [0, 0.5, 1, 1.5];
const floatDurations = [4, 4.5, 3.5, 4.2];




export default function Skills() {
  return (
    <SectionContainer id="skills" bgColor="gray">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Heading variant="h2" className="text-gray-900 dark:text-white mb-4">
          Skills & Technologies
        </Heading>
        <Paragraph className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
          A comprehensive overview of my technical expertise
        </Paragraph>
      </motion.div>

      {/* Floating category cards - Hero-style glow + gentle float */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            variants={itemVariants}
            className="relative flex-shrink-0"
          >
            {/* Float wrapper - separate from variant so entrance animation runs */}
            <motion.div
              className="relative w-full"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: floatDurations[categoryIndex % 4],
                repeat: Infinity,
                ease: 'easeInOut',
                delay: floatDelays[categoryIndex % 4],
              }}
            >
              {/* Outer glow - like hero photo */}
              <div
                className={`absolute -inset-1 rounded-2xl blur-xl opacity-60 dark:opacity-40 bg-gradient-to-br ${category.color}`}
              />
              {/* Frame / border */}
              <div className="relative rounded-2xl p-[2px] bg-white/50 dark:bg-white/10 shadow-xl">
                <div className="rounded-2xl bg-white dark:bg-gray-800/90 backdrop-blur-sm overflow-hidden border border-gray-100 dark:border-gray-700/50">
                  <div className="p-6">
                    <div
                      className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} text-white shadow-lg mb-4`}
                    >
                      {categoryIcons[category.title]}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      {category.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true, amount: 0 }}
                          transition={{ delay: skillIndex * 0.05 }}
                          className="inline-block px-3 py-1.5 rounded-lg text-sm font-medium bg-gray-100 dark:bg-gray-700/60 text-gray-800 dark:text-gray-200"
                        >
                          {skill.name}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  );
}
