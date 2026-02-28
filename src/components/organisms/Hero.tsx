'use client';

import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { scrollToSection } from '@/hooks/useScroll';
import { Button } from '@/components/atoms/Button';
import { StatCard } from '@/components/molecules/StatCard';
import { SocialLinksGroup } from '@/components/molecules/SocialLink';
import { SocialLink as SocialLinkType } from '@/types';

const socialLinks: SocialLinkType[] = [
  { icon: <Github className="w-6 h-6" />, title: 'GitHub', url: 'https://github.com/MohamedNawsany', color: 'hover:text-gray-900' },
  { icon: <Linkedin className="w-6 h-6" />, title: 'LinkedIn', url: 'https://linkedin.com/in/mohamed-nawasany', color: 'hover:text-blue-600' },
  { icon: <Mail className="w-6 h-6" />, title: 'Email', url: 'mailto:dnawasany@gmail.com', color: 'hover:text-blue-200' },
];

export default function Hero() {
  const t = useTranslations('hero');
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600">
        <div className="absolute inset-0 "></div>
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear',
          }}
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.2) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-4 h-4 bg-white/20 rounded-full"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-40 right-20 w-6 h-6 bg-white/10 rounded-full"
        animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          {/* Name and Profile Picture */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8"
          >
            {/* Profile Picture */}
<motion.div
  className="w-80 h-80 relative flex-shrink-0"
  animate={{ y: [0, -10, 0] }}
  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
>
  {/* OUTER GLOW */}
  <div className="absolute -inset-2 rounded-3xl bg-white/20 blur-xl opacity-70"></div>

  {/* MAIN BOX */}
  <div className="relative w-full h-full rounded-3xl p-[2px] bg-white/40">
    
    {/* INNER CONTAINER */}
    <div className="w-full h-full overflow-hidden rounded-3xl bg-black/10 backdrop-blur-sm shadow-2xl">
      
      <Image
        src="/minstry.jpg"
        alt="Mohamed Ahmed EL-Nawsany"
        fill
        quality={100}
        priority
        className="object-cover rounded-3xl"
      />
      
    </div>
  </div>
</motion.div>
            {/* Name */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 from-neutral-200 ">
                {t('title')}
                <motion.span
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 font-playwrite"
                  animate={{ color: ['rgb(147,197,253)', 'rgb(196,181,253)', 'rgb(147,197,253)'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  {t('subtitle')}
                </motion.span>
              </h1>
            </div>
          </motion.div>

          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-blue-100 mb-4">
            {t('role')}
          </motion.p>

          <motion.p variants={itemVariants} className="text-lg text-blue-200/80 mb-8 max-w-2xl mx-auto">
            {t('description')}
          </motion.p>

          {/* Stats */}
          <motion.div variants={itemVariants} className="flex justify-center space-x-8 mb-10">
            <StatCard value="2+" label={t('yearsExperience')} delay={0.3} />
            <StatCard value="10+" label={t('projectsCompleted')} delay={0.4} />
            <StatCard value="98%" label={t('clientSatisfaction')} delay={0.5} />
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="mb-12">
            <SocialLinksGroup socials={socialLinks} />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button variant="primary" onClick={() => scrollToSection('#about')}>
              {t('learnMore')}
            </Button>
            <motion.a
              href="/Mohamed_Ahmed_EL_Nawsany.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5" />
              {t('downloadCV')}
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.button
            onClick={() => scrollToSection('#about')}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={{ scale: 1.1 }}
          >
            <ChevronDown className="w-8 h-8 text-white/70 hover:text-white transition-colors duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
