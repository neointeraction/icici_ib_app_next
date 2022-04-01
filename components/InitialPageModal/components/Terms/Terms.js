import React, { useState } from "react";

const Terms = ({ disable,setDisable }) => {
  
  return (
    <div className="step-section-margin">
      <div className="term-block">
      <h4 className="terms-subtitle">
        Important Information 
        </h4>
        <p className="term-text">
        Information provided in this website is for information only and is subject to change without notice. It is not promised or guaranteed to be correct, complete, and up-to-date. The distribution of any fund and the offering of shares of any fund as mentioned on this website may be restricted in certain jurisdictions. It shall not be construed as any investment advice, recommendation, or an offer or solicitation, and shall not be used as basis for any contract or commitment to purchase or sell any security, instrument, or any products or services of ICICI Prudential Asset Management Company Limited. It is the responsibility of any person in possession of this information and of any person wishing to apply for shares of any fund, to inform himself of and to observe all applicable laws and regulations of the countries of his nationality, residence, ordinary residence or domicile.
        </p>
        <p className="term-text">
         Certain factual and statistical (both historical and projected) industry and market data provided was obtained by ICICI Prudential Asset Management Company Limited from independent, third-party sources that have not been verified as to its accuracy. Statements and assertions contained in this website reflect the belief of ICICI Prudential Asset Management Company Limited, which may be based in whole or in part on such data and other information.
        </p>
        <p className="term-text">
        Information or views expressed in this website does not take into account or cater to specific investment objectives, financial situation or particular needs of any specific person. Investors should seek independent professional advice from financial advisers regarding the suitability of a particular investment product, taking into account his/her specific investment objective, financial situation or particular needs before making a commitment to purchase/invest. In the event that an investor chooses not to seek such advice, he/she should consider carefully whether such investment is suitable for him/her.
        </p>
        <p className="term-text">
        Any prediction, projection, or forecast on economy, stock market, bond market etc. is not necessarily indicative of the future performance of the funds or products. Past performance of the funds or products is not necessarily indicative of its future performance. Investments are subject to investment and foreign exchange risks etc. including possible loss of the principal amount invested. The value of units and any income arising from them may fall as well as rise.
        </p>
        <p className="term-text">
        ICICI Prudential Asset Management Company Limited or its affiliates or any director or employee does not take any responsibility with regards to the completeness and accuracy of such reports. It cannot and does not warrant, guarantee or represent, expressly or by implication, the accuracy, validity or completeness of such information. The information on this website does not constitute an Offer for share/units and is neither a recommendation nor statement of opinion or an advertisement.
        </p>
        <p className="term-text">
        The information contained herein may not be duplicated, reproduced, or redistributed without the consent of ICICI Prudential Asset Management Company Limited. ICICI Prudential Asset Management Company Limited  reserves the right to make changes and corrections to the information, including any opinions or forecasts expressed herein at any time, without notice.
        </p>
        <p className="term-text">
        By proceeding further and clicking on the "AGREE" button below I acknowledge that I have read and fully understood the abovementioned conditions/restrictions/disclaimer for accessing this website.
        </p>
        <h4 className="terms-subtitle">
        AGREE DISGREE
        </h4>
        <p className="term-text">
        I further acknowledge that there has been no solicitation, invitation or inducement of any sort whatsoever from ICICI Prudential Asset Management Company Limited or any of its members to offer, or extend an invitation for subscription, for any products or services of ICICI Prudential Asset Management Company Limited, nor shall any of the contents of this website be understood or construed by me as an advertisement. I further acknowledge having read and understood the applicable laws and regulations of my residence jurisdiction and agree to be bound by the <span><a href="https://www.eastspring.com/sg/disclaimer"> Disclaimer, Other Important Notice</a> </span> and <span><a href="https://www.eastspring.com/sg/privacypolicy"> Privacy Policy</a> </span>. 
        </p>
      </div>
      <div className="agree-input">
        <input
          className="custom-checkbox"
          id="custom-checkbox-1"
          type="checkbox"
          value="value1"
          onClick={setDisable}
        />
        <label for="custom-checkbox-1">Accept Terms and Conditions</label>
      </div>
    </div>
  );
};

export default Terms;
