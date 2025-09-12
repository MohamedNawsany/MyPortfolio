import React from 'react';
import { GraduationCap, Award, Calendar, Star, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const Education = () => {
const education = [
  {
    degree: "B.Eng. in Computer & Communication Engineering",
    institution: "Faculty of Engineering, Alexandria University",
    location: "Alexandria, Egypt",
    period: "2022 - 2027",
    description: "Specialized in Software Engineering with focus on web development and database systems.",
    achievements: [ // ✅ Add this field
      "1st Place in Tawwar W Ghayer Programming Competition",
      "SQL Fundamentals Certification from New Horizons",
      "Completed Java SE and .NET Full-Stack training"
    ]
  }
];

const certifications = [
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



  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Education & Certifications
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My academic background and professional certifications that support my expertise
          </p>
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
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 shadow-lg border border-blue-100"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      {edu.degree}
                    </h4>
                    <p className="text-lg text-blue-600 font-medium mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-gray-600">{edu.location}</p>
                  </div>
                  <motion.span 
                    className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full"
                    whileHover={{ scale: 1.05 }}
                  >
                    {edu.period}
                  </motion.span>
                </div>
                
                <p className="text-gray-700 mb-4">
                  {edu.description}
                </p>
                
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 mr-2" />
                    Achievements:
                  </h5>
        <ul className="space-y-2">
  {edu.achievements.length > 0 && (
    <motion.li 
      key={0} 
      className="text-gray-700 flex items-start"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Trophy className="w-4 h-4 text-yellow-500 mt-0.5 mr-3 flex-shrink-0" />
      {edu.achievements[0]}
    </motion.li>
  )}
</ul>
                </div>
              </motion.div>
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
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-300"
                  whileHover={{ y: -2, scale: 1.02 }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-semibold text-gray-900">
                      {cert.title}
                    </h4>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {cert.date}
                    </div>
                  </div>
                  
                  <p className="text-blue-600 font-medium mb-2">
                    {cert.issuer}
                  </p>

                  <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-600">
                      Credential ID: {cert.credentialId}
                    </p>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      cert.level === 'Professional' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {cert.level}
                    </span>
                  </div>
                </motion.div>
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
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            I believe in lifelong learning and staying updated with the latest technologies. 
            I regularly participate in online courses, workshops, and tech conferences to 
            enhance my skills and knowledge.
          </p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              'Coursera', 'Udemy', 'Pluralsight', 'MDN Web Docs', 
              'React Documentation', 'Node.js Guides', 'AWS Training',
              'Tech Conferences', 'Webinars', 'Open Source Contributions'
            ].map((source, index) => (
              <motion.span
                key={index}
                variants={itemVariants}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-blue-50 hover:text-blue-700 transition-colors duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {source}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;