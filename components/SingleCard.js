import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";
import { textState } from "../Data/AtomLang";
import FormaterPrice from "../FormatNumber/numFormat";
import styles from "../styles/cardes.module.scss";

const SingleCard = ({ prodacts, categories }) => {
  // Get i18n
  const [atomLang] = useRecoilState(textState);
  const [t, i18n] = useTranslation();

  const chakLangAREN = () => {
    atomLang ? i18n.changeLanguage("en") : i18n.changeLanguage("ar");
  };
  const [chackSignIn, setChackSignIn] = useState("");
  useEffect(() => {
    chakLangAREN;
    const chackLogin = localStorage.getItem("signin");
    setChackSignIn(chackLogin);
  }, []);
  const categoriesStatic = {
    name1: t("electronics"),
    name2: t("jewelery"),
    name3: t("men's clothing"),
    name4: t("women's clothing"),
    name5: t("All"),
  };

  const [typeProdects, setTypeProdects] = useState("All");
  const filterData = prodacts.filter((p) => p.category === typeProdects);

  const [maxPrice, setMaxPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [dataPrice, setDataPrice] = useState([]);
  const [, setDataPrice2] = useState([]);
  const filterPrice = (e) => {
    e.preventDefault();
    const filterDataPrice = (
      typeProdects === "All" ? prodacts : filterData
    ).filter((p) => p.price >= minPrice && p.price <= maxPrice);
    setDataPrice(filterDataPrice);
  };
    const filterPrice2 = () => {
      setDataPrice([]);
    };
  const golbalFilter = typeProdects === "All" ? prodacts : filterData;
  const [startFilterPrice, setStartFilterPrice] = useState(false);
  return (
    <>
      <div className={`flex justify-around gap-3 row ${styles.categories}`}>
        <button
          onClick={() => setTypeProdects("electronics")}
          className="col-lg-2 col-mg-3 btn fs-5 border "
        >
          {categoriesStatic.name1}
        </button>
        <button
          onClick={() => setTypeProdects("jewelery")}
          className="col-lg-2 col-mg-3 btn fs-5 border"
        >
          {categoriesStatic.name2}
        </button>
        <button
          onClick={() => setTypeProdects("men's clothing")}
          className="col-lg-2 col-mg-3 btn fs-5 border"
        >
          {categoriesStatic.name3}
        </button>
        <button
          onClick={() => setTypeProdects("women's clothing")}
          className="col-lg-2 col-mg-3 btn fs-5 border"
        >
          {categoriesStatic.name4}
        </button>
        <button
          onClick={() => setTypeProdects("All")}
          className="col-lg-2 col-mg-3 btn fs-5 border"
        >
          {categoriesStatic.name5}
        </button>
      </div>
      <form method="POST" className={`felx flex-wrap text-center gap-2 my-2`}>
        <input
          className={` bg-gray-200 hover:bg-gray-50 focus:bg-gray-50 border px-2 py-1 rounded-md ${
            atomLang && "text-end"
          }`}
          type="number"
          onChange={(e) => setMaxPrice(e.target.value)}
          placeholder={`${t("max price")}`}
        />
        <input
          className={` bg-gray-200 hover:bg-gray-50 focus:bg-gray-50 border px-2 py-1 rounded-md my-2 mx-2 ${
            atomLang && "text-end"
          }`}
          type="number"
          onChange={(e) => setMinPrice(e.target.value)}
          placeholder={`${t("min price")}`}
        />
        <div className={``}>
          {" "}
          <button
            type="submit"
            className={`px-3 py-2 text-white border bg-slate-500 rounded-l-lg hover:bg-slate-700`}
            onClick={(e) => {
              setStartFilterPrice(1);
              filterPrice(e);
            }}
          >
            {t("filter")}
          </button>
          <button
            type="reset"
            className={`px-3 py-2  text-white border bg-slate-500 rounded-r-lg hover:bg-slate-700`}
            onClick={() => {
              setStartFilterPrice(false);
              filterPrice2;
            }}
          >
            {t("Reset")}
          </button>
        </div>
      </form>
      <div className="mt-6 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {(startFilterPrice ? dataPrice : golbalFilter).map(
          ({ id, title, price, description, category, image, rating }) => (
            <div key={id} className="group relative ">
              <div className=" min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                {/*eslint-disable-next-line @next/next/no-img-element*/}
                <img
                  width={`100`}
                  height={`100`}
                  src={image}
                  alt={category}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div
                className={`mt-4 flex justify-between ${
                  atomLang && "text-end"
                } ${atomLang && styles.dir}`}
              >
                <div>
                  <h3 className=" text-sm text-gray-700">
                    <Link href={`/single/${id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {t(title)}
                    </Link>
                  </h3>
                  <p
                    className={`mt-1 text-sm  text-gray-500 ${
                      atomLang && styles.dir
                    }`}
                  >
                    {t(description).slice(0, 50)}
                    ..
                  </p>
                </div>
                {price >= 100 ? (
                  <div>
                    <p
                      className={`text-sm  font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-500 ${styles.cardBTN}`}
                    >
                      <strong>{FormaterPrice(price * (80 / 100))}</strong>
                    </p>
                    <p
                      className={`text-sm origin-bottom -rotate-12 font-medium text-slate-100 bg-gradient-to-r from-violet-500 to-fuchsia-500 ${styles.cardBTN}`}
                    >
                      <del>
                        <strong>{FormaterPrice(price)}</strong>
                      </del>
                    </p>
                  </div>
                ) : (
                  <p
                    className={`text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-500 ${styles.cardBTN}`}
                  >
                    <strong>{FormaterPrice(price)}</strong>
                  </p>
                )}
              </div>
              {
                <div className="mt-5">
                  <p
                    className={`btn text-center w-100  bg-primary text-white absolute bottom-0 `}
                  >
                    {t("Add to cart")}
                  </p>
                </div>
              }
            </div>
          )
        )}
      </div>
    </>
  );
};

export default SingleCard;
