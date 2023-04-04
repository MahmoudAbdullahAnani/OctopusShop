import React, { useState } from "react";
import PersonAddIcon from "@mui/icons-material/PersonAdd"; // My DataBase
import { useRouter } from "next/router";
import { textState } from "../Data/AtomLang";
import { useRecoilState } from "recoil";
import { useTranslation } from "react-i18next";
export const usersDB = [
  { userName: "mahmoud", password: "123", name: "Mahmoud Abdullah" },
  { userName: "ahmed", password: "123", name: "Ahmed Abdullah" },
];

function signup() {
  const [atomLang, setAtomLang] = useRecoilState(textState);
  const [t, i18n] = useTranslation();
  const router = useRouter();
  const [nullUser, setNullUser] = useState("");
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorUserName, setErrorUserName] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!name) {
      setErrorName(t("There must be a Name"));
    }
    if (!userName) {
      setErrorUserName(t("There must be a User Name"));
    }
    if (!password) {
      return setErrorPassword(t("There must be a Password"));
    }
    if (password.length <= 2) {
      return setErrorPassword(
        t("The password must be longer than five letters or numbers")
      );
    }
    if (userName && password) {
      if (!errorUserName && !errorPassword) {
        router.push("/");
        localStorage.setItem(`name`, name);
        return usersDB.push({ userName, password, name });
      }
    }
  };
  return (
    <>
      <div className={`flex justify-center `}>
        <PersonAddIcon className={`fs-1 mt-5 mb-2 text-blue-900 `} />
      </div>
      <form
        action=""
        method="post"
        className={`mb-5  flex flex-col mx-auto col-7 border p-2 rounded-lg`}
      >
        {nullUser && (
          <h6
            className={`bg-red-400 text-white text-center mt-2 py-1 rounded-md`}
          >
            {nullUser}
          </h6>
        )}
        <label htmlFor="name" className={`${atomLang && "text-end"} p-1`}>
          {t("Name: ")}
        </label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder={`${t("Name...")}`}
          className={`bg-gray-200 focus:bg-white p-2 border rounded-lg ${
            atomLang && "text-end"
          }`}
          onChange={(e) => {
            setName(e.target.value);
            setErrorName("");
          }}
        />
        {errorName && (
          <h6
            className={`bg-red-400 text-white text-center mt-2 py-1 rounded-md`}
          >
            {t(errorName)}
          </h6>
        )}
        {/* Avatre */}
        <label htmlFor="userName" className={`${atomLang && "text-end"} p-1`}>
          {t("User Name:")}
        </label>
        <input
          id="userName"
          type="text"
          name="userName"
          placeholder={`${t("User Name...")}`}
          className={`bg-gray-200 focus:bg-white p-2 border rounded-lg ${
            atomLang && "text-end"
          }`}
          onChange={(e) => {
            setUserName(e.target.value);
            setErrorUserName("");
          }}
        />
        {errorUserName && (
          <h6
            className={`bg-red-400 text-white text-center mt-2 py-1 rounded-md`}
          >
            {t(errorUserName)}
          </h6>
        )}

        <div className={`my-3 flex flex-col`}>
          <label htmlFor="password" className={`${atomLang && "text-end"} p-1`}>
            {t("Password: ")}
          </label>{" "}
          <input
            id="password"
            type="password"
            name="password"
            className={`bg-gray-200 focus:bg-white border p-2 rounded-lg ${
              atomLang && "text-end"
            }`}
            onChange={(e) => {
              setPassword(e.target.value);
              setErrorPassword("");
            }}
          />
          {errorPassword && (
            <h6
              className={`bg-red-400 text-white text-center mt-2 py-1 rounded-md`}
            >
              {t(errorPassword)}
            </h6>
          )}
        </div>
        <input
          onClick={(e) => submit(e)}
          type={`submit`}
          value={`${t("Create Account")}`}
          className={`p-2 fs-4 bg-blue-200 hover:bg-blue-700 hover:text-white transition-shadow rounded-lg`}
        />
      </form>
    </>
  );
}

export default signup;
