'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { locales, Locale } from '@/i18n/request';

interface LanguageSwitcherProps {
  isScrolled?: boolean;
}

export const LanguageSwitcher = ({ isScrolled = false }: LanguageSwitcherProps) => {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();

  const languages = [
    { code: 'en' as Locale, label: 'English', },
    { code: 'ar' as Locale, label: 'العربية', },
  ];

  const switchLocale = (newLocale: Locale) => {
    router.replace(pathname, { locale: newLocale });
  };

  const buttonClasses = isScrolled
    ? 'flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200'
    : 'flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-200';

  return (
    <div className="relative group">
      <motion.button
        className={buttonClasses}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">
          {languages.find(lang => lang.code === locale)?.label}
        </span>
      </motion.button>
      
      <div className="absolute top-full right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {languages.map((lang) => (
          <motion.button
            key={lang.code}
            onClick={() => switchLocale(lang.code)}
            className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200 flex items-center gap-2 ${
              locale === lang.code ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium' : 'text-gray-700 dark:text-gray-200'
            }`}
            whileHover={{ x: 4 }}
          >
            <span>{lang.label}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};
