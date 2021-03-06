import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";

import FadeInWhenVisible from "../../hooks/FadeInWhenVisible";
import Title from "../../components/Title/Title";
import DownloadList from "../../components/DownloadList";

import DownloadBanner from "../../assets/images/download-banner.jpg";

const data = [
  {
    filename: "KIID - India Dynamic Fixed Income Fund - Institutional",
    updated: "Updated on: 19 January 2021",
    downloadlink:"/downloadfiles/KIID - India Dynamic Fixed Income Fund - Institutional - 19 January 2021.pdf"
  },
  {
    filename: "India Opportunities Fund - Prospectus",
    updated: "Updated on: 18 May 2021",
    downloadlink:"/downloadfiles/India Opportunities Fund - Prospectus_18 May 2021.pdf"
  },
  {
    filename: "India Dynamic Fixed Income Fund - Supplement",
    updated: "Updated on: 18 May 2021",
    downloadlink:"/downloadfiles/India Dynamic Fixed Income Fund - Supplement - Dated 18 May 2021.pdf"
  },
];

const Downloads = ({ hamOpen }) => {
  return (
    <motion.div
      animate={{ scale: hamOpen ? 0.995 : 1 }}
      transition={{ duration: 0.3 }}
      initial={false}
      className="page-container"
    >
      <Head>
        <title>ICICI | Downloads</title>
        <meta
          name="description"
          content="ICICI Prudential Asset Management Company Limited (The AMC) offers fund management and advisory services to marquee global clients investing across public equities, IG and High Yield Credits, fixed income, and alternative strategies in India. "
        />
        <meta name="keywords" content="ICICI, banking, Investment" />
        <meta http-equiv="Content-Security-Policy" content="style-src 'self' fonts.googleapis.com 'unsafe-inline'; font-src 'self' fonts.gstatic.com data:; default-src 'self'; script-src 'unsafe-eval' 'self'; frame-src https://www.google.com; img-src 'self' data: content:;  "></meta> 
      </Head>
      <div className="banner-static">
        <img src={DownloadBanner} alt="DownloadBanner" />
        <div className="banner-static-content">
          <FadeInWhenVisible delay={0.1}>
            <Title titleText="Downloads" />
          </FadeInWhenVisible>
        </div>
      </div>
      <div className="section-padding">
        <div className="container">
          <FadeInWhenVisible>
            <h4 className="section-subtitle text-center">Fund Documents</h4>
            <p className="section-sub-subtitle">
              Download the right form for your needs
            </p>
          </FadeInWhenVisible>
          {data.map((item) => (
            <FadeInWhenVisible>
              <DownloadList filename={item.filename} updated={item.updated} downloadlink={item.downloadlink}/>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
      {/* <div className="section-padding pt-0">
        <div className="container">
          <FadeInWhenVisible>
            <h4 className="section-subtitle text-center">Factsheets</h4>
            <p className="section-sub-subtitle">
              Download the right form for your needs
            </p>
          </FadeInWhenVisible>
          {data.map((item) => (
            <FadeInWhenVisible>
              <DownloadList filename={item.filename} updated={item.updated} />
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
      <div className="section-padding pt-0">
        <div className="container">
          <FadeInWhenVisible>
            <h4 className="section-subtitle text-center">Performance</h4>
            <p className="section-sub-subtitle">
              Download the right form for your needs
            </p>
          </FadeInWhenVisible>
          {data.map((item) => (
            <FadeInWhenVisible>
              <DownloadList filename={item.filename} updated={item.updated} />
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
      <div className="section-padding pt-0">
        <div className="container">
          <FadeInWhenVisible>
            <h4 className="section-subtitle text-center">Downloads</h4>
            <p className="section-sub-subtitle">
              Download the right form for your needs
            </p>
          </FadeInWhenVisible>
          {data.map((item) => (
            <FadeInWhenVisible>
              <DownloadList filename={item.filename} updated={item.updated} />
            </FadeInWhenVisible>
          ))}
        </div>
      </div> */}
    </motion.div>
  );
};

export default Downloads;
