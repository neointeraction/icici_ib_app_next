import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";

import FadeInWhenVisible from "../../hooks/FadeInWhenVisible";
import Title from "../../components/Title/Title";
import Collapse from "../../components/Collapse";

import PrivacyBanner from "../../assets/images/privacy-banner.jpg";

const data = [
  {
    title: "Personal Information",
    body: `
    The Personal Information that we collect from the Provider of Information may include information that is of a confidential nature, and shall mean and include any information that relates to a person, which either directly or indirectly, in combination with other information that is available or likely to be available to Us,is capable of identifying the Provider of the Information (“Personal Information”).

    The type of Personal Information collected from the Provider and covered under this Privacy Policy shall include the following, relating to:
-   Full name.
-   Address.
-   Telephone number(s).
-   E-mail address.
-   Password (in the event of the Investor signing up for the online facilities).
-   Financial information (pertaining to the investments/ applications/ transactions and any other related purposes vide which we would be providing the services to the Investors); and
-   Any other information as defined under Rule 3 of the Information Technology (Reasonable security practices and procedures and sensitive personal data or information) Rules, 2011, as may be required by Us from time to time in order to provide services to the Provider of Information.

However, any information that is freely available in the public domain is exempt from the above definition.
    
The Provider of Information herein shall have the right to approach and modify the Personal Information 
that has been retained with Us. Please note, that we shall not be responsible for the accuracy of the information 
that is being provided by the Investors.
    `,
  },
  {
    title: "Collection of  Personal Information",
    body: `
Personal Information is collected and/or obtained by Us from several sources, wherein the Provider of Information has provided for the same. The information provided may include such Personal Information as a part of the
application and/or enrollment process (the same maybe online or vide a physical application form). Additionally,

we may obtain the Personal Information from third-parties, or though call recordings at our call-centers, internet technology, including our Website.

Information shall also be collected from vendors/ distributors and/or any other service providers for maintenance
of our records and for processing of the payments/ commissions etc.

The Provider of Information agrees and understands that the Personal Information collected by Us shall be processed,stored and used by Us, and the same may also be passed to, transmitted to and processed by our affiliates and other
data processors, agents or service providers acting under a contract with Us for the purposes identified herein.
    `,
  },
  {
    title: "Legal Basis",
    body: ` 
    
    We are permitted to process your personal data in compliance with Data Protection Legislation by relying on one or more of the lawful grounds.

1\. You have explicitly agreed to us processing such information for a specific reason;
2\. The processing is necessary to perform the agreement we have with you or to take steps to enter into an agreement with you;
3\. The processing is necessary for the purpose of compliance with a legal obligation we have;
4\. To provide services to you;
5\. To prevent, detect, investigate and prosecute fraud and alleged fraud, money laundering and other crimes and to verify
    your identity in order to protect our business and to comply with laws that apply to us and/or where such processing 
    is a contractual requirement of the services or financing you have requested; 
6\. To evaluate, develop or improve our services;
7\. To keep our customers informed about their investments, unless you have indicated at any time that you do not wish us to do so.
    `,
    

    
  },
  {
    title: "Purpose",
    body: ` 
We and our affiliates including RTA (Registrar and Transfer Agent) may use your information for the purpose as mentioned in clause above and/or for the below legal basis:

1\. To provide and manage your portfolio(s) and our relationship with you;
2\. To give you statements of your portfolio(s) and about our relationship with you;
3\. To entertain your enquiries and complaints;
4\. To help you manage your account, meet our regulatory obligations and/or requirements, to keep you informed about the product and service you hold with us;
5\. To assess any application you make, including carrying out anti- fraud, suspicious transactions check and any other regulatory checks;
6\. To share your information with our partners and service providers.
    `,
  },
  {
    title: "Your Rights",
    body: `
Under certain circumstances, you will have the right to:

1\. Be informed about the processing of your personal data (purpose, recipients, storage period etc.);
2\. Object to your personal data being processed for a particular purpose;
3\. Withdraw, at any time, any consent that you have previously given to us for our use of your personal data;
4\. Ask us to stop or start sending you marketing messages at any time;
5\. Request correction of the personal data that we hold about you. This enables you to have any incomplete or inaccurate information we hold about you corrected. It is important that the personal data we hold about you is accurate and current. Please keep us informed if your personal data changes during your working relationship with us; 
6\. Request the erasure of your personal data. This enables you to ask us to delete or remove personal data where you think that we do not have the right to process it.

If you would want to contact us in relation to any of the rights set out herein, please contact us using the following details. To protect your privacy and security reasons, we may take reasonable information to verify your identity before providing you the required information. 

Mr. Shiju Thomas, Email-privacy@icicipruamc.com, Data Protection Officer,ICICI Prudential Asset Management Company Limited, 2nd Floor, Block B2, Nirlon Knowledge Park, Western Express Highway, Goregaon (E),Mumbai- 400063
    `,
  },
  {
    title: "Use of personal Information",
    body: ` 
The Provider (s) expressly agree and understand that:

1\. ICICI Pru AMC may use the Personal Information of the Provider for the purposes of providing him with the services 
        to which he has subscribed and any service- related activities such as processing instructions, responding to service 
        requests, resolve any grievances etc. The same may also be used to contact you whenever required and also to seek your 
        feedback in relation to the offered services. 
2\. The Contact information (like e-mail address, phone number, etc) may be used to send periodic information on the 
        services or upcoming events or announcements.
3\. The Personal Information may be used to generate statistics and reports for both internal use and for sharing with 
        affiliates, intermediaries, successors, vendors, service providers and advertisers. Such statistics and reports will 
        not contain Personal Information that could identify the Provider of Information, personally.
    `,
  },
  {
    title: "Disclosure of personal information",
    body: ` 
ICICI Pru AMC may disclose the Provider’s information in order to:

-   Conform to legal and/ or statutory requirements or comply with legal process;
-   Protect and defend ICICI Pru AMC's or its Affiliates' rights, interests or property;
-   Enforce our legal rights, terms and conditions or provisions of the offer documents of Schemes of the Mutual Fund/ 
        Portfolio Management Services/ any other products or services.
    `,
  },
  {
    title: "Sharing of personal information with third parties",
    body: ` 
To the extent required or permitted under law, we may share the Investor’s Personal Information for the uses mentioned 
    here with the following third parties:

-   Registrar and transfer agent (s), call centers, Banks, custodians, depositories and/ or authorized external third parties 
        who are involved in transaction processing, dispatches, etc., of investors’ investment with Us and/or who are 
        vendors/ service providers/ distributors to whom commission is paid; 
-    Distributors or sub-brokers or intermediaries through whom applications are received and whose ARN number is stamped on 
        the application form/ transaction slips;
-    Any other organization for verifying the identity of investors for complying with anti-money laundering requirements;
-    Any governmental authority including but not limited to the Reserve Bank of India and/ or the Securities and Exchange Board of India;
-    Certain Personal Information may be shared with post office, local & international courier service providers and other 
        intermediaries for correspondence with the Provider of Information and for making payments to the Provider by cheques, 
        drafts, warrants, through electronic clearing services, NEFT etc. 

We will on a best effort basis ensure that Personal Information is transferred to the third parties, on an assurance 
     from them that reasonable and appropriate steps have been taken to maintain the required level of data protection. 

The Personal Information so collected shall be communicated to third parties / third persons only for the reasons 
     consistent with the purposes for which such Personal Information was originally collected or such purposes as 
     authorized by law.

    `,
  },
  {
    title: "Retention of personal information",
    body: ` 
We may retain Provider’s Personal Information for as long as required to provide our services to the Investor or 
    otherwise if required under law.
    `,
  },
  {
    title: "Breach of internet security",
    body: ` 
    
In addition to the efforts of ICICI Pru AMC for the protection of the Personal Information, it is important that the 
    Provider of Information should co-operate with ICICI Pru AMC for the security of the Personal Information. It is 
    recommended that the Providers, especially the investors should necessarily choose their passwords carefully such that 
    no un-authorized access is made by any third party and not to disclose the same to any one and or keep a record of the 
    same in writing. 

However, despite our best efforts, if unauthorized persons breach our security control measures resulting in the website 
    being hacked or presenting inaccurate information etc., ICICI Prudential Mutual Fund, ICICI PruAMC, 
    ICICI Prudential Trustee Company Limited, directors, officers, employees or affiliates’ will not be responsible.

    `,
  },
  {
    title: "Incidental information",
    body: ` 

Cookie Policy:

When you visit our Website, we use cookies, which are small pieces of information that allow Us to maintain your 
    connection to our Website. The Website may use cookies for detecting what kind of device you have inorder to present 
    content in the best way, for a language switch and/or for other purposes. These cookies do not collect or store any 
    Personal Information and the visitor including the Provider of Information canrefuse the use of cookies. 

Website Analytics:

The Website (www.icicipruamc.com) and a web analytics service (which may be used by Us) uses cookies to help the 
    Website operators analyse how users use the Website. The information generated by the cookie about the visitors’ use 
    of the Website (including the IP address) will be transmitted to and stored as part of the normal operation of services. 
    Also, information may be supplied to the owners or operators of third party websites from which it is possible to link to 
    our Website with information relating the number of users linking to our Website from such third party websites. 
    The information sharedshall be non- personally identifiable information. 

All such incidental information will be used only to assist Us in providing an effective service on the Website.

    `,
  },
  {
    title: "Security Standards and Measures",
    body: ` 
We have adopted reasonable security practices and procedures and have implemented such reasonable security practices and 
    safeguards which are appropriate to the sensitivity of the Personal Information. These security practices and standards are 
    consistent with generally accepted standards of commercial business practice, which includes technical, operational and 
    physical security control measures which commensurate with thePersonal Information being protected from any unauthorized 
    access and/or disclosures while the same is with Us. 

The Provider of Information, especially the investors agree and understand that trusted third parties who act on our 
    behalf for performing of certain functions such as processing of transactions, issuing account statements etc. are under 
    contractual obligations to ensure reasonable security safeguards commensurate to the sensitivity of the Personal Information 
    being handled by them. 

ICICI Pru AMC endeavors to safeguard and ensure the security of the information provided by the Provider of Information and 
    uses 128-bit encryption wherever applicable, for the transmission of the information, which is currently the permitted level 
    of encryption in India.

    `,
  },
];

const Privacy = ({ hamOpen }) => {
  return (
    <motion.div
      animate={{ scale: hamOpen ? 0.995 : 1 }}
      transition={{ duration: 0.3 }}
      initial={false}
      className="page-container"
    >
      <Head>
        <title>Privacy Policy | ICICI Global Investments</title>
        <meta
          name="description"
          content="ICICI Prudential Asset Management Company Limited (The AMC) offers fund management and advisory services to marquee global clients investing across public equities, IG and High Yield Credits, fixed income, and alternative strategies in India. "
        />
        <meta name="keywords" content="ICICI, banking, Investment" />
        <meta http-equiv="Content-Security-Policy" content="style-src 'self' fonts.googleapis.com 'unsafe-inline'; font-src 'self' fonts.gstatic.com data:; default-src 'self'; script-src 'unsafe-eval' 'self'; img-src 'self' data: content:;  "></meta> 
      </Head>
      <div className="banner-static">
        <img src={PrivacyBanner} alt="PrivacyBanner" />
        <div className="banner-static-content">
          <FadeInWhenVisible delay={0.1}>
            <Title titleText="Privacy Policy" />
          </FadeInWhenVisible>
        </div>
      </div>
      <div className="section-padding">
        <div className="container">
          <FadeInWhenVisible>
            <p className="body-text">
            ICICI Prudential Asset Management Company Limited (hereinafter "ICICI Pru AMC/ We/ Us" ) , in the course of its business and while dealing with the investors, vendors, distributors (hereinafter "Provider of Information/ Provider") may become privy to the personal information of the Provider of Information, including information that is of a confidential nature........... 
            </p>
            <p className="body-text">
            We are strongly committed to protecting the privacy of the Provider of Information. This Privacy Policy (as amended from time to time) describes how we handle and deal in personal information that we may collect and retain, vide various avenues including but not limited to usage of the various services both in the physical (offline) and online/electronic mode.             </p>
            <p className="body-text">
            Such Personal Information collected by Us vide the physical (offline) and online/electronic mode may be converted and stored in an electronic form at our sole discretion for the purposes mentioned here under. This Privacy Policy shall be read with and subject to the disclaimer notified on the Website.             </p>
            <p className="body-text">
            However, the Provider of Information shall not be covered by this Privacy Policy, if he accesses any other/ third party links from the Website            </p>
            <p className="body-text">
            By visiting our website and using the services as provided by Us (either through the Website, vide our various Internet and other applications or through the physical means) including but not limited to subscribing, sending of inquiries etc, the Providers expressly agree to this Privacy Policy. Further, by accessing the Website and/or utilizing the services provided by Us (both through online/electronic or vide physical (offline) means) the Provider shall be treated as expressly giving their consent for the processing, retention and utilization of the Personal Information in accordance with this Privacy Policy and the terms hereof            
            </p>
          </FadeInWhenVisible>
          {/* <FadeInWhenVisible>
            <InfoStrp
              infoText="You may learn more about the GDPR here: "
              infoLink="https://www.eugdpr.org/"
            />
          </FadeInWhenVisible> */}
        </div>
      </div>
      <div className="section-padding pt-0">
        <div className="container">
          <FadeInWhenVisible>
            {data.map((item) => (
              <Collapse title={item.title} body={item.body} />
            ))}
          </FadeInWhenVisible>
        </div>
      </div>


      <div className="section-padding pt-0">
        <div className="container">
          <FadeInWhenVisible>
            <p className="body-text">
            Grievance Redressal:           
            </p>
            <p className="body-text">
            Any grievance relating to your Personal Information may be addressed to <span> <a href="mailto:privacy@icicipruamc.com">privacy@icicipruamc.com </a> </span>               
            </p>
            <p className="body-text">
            This Privacy Policy is current, valid and up to date as per the laws, rules and regulations that have been enacted in this regard. This Privacy Policy may be updated or amended from time to time and the Providers ofInformation are advised to visit this page regularly in order to view the same.
            </p>
          </FadeInWhenVisible>   
        </div>
      </div>
      


    </motion.div>
  );
};

export default Privacy;
