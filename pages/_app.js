import "../styles/globals.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { createContext, Fragment } from "react";
import Navbar from "../components/Nabar";
import Footer from "../components/Footer";
import "../Data/i118n";
import { RecoilRoot } from "recoil";


function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <RecoilRoot>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </RecoilRoot>
    </Fragment>
  );
}

export default MyApp;
