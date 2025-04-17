import i18n from 'i18next';
import { initReactI18next } from 'react-i18next/initReactI18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { i18n as i18nConfig } from '../next-i18next.config';

i18n
  .use(initReactI18next)
  .use(resourcesToBackend((language: string, ns: string) => import(`../locales/${language}/${ns}.json`)))
  .init({
    fallbackLng: i18nConfig.defaultLocale,
    lng: i18nConfig.defaultLocale, // Set initial language to default locale
    preload: i18nConfig.locales,
    ns: ['common', 'home', 'contact'], // Add all namespaces here
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;