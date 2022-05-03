import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";

import FadeInWhenVisible from "../../hooks/FadeInWhenVisible";
import InfoStrp from "../../components/InfoStrp";
import Title from "../../components/Title/Title";

import AboutImg from "../../assets/images/about.jpg";
import AboutImgMap from "../../assets/images/about-map.jpg";
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
        <title>About Us - Services & Solutions | ICICI Global Investments</title>
        <meta
          name="description"
          content="Learn more about ICICI Global Investments, representing the international asset management activities of the AMC. Explore our wide range of investment solutions."
        />
        <meta name="keywords" content="global investment services,asset management, investment solutions" />
        <link rel="canonical" href="https://www.iciciglobalinvestments.com/about-us" />
        <meta http-equiv="Content-Security-Policy" content="style-src 'self' fonts.googleapis.com 'unsafe-inline'; font-src 'self' fonts.gstatic.com data:; default-src 'self'; script-src 'unsafe-eval' 'self'; img-src 'self' data: content:;  "></meta> 
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
        <div className="container">
          <FadeInWhenVisible></FadeInWhenVisible>
          <div className="row logo-text">
            <div className="col-md-3"> 
            <FadeInWhenVisible>
                <div className="about-logo-container">
                  <img src={PruLogo} alt="Logo" />
                </div>
              </FadeInWhenVisible>
            </div>
            <div className="col-md-9">             
              <FadeInWhenVisible>
                <p className="body-text">
                  <strong>
                    ICICI Prudential Asset Management Company Limited
                  </strong>
                 (The AMC) is a leading India based asset manager that provides a broad range of investment 
                 solutions to over 6mn investors across 250 cities in India. The AMC also services Non Resident Indians (NRI’s)
                  through its affiliate presence in the GCC and Mauritius. With ~USD 65bn* in assets under management the AMC’s 
                  investment strategies are designed to deliver long term superior risk adjusted returns.
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
                <p className="body-text">
                ICICI Global Investments branding represents the international asset management activities of the AMC. 
                The AMC provides bespoke advisory and fund management services focused on Indian capital markets to 
                global institutional investors, led by a specialized cross-functional team based in Mumbai. The investors in 
                these funds are retail individuals, high and ultra-high net worth individuals, large pensions, sovereigns and 
                other institutions from North Asia, Europe and the GCC.
                </p>
              </FadeInWhenVisible>
            </div>
          </div>
          <FadeInWhenVisible>
            <InfoStrp
              infoText=" For more information about the AMC, Please visit"
              infoLink="https://www.icicipruamc.com/about-us"
            />
          </FadeInWhenVisible>
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
          <div> 
          <FadeInWhenVisible>
              <p className="asterisk-text">
                *Last updated as on 31st march 2022 
              </p>
          </FadeInWhenVisible>
        </div>
        </div>
       
      </div>
    </motion.div>
  );
};

export default About;
