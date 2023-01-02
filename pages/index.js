import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";
import textState from "../Data/AtomLang";

const Home = () => {
  const [atomLang, ] = useRecoilState(textState);
  const [t, i18n] = useTranslation();
  const chakLangAREN = () => {
    atomLang ? i18n.changeLanguage("en") : i18n.changeLanguage("ar");
  };
  useEffect(() => {
    chakLangAREN
  },[])
  return (
    <>
      <h1 className={`${atomLang === true && "text-end"}`}>{t("Hello")}</h1>
    </>
  );
};

export default Home;
