import style from "../styles/footer.module.scss";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import emailjs from "@emailjs/browser";
import { useRef, useState, useTransition } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRecoilState } from "recoil";
import { useTranslation } from "react-i18next";
import { textState } from "../Data/AtomLang";

const Footer = () => {
    const [atomLang, ] = useRecoilState(textState);
  const [t, ] = useTranslation();
    const form = useRef();
  const [message, setMessage] = useState("")
  const sendEmail = (e) => {
    e.preventDefault();
    if (message.length >= 2) {
      emailjs
        .sendForm(
          "service_ea8fr0y",
          "template_7k7eg3z",
          form.current,
          "zLD4B1n0hmqq4g8E1"
        )
        .then(
          () => {
            console.log("ارسال ناجح");
          },
          (error) => {
            console.log(error.text);
          }
      );
      // Emput input 
      setMessage("")
      toast.success(t("Successful submission🥳"), {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.warn(t("Submission failed, write a complete message🥺"), {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    };
  return (
    <div className={style.footer}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      <div className="messageGmail pt-3 flex text-white">
        <div className={`mx-auto ${atomLang ? "text-end" : ""} max-w-3xl p-3`}>
          <h1>{t("Send Message")}</h1>
          <p>
            {t("You can send it whatever you feel or any note")}
            {t("you want to leave for us to develop, or if you want")}
            {t("something specific, we can respond within 2 to 4 hours.")}
          </p>
          <form ref={form} onSubmit={sendEmail}>
            <textarea
              name="message"
              type="text"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              value={message}
              className={`py-1 px-2 rounded-lg  text-black focus:border-none outline-none max-h-36 w-100 ${
                atomLang ? "text-end" : ""
              }`}
              placeholder={t("Write your message...")}
            />
             
            <div className="flex align-items-center">
              <Button
                type="submit"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white mx-auto mt-2"
                endIcon={<SendIcon />}
              >
                {t("Send")}
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div className="pt-10 ">
        <div className="d-flex justify-around flex-wrap gap-6 w-100 pb-3  text-white">
          <div>
            <h1>heade</h1>
            <ul className="list-group">
              <li>this is item group</li>
              <li>this is item group</li>
              <li>this is item group</li>
              <li>this is item group</li>
              <li>this is item group</li>
            </ul>
          </div>
          <div>
            <h1>heade</h1>
            <ul className="list-group">
              <li>this is item group</li>
              <li>this is item group</li>
              <li>this is item group</li>
              <li>this is item group</li>
              <li>this is item group</li>
            </ul>
          </div>
          <div>
            <h1>heade</h1>
            <ul className="list-group">
              <li>this is item group</li>
              <li>this is item group</li>
              <li>this is item group</li>
              <li>this is item group</li>
              <li>this is item group</li>
            </ul>
          </div>
          <div>
            <h1>heade</h1>
            <ul className="list-group">
              <li>this is item group</li>
              <li>this is item group</li>
              <li>this is item group</li>
              <li>this is item group</li>
              <li>this is item group</li>
            </ul>
          </div>
          <div>
            <h1>heade</h1>
            <ul className="list-group">
              <li>this is item group</li>
              <li>this is item group</li>
              <li>this is item group</li>
              <li>this is item group</li>
              <li>this is item group</li>
            </ul>
          </div>
        </div>
        <div className="text-center CopyRight pb-3 pt-2">
          <p className="text-white m-0 py-2 fs-6 fw-bold">
            {t("© 2022 Copyright : Mahmoud Abdullah Anani")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
