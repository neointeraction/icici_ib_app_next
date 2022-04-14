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
            <FadeInWhenVisible delay={3}>
            <p className="banner-text">{text} 
             { link == null ? null : <span><a href={link} target="_blank" > click here</a></span> }     
            </p>
            </FadeInWhenVisible>
            </FadeInWhenVisible>
        </div>
      </div>
    </div>
  );
};

export default Banner;
