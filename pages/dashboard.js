import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";
import { textState } from "../Data/AtomLang";
import axios from "axios";
import { useRouter } from "next/router";
import AddCircleIcon from '@mui/icons-material/AddCircle';
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
  const dataPush = {
    title,
    description,
    image,
    price,
    category,
    rate,
    count,
  };
  const submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9000/products", {
        title,
        description,
        image,
        price,
        category,
        rate,
        count,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (!(localStorage.getItem("admin"))) {
      router.push('/admin');
    }
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
          onChange={(e) => setTitle(e.target.value)}
          id="title"
          type="text"
          name="name"
          placeholder={`${t("title...")}`}
          className={`bg-gray-200 focus:bg-white p-2 border rounded-lg ${
            atomLang && "text-end"
          }`}
        />

        <div className={`my-3 flex flex-col`}>
          <label htmlFor="price" className={`${atomLang && "text-end"} p-1`}>
            {t("price: ")}
          </label>
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            id="price"
            type="number"
            name="price"
            placeholder={`${t("price...")}`}
            className={`bg-gray-200 focus:bg-white border p-2 rounded-lg ${
              atomLang && "text-end"
            }`}
          />
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
            onChange={(e) => setDescription(e.target.value)}
            id="description"
            type="text"
            name="description"
            placeholder={`${t("description...")}`}
            className={`bg-gray-200 focus:bg-white border p-2 rounded-lg ${
              atomLang && "text-end"
            }`}
          />
        </div>
        <div className={`my-3 flex flex-col`}>
          <label htmlFor="category" className={`${atomLang && "text-end"} p-1`}>
            {t("category: ")}
          </label>
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            id="category"
            type="text"
            name="category"
            placeholder={`${t("category...")}`}
            className={`bg-gray-200 focus:bg-white border p-2 rounded-lg ${
              atomLang && "text-end"
            }`}
          />
        </div>
        <div className={`my-3 flex flex-col`}>
          <label htmlFor="iamge" className={`${atomLang && "text-end"} p-1`}>
            {t("iamge: ")}
          </label>
          <input
            value={image}
            onChange={(e) => setImage(e.target.value)}
            id="iamge"
            type="url"
            name="iamge"
            placeholder={`${t("image...")}`}
            className={`bg-gray-200 focus:bg-white border p-2 rounded-lg ${
              atomLang && "text-end"
            }`}
          />
        </div>
        <div className={`my-3 flex flex-col`}>
          <label htmlFor="rate" className={`${atomLang && "text-end"} p-1`}>
            {t("rating: ")}
          </label>
          <div className="flex justify-around flex-wrap gap-2 px-2">
            <input
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              id="rate"
              type="number"
              name="rate"
              placeholder={`${t("rate...")}`}
              className={`bg-gray-200 focus:bg-white border p-2 rounded-lg ${
                atomLang && "text-end"
              }`}
            />
            <input
              value={count}
              onChange={(e) => setCount(e.target.value)}
              id="count"
              type="number"
              name="count"
              placeholder={`${t("count...")}`}
              className={`bg-gray-200 focus:bg-white border p-2 rounded-lg ${
                atomLang && "text-end"
              }`}
            />
          </div>
        </div>
        <input
          onClick={(e) => submit(e)}
          type={`submit`}
          value={`${t("Add a product")}`}
          className={`p-2 fs-4 bg-blue-200 hover:bg-blue-700 hover:text-white transition-shadow rounded-lg`}
        />
      </form>
      
    </>
  );
}

export default dashpordAddProdect;
