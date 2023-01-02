import Image from "next/image";
import Link from "next/link";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useRecoilState } from "recoil";
import { useTranslation } from "react-i18next";
import textState from "../../Data/AtomLang";
import { useEffect } from "react";
// css modules
// import style from '../../styles/Home.module.css'
export default function Galrye() {
    const [atomLang] = useRecoilState(textState);
    const [t, i18n] = useTranslation();
    const chakLangAREN = () => {
      atomLang ? i18n.changeLanguage("en") : i18n.changeLanguage("ar");
    };
    useEffect(() => {
      chakLangAREN;
    }, []);
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48 mt-3">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className={`sm:max-w-lg ${atomLang ? "text-end" : null}`}>
            <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              {t("Shop with octopus-shop")}
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              {t(
                "With octopus-shop you can shop as you like and you will find what you are looking for."
              )}
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <Image
                          width={`100`}
                          height={`100`}
                          src="https://images.unsplash.com/photo-1609709295948-17d77cb2a69b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          width={`100`}
                          height={`100`}
                          src="https://images.unsplash.com/photo-1613387945987-2d5f05a1ab8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          width={`100`}
                          height={`100`}
                          src="https://images.unsplash.com/photo-1600805624740-ebe68a29ac69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          width={`100`}
                          height={`100`}
                          src="https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          width={`100`}
                          height={`100`}
                          src="https://images.unsplash.com/photo-1565548058654-6ba93b5e3135?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          width={`100`}
                          height={`100`}
                          src="https://images.unsplash.com/photo-1602706294170-1fed8eecd9f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          width={`100`}
                          height={`100`}
                          src="https://plus.unsplash.com/premium_photo-1664372599702-2e7f65dcba39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <span className="anyMated">
                {atomLang&& <ArrowDropDownIcon />}
              </span>
              <Link
                href="#"
                className="inline-block rounded-md border text-decoration-none border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700"
              >
                {t("Get a boost")}
              </Link>
              <span className="anyMated">
                {atomLang ? null : <ArrowDropDownIcon />}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
