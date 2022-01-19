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
    <>
    <Header getOpenState={getOpenState} />
    <div className="app-body">
      <Head>
        <link rel="shortcut icon" href="/favicon-32x32.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} hamOpen={hamOpen} />
      <Footer />
      <div className="scroll-to-top" onClick={toTop}>
      {/* <svg viewBox="0 0 26 18" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M0.624997 10.375L20.1087 10.375L15.1862 15.3112L17.125 17.25L25.375 9L17.125 0.750003L15.1863 2.68875L20.1088 7.625L0.624997 7.625L0.624997 10.375Z" ></path></svg> */}
      <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1" stroke-linecap="butt" stroke-linejoin="arcs"><path d="M18 15l-6-6-6 6"/></svg>
      </div>
    </div>
    </>
  );
}

export default MyApp;
