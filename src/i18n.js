import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en/translation.json";
import ru from "./locales/ru/translation.json";
import es from "./locales/es/translation.json";

import hero_en from "./locales/en/hero.json";
import hero_ru from "./locales/ru/hero.json";
import hero_es from "./locales/es/hero.json";

import method_en from "./locales/en/method.json";
import method_ru from "./locales/ru/method.json";
import method_es from "./locales/es/method.json";

import about_en from "./locales/en/about.json";
import about_ru from "./locales/ru/about.json";
import about_es from "./locales/es/about.json";

import booking_en from "./locales/en/booking.json";
import booking_ru from "./locales/ru/booking.json";
import booking_es from "./locales/es/booking.json";

import classes_en from "./locales/en/classes.json";
import classes_ru from "./locales/ru/classes.json";
import classes_es from "./locales/es/classes.json";

import privacy_es from "./locales/es/privacy-policy.json";
import privacy_en from "./locales/en/privacy-policy.json";
import privacy_ru from "./locales/ru/privacy-policy.json";

import footer_en from "./locales/en/footer.json";
import footer_ru from "./locales/ru/footer.json";
import footer_es from "./locales/es/footer.json";

import legal_en from "./locales/en/legalNotice.json";
import legal_ru from "./locales/ru/legalNotice.json";
import legal_es from "./locales/es/legalNotice.json";

import terms_es from "./locales/es/terms.json";
import terms_en from "./locales/en/terms.json";
import terms_ru from "./locales/ru/terms.json";

import exp_ru from "./locales/ru/experience.json";

import { footer } from "motion/react-client";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
      hero: hero_en,
      method: method_en,
      about: about_en,
      booking: booking_en,
      classes: classes_en,
      "privacy-policy": privacy_en,
      footer: footer_en,
      legal: legal_en,
      terms: terms_en,
    },
    ru: {
      translation: ru,
      hero: hero_ru,
      method: method_ru,
      about: about_ru,
      booking: booking_ru,
      classes: classes_ru,
      "privacy-policy": privacy_ru,
      footer: footer_ru,
      legal: legal_ru,
      terms: terms_ru,
      experience: exp_ru,
    },
    es: {
      translation: es,
      hero: hero_es,
      method: method_es,
      about: about_es,
      booking: booking_es,
      classes: classes_es,
      "privacy-policy": privacy_es,
      footer: footer_es,
      legal: legal_es,
      terms: terms_es,
    },
  },
  lng: "es",
  fallbackLng: "es",
  ns: [
    "translation",
    "hero",
    "method",
    "about",
    "booking",
    "classes",
    "privacy-policy",
    "footer",
    "legal",
  ],
  defaultNS: "translation",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
