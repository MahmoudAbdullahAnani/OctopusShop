import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";
import { textState } from "../Data/AtomLang";
import axios from "axios";
import { useRouter } from "next/router";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AllProducts from "../components/Dashboard/AllProducts";
import { toast } from "react-toastify";
function dashpordAddProdect() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [atomLang, setAtomLang] = useRecoilState(textState);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [t, i18n] = useTranslation();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [title, setTitle] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [description, setDescription] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [image, setImage] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [price, setPrice] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [category, setCategory] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [rate, setRate] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [count, setCount] = useState("");
  // =========== Errors Inpouts ===============
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [titleError, setTitleError] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [descriptionError, setDescriptionError] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [imageError, setImageError] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [priceError, setPriceError] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [categoryError, setCategoryError] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [rateError, setRateError] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [countError, setCountError] = useState("");
  // const dataPush = {
  //   title,
  //   description,
  //   image,
  //   price,
  //   category,
  //   rating: {
  //     rate,
  //     count,
  //   }
  // };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const submit = (e) => {
    e.preventDefault();
    if (!title) {
      return setTitleError("There must be a title for the product");
    }
    if (!description) {
      return setDescriptionError("There must be product details");
    }
    if (!image) {
      return setImageError("There must be a picture of the product");
    }
    if (!price) {
      return setPriceError("There must be a price for the product");
    }
    if (!category) {
      return setCategoryError("There must be a type of product");
    }
    if (!rate) {
      return setRateError("There must be an evaluation of the product");
    }
    if (!count) {
      return setCountError(
        "There must be people who have evaluated the product"
      );
    }
    toast(t("The product has been added successfully"), {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    axios.post("https://fakestoreapi.com/products", {
      title,
      description,
      image,
      price,
      category,
      rating: {
        rate,
        count,
      },
    });
    router.push("/");
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (!localStorage.getItem("admin")) {
      router.push("/admin");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="text-center mt-2">
        <AddCircleIcon className="text-blue-400 fs-2 mx-auto" />
      </div>

      <form
        action=""
        method="post"
        className={`my-2  flex flex-col mx-auto col-10 border p-2 rounded-lg`}
      >
        {/* Avatre */}
        <label htmlFor="title" className={`${atomLang && "text-end"} p-1`}>
          {t("title:  ")}
        </label>
        <input
          value={title}
          onChange={(e) => {
            setTitleError("");
            setTitle(e.target.value);
          }}
          id="title"
          type="text"
          name="name"
          placeholder={`${t("title...")}`}
          className={`bg-gray-200 focus:bg-white p-2 border rounded-lg ${
            atomLang && "text-end"
          }`}
        />
        {titleError && (
          <h6
            className={`bg-red-400 text-white text-center mt-2 py-1 rounded-md`}
          >
            {t(titleError)}
          </h6>
        )}
        <div className={`my-3 flex flex-col`}>
          <label htmlFor="price" className={`${atomLang && "text-end"} p-1`}>
            {t("price: ")}
          </label>
          <input
            value={price}
            onChange={(e) => {
              setPriceError("");
              setPrice(e.target.value);
            }}
            id="price"
            type="number"
            name="price"
            placeholder={`${t("price...")}`}
            className={`bg-gray-200 focus:bg-white border p-2 rounded-lg ${
              atomLang && "text-end"
            }`}
          />
          {priceError && (
            <h6
              className={`bg-red-400 text-white text-center mt-2 py-1 rounded-md`}
            >
              {t(priceError)}
            </h6>
          )}
        </div>
        <div className={`my-3 flex flex-col`}>
          <label
            htmlFor="description"
            className={`${atomLang && "text-end"} p-1`}
          >
            {t("description: ")}
          </label>
          <input
            value={description}
            onChange={(e) => {
              setDescriptionError("");
              setDescription(e.target.value);
            }}
            id="description"
            type="text"
            name="description"
            placeholder={`${t("description...")}`}
            className={`bg-gray-200 focus:bg-white border p-2 rounded-lg ${
              atomLang && "text-end"
            }`}
          />
          {descriptionError && (
            <h6
              className={`bg-red-400 text-white text-center mt-2 py-1 rounded-md`}
            >
              {t(descriptionError)}
            </h6>
          )}
        </div>
        <div className={`my-3 flex flex-col`}>
          <label htmlFor="category" className={`${atomLang && "text-end"} p-1`}>
            {t("category: ")}
          </label>
          <input
            value={category}
            onChange={(e) => {
              setCategoryError("");
              setCategory(e.target.value);
            }}
            id="category"
            type="text"
            name="category"
            placeholder={`${t("category...")}`}
            className={`bg-gray-200 focus:bg-white border p-2 rounded-lg ${
              atomLang && "text-end"
            }`}
          />
          {categoryError && (
            <h6
              className={`bg-red-400 text-white text-center mt-2 py-1 rounded-md`}
            >
              {t(categoryError)}
            </h6>
          )}
        </div>
        <div className={`my-3 flex flex-col`}>
          <label htmlFor="iamge" className={`${atomLang && "text-end"} p-1`}>
            {t("iamge: ")}
          </label>
          <input
            value={image}
            onChange={(e) => {
              setImageError("");
              setImage(e.target.value);
            }}
            id="iamge"
            type="url"
            name="iamge"
            placeholder={`${t("image...")}`}
            className={`bg-gray-200 focus:bg-white border p-2 rounded-lg ${
              atomLang && "text-end"
            }`}
          />
          {imageError && (
            <h6
              className={`bg-red-400 text-white text-center mt-2 py-1 rounded-md`}
            >
              {t(imageError)}
            </h6>
          )}
        </div>
        <div className={`my-3 flex flex-col`}>
          <label htmlFor="rate" className={`${atomLang && "text-end"} p-1`}>
            {t("rating: ")}
          </label>
          <div className="flex justify-around flex-wrap gap-2 px-2">
            <div>
              <input
                value={rate}
                onChange={(e) => {
                  setRateError("");
                  setRate(e.target.value);
                }}
                id="rate"
                type="number"
                name="rate"
                placeholder={`${t("rate...")}`}
                className={`bg-gray-200 focus:bg-white border p-2 rounded-lg ${
                  atomLang && "text-end"
                }`}
              />
              {rateError && (
                <h6
                  className={`bg-red-400 px-2 text-white text-center mt-2 py-1 rounded-md`}
                >
                  {t(rateError)}
                </h6>
              )}
            </div>
            <div>
              <input
                value={count}
                onChange={(e) => {
                  setCountError("");
                  setCount(e.target.value);
                }}
                id="count"
                type="number"
                name="count"
                placeholder={`${t("count...")}`}
                className={`bg-gray-200 focus:bg-white border p-2 rounded-lg ${
                  atomLang && "text-end"
                }`}
              />
              {countError && (
                <h6
                  className={`bg-red-400 px-2 text-white text-center mt-2 py-1 rounded-md`}
                >
                  {t(countError)}
                </h6>
              )}
            </div>
          </div>
        </div>
        <input
          onClick={(e) => submit(e)}
          type={`submit`}
          value={`${t("Add a product")}`}
          className={`p-2 fs-4 bg-blue-200 hover:bg-blue-700 hover:text-white transition-shadow rounded-lg`}
        />
      </form>
      <AllProducts />
    </>
  );
}

export default dashpordAddProdect;
