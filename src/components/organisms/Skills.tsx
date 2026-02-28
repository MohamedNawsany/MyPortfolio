'use client';

import { motion } from 'framer-motion';
import { SectionContainer } from '@/components/templates/SectionContainer';
import { Heading, Paragraph } from '@/components/atoms/Typography';
import { SkillItem } from '@/components/molecules/SkillItem';
import { SkillCategory } from '@/types';
import { containerVariants, itemVariants } from '@/lib/animations';
import { Badge } from '@/components/atoms/Badge';

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    color: "from-blue-500 to-blue-600",
    skills: [
      { name: "HTML/CSS", level: 95 },
      { name: "JavaScript/TypeScript", level: 90 },
      { name: "React", level: 85 },
      { name: "Bootstrap", level: 85 },
{ name: "Tailwind CSS", level: 80 }
    ]
  },
  {
    title: "Backend Development",
    color: "from-green-500 to-green-600",
    skills: [
      { name: ".NET Core", level: 80 },
      { name: "Python", level: 85 },
      { name: "Java", level: 95 },
      { name: "C#", level: 85 },
    ]
  },
  {
    title: "Database & Cloud",
    color: "from-purple-500 to-purple-600",
    skills: [
      { name: "T-SQL", level: 90 },
      { name: "MySQL", level: 85 },
      { name: "Docker", level: 65 }
    ]
  },
  {
    title: "Tools & Others",
    color: "from-orange-500 to-orange-600",
    skills: [
      { name: "Git/GitHub", level: 95 },
      { name: "VS Code", level: 95 },
      { name: "Agile/Scrum", level: 85 },
      { name: "Testing with Pytest", level: 80 }
    ]
  }
];

const technologies = [
  'React', 'TypeScript', 'Python', 'T-SQL', 'HTML5', 'CSS3',
  'Docker', 'Git', 'jQuery', 'javascript', 'java',
  'Tailwind CSS', '.NET Core', 'C#'
];

export default function Skills() {
  return (
    <SectionContainer id="skills" bgColor="gray">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Heading variant="h2" className="text-gray-900 mb-4">
          Skills & Technologies
        </Heading>
        <Paragraph className="max-w-2xl mx-auto">
          A comprehensive overview of my technical expertise and proficiency levels
        </Paragraph>
      </motion.div>

      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            variants={itemVariants}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            whileHover={{ y: -5 }}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              {category.title}
            </h3>
            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <SkillItem
                  key={skillIndex}
                  skill={skill}
                  color={category.color}
                  index={skillIndex}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-semibold text-gray-900 mb-8">
          Technologies I Work With
        </h3>
        <motion.div 
          className="flex flex-wrap justify-center gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
            >
              <Badge variant="default" className="px-4 py-2 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 shadow-sm hover:shadow-md">
                {tech}
              </Badge>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
}
