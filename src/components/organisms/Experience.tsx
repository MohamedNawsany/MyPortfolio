'use client';

import { motion } from 'framer-motion';
import { SectionContainer } from '@/components/templates/SectionContainer';
import { Heading, Paragraph } from '@/components/atoms/Typography';
import { ExperienceCard } from '@/components/molecules/ExperienceCard';
import { Experience as ExperienceType } from '@/types';
import { containerVariants } from '@/lib/animations';

const experiences: ExperienceType[] = [
  {
    title: "Orange Software engineer internship",
    company: "Orange Digital Center",
    location: "Cairo, Egypt",
    period: "2024 - 2025",
    description: [
      "As a Software Engineer Intern at Orange Egypt, I have gained hands-on experience in software design principles, system architecture, and scalable application development.",
      "I have worked with SOLID principles, design patterns, and clean code practices to build maintainable solutions while deepening my knowledge of system design.",
      "Additionally, I have developed skills in unit, integration, and end-to-end testing with frameworks like PyTest.",
      "Expanding into DevOps, I have worked with Docker for containerization, This experience has strengthened my ability to build, deploy, and manage high-performance, scalable applications while following industry best practices."
    ],
    technologies: ["Python", "MySQL", "Docker", "PyTest", "Git", "github"]
  },
  {
    title: ".NET full-stack Developer | DEPI",
    company: "DEPI",
    location: "Alexandria, Egypt",
    period: "2024 - 2025",
    description: [
      "Participating in a structured training program covering .NET Core, C#, SQL, Entity Framework, ASP.NET MVC, and Web API.",
      "Developing full-stack applications using HTML, CSS, JavaScript, and Bootstrap for the front end.",
      "Working on a real-world project, following best practices in software development, version control (Git), and Agile methodologies.",
      "Enhancing problem-solving skills by tackling practical coding challenges and debugging complex issues.",
      "Collaborating with peers and mentors to build scalable and efficient web applications"
    ],
    technologies: ["C#", ".NET Core", "SQL", "Entity Framework", "ASP.NET MVC", "Web API", "Git"]
  },
  {
    title: "Web Developer Intern | NTI",
    company: "NTI",
    location: "Alexandria, Egypt",
    period: "2025",
    description: [
      "Created responsive and interactive user interfaces using modern designs",
      "Collaborated with designers to implement pixel-perfect designs",
      "Contributed to open-source projects and technical documentation"
    ],
    technologies: ["HTML5", "JavaScript", "CSS3", "Bootstrap", "JQuery", "Git"]
  }
];

export default function Experience() {
  return (
    <SectionContainer id="experience" bgColor="white">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Heading variant="h2" className="text-gray-900 mb-4">
          Work Experience
        </Heading>
        <Paragraph className="max-w-2xl mx-auto">
          My professional journey and the roles that have shaped my expertise
        </Paragraph>
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
            <ExperienceCard key={index} experience={exp} index={index} />
          ))}
        </motion.div>
      </div>
    </SectionContainer>
  );
}
