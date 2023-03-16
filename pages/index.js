import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import Head from "next/head";

import useModal from "../hooks/useModal";

import FadeInWhenVisible from "../hooks/FadeInWhenVisible";
import Banner from "../components/Banner";
import InfoStrp from "../components/InfoStrp";
import CookieOverlay from "../components/CookieOverlay";
import InitialPageModal from "../components/InitialPageModal";

import BannerImg from "../assets/images/banner.jpg";
import BannerImg3 from "../assets/images/banner3.jpg";
import BannerImg4 from "../assets/images/banner4.jpg";
import Prev from "../assets/images/icons/prev.svg";
import Next from "../assets/images/icons/next.svg";

const data = [
  {
    heading:"India's leading asset manager",
    bannerImage: BannerImg,
  },
  {
    heading:"Gateway to access Indian markets",
    bannerImage: BannerImg4,
  },
  {
    heading:"Focused on governance in investment decision making",
    bannerImage: BannerImg3,
  },
];

const Home = ({ hamOpen }) => {
  const { toggle, visible } = useModal();

  useEffect(() => {
    setbannerData(data);
    setTimeout(() => {
      toggle();
    }, 1500);

    var popupView = sessionStorage.getItem("popupView");
    if (popupView == null) {
      popupView = true;
    }   
    else if(popupView == true) {
      visible = true;
    }
    else if(popupView = false){
      visited = false;
    }
     

     setVisited(popupView); 


  }, []);

const handleSessionPopup = () =>{

   sessionStorage.setItem("popupView", false);
   setVisited(false);
}

  const [visited, setVisited] = useState();

  const [bannerData, setbannerData] = useState([]);

  var slideSettings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 10000,
    fade:true,
    prevArrow: (
      <motion.img
        whileHover={{ scale: 1.5 }}
        transition={{ duration: 0.5 }}
        initial={false}
        src={Prev}
        alt="Prev"
      />
    ),
    nextArrow: (
      <motion.img
        whileHover={{ scale: 1.5 }}
        transition={{ duration: 0.5 }}
        initial={false}
        src={Next}
        alt="Next"
      />
    ),
  };
  return (
    <motion.div
      animate={{ scale: hamOpen ? 0.995 : 1 }}
      transition={{ duration: 0.3 }}
      initial={false}
      className="page-container"
    >
      <Head>
        <title>ICICI Asset Management - Funds & Investment Services </title>
        <meta
          name="description"
          content="ICICI Asset Management represents the international asset management activities of ICICI Prudential AMC Ltd. It provides bespoke services focused in Indian capital markets to global institutional investors."
        />
        <meta name="keywords" content="Asset Management,investment services" />
        <link rel="canonical" href="https://www.iciciaminternatonal.com/" />
        {/* <meta http-equiv="Content-Security-Policy" content="style-src 'self' fonts.googleapis.com 'unsafe-inline'; font-src 'self' fonts.gstatic.com data:; default-src 'self'; script-src 'unsafe-eval' 'self'; frame-src https://www.google.com; img-src 'self' data: content:;  "/> */}
      </Head>
      <div className="banner-slider">
        <Slider {...slideSettings}>
          {bannerData?.map((item) => (
            <div>
              <Banner
                BannerImg={item.bannerImage}
                heading={item.heading}
                text={item.text}
                link={item.link}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="section-padding">
        <div className="container">
          <FadeInWhenVisible>
            {/* <Title titleText="New Heading" /> */}
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <p className="body-text">
              ICICI Prudential Asset Management Company Limited (The
              AMC) offers fund management and advisory services to marquee
              global clients investing across public equities, Investment Grade and High Yield
              Credits, fixed income, and alternative strategies in India. These
              investments could be through FPI registered funds or separate
              accounts (custom portfolios) directly into Indian equity and FI
              markets or offshore feeder funds holding ICICI Prudential Mutual
              Funds Schemes as underlying portfolios. The investors in these
              funds are retail individuals, high and ultra-high net worth
              individuals, large pensions, sovereigns, and other institutions
              from North Asia, Europe, and the GCC.
            </p>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <p className="body-text">
              The AMC provides bespoke advisory and fund management services focused in Indian
              capital markets to global institutional investors, led by a
              specialized cross-functional team across the asset management
              company.
            </p>
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <InfoStrp
              infoText="To learn more,"
              infoLink="https://www.icicipruamc.com/about-us"
            />
          </FadeInWhenVisible>
        </div>
      </div>
      <CookieOverlay />
      <InitialPageModal visible={visited} toggle={toggle} handleSessionPopup={handleSessionPopup} />
    </motion.div>
  );
};

export default Home;
