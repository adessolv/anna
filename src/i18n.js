import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en/translation.json";
import ru from "./locales/ru/translation.json";
import es from "./locales/es/translation.json";

import hero_en from "./locales/en/hero.json";
import hero_ru from "./locales/ru/hero.json";
import hero_es from "./locales/es/hero.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
      hero: hero_en,
    },
    ru: {
      translation: ru,
      hero: hero_ru,
    },
    es: {
      translation: es,
      hero: hero_es,
    },
  },
  lng: "en",
  fallbackLng: "en",
  ns: ["translation", "hero"],
  defaultNS: "translation",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
