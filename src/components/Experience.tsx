import React from 'react';
import { Calendar, MapPin, ExternalLink, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Tech Solutions Inc.",
      location: "Cairo, Egypt",
      period: "2022 - Present",
      description: [
        "Lead development of scalable web applications using React and Node.js",
        "Mentored junior developers and conducted code reviews",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Collaborated with cross-functional teams to deliver high-quality products"
      ],
      technologies: ["React", "Node.js", "TypeScript", "AWS", "MongoDB"]
    },
    {
      title: "Full-Stack Developer",
      company: "Digital Innovations",
      location: "Alexandria, Egypt",
      period: "2021 - 2022",
      description: [
        "Developed and maintained multiple client-facing web applications",
        "Built RESTful APIs and integrated with third-party services",
        "Optimized application performance resulting in 40% faster load times",
        "Participated in agile development processes and sprint planning"
      ],
      technologies: ["Vue.js", "Express.js", "PostgreSQL", "Docker", "Git"]
    },
    {
      title: "Frontend Developer",
      company: "Creative Web Studio",
      location: "Remote",
      period: "2020 - 2021",
      description: [
        "Created responsive and interactive user interfaces using modern frameworks",
        "Collaborated with designers to implement pixel-perfect designs",
        "Implemented automated testing reducing bugs by 50%",
        "Contributed to open-source projects and technical documentation"
      ],
      technologies: ["React", "JavaScript", "CSS3", "Jest", "Figma"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey and the roles that have shaped my expertise
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <motion.div 
            className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 h-full w-0.5 bg-gradient-to-b from-blue-500 to-indigo-600"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          <motion.div 
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
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
                        {exp.title}
                      </h3>
                      <span className="text-sm text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    
                    <div className="flex items-center text-gray-600 mb-2">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-500 mb-4">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{exp.location}</span>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {exp.description.map((item, itemIndex) => (
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
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200"
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;