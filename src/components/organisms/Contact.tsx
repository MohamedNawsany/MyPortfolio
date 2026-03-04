'use client';

import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionContainer } from '@/components/templates/SectionContainer';
import { Heading, Paragraph } from '@/components/atoms/Typography';
import type { ContactInfo, SocialLink as SocialLinkType } from '@/domain/entities';
import { containerVariants, itemVariants } from '@/presentation/lib/animations';

const contactInfo: ContactInfo[] = [
  {
    icon: <Mail className="w-5 h-5" />,
    title: "Email",
    value: "dnawasany@gmail.com",
    link: "mailto:dnawasany@gmail.com"
  },
  {
    icon: <Phone className="w-5 h-5" />,
    title: "Phone",
    value: "01281106407",
    link: "tel:+201281106407"
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    title: "Location",
    value: "Alexandria, Egypt",
    link: "https://www.google.com/maps/place/Alexandria,+Egypt"
  }
];

const socialLinks: SocialLinkType[] = [
  {
    icon: <Github className="w-5 h-5" />,
    title: "GitHub",
    url: "https://github.com/MohamedNawsany",
    color: "hover:text-gray-900"
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    title: "LinkedIn",
    url: "https://linkedin.com/in/mohamed-nawasany",
    color: "hover:text-blue-600"
  },
  {
    icon: <MessageCircle className="w-5 h-5" />,
    title: "WhatsApp",
    url: "https://wa.me/201281106407",
    color: "hover:text-green-600"
  }
];

export default function Contact() {
  return (
    <SectionContainer id="contact" bgColor="gray" className="dark:bg-gray-800">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Heading variant="h2" className="text-gray-900 dark:text-white mb-3">
          Get In Touch
        </Heading>
        <Paragraph className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? I&apos;d love to hear from you.
        </Paragraph>
      </motion.div>

      <motion.div
        className="w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Full-width contact strip */}
        <motion.div
          variants={itemVariants}
          className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-10"
        >
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.link}
              target={info.link.startsWith('http') ? "_blank" : "_self"}
              rel={info.link.startsWith('http') ? "noopener noreferrer" : ""}
              variants={itemVariants}
              className="group w-full flex items-center gap-4 p-5 md:p-6 rounded-xl bg-white dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500/50 shadow-sm hover:shadow-md transition-all duration-300"
              whileHover={{ y: -2 }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 flex items-center justify-center text-white">
                {info.icon}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-0.5">
                  {info.title}
                </p>
                <p className="text-sm font-semibold text-gray-900 dark:text-white truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {info.value}
                </p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all" />
            </motion.a>
          ))}
        </motion.div>

        {/* Full-width bottom bar: socials + availability */}
        <motion.div
          variants={itemVariants}
          className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 p-6 md:p-8 rounded-2xl bg-white dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600"
        >
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
              Follow me
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gray-100 dark:bg-gray-600/50 text-gray-700 dark:text-gray-300 font-medium text-sm border border-transparent hover:border-gray-300 dark:hover:border-gray-500 transition-all ${social.color} dark:hover:text-white`}
                  title={social.title}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {social.icon}
                  <span>{social.title}</span>
                </motion.a>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/30 flex-shrink-0">
            <motion.div
              className="w-2.5 h-2.5 bg-green-500 dark:bg-green-400 rounded-full"
              animate={{ scale: [1, 1.3, 1], opacity: [1, 0.8, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="text-sm font-semibold text-green-800 dark:text-green-300 whitespace-nowrap">
              Available for work
            </span>
          </div>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400 w-full"
        >
          Open to full-time roles, freelance & collaboration.
        </motion.p>
      </motion.div>
    </SectionContainer>
  );
}
