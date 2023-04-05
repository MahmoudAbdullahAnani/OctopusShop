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
import { useEffect, useState } from "react";
// React-query
import { QueryClient, QueryClientProvider } from "react-query";
// import { ReactQueryDevtools } from "react-query/devtools";
import { ReactQueryDevtools } from "react-query/devtools";
import { Provider } from "react-redux";
import { store } from "../rdx/Store";

const client = new QueryClient();

function MyApp({ Component, pageProps }) {
  const [scrolly, setScrolly] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolly(scrollY);
    });
  }, []);
  return (
    <>
      <Head>
        <title>Octopus Shop</title>
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="Everything you want from a variety of clothes, you will find it in Octopus Shop Ha, take a look..."
        />
        <meta
          name="keywords"
          content="Octopus Shop, shopping, clothes, mens wear, Women's Clothing, international trademarks"
        />
        <meta name="author" content="Mahmoud Abdullah" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="./../public/logo.ico" type="image/png type" />
      </Head>
      <QueryClientProvider client={client}>
        <Provider store={store}>
          <RecoilRoot>
            <SpinnerLoode />
            <Navbar />
            <Component {...pageProps} />
            {scrolly >= 600 && <ButtonTop />}
            <Footer />
          </RecoilRoot>
          <ReactQueryDevtools initialIsOpen={false} />
        </Provider>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
