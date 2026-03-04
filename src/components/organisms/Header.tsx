'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScroll, scrollToSection } from '@/application/hooks/useScroll';
import { getNavItems } from '@/application/services/navigation.service';
import { NavItem } from '@/components/molecules/NavItem';
import { LanguageSwitcher } from '@/components/atoms/LanguageSwitcher';
import { ThemeToggle } from '@/components/atoms/ThemeToggle';
import { useTranslations } from 'next-intl';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = useScroll(50);
  const t = useTranslations();
  const navItems = getNavItems(t);

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-100 dark:border-gray-800' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <h1 className={`text-xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-blue-600 dark:text-blue-400' : 'text-white'
            }`}>
              Mohamed EL-Nawsany
            </h1>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item, index) => (
                <NavItem
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  isScrolled={isScrolled}
                  index={index}
                />
              ))}
              <ThemeToggle isScrolled={isScrolled} />
              <LanguageSwitcher isScrolled={isScrolled} />
            </div>
          </div>

          {/* Mobile menu button + theme */}
          <div className="md:hidden flex items-center gap-1">
            <ThemeToggle isScrolled={isScrolled} />
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`transition-colors duration-200 ${
                isScrolled ? 'text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400' : 'text-white hover:text-blue-200'
              }`}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className="md:hidden overflow-hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isMenuOpen ? 'auto' : 0, 
            opacity: isMenuOpen ? 1 : 0 
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-800 shadow-lg rounded-lg mt-2">
            {navItems.map((item, index) => (
              <motion.button
                key={item.href}
                onClick={() => {
                  scrollToSection(item.href);
                  setIsMenuOpen(false);
                }}
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-all duration-200"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ x: 4 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
}
