import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";

import FadeInWhenVisible from "../../hooks/FadeInWhenVisible";
import InfoStrp from "../../components/InfoStrp";
import Title from "../../components/Title/Title";

import AboutImg from "../../assets/images/about.jpg";
import AboutImgMap from "../../assets/images/about-map.svg";
import Star2 from "../../assets/images/icons/star2.svg";
import Star3 from "../../assets/images/icons/star3.svg";
import PruLogo from "../../assets/images/about-logo.png";
import GILogo from "../../assets/images/logo.svg";
const About = ({ hamOpen }) => {
  return (
    <motion.div
      animate={{ scale: hamOpen ? 0.995 : 1 }}
      transition={{ duration: 0.3 }}
      initial={false}
      className="page-container"
    >
      <Head>
        <title>About Us - Services & Solutions | ICICI Asset Management</title>
        <meta
          name="description"
          content="Learn more about ICICI Asset Management, representing the international asset management activities of the AMC. Explore our wide range of investment solutions."
        />
        <meta
          name="keywords"
          content="Asset Management services,asset management, investment solutions"
        />
        <link
          rel="canonical"
          href="https://www.iciciaminternatonal.com/about-us"
        />
      </Head>
      <div className="banner-static">
        <img src={AboutImg} alt="AboutImg" />

        <div className="banner-static-content">
          <FadeInWhenVisible delay={0.1}>
            <Title titleText="About Us" />
          </FadeInWhenVisible>
        </div>
      </div>
      <div className="section-padding">
        <div className="container abtus">
          <FadeInWhenVisible></FadeInWhenVisible>
          <div className="row logo-text mb-20">
            <div className="col-md-3">
              <FadeInWhenVisible>
                <div className="about-logo-container">
                  <img src={PruLogo} alt="Logo" />
                </div>
              </FadeInWhenVisible>
            </div>
            <div className="col-md-9">
              <FadeInWhenVisible>
                <h2 className="section-subtitle">
                  India's leading Asset Manager
                </h2>
                <p className="body-text">
                  <strong>
                    ICICI Prudential Asset Management Company Limited
                  </strong>
                  (The AMC) provides a broad range of investment solutions to
                  over 8mn investors across 250 cities in India. The AMC also
                  manages investments for Non Resident Indians (NRI’s) and major
                  global private banks through its affiliate presence in the GCC
                  and Mauritius. With ~USD 60bn* in assets under management the
                  AMC’s investment strategies are designed to deliver long term
                  superior risk adjusted returns.
                </p>
              </FadeInWhenVisible>
            </div>
          </div>
          <div className="row logo-text">
            <div className="col-md-3">
              <FadeInWhenVisible>
                <div className="about-gilogo-container">
                  <img src={GILogo} alt="Logo" />
                </div>
              </FadeInWhenVisible>
            </div>
            <div className="col-md-9">
              <FadeInWhenVisible>
                <h2 className="section-subtitle">
                  Advising Marquee Foreign Institutions
                </h2>
                <p className="body-text">
                  ICICI Asset Management branding represents the international
                  asset management activities of the AMC. We advise and /or
                  manage india focused investments for several global
                  institution investors and asset managers led by a specialized
                  cross-functional team based in Mumbai. The investors in these
                  client funds comprise large pensions, sovereign wealth funds,
                  retail and ultra-high net worth individuals from Asia, Europe
                  and the GCC. The AMC has partnered with specialist foreign
                  asset managers to offer cross border investment strategies in
                  various markets.
                </p>
                <p className="body-text">
                  The AMC has partnered with specialist foreign asset managers
                  to offer cross border investment strategies in india and
                  global markets.
                </p>
              </FadeInWhenVisible>
              <FadeInWhenVisible>
                <InfoStrp
                  infoText=" For more information about the AMC,"
                  infoLink="https://www.icicipruamc.com/about-us"
                />
              </FadeInWhenVisible>
            </div>
          </div>
        </div>
      </div>
      <div className="section-padding pt-0">
        <div className="container">
          <FadeInWhenVisible>
            <div className="about-map-img">
              <img src={AboutImgMap} alt="AboutImg" />
            </div>
          </FadeInWhenVisible>
          <div className="map-legend">
            <FadeInWhenVisible>
              <ul className="map-legend-list">
                <li>
                  <span>
                    <img src={Star2} alt="star" />
                  </span>
                  Asset manager partnership
                </li>
                <li>
                  <span>
                    <img src={Star3} alt="star" />
                  </span>
                  ICICI International & ICICI Bank
                </li>
              </ul>
            </FadeInWhenVisible>
          </div>
          {/* move below map */}
          <p className="asterisk-text">*Last updated as on March 2023</p>
        </div>
        <div></div>
      </div>
    </motion.div>
  );
};

export default About;
