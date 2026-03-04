'use client';

import { Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionContainer } from '@/components/templates/SectionContainer';
import { Heading, Paragraph } from '@/components/atoms/Typography';
import { ProjectCard } from '@/components/molecules/ProjectCard';
import type { Project } from '@/domain/entities';
import { containerVariants } from '@/presentation/lib/animations';
import { Button } from '@/components/atoms/Button';

const projects: Project[] = [
  {
    title: "LocallyCo E-commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API", "Socket.io"],
    githubUrl: "https://github.com/MohamedNawsany",
    liveUrl: "#",
    featured: true
  },
  {
    title: "Internship Tracker App",
    description: "A collaborative task management application with real-time updates, file sharing, and team communication features.",
    image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Vue.js", "Express.js", "PostgreSQL", "Socket.io"],
    githubUrl: "https://github.com/MohamedNawsany",
    liveUrl: "#",
    featured: true
  },
  {
    title: "Weather Dashboard",
    description: "A responsive weather application with location-based forecasts, interactive maps, and personalized weather alerts.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["HTML5", "CSS3", "OpenWeather API", "JavaScript"],
    githubUrl: "https://github.com/MohamedNawsany/Weather-API",
    liveUrl: "https://weather-api-plum-pi.vercel.app/",
    featured: false
  },
  {
    title: "Restaurant simple website",
    description: "A responsive restaurant website with a user-friendly interface and a visually appealing design.",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    githubUrl: "https://github.com/MohamedNawsany/Restaurant-simple-website",
    liveUrl: "https://restaurant-simple-website.vercel.app/",
    featured: false
  },  {
    title: "Fokir Website",
    description: "Portfolio template for web developers and designers with a clean and modern design.",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    githubUrl: "https://github.com/MohamedNawsany/Fokir",
    liveUrl: "https://fokir-weld-ten.vercel.app/",
    featured: false
  },  {
    title: "Gaming Website",
    description: "Analytics dashboard for social media management with data visualization, scheduling tools, and performance metrics.",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Next.js", "Python", "FastAPI", "Chart.js", "Redis"],
    githubUrl: "https://github.com/MohamedNawsany/Gaming-API-website",
    liveUrl: "https://gaming-api-website-pi.vercel.app/",
    featured: false
  },  {
    title: "Bakery Website",
    description: "Analytics dashboard for social media management with data visualization, scheduling tools, and performance metrics.",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Next.js", "Python", "FastAPI", "Chart.js", "Redis"],
    githubUrl: "https://github.com/MohamedNawsany",
    liveUrl: "#",
    featured: false
  },
  {
    title: "Agency Website",
    description: "Educational platform with course management, progress tracking, and interactive learning modules for students and instructors.",
    image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "Node.js", "MongoDB", "JWT", "AWS S3"],
    githubUrl: "https://github.com/MohamedNawsany",
    liveUrl: "#",
    featured: false
  }
];

export default function Projects() {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <SectionContainer id="projects" bgColor="gray" className="dark:bg-gray-800">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Heading variant="h2" className="text-gray-900 dark:text-white mb-4">
          Featured Projects
        </Heading>
        <Paragraph className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
          A showcase of my recent work and personal projects that demonstrate my skills and creativity
        </Paragraph>
      </motion.div>

      {/* Featured Projects */}
      <motion.div 
        className="grid lg:grid-cols-2 gap-8 mb-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {featuredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} featured={true} />
        ))}
      </motion.div>

      {/* Other Projects */}
      <div>
        <motion.h3 
          className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Other Notable Projects
        </motion.h3>
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {otherProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} featured={false} />
          ))}
        </motion.div>
      </div>

      <motion.div 
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.a
          href="https://github.com/MohamedNawsany"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-300 border border-transparent dark:border-gray-600"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <Github className="w-5 h-5" />
          <span>View More on GitHub</span>
        </motion.a>
      </motion.div>
    </SectionContainer>
  );
}
