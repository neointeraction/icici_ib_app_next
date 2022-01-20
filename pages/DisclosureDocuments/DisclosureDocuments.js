import React from "react";
import { motion } from "framer-motion";

import Head from "next/head";

import FadeInWhenVisible from "../../hooks/FadeInWhenVisible";
import Title from "../../components/Title/Title";

import DDownloadBanner from "../../assets/images/dd-banner.jpg";


const DisclosureDocuments = ({ hamOpen }) => {
  return (
    <motion.div
      animate={{ scale: hamOpen ? 0.995 : 1 }}
      transition={{ duration: 0.3 }}
      initial={false}
      className="page-container"
    >
      <Head>
        <title>ICICI | Disclosure Documents</title>
        <meta
          name="description"
          content="ICICI Lorem ipsum dolor sit amet, consectetur adipiscing elit.."
        />
        <meta name="keywords" content="ICICI, banking, Investment" />
      </Head>
      <div className="banner-static">
        <img src={DDownloadBanner} alt="DDownloadBanner" />
        <div className="banner-static-content">
          <FadeInWhenVisible delay={0.1}>
            <Title titleText="Terms & Conditions" />
          </FadeInWhenVisible>
        </div>
      </div>
      <div className="section-padding">
        <div className="container">
          <FadeInWhenVisible>
            <div className="sub-section mt-0">
              <p className="body-text">
              Information provided in this website is for information only and is subject to change without notice. It is not promised or guaranteed to be correct, complete, and up-to-date. The distribution of any fund and the offering of shares of any fund as mentioned on this website may be restricted in certain jurisdictions. It shall not be construed as any investment advice, recommendation, or an offer or solicitation, and shall not be used as basis for any contract or commitment to purchase or sell any security, instrument, or any products or services of ICICI Prudential Asset Management Company Limited. It is the responsibility of any person in possession of this information and of any person wishing to apply for shares of any fund, to inform himself of and to observe all applicable laws and regulations of the countries of his nationality, residence, ordinary residence or domicile.
              </p>
              <p className="body-text">
              Certain factual and statistical (both historical and projected) industry and market data provided was obtained by ICICI Prudential Asset Management Company Limited from independent, third-party sources that have not been verified as to its accuracy. Statements and assertions contained in this website reflect the belief of ICICI Prudential Asset Management Company Limited, which may be based in whole or in part on such data and other information.
                </p>
              <p className="body-text">
              Information or views expressed in this website does not take into account or cater to specific investment objectives, financial situation or particular needs of any specific person. Investors should seek independent professional advice from financial advisers regarding the suitability of a particular investment product, taking into account his/her specific investment objective, financial situation or particular needs before making a commitment to purchase/invest. In the event that an investor chooses not to seek such advice, he/she should consider carefully whether such investment is suitable for him/her.
              </p>
              <p className="body-text">
              Any prediction, projection, or forecast on economy, stock market, bond market etc. is not necessarily indicative of the future performance of the funds or products. Past performance of the funds or products is not necessarily indicative of its future performance. Investments are subject to investment and foreign exchange risks etc. including possible loss of the principal amount invested. The value of units and any income arising from them may fall as well as rise.
              </p>
              <p className="body-text">
              Information provided in this website is for information only and is subject to change without notice. It is not promised or guaranteed to be correct, complete, and up-to-date. The distribution of any fund and the offering of shares of any fund as mentioned on this website may be restricted in certain jurisdictions. It shall not be construed as any investment advice, recommendation, or an offer or solicitation, and shall not be used as basis for any contract or commitment to purchase or sell any security, instrument, or any products or services of ICICI Prudential Asset Management Company Limited. It is the responsibility of any person in possession of this information and of any person wishing to apply for shares of any fund, to inform himself of and to observe all applicable laws and regulations of the countries of his nationality, residence, ordinary residence or domicile.
              </p>
              <p className="body-text">
              ICICI Prudential Asset Management Company Limited or its affiliates or any director or employee does not take any responsibility with regards to the completeness and accuracy of such reports. It cannot and does not warrant, guarantee or represent, expressly or by implication, the accuracy, validity or completeness of such information. The information on this website does not constitute an Offer for share/units and is neither a recommendation nor statement of opinion or an advertisement.
              </p>
              <p className="body-text">
              The information contained herein may not be duplicated, reproduced, or redistributed without the consent of ICICI Prudential Asset Management Company Limited. ICICI Prudential Asset Management Company Limited  reserves the right to make changes and corrections to the information, including any opinions or forecasts expressed herein at any time, without notice.
              </p>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </motion.div>
  );
};

export default DisclosureDocuments;
