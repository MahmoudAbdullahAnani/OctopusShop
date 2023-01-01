import '../styles/globals.css'
import "./i18n";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { Fragment } from 'react';
import Navbar from '../components/Nabar';
import Footer from '../components/Footer';
// import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </Fragment>
  );
}

export default MyApp
