'use client';

import { GraduationCap, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionContainer } from '@/components/templates/SectionContainer';
import { Heading, Paragraph } from '@/components/atoms/Typography';
import { EducationCard } from '@/components/molecules/EducationCard';
import { CertificationCard } from '@/components/molecules/CertificationCard';
import { Education as EducationType, Certification } from '@/types';
import { containerVariants, itemVariants } from '@/lib/animations';

const education: EducationType[] = [
  {
    degree: "B.Eng. in Computer & Communication Engineering",
    institution: "Faculty of Engineering, Alexandria University",
    location: "Alexandria, Egypt",
    period: "2022 - 2027",
    description: "Specialized in Software Engineering with focus on web development and database systems.",
    achievements: [
      "1st Place in Tawwar W Ghayer Programming Competition",
      "SQL Fundamentals Certification from New Horizons",
      "Completed Java SE and .NET Full-Stack training"
    ]
  }
];

const certifications: Certification[] = [
  {
    title: "Forward Program",
    issuer: "McKinsey & Company",
    date: "2024",
    credentialId: "MCK-FWD-2024",
    level: "Professional"
  },
  {
    title: "SQL Fundamentals Certification",
    issuer: "New Horizons",
    date: "2024",
    credentialId: "NH-SQL-2024",
    level: "Fundamental"
  },
  {
    title: "Java SE Certification",
    issuer: "New Horizons",
    date: "2024",
    credentialId: "NH-JAVA-2024",
    level: "Intermediate"
  }
];

export default function Education() {
  return (
    <SectionContainer id="education" bgColor="white">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Heading variant="h2" className="text-gray-900 mb-4">
          Education & Certifications
        </Heading>
        <Paragraph className="max-w-2xl mx-auto">
          My academic background and professional certifications that support my expertise
        </Paragraph>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Education */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className="flex items-center mb-8"
            variants={itemVariants}
          >
            <GraduationCap className="w-6 h-6 text-blue-600 mr-3" />
            <h3 className="text-2xl font-semibold text-gray-900">Education</h3>
          </motion.div>
          
          {education.map((edu, index) => (
            <EducationCard key={index} education={edu} index={index} />
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className="flex items-center mb-8"
            variants={itemVariants}
          >
            <Award className="w-6 h-6 text-blue-600 mr-3" />
            <h3 className="text-2xl font-semibold text-gray-900">Certifications</h3>
          </motion.div>
          
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <CertificationCard key={index} certification={cert} index={index} />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Additional Learning */}
      <motion.div 
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-semibold text-gray-900 mb-8">
          Endless Learning
        </h3>
        <Paragraph className="max-w-3xl mx-auto mb-8">
          I believe in lifelong learning and staying updated with the latest technologies. 
          I regularly participate in online courses, workshops, and tech conferences to 
          enhance my skills and knowledge.
        </Paragraph>
      </motion.div>
    </SectionContainer>
  );
}
