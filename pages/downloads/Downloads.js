import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";

import FadeInWhenVisible from "../../hooks/FadeInWhenVisible";
import Title from "../../components/Title/Title";
import DownloadList from "../../components/DownloadList";

import DownloadBanner from "../../assets/images/download-banner.jpg";

const fund = [
  {
    filename: "KIID - India Dynamic Fixed Income Fund - Institutional",
    updated: "Updated on: 19 January 2021",
    downloadlink:"/downloadfiles/KIID - India Dynamic Fixed Income Fund - Institutional - 19 January 2021.pdf"
  },
  {
    filename: "Supplement - India Dynamic Fixed Income Fund",
    updated: "Updated on: 18 May 2021",
    downloadlink:"/downloadfiles/India Dynamic Fixed Income Fund - Supplement - Dated 18 May 2021.pdf"
  },
  {
    filename: "Prospectus - India Opportunities Fund",
    updated: "Updated on: 18 May 2021",
    downloadlink:"/downloadfiles/India Opportunities Fund - Prospectus_18 May 2021.pdf"
  },
  
];

const newsletter = [
  {
    filename: "Monthly Newsletter - June 2022",
    updated: "Updated on: June 2022",
    downloadlink:"/downloadfiles/Monthly Newsletter - June 2022.pdf"
  },
  {
    filename: "Monthly Newsletter - May 2022",
    updated: "Updated on: May 2022",
    downloadlink:"/downloadfiles/Monthly Newsletter - May 2022.pdf"
  },
  {
    filename: "Monthly Newsletter - April 2022",
    updated: "Updated on: April 2022",
    downloadlink:"/downloadfiles/Monthly Newsletter - April 2022.pdf"
  },
];

const media = [
  {
    filename: "ICICI Prudential MF schemes delivered solid return to investors in 1 year; here's how",
    viewlink:"https://www.businesstoday.in/mutual-funds/story/icici-prudential-mf-schemes-delivered-solid-return-to-investors-in-1-year-heres-how-341048-2022-07-11"
  },
  {
    filename: "Near-term outlook complicated, but bullish on equities: ICICI Pru's S Naren",
    viewlink:"https://www.business-standard.com/article/markets/near-term-outlook-complicated-but-bullish-on-equities-icici-pru-s-s-naren-122031100758_1.html"
  },
  {
    filename: "Market correction a good opportunity for long-term investors to enter: S Naren, ICICI Prudential AMC",
    viewlink:"https://www.moneycontrol.com/news/business/markets/market-correction-a-good-opportunity-for-long-term-investors-to-enter-s-naren-icici-prudential-amc-8209191.html"
  },
  {
    filename: "Unable to take duration call? Consider investing in a dynamic bond fund",
    viewlink:"https://www.business-standard.com/article/pf/unable-to-take-duration-call-consider-investing-in-a-dynamic-bond-fund-122071301638_1.html"
  },
  {
    filename: "Floating rate bonds stand to gain in current market scenario: Manish Banthia, ICICI Pru AMC",
    viewlink:"https://www.financialexpress.com/money/floating-rate-bonds-stand-to-gain-in-current-market-scenario-manish-banthia-icici-pru-amc/2513615/"
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
            <h4 className="section-subtitle text-center">Monthly Newsletter</h4>
            {/* <p className="section-sub-subtitle">
              Download the right form for your needs
            </p> */}
          </FadeInWhenVisible>
          {newsletter.map((item) => (
            <FadeInWhenVisible>
              <DownloadList filename={item.filename} updated={item.updated} downloadlink={item.downloadlink} />
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
      <div className="section-padding pt-0">
        <div className="container">
          <FadeInWhenVisible>
            <h4 className="section-subtitle text-center">In News & Media</h4>
            {/* <p className="section-sub-subtitle">
              Download the right form for your needs
            </p> */}
          </FadeInWhenVisible>
          {media.map((item) => (
            <FadeInWhenVisible>
              <DownloadList filename={item.filename} updated={item.updated} viewlink={item.viewlink}/>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
      <div className="section-padding pt-0">
        <div className="container">
          <FadeInWhenVisible>
            <h4 className="section-subtitle text-center">Fund Documents</h4>
            {/* <p className="section-sub-subtitle">
              Download the right form for your needs
            </p> */}
          </FadeInWhenVisible>
          {fund.map((item) => (
            <FadeInWhenVisible>
              <DownloadList filename={item.filename} updated={item.updated} downloadlink={item.downloadlink}/>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Downloads;