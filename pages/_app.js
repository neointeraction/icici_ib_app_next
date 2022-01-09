import "../assets/styles/main.css";

import { useState, useCallback } from "react";
import smoothscroll from "smoothscroll-polyfill";
import Head from "next/head";

import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  const [hamOpen, setHamOpen] = useState(false);

  const getOpenState = useCallback((value) => {
    setHamOpen(value);
  }, []);

  const toTop = () => {
    smoothscroll.polyfill();
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div className="app-body">
      <Head>
        <link rel="shortcut icon" href="/favicon-32x32.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header getOpenState={getOpenState} />
      <Component {...pageProps} hamOpen={hamOpen} />
      <Footer />
      <div className="scroll-to-top" onClick={toTop}></div>
    </div>
  );
}

export default MyApp;
