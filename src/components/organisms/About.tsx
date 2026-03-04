'use client';

import { Code, Globe, Lightbulb, Users, Award, Target, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { SectionContainer } from '@/components/templates/SectionContainer';
import { Heading, Paragraph } from '@/components/atoms/Typography';
import { AchievementCard } from '@/components/molecules/AchievementCard';
import type { Achievement } from '@/domain/entities';
import { containerVariants, itemVariants } from '@/presentation/lib/animations';

export default function About() {
  const t = useTranslations('about');
  
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: t('highlights.cleanCode.title'),
      description: t('highlights.cleanCode.description')
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: t('highlights.fullStack.title'),
      description: t('highlights.fullStack.description')
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: t('highlights.innovation.title'),
      description: t('highlights.innovation.description')
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: t('highlights.collaboration.title'),
      description: t('highlights.collaboration.description')
    }
  ];

  const achievements: Achievement[] = [
    {
      icon: <Award className="w-6 h-6" />,
      title: t('achievements.depi.title'),
      description: t('achievements.depi.description')
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: t('achievements.project.title'),
      description: t('achievements.project.description')
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: t('achievements.student.title'),
      description: t('achievements.student.description')
    }
  ];
  return (
    <SectionContainer id="about" bgColor="white">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Heading variant="h2" className="text-gray-900 dark:text-white mb-4">
          {t('title')}
        </Heading>
        <Paragraph className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
          {t('subtitle')}
        </Paragraph>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Paragraph className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {t('paragraph1')}
          </Paragraph>
          
          <Paragraph className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {t('paragraph2')}
          </Paragraph>
          
          <Paragraph className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {t('paragraph3')}
          </Paragraph>

          <motion.div 
            className="grid grid-cols-3 gap-4 pt-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {achievements.map((achievement, index) => (
              <AchievementCard key={index} achievement={achievement} index={index} />
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-blue-100 dark:border-gray-700"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex justify-center items-center bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-full px-4 sm:px-8 py-6 shadow-lg max-w-full overflow-hidden border border-gray-200 dark:border-gray-700">
          <motion.div 
            className="text-center mx-2 sm:mx-4"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">2+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
          </motion.div>

          <div className="w-px h-8 bg-gray-300 dark:bg-gray-600 mx-2 sm:mx-4"></div>

          <motion.div 
            className="text-center mx-2 sm:mx-4"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">10+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
          </motion.div>

          <div className="w-px h-8 bg-gray-300 dark:bg-gray-600 mx-2 sm:mx-4"></div>

          <motion.div 
            className="text-center mx-2 sm:mx-4"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">98%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Client Satisfaction</div>
          </motion.div>
        </div>
      </motion.div>
    </SectionContainer>
  );
}
