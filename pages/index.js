import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import axios from "axios";
import Head from "next/head";

import useModal from "../hooks/useModal";

import FadeInWhenVisible from "../hooks/FadeInWhenVisible";
import Banner from "../components/Banner";
import InfoStrp from "../components/InfoStrp";
import Title from "../components/Title/Title";
import IconButton from "../components/IconButton";
import CookieOverlay from "../components/CookieOverlay";
import InitialPageModal from "../components/InitialPageModal";

import BannerImg from "../assets/images/banner.jpg";
import BannerImg2 from "../assets/images/banner2.jpg";
import BannerImg3 from "../assets/images/banner3.jpg";
import Prev from "../assets/images/icons/prev.svg";
import Next from "../assets/images/icons/next.svg";
import GlobalBanner from "../assets/images/global-img.jpg";

const data = [
  {
    heading:"India's leading asset manager",
    text: "For our latest India outlook please ",
    bannerImage: BannerImg,
    link: "https://www.icicipruamc.com/docs/default-source/default-document-library/ipru-annual-outlook-2022.pdf",
  },
  {
    heading:"Advising foreign investors since 2006",
    text: "This 1315 meters long and 359 meters high Chenab Bridge is in Kashmir, India. Once completed (by end of 2022) it will be the tallest Railway Arch Bridge in the world, crossing over the deep gorges of the Chenab River to connect the Kashmir to the rest of India..The bridge would be 35 metres higher than the Eiffel Tower in Paris, and is being constructed at a cost of INR15Bn as part of the Udhampur-Srinagar-Baramulla Railway Link  project.. Source: aecom.com, business standard.com",
    bannerImage: BannerImg2,
    
  },
  {
    heading:"Committed to delivering good investment experience to its investors",
    text: "India is the world’s fourth largest country by cumulative wind capacity  currently at 39GW, as on 31 Mar 2021 and has generated around 60.15 Billion Units during 2020-21. Information Source: https://mnre.gov.in/wind/current-status",
    bannerImage: BannerImg3,
    
  },
];

const Home = ({ hamOpen }) => {
  const { toggle, visible } = useModal();

  useEffect(() => {
    getUser();
    setbannerData(data);
    setTimeout(() => {
      toggle();
    }, 1500);

    var popupView = sessionStorage.getItem("popupView");
    // sessionStorage.setItem("popupView", popupView);
    console.log(popupView,"popn") //null first time
    if (popupView == null) {
      // console.log(popupView, "pop"); //null
      popupView = true;
      // console.log(popupView, "popt"); //true
    }   
    else if(popupView == true) {
      // console.log(popupView, "pop");
      visible = true; //visited = true also works
    }
    else if(popupView = false){
      // console.log(popupView, "pop");
      visited = false;
    }
     
    console.log(popupView,"pops"); //true
    // visible = popupView;
     setVisited(popupView); //visible = true also works
    //  console.log(visited,"visit"); //true first
    //  console.log(popupView);

  }, []);

const handleSessionPopup = () =>{

   sessionStorage.setItem("popupView", false);
   setVisited(false);
}

// const handleSessionCookie = () =>{

//   sessionStorage.setItem("cookieView", false);

// }

   const [visited, setVisited] = useState();

  const [bannerData, setbannerData] = useState([]);

  async function getUser() {
    try {
      const response = await axios.get("/api/banners.json");
      setbannerData(response.data.banners);
    } catch (error) {
      console.error(error);
    }
  }

  console.log(bannerData, "bannerData");

  var slideSettings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 10000,
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
        <title>ICICI | Global Investment</title>
        <meta
          name="description"
          content="ICICI Prudential Asset Management Company Limited (The AMC) offers fund management and advisory services to marquee global clients investing across public equities, IG and High Yield Credits, fixed income, and alternative strategies in India. "
        />
        <meta name="keywords" content="ICICI, banking, Investment, AMC" />
      </Head>
      <div className="banner-slider">
        <Slider {...slideSettings}>
          {bannerData.map((item) => (
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
            <Title titleText="ICICI Global Investments" />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <p className="body-text">
              ICICI Prudential Asset Management Company Limited (The
              AMC) offers fund management and advisory services to marquee
              global clients investing across public equities, IG and High Yield
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
              ICICI Global Investments branding represents the international
              asset management activities of the AMC. The AMC provides
              bespoke advisory and fund management services focused in Indian
              capital markets to global institutional investors, led by a
              specialized cross-functional team across the asset management
              company.
            </p>
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <InfoStrp
              infoText="To learn more, click"
              infoLink="https://www.icicipruamc.com/about-us"
            />
          </FadeInWhenVisible>
        </div>
      </div>
      <div className="section-padding bordered-grid">
        <div className="img-text-flex">
          <div className="itf-img">
            <img src={GlobalBanner} alt="global-img" />
          </div>
          <FadeInWhenVisible>
            <div className="itf-content">
              <Title titleText="Global Investments" isSuperText align dark />
              <Title
                titleText="ICICI Global Investments, a division of ICICI Prudential Asset
                  Management (The AMC)"
                align
              />
              <IconButton link="/About" isGold alignLeft />
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
      <CookieOverlay />
      <InitialPageModal visible={visited} toggle={toggle} handleSessionPopup={handleSessionPopup} />
    </motion.div>
  );
};

export default Home;
