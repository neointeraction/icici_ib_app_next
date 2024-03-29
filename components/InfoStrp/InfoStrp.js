import React from "react";

import Info from "../../assets/images/icons/info.svg";
import Mail from "../../assets/images/icons/mail-small.svg";

const InfoStrp = ({ infoText, infoLink, isMailInfo }) => {
  return (
    <div className="info-container">
      <div className="info-icon">
        <img src={isMailInfo ? Mail : Info} alt="info" />
      </div>
      <p className="info-text">
        <span>{infoText}
        <a href={infoLink} target="_blank">Click here</a>
        </span>
      </p>
    </div>
  );
};

export default InfoStrp;
