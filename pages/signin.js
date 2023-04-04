import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useRecoilState } from "recoil";
import { textState, userSign } from "../Data/AtomLang";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { usersDB } from "./signup";

function signin() {
  const router = useRouter();
  const [atomLang, setAtomLang] = useRecoilState(textState);
  const [t, i18n] = useTranslation();

  const [userSignIn, setUserSign] = useRecoilState(userSign);
  const [nullUser, setNullUser] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorUserName, setErrorUserName] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!userName) {
      setErrorUserName("There must be a User Name");
    }
    if (!password) {
      return setErrorPassword("There must be a Password");
    }
    if (password.length <= 2) {
      setErrorPassword(
        "The password must be longer than five letters or numbers"
      );
    }
    if (userName && password) {
      const user = usersDB.find(
        (user) => user.userName === userName && user.password === password
      );
      if (!errorUserName && !errorPassword) {
        if (user) {
          setUserSign(user);
          localStorage.setItem(`name`, user.name);
          localStorage.setItem(`signin`, true);
          router.push("/");
        } else {
          setNullUser("There is no user with this data");
        }
      }
    }
  };
  return (
    <>
      <div className={`flex justify-center `}>
        <AccountCircleIcon className={`fs-1 mt-5 mb-2 text-blue-900 `} />
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
            {t(nullUser)}
          </h6>
        )}
        {/* Avatre */}
        <label htmlFor="userName" className={`${atomLang && "text-end"} p-1`}>
          {t("User Name:")}
        </label>
        <input
          id="userName"
          type="text"
          name="name"
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
          </label>
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
          value={`${t("Sign in")}`}
          className={`p-2 fs-4 bg-blue-200 hover:bg-blue-700 hover:text-white transition-shadow rounded-lg`}
        />
      </form>
    </>
  );
}

export default signin;
