// i18n.js

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Elayout from "./lang/en/layout";
import Rlayout from "./lang/ru/layout";
import Ulayout from "./lang/uz/layout";
import Eabout from "./lang/en/about";
import Rabout from "./lang/ru/about";
import Uabout from "./lang/uz/about";
import Ehome from "./lang/en/home";
import Rhome from "./lang/ru/home";
import Uhome from "./lang/uz/home";

// Sample translation resources
const resources = {
  en: {
    layout : Elayout,
    about : Eabout,
    home: Ehome,
  },
  ru: {
    layout : Rlayout,
    about : Rabout,
    home: Rhome,

  },
  uz: {
    layout : Ulayout,
    about : Uabout,
    home: Uhome,
  },
};

i18n
  .use(initReactI18next) // Passes i18n instance to react-i18next
  .init({
    resources,
    lng: "en", // Default language
    interpolation: {
      escapeValue: false, // Not needed for React
    },
  });

export default i18n;