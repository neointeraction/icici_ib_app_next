import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";

import FadeInWhenVisible from "../../hooks/FadeInWhenVisible";
import Title from "../../components/Title/Title";

import LegalBanner from "../../assets/images/legal-banner.jpg";

const LegalTerms = ({ hamOpen }) => {
  return (
    <motion.div
      animate={{ scale: hamOpen ? 0.995 : 1 }}
      transition={{ duration: 0.3 }}
      initial={false}
      className="page-container"
    >
      <Head>
        <title>ICICI | Legal Terms</title>
        <meta
          name="description"
          content="ICICI Prudential Asset Management Company Limited (The AMC) offers fund management and advisory services to marquee global clients investing across public equities, IG and High Yield Credits, fixed income, and alternative strategies in India. "
        />
        <meta name="keywords" content="ICICI, banking, Investment" />
      </Head>
      <div className="banner-static">
        <img src={LegalBanner} alt="LegalBanner" />
        <div className="banner-static-content">
          <FadeInWhenVisible delay={0.1}>
            <Title titleText="Legal Terms" />
          </FadeInWhenVisible>
        </div>
      </div>
      <div className="section-padding">
        <div className="container">
          <FadeInWhenVisible>
            <p className="body-text">
            <span className="lt-bold">The AMC</span> is a joint venture between Prudential PLC and ICICI Bank Limited. Neither The AMC nor Prudential PLC are affiliated in any manner with Prudential Financial, Inc., a company whose principal place of business is in the United States of America. 
            </p>
            <p className="body-text">
            The information and opinion contained in this Site do not constitute a distribution, an offer to buy or sell or the solicitation of any offer to buy or sell any securities or financial instruments in any jurisdiction in which such distribution or offer is not authorised to any person. In particular, the information herein is not for distribution and does not constitute an offer to buy or sell or the solicitation of any offer to buy or sell any securities or financial instruments in the United States of America ("US") and Canada to or for the benefit of United States persons (being persons resident in the US, corporations, partnerships or other entities created or organised in or under the laws of the US or any person falling within the definition of the term "US Person" under the US Securities Act of 1933, as amended) and persons of Canada. In no event shall members of the ICICI Group and / or their directors, officers and employees be liable for any special direct, indirect, special, incidental or consequential damages arising out of the use of information / opinion herein.
            </p>
          </FadeInWhenVisible>
        </div>
      </div>
    </motion.div>
  );
};

export default LegalTerms;
