import React, { useState } from "react";
import { motion } from "framer-motion";
import Head from "next/head";

import FadeInWhenVisible from "../../hooks/FadeInWhenVisible";
import InfoStrp from "../../components/InfoStrp";
import Title from "../../components/Title/Title";
import BreadCrumb from "../../components/BreadCrumb";

import IEBanner from "../../assets/images/kba-banner.jpg";

const KBA = ({ hamOpen }) => {
  const [crumbs, setCrumbs] = useState(["INVESTMENT STRATEGIES", " INDIA DYNAMIC FIXED INCOME FUND "]);
  const selected = "/Funds";
  return (
    <motion.div
      animate={{ scale: hamOpen ? 0.995 : 1 }}
      transition={{ duration: 0.3 }}
      initial={false}
      className="page-container"
    >
      <Head>
        <title>ICICI | India Dynamic Fixed Income Fund</title>
        <meta
          name="description"
          content="ICICI Prudential Asset Management Company Limited (The AMC) offers fund management and advisory services to marquee global clients investing across public equities, IG and High Yield Credits, fixed income, and alternative strategies in India. "
        />
        <meta name="keywords" content="ICICI, banking, Investment" />
      </Head>
      <div className="banner-static">
        <img src={IEBanner} alt="IEBanner" />
        <div className="banner-static-content">
          <FadeInWhenVisible delay={0.1}>
            <Title titleText="India Dynamic Fixed Income Fund" />
          </FadeInWhenVisible>
        </div>
      </div>
      <div className="section-padding">
        <div className="container">
          <BreadCrumb crumbs={crumbs} selected={selected} />

          <div className="marg-sixty">
            <FadeInWhenVisible></FadeInWhenVisible>
            <FadeInWhenVisible>
              <p className="body-text">
                India Opportunities Fund is an open-ended Umbrella Unit Trust
                with segregated liability between sub-funds governed by the laws
                of Ireland and authorized by the Central Bank of Ireland (the
                Central Bank) under the European Communities (Undertakings for
                Investment in Transferable Securities) Regulations 2011, (as
                amended). The fund will be an actively managed fund. The fund’s
                performance is measured against the Nifty Composite Debt Index
                (the Index). The fund aims to deliver total returns by active
                duration management and credit selection through our large and
                experienced credit research capabilities housed in Mumbai.
              </p>
            </FadeInWhenVisible>
          </div>
          <div className="marg-sixty">
            <FadeInWhenVisible>
              <InfoStrp
                infoText="More information about this fund is available in the downloads section or contact at "
                infoLink="mailto:enquiry@iciciglobalinvestments.com"
                isMailInfo
              />
            </FadeInWhenVisible>
          </div>

          <div>
            {/* needed in crafter attach pdf <FadeInWhenVisible>
              <p className="asterisk-text">
                *Regulatory insertion for KBA (PDF Attached of SFDR Disclosure)
              </p>
            </FadeInWhenVisible> */}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default KBA;
