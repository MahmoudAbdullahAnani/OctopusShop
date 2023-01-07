import axios from "axios";
// import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";
import { getProducts, textState } from "../../Data/AtomLang";
import SingleCard from "../SingleCard";

export default function CardHome() {
  const [, setProdactsAtom] = useRecoilState(getProducts);

  // Get Chaek i18n
  const [atomLang] = useRecoilState(textState);
  const [t, i18n] = useTranslation();
  const chakLangAREN = () => {
    atomLang ? i18n.changeLanguage("en") : i18n.changeLanguage("ar");
  };
  const [prodacts, setProdacts] = useState([]);
  useEffect(() => {
    chakLangAREN;

    axios({
      method: "get",
      url: "https://fakestoreapi.com/products",
    }).then((res) => {
      setProdacts(res.data);
      prodacts.length >= 1 && setProdactsAtom(true);
    });
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2
          id="#boost"
          className={`text-2xl font-bold tracking-tight text-gray-900 ${
            atomLang ? "text-end" : "text-start"
          }`}
        >
          {t("Variety of our products")}
        </h2>
        <SingleCard prodacts={prodacts} />
      </div>
    </div>
  );
}
