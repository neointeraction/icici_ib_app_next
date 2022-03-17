import React from "react";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Head from "next/head";

import FadeInWhenVisible from "../../hooks/FadeInWhenVisible";
import Title from "../../components/Title/Title";
import ImageText from "../../components/ImageText/ImageText";

import FundImg1 from "../../assets/images/fund-img1.jpg";
import FundImg2 from "../../assets/images/fund-img2.jpg";
import FundImg3 from "../../assets/images/fund-img3.jpg";
import FundImg4 from "../../assets/images/fund-img4.jpg";
import FundImg5 from "../../assets/images/fund-img5.jpg";
import FundBanner from "../../assets/images/fund-banner.jpg";

const data = [
  {
    anchor: "KBA",
    imgSrc: FundImg1,
    title: "India Dynamic Fixed Income Fund",
    text: `The AMC is the Investment Manager to the KBA India Dynamic Fixed Income Sub Fund of India Opportunities Fund (the Trust), a UCITs compliant umbrella Fund domiciled in Ireland. The Fund aims to generate total returns with moderate levels of credit risk by investing primarily in a portfolio of debt securities issued in India, by companies operating in India or by companies deriving significant portion of their business from India. `,
    buttonLink: "/KBA",
  },
  {
    anchor: "Equity",
    imgSrc: FundImg2,
    title: "India Equity Strategies",
    text: `The AMC has a long track record of advising investors in North Asia, Europe and the GCC on long only India equity strategies. These include India thematic focused funds, large cap growth strategy, an ESG focused multicap strategy. The strategies are available in local domiciled trust structures, UCITS compliant structures and separately managed accounts. These strategies adopt a top down and bottom up approach with an endeavor to outperform broad market benchmarks and focus on delivering risk adjusted returns. The investors in these strategies range from retail individuals, HNI’s, corporates, family offices as well as marquee institutional investors like pensions, insurance companies and sovereign wealth funds.`,
    buttonLink: null,
  },
  {
    anchor: "Income",
    imgSrc: FundImg3,
    title: "Investment Grade Long Only India Fixed Income Strategies",
    text: `The AMC advises large asset managers and offshore funds with their investments across sovereigns, high grade corporate bonds in local and USD issuances. Many of these advised strategies are focused on delivering absolute returns through investment in Infrastructure linked bonds, using our active duration and credit research expertise that is available to mutual funds in India.`,
    buttonLink: null,
  },
  {
    anchor: "Balanced",
    imgSrc: FundImg4,
    title: "India Balanced Strategy",
    text: `The strategy uses an in-house model to determine the optimum levels of allocation to Indian equity and fixed income based on market valuations. The strategy uses Price to Book Model along with other ancillary indicators.`,
    buttonLink: null,
  },
  {
    anchor: "credit",
    imgSrc: FundImg5,
    title: "India High Yield Credit",
    text: `The AMC advises marque global institutions and foreign asset managers on bespoke high yielding credit portfolios covering a broad corporate spectrum from opportunistic and performing credit to mid-market and structured debt. The AMC’s focus is on emerging growth sectors in India that need long term stable debt capital such as Fintech, consumer and wholesale automotive finance, personal lending and financial firms. The AMC’s expertise and proven track record of performance in this asset class is a key competitive advantage.   `,
    buttonLink: null,
  },
];

const Funds = ({ hamOpen }) => {
  const isOdd = (x) => Boolean(x % 2);

  return (
    <motion.div
      animate={{ scale: hamOpen ? 0.995 : 1 }}
      transition={{ duration: 0.3 }}
      initial={false}
      className="page-container"
    >
      <Head>
        <title>ICICI | Investment Strategies</title>
        <meta
          name="description"
          content="ICICI Lorem ipsum dolor sit amet, consectetur adipiscing elit.."
        />
        <meta name="keywords" content="ICICI, banking, Investment" />
      </Head>
      <div className="banner-static">
        <img src={FundBanner} alt="FundBanner" />
        <div className="banner-static-content">
          <FadeInWhenVisible delay={0.1}>
            <Title titleText="Investment Strategies" />
          </FadeInWhenVisible>
        </div>
      </div>
      <div className="section-padding">
        <div className="container">
          <FadeInWhenVisible>
            <div className="anchor-links-flex">
              <AnchorLink className="anchor-button" href="#KBA" offset="80">
              India Fixed Income SICAV
              </AnchorLink>
              <AnchorLink className="anchor-button" href="#Equity" offset="80">
                India Equity
              </AnchorLink>
              <AnchorLink className="anchor-button" href="#Income" offset="80">
                India Fixed Income
              </AnchorLink>
              <AnchorLink
                className="anchor-button"
                href="#Balanced"
                offset="80"
              >
                India Balanced
              </AnchorLink>
              <AnchorLink className="anchor-button" href="#credit" offset="80">
                India High Yield Credit
              </AnchorLink>
            </div>
          </FadeInWhenVisible>
          {data.map((item, index) => (
            <FadeInWhenVisible>
              <div id={item.anchor}>
                <ImageText
                  imgSrc={item.imgSrc}
                  title={item.title}
                  text={item.text}
                  imageRight={isOdd(index + 1)}
                  buttonLink={item.buttonLink}
                />
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Funds;
