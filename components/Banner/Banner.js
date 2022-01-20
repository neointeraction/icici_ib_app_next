import React from "react";
import FadeInWhenVisible from "../../hooks/FadeInWhenVisible";

const Banner = ({ BannerImg, text,heading, link }) => {
  return (
    <div className="banner-img">
      <img src={BannerImg} alt="Banner" />
      <div className="banner-content">
        <div>
          <FadeInWhenVisible delay={0.3}>
            <h1 className="banner-heading">{heading}</h1>
            <p className="banner-text">{text}</p>
          </FadeInWhenVisible>
        </div>
      </div>
    </div>
  );
};

export default Banner;
