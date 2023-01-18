import Link from "next/link";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";
import { textState } from "../Data/AtomLang";
import FormaterPrice from "../FormatNumber/numFormat";

const SingleCard = ({ prodacts }) => {
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
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className=" text-sm text-gray-700">
                  <Link href={`/single/${id}`}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {t(title.slice(0, 16))}..
                  </Link>
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {description.slice(0, 50)}..
                </p>
              </div>
              <p className=" text-sm font-medium text-gray-900">
                {FormaterPrice(price)}
              </p>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default SingleCard;
