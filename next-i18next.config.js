/** @type {import('next-i18next').UserConfig} */
const i18n = {
  defaultLocale: 'en', // Default fallback to English
  locales: ['en', 'pt'],
  // Custom detection for Portuguese
  localeDetection: {
    order: ['navigator'],
    lookupNavigator: (navigator) => {
      const lang = navigator.language || navigator.userLanguage;
      if (lang && lang.startsWith('pt')) {
        return 'pt';
      }
      return 'en';
    },
  },
};

module.exports = {
    i18n,
     reloadOnPrerender: process.env.NODE_ENV === 'development',
  };
