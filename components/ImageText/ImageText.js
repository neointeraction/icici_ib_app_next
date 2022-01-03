import React from "react";
import Link from "next/link";

const ImageText = ({ imgSrc, title, text, imageRight, buttonLink }) => {
  return (
    <div className={`image-text-container ${imageRight ? "" : "reverse"}`}>
      <div className="image-block">
        <img src={imgSrc} alt={imgSrc} />
      </div>
      <div className="text-block">
        <h1 className="tb-title">{title}</h1>
        <p className="tb-text">{text}</p>
        {buttonLink && (
          <Link href={buttonLink}>
            <div className="anchor-button knw-mr-btn">Know More</div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ImageText;
