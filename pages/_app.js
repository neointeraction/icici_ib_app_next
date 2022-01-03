import "../assets/styles/main.css";

import { useState, useCallback } from "react";
import Head from "next/head";

import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  const [hamOpen, setHamOpen] = useState(false);

  const getOpenState = useCallback((value) => {
    setHamOpen(value);
  }, []);
  return (
    <div className="app-body">
      <Head>
        <link rel="shortcut icon" href="/favicon-32x32.png" />
      </Head>
      <Header getOpenState={getOpenState} />
      <Component {...pageProps} hamOpen={hamOpen} />
      <Footer />
    </div>
  );
}

export default MyApp;
