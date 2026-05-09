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

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
      hero: hero_en,
      method: method_en,
      about: about_en,
      booking: booking_en,
      classes: classes_en,
    },
    ru: {
      translation: ru,
      hero: hero_ru,
      method: method_ru,
      about: about_ru,
      booking: booking_ru,
      classes: classes_ru,
    },
    es: {
      translation: es,
      hero: hero_es,
      method: method_es,
      about: about_es,
      booking: booking_es,
      classes: classes_es,
      "privacy-policy": privacy_es,
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
  ],
  defaultNS: "translation",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
