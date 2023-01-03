import "../styles/globals.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {  Fragment } from "react";
import Navbar from "../components/Nabar";
import Footer from "../components/Footer";
import "../Data/i118n";
import { RecoilRoot } from "recoil";
import "animate.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>Octopus Shop</title>
      </Head>
      <RecoilRoot>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </RecoilRoot>
    </Fragment>
  );
}

export default MyApp;
