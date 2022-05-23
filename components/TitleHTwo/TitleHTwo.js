import React from "react";

const TitleHTwo = ({ titleText, align, isBanner, isSuperText, dark }) => {
  return (
    <h2
      className={`section-title ${align} ${dark ? "dark" : null} ${
        isBanner ? "banner-title" : isSuperText ? "title-super-text" : null
      }`}
    >
      {titleText}
    </h2>
  );
};

export default TitleHTwo;