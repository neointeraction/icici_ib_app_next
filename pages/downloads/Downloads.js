import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import AnchorLink from "react-anchor-link-smooth-scroll";

import FadeInWhenVisible from "../../hooks/FadeInWhenVisible";
import Title from "../../components/Title/Title";
import DownloadList from "../../components/DownloadList";

import DownloadBanner from "../../assets/images/download-banner.jpg";

const fund = [
  {
    filename: "Supplement – India Multicap Equity Fund",
    updated: "Updated on: 14 April 2023",
    downloadlink:"/downloadfiles/India Multicap Equity Fund - Supplement.pdf"
  },
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
  {
    filename: "Regulatory disclosure – India Opportunities Fund",
    updated: "Updated on: 18 May 2021",
    downloadlink:"/downloadfiles/Disclosure - India Opportunties Trust.pdf"
  },
];

const newsletter = [
  {
    filename: "Monthly Newsletter - April 2023",
    downloadlink:"/downloadfiles/Monthly Newsletter - April 2023.pdf"
  },
  {
    filename: "Monthly Newsletter - March 2023",
    downloadlink:"/downloadfiles/Monthly Newsletter - March 2023.pdf"
  },
  {
    filename: "Monthly Newsletter - February 2023",
    downloadlink:"/downloadfiles/Monthly Newsletter - February 2023.pdf"
  },
  {
    filename: "Monthly Newsletter - January 2023",
    downloadlink:"/downloadfiles/Monthly Newsletter - January 2023.pdf"
  },
  {
    filename: "Monthly Newsletter - December 2022",
    downloadlink:"/downloadfiles/Monthly Newsletter - December 2022.pdf"
  },
  {
    filename: "Monthly Newsletter - November 2022",
    downloadlink:"/downloadfiles/Monthly Newsletter - November 2022.pdf"
  },
  {
    filename: "Monthly Newsletter - October 2022",
    downloadlink:"/downloadfiles/Monthly_Newsletter - October 2022.pdf"
  },
  {
    filename: "Monthly Newsletter - September 2022",
    downloadlink:"/downloadfiles/Monthly Newsletter - September 2022.pdf"
  },
  {
    filename: "Monthly Newsletter - August 2022",
    downloadlink:"/downloadfiles/Monthly Newsletter - August 2022.pdf"
  },
  {
    filename: "Monthly Newsletter - July 2022",
    downloadlink:"/downloadfiles/Monthly_Newsletter - July 2022.pdf"
  },
  {
    filename: "Monthly Newsletter - June 2022",
    downloadlink:"/downloadfiles/Monthly Newsletter - June 2022.pdf"
  },
  {
    filename: "Monthly Newsletter - May 2022",
    downloadlink:"/downloadfiles/Monthly Newsletter - May 2022.pdf"
  },
  {
    filename: "Monthly Newsletter - April 2022",
    downloadlink:"/downloadfiles/Monthly Newsletter - April 2022.pdf"
  },
];

const media = [
  {
    filename: "Where to invest INR 1mn today: Anish Tawakley, ICICI Pru AMC",
    viewlink:"https://www.moneycontrol.com/news/business/personal-finance/where-to-invest-rs-10-lakh-what-icici-mfs-anish-tawakley-suggests-10601521.html"
  },
  {
    filename: "Active play in short to medium-term debt pays dividends : Manish Banthia, ICICI Pru AMC",
    viewlink:"https://www.business-standard.com/article/markets/short-to-medium-debt-active-play-pays-dividends-for-icici-mf-s-banthia-123030301194_1.html"
  },
  {
    filename: " What makes ICICI Pru MF's Anish Tawakley an outlier",
    viewlink:"https://www.business-standard.com/article/markets/large-cap-equity-what-makes-icici-pru-mf-s-anish-tawakley-an-outlier-123030301172_1.html"
  },
  {
    filename: "Rupee still overvalued; prefer short duration funds attractive: Manish Banthia, ICICI Pru AMC",
    viewlink:"https://www.moneycontrol.com/news/business/markets/rupee-still-overvalued-relatively-short-duration-funds-attractive-manish-banthia-of-icici-pru-mf-9668611.html"
  },
  {
    filename: "ICICI Prudential MF schemes delivered solid return to investors in 1 year; here's how",
    viewlink:"https://www.businesstoday.in/mutual-funds/story/icici-prudential-mf-schemes-delivered-solid-return-to-investors-in-1-year-heres-how-341048-2022-07-11"
  },
  {
    filename: "Near-term outlook complicated, but bullish on equities: S Naren, ICICI Pru AMC",
    viewlink:"https://www.business-standard.com/article/markets/near-term-outlook-complicated-but-bullish-on-equities-icici-pru-s-s-naren-122031100758_1.html"
  },
  {
    filename: "Market correction a good opportunity for long-term investors to enter: S Naren, ICICI Pru AMC",
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
  {
    filename: "Where should you invest in debt funds for higher returns?: Manish Banthia, ICICI Pru AMC",
    viewlink:" https://www.fortuneindia.com/multimedia/where-should-you-invest-in-debt-funds-for-higher-returns/109832"
  },
];

const economy = [
  {
    filename: "Impact Analysis of Monetary Policy Meeting - April 2023",
    downloadlink:"/downloadfiles/Impact Analysis of Monetary Policy Meeting_Apr 2023.pdf"
  },
  {
    filename: "Impact Analysis of Monetary Policy Meeting - February 2023",
    downloadlink:"/downloadfiles/Impact Analysis of Monetary Policy Meeting_Feb 2023.pdf"
  },
  {
    filename: "India Union Budget_FY24 - Impact Analysis - February 2023",
    downloadlink:"/downloadfiles/India Union Budget_FY24 - Impact Analysis - February 2023.pdf"
  },
  {
    filename: "Our Outlook for 2023",
    downloadlink:"/downloadfiles/India Outlook 2023 - IB website-short.pdf"
  },
  {
    filename: "Impact Analysis of Monetary Policy Meeting - December 2022",
    downloadlink:"/downloadfiles/Impact Analysis of Monetary Policy Meeting_Dec 2022.pdf"
  },
  {
    filename: "Impact Analysis of Monetary Policy Meeting - October 2022",
    downloadlink:"/downloadfiles/Impact Analysis of Monetary Policy Meeting_Oct 2022.pdf"
  },
  {
    filename: "Impact Analysis of Monetary Policy Meeting - August 2022",
    downloadlink:"/downloadfiles/Impact Analysis of Monetary Policy Meeting_Aug 2022.pdf"
  },
  {
    filename: "India - EV Opportunity - August 2022",
    downloadlink:"/downloadfiles/India - EV Opportunity - August 2022.pdf"
  },
  {
    filename: "India - Too big to ignore - August 2022",
    downloadlink:"/downloadfiles/India - Too big to ignore - August 2022.pdf"
  },
  {
    filename: "India 5G opportunity - July 2022",
    downloadlink:"/downloadfiles/India 5G opportunity - July 2022.pdf"
  },
  {
    filename: "Impact Analysis of Monetary Policy Meeting - June 2022",
    downloadlink:"/downloadfiles/Impact Analysis of Monetary Policy Meeting_June 2022.pdf"
  },
  {
    filename: "FPI selling offset by Domestic buying - June 2022",
    downloadlink:"/downloadfiles/FPI selling offset by Domestic buying - June 2022.pdf"
  },
  {
    filename: "India equity market outlook - March 2022",
    downloadlink:"/downloadfiles/India equity market outlook - March 2022.pdf"
  },
  {
    filename: "India Union Budget_FY23 - Impact Analysis - February 2022",
    downloadlink:"/downloadfiles/India Union Budget_FY23 - Impact Analysis - February 2022.pdf"
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
            <div className="anchor-links-flex mb-60">
              <AnchorLink className="anchor-button" href="#newsletter" offset="120">
              Monthly Newsletter
              </AnchorLink>
              <AnchorLink className="anchor-button" href="#economy" offset="120">
              Economy and Markets
              </AnchorLink>
              <AnchorLink className="anchor-button" href="#media" offset="120">
              In the Media
              </AnchorLink>
              <AnchorLink className="anchor-button" href="#fund" offset="120">
               Fund Documents
              </AnchorLink>
            </div>
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <h4 className="section-subtitle text-center" id="newsletter">Monthly Newsletter</h4>
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
            <h4 className="section-subtitle text-center" id="economy">Economy and Markets</h4>
          </FadeInWhenVisible>
          {economy.map((item) => (
            <FadeInWhenVisible>
              <DownloadList filename={item.filename} updated={item.updated} downloadlink={item.downloadlink}/>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
      <div className="section-padding pt-0">
        <div className="container">
          <FadeInWhenVisible>
            <h4 className="section-subtitle text-center" id="media">In the Media</h4>
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
            <h4 className="section-subtitle text-center" id="fund">Fund Documents</h4>
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
