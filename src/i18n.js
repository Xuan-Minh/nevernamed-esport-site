// src/i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // Lie i18next à React
  .init({
    resources: {
      en: {
        translation: {
          "About Us": "About Us",
          "Teams": "Teams",
          "Socials": "Socials",
          "Partners": "Partners",
        }
      },
      fr: {
        translation: {
          "About Us": "À Propos",
          "Teams": "Équipes",
          "Socials": "Réseaux",
          "Partners": "Partenaires",
        } 
      }
    },
    lng: "fr", // Langue par défaut
    fallbackLng: "fr", // Langue utilisée si une traduction manque

    interpolation: {
      escapeValue: false // React s'en occupe déjà
    }
  });

export default i18n;