import React, { useState } from "react";

import Uk from "../../../../assets/images/flags/Flag-UK.png";
import SGP from "../../../../assets/images/flags/Flag-singapore.png";
import US from "../../../../assets/images/flags/Flag-US.png";
import UAE from "../../../../assets/images/flags/Flag-UAE.png";
import Fin from "../../../../assets/images/flags/Flag-finland.png";
import France from "../../../../assets/images/flags/Flag-france.png";
import Germany from "../../../../assets/images/flags/Flag-germany.png";
import Italy from "../../../../assets/images/flags/Flag-italy.png";
import Lux from "../../../../assets/images/flags/Flag-lux.png";
import Spain from "../../../../assets/images/flags/Flag-spain.png";
import Sweden from "../../../../assets/images/flags/Flag-sweden.png";
import Switzerland from "../../../../assets/images/flags/Flag-switzerland.png";
// import DUAE from "../../../../assets/images/flags/Flag-UAE.png";
import HK from "../../../../assets/images/flags/Flag-HK.png";

const data = [
  {
    id: 1,
    countryName: "UK",
    couintryFlag: Uk,
  },
  {
    id: 2,
    countryName: "Singapore",
    couintryFlag: SGP,
  },
  {
    id: 3,
    countryName: "USA",
    couintryFlag: US,
  },
  {
    id: 4,
    countryName: "UAE",
    couintryFlag: UAE,
  },
  {
    id: 5,
    countryName: "Finland",
    couintryFlag: Fin,
  },
  {
    id: 6,
    countryName: "France",
    couintryFlag: France,
  },
  {
    id: 7,
    countryName: "Germany",
    couintryFlag: Germany,
  },
  {
    id: 8,
    countryName: "Italy",
    couintryFlag: Italy,
  },
  {
    id: 9,
    countryName: "Luxembourg",
    couintryFlag: Lux,
  },
  {
    id: 10,
    countryName: "Spain",
    couintryFlag: Spain,
  },
  {
    id: 11,
    countryName: "Sweden",
    couintryFlag: Sweden,
  },
  {
    id: 12,
    countryName: "Switzerland",
    couintryFlag: Switzerland,
  },
  {
    id: 13,
    countryName: "DIFC UAE",
    couintryFlag: UAE,
  },
  {
    id: 14,
    countryName: "Hong Kong",
    couintryFlag: HK,
  },
];

const SelectCountry = () => {
  const [counntryValue, setCountryValue] = useState("");
  const [activeId, setActiveId] = useState();

  const handleValue = (id, value) => {
    setActiveId(id);
    setCountryValue(value);
    console.log(activeId);
  };

  console.log(counntryValue, "counntryValue"); // selected country value is stored  in counntryValue

  return (
    <div className="step-section-margin">
      <div className="row">
        {data.map((item, e) => (
          <div className="col-lg-3 col-md-4 col-sm-6 col-6">
            <button
              className={`country-btn ${item.id === activeId ? "active" : ""}`}
              onClick={() => handleValue(item.id, item.countryName)}
            >
              <span>
                <img className="cntry-flag" src={item.couintryFlag} alt={item.couintryFlag} />
              </span>
              <span className="cntry-name"> {item.countryName}</span>
            </button>
          </div>
        ))}
        <div className="col-lg-6 col-md-4 col-sm-12">
          <div className="input-with-icon">
            <input
              type="text"
              className="input-custom country-input"
              placeholder="Add your Country name here"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectCountry;
