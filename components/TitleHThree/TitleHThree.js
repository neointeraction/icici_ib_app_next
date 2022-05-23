import React from "react";

const TitleHThree = ({ titleText, align, isBanner, isSuperText, dark }) => {
  return (
    <h3
      className={`section-title ${align} ${dark ? "dark" : null} ${
        isBanner ? "banner-title" : isSuperText ? "title-super-text" : null
      }`}
    >
      {titleText}
    </h3>
  );
};

export default TitleHThree;