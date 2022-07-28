import React, { useState } from "react";

import Download from "../../assets/images/icons/download.svg";

const DownloadList = ({ filename, updated,downloadlink }) => {
  const [active, setActive] = useState(false);

  const handleDownload = () => {
    setActive(true);
    setTimeout(() => {
      setActive(false);
    }, 2000);
  };

  return (
    <div className="download-list-container">
      <h2 className="file-name section-sub-subtitle">
        {filename}<span>{updated}</span>
      </h2>
      <a href={downloadlink} target="_blank" className="download-btn">
        {active ? (
          <div className="downloading">
            <div class="gold-anim"></div>
            <div class="blue"></div>
          </div>
        ) : (
          <img src={Download} alt="Download" onClick={handleDownload} />
        )}
      </a>
    </div>
  );
};

export default DownloadList;
