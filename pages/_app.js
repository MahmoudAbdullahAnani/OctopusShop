import "../styles/globals.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Navbar from "../components/Nabar";
import Footer from "../components/Footer";
import "../Data/i118n";
import { RecoilRoot } from "recoil";
import "animate.css";
import Head from "next/head";
import ButtonTop from "../components/ButtonTop";
import SpinnerLoode from "../components/SpineerLood";


function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
    <title>Octopus Shop</title>
    </Head>
    <RecoilRoot>
    <SpinnerLoode/>
        <Navbar />
        <Component {...pageProps} />
        <ButtonTop />
        <Footer />
      </RecoilRoot>
    </>
  );
}

export default MyApp;
