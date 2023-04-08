import { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";
import axios from "axios";
import FormaterPrice from "../FormatNumber/numFormat";
import { useTranslation } from "react-i18next";
import { countCartRec, scurityCard, textState } from "../Data/AtomLang";
import { useRecoilState } from "recoil";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, removeProduct } from "../rdx/Actions/prodectsCard";
import { toast } from "react-toastify";
import { useQuery } from "react-query";
import { useRouter } from "next/router";

const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProdauctSingle({ routId }) {
  const [product, setProduct] = useState([]);
  const [signIn, setSignIn] = useState("");
  const [signIn2, setSignIn2] = useState("");
  // rdx
  const dispatch = useDispatch();
  const prodectsCard = useSelector((store) => store.ProdactsSlice);
  const [scurCard, setScurityCard] = useRecoilState(scurityCard);
  const router = useRouter();

  const [atomLang, setAtomLang] = useRecoilState(textState);
  const [t, i18n] = useTranslation();
  // Get Product
  const [dablicatProdectCount, setDablicatProdectCount] = useState(0);
  const [dablicatProdect, setDablicatProdect] = useState([]);
  const [chackAdmin, setChackAdmin] = useState("");

  useEffect(() => {
    const signin2 = localStorage.getItem("signin");
    const item = localStorage.getItem("name");
    const chackAdmin = localStorage.getItem("admin");
    setChackAdmin(chackAdmin);
    setSignIn(item);
    setSignIn2(signin2);
    axios({
      method: "get",
      // https://fakestoreapi.com/products/
      // http://localhost:9000/products
      url: `https://fakestoreapi.com/products/${routId}`,
    }).then((res) => {
      setProduct(res.data);
    });
  }, []);

  const addProdectToCard = () => {
    if (signIn && signIn2) {
      dispatch(addProduct(product));
      toast.success(t("Added successfully"), {
        position: atomLang ? "top-left" : "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      router.push("/cart");
    } else {
      toast.warn(t("You must login first!"), {
        position: atomLang ? "top-left" : "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      router.push("/signin");
    }
  };

  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              ></a>
            </li>
          </ol>
        </nav>

        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
            {/*eslint-disable-next-line @next/next/no-img-element*/}
            <img
              src={product.image}
              alt={`${t(product.title)}`}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
              {/*eslint-disable-next-line @next/next/no-img-element*/}
              <img
                src={product.image}
                alt={`${t(product.title)}`}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
              {/*eslint-disable-next-line @next/next/no-img-element*/}
              <img
                src={product.image}
                alt={`${t(product.title)}`}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
            {/*eslint-disable-next-line @next/next/no-img-element*/}
            <img
              src={product.image}
              alt={`${t(product.title)}`}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Product info EN */}
        <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1
              className={`${
                atomLang && "text-end"
              } text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl`}
            >
              {`${t(product.title)}`}
            </h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">
              {FormaterPrice(product.price)}
            </p>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating
                          ? "text-gray-900"
                          : "text-gray-200",
                        "h-5 w-5 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <a
                  href={reviews.href}
                  className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  {reviews.totalCount} reviews
                </a>
              </div>
            </div>

            <div className="mt-10">
              {/* Colors */}
              <div>
                <h3 className="text-sm font-medium text-gray-900">Color</h3>
              </div>

              {/* Sizes */}
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  <a
                    href="#"
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    {t("Size guide")}
                  </a>
                </div>
              </div>
              {signIn2 ? (
                <button
                  onClick={addProdectToCard}
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  {t("Add to bag")}
                </button>
              ) : (
                <button
                  onClick={() => router.push("/signin")}
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 py-3 px-8 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  {t("Log in to place an order!")}
                </button>
              )}
            </div>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p
                  className={`${
                    atomLang && "text-end"
                  } text-base text-gray-900`}
                >
                  {t(product.description)}
                </p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product.details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
