import "../styles/globals.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { Fragment } from "react";
import Navbar from "../components/Nabar";
import Footer from "../components/Footer";



import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import lanAr from "../data/locale/lanAr.json";
import lanEn from "../data/locale/lanEn.json";
const resources = {
  en: {
    translation: lanEn,
  },
  ar: {
    translation: lanAr,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",

  interpolation: {
    escapeValue: false,
  },
});










function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  );
}

export default MyApp;
