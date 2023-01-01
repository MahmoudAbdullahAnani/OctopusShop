import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import lanAr from "./lanAr.json";
// import lanEn from "./lanEr.json";
import lanAr from "../data/locale/lanAr.json";
import lanEn from "../data/locale/lanEn.json";
const resources = {
  en: {
    translation: lanEn
  },
  ar: {
    translation: lanAr
  },
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: "en", 

    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
