import React from 'react';
import { Code, Globe, Lightbulb, Users, Award, Target, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code with best practices"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Full-Stack",
      description: "End-to-end development from frontend to backend and deployment"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "Always exploring new technologies and creative solutions"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "Strong team player with excellent communication skills"
    }
  ];

  const achievements = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Best Performer in DEPI",
      description: "2024-2025"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Best Project",
      description: "Ministry of Youth and Sports"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Best Student",
      description: "E.B.S High School"
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
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm a passionate software engineer with a love for creating meaningful digital experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm Mohamed Ahmed EL-Nawsany, a dedicated software engineer from Alexandria, Egypt, 
              with a passion for building innovative solutions that solve real-world problems. 
              With 2+ years of experience and expertise in modern web technologies, I strive to create 
              applications that are both functional and beautiful.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
             I'm currently pursuing a Bachelor's degree in Computer and Communications Engineering at Alexandria University. My journey into tech has been fueled by a passion for software development and continuous learning. I've already gained hands-on experience through internships, personal projects, and collaborations, focusing on full-stack development, cloud technologies, and agile methodologies.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              When I'm not coding, I enjoy exploring new technologies, contributing to open-source 
              projects, and sharing knowledge with the developer community. I'm always excited to 
              take on new challenges and collaborate on interesting projects.
            </p>

            <motion.div 
              className="grid grid-cols-3 gap-4 pt-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-300"
                >
                  <div className="text-blue-600 mb-2 flex justify-center">
                    {achievement.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">
                    {achievement.title}
                  </h4>
                  <p className="text-xs text-gray-600">
                    {achievement.description}
                  </p>
                </motion.div>
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
                className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-blue-100"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="text-blue-600 mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">
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
          <div className="inline-flex items-center space-x-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full px-8 py-6 shadow-lg">
            <div className="text-center">
              <motion.div 
                className="text-3xl font-bold text-blue-600"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                2+
              </motion.div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-center">
              <motion.div 
                className="text-3xl font-bold text-blue-600"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                10+
              </motion.div>
              <div className="text-sm text-gray-600">Projects Completed</div>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-center">
              <motion.div 
                className="text-3xl font-bold text-blue-600"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                98%
              </motion.div>
              <div className="text-sm text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;