import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import detector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import TranslationEn from './locales/en/TranslationEn.json';
import TranslationRu from './locales/ru/TranslationRu.json';

i18n
  .use(initReactI18next)
  .use(Backend)
  .use(LanguageDetector)
  .use(detector)
  .use(initReactI18next)
  .init({
    resources: {
      English: {translation: TranslationEn},
      Russian: {translation: TranslationRu}
    },
    lng: 'English',
    fallbackLng: 'English',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
