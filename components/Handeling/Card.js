import axios from "axios";
// import Image from "next/image";
import { useEffect, useState } from "react";
import lodingDataHome from "./LodingDataHome"
import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";
import { getProducts, textState } from "../../Data/AtomLang";
import SingleCard from "../SingleCard";
import styles from "../../styles/footer.module.scss"
import { useQuery } from "react-query";
import LodingDataHome from "./LodingDataHome";
export var dataPase= []

export default function CardHome() {
  // Get Chaek i18n
  const [atomLang] = useRecoilState(textState);
  const [t, i18n] = useTranslation();
  const chakLangAREN = () => {
    atomLang ? i18n.changeLanguage("en") : i18n.changeLanguage("ar");
  };
  // https://fakestoreapi.com/products
  // http://localhost:9000/products
  const fetchData = () => {
    return axios.get("https://fakestoreapi.com/products").then((res) => {
      return res.data;
    });
  };
  // https://fakestoreapi.com/products/categories
  // http://localhost:9000/categories
  const fetchCategories = () => {
    return axios
      .get("https://fakestoreapi.com/products/categories")
      .then((res) => {
        return res.data;
      });
  };

  const fetchDataCategories = useQuery("Categories", fetchCategories);

  const { data, isError, error, isLoading, isFetched } = useQuery(
    "prodects",
    fetchData
  );
  if (isError) {
    console.log(error);
  } else {
    dataPase = data;
  }
  useEffect(() => {
    chakLangAREN;
  }, []);

  if (isLoading) {
    return <LodingDataHome />;
  }
  return (
    <div className={`bg-white`}>
      <div className="mx-auto max-w-2xl py-1 px-4 sm:py-2 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2
          id="#boost"
          className={`text-2xl font-bold tracking-tight text-gray-900 ${
            atomLang ? "text-end" : "text-start"
          }`}
        >
          {t("Variety of our products")}
        </h2>
        <SingleCard prodacts={data} categories={fetchDataCategories.data} />
      </div>
    </div>
  );
}
