import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import lanAr from "../Data/locale/lanAr";
import lanEn from "../Data/locale/lanEn";

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
