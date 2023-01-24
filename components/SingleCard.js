import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";
import { textState } from "../Data/AtomLang";
import FormaterPrice from "../FormatNumber/numFormat";
import styles from "../styles/cardes.module.scss";

const SingleCard = ({ prodacts }) => {
  // const [isProdacts, setIsProdacrs] = useState(0);
  // Get i18n
  const [atomLang] = useRecoilState(textState);
  const [t, i18n] = useTranslation();

  const chakLangAREN = () => {
    atomLang ? i18n.changeLanguage("en") : i18n.changeLanguage("ar");
  };

  useEffect(() => {
    chakLangAREN;
  }, []);

  return (
    <div className="mt-6 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {prodacts.map(
        ({ id, title, price, description, category, image, rating }) => (
          <div key={id} className="group relative ">
            <div className=" min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
              <img
                width={`100`}
                height={`100`}
                src={image}
                alt={category}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div
              className={`mt-4 flex justify-between ${atomLang && "text-end"} ${
                atomLang && styles.dir
              }`}
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
                    <strong>{FormaterPrice(price * (80/100))}</strong>
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
          </div>
        )
      )}
    </div>
  );
};

export default SingleCard;
