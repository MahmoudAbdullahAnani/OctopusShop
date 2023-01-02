import "../styles/globals.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {  Fragment } from "react";
import Navbar from "../components/Nabar";
import Footer from "../components/Footer";
import "../Data/i118n";
import { RecoilRoot } from "recoil";
import "animate.css";

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
