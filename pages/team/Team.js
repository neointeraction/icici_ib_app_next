import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";

import FadeInWhenVisible from "../../hooks/FadeInWhenVisible";
import Title from "../../components/Title/Title";
import TeamCard from "../../components/TeamCard";

import TeamBanner from "../../assets/images/team-banner.jpg";
import Nimesh from "../../assets/images/team/nimesh.jpg";
import Sankaran from "../../assets/images/team/sankaran.jpg";
import Manish from "../../assets/images/team/manish.jpg";
import Amit from "../../assets/images/team/amit.jpg";
import Shamit from "../../assets/images/team/shamit.jpg";
import Anish from "../../assets/images/team/anish.jpg";
import Rakesh from "../../assets/images/team/rakesh.jpg";
import Ramki from "../../assets/images/team/ramki.jpg";

const data = [
  {
    image: Nimesh,
    name: "Mr. Nimesh Shah",
    designation: "Managing Director & CEO",
    summary: `Nimesh joined ICICI Prudential Asset Management Company Limited
    (the AMC) in 2007 as Managing Director and Chief Executive
    Officer. Nimesh has over three decades of experience in banking and financial
    services industry and has been instrumental in laying a strong
    foundation for building the AMC’s asset management business. Under
    his leadership the AMC has seen tremendous growth in assets from
    USD 4bn to ~USD 60bn (as of March 31, 2023) and emerged as
    among the one of the trusted asset management companies in India.
    His focus has been always on being investor-centric, maintaining
    high levels of transparency and disclosures besides sticking to
    basics. This has helped the AMC to establish itself as a credible
    and trust-worthy brand. Prior to joining the AMC, he was with ICICI Bank where he handled
    many responsibilities including Project Finance, Corporate Banking
    and International Banking. He also led ICICI Bank’s foray into
    Middle-East and African region and helped establish ICICI’s brand
    presence in these geographies and in the International arena. By qualification, Nimesh is a Chartered Accountant from Institute
    of Chartered Accountants of India.`,
  },
  {
    image: Sankaran,
    name: "Mr. Sankaran Naren",
    designation: "Executive Director & CIO",
    summary: `Naren is the Executive Director and Chief Investment Officer at the AMC. In his role, Naren is responsible for overseeing assets across domestic mutual funds, offshore advisory mandates and managed accounts
    Naren is instrumental for devising the overall investment strategy of the firm and its successful execution. He also has direct fund management responsibilities for some domestic equity funds and also advises foreign clients on some India equity funds.
    Naren has over three decades of experience in financial services industry in India. He has been associated with the AMC since October 2004 when the AMC managed assets of ~USD 2.5bn. Today the AMC is one of the leading asset management company in India with ~ USD 60bn of assets under domestic mutual funds and offshore advisory business. (as of March 31, 2023)   
    Naren’s core competency lies in his deep knowledge and understanding of local markets. He is recognized as a leading voice on the Indian economy/equity markets across the investment and financial services sector. Under his leadership as CIO, the AMC has been consistently honored by various companies of international repute including Morning Star, Asia Asset Management and Thomson Reuters Lipper Fund awards    
    Prior to joining the AMC, Naren was associated with leading financial service organizations in various positions.
    Naren holds a B. Tech degree from Indian Institute of Technology, Chennai and a Post Graduate Diploma in Management from Indian Institute of Management, Kolkata.`,
  },
  {
    image: Ramki,
    name: "Mr. B.Ramakrishna",
    designation: "Chief Financial Officer",
    summary: `Ramakrishna is the Chief Financial Officer of the AMC. Ramakrishna plays an integral role in driving the key profitability agenda of the AMC through financial & corporate planning, budgetary control and corporate finance. In addition, he is also responsible for driving ETF, International Business and key initiatives and projects for the firm. Ramakrishna has over 35 years of experience across consumer sector, banking & financial services and Investment Management industry.
    By qualification, Ramakrishna is a Chartered Accountant and a Cost Accountant.
    `,
  },
  {
    image: Manish,
    name: "Mr. Manish Banthia",
    designation: "CIO, Fixed Income",
    summary:`Manish joined ICICI Prudential AMC in October 2005 and has nearly two decades of fund management experience in the asset management industry. Manish has played a key role in strengthening the fixed income capabilities of the AMC and successfully ensured that the fund house remained immune to credit events. He strikes a good balance between liquidity, safety and returns. His core competency lies in portfolio management, rates trading and credit research. Before becoming a portfolio manager in 2009, Manish was associated with ICICI Prudential Asset Management in several roles including fixed income trading, credit analysis and product development. He was most recently the Deputy CIO – Fixed Income for the AMC. Manish has direct fund management responsibilities for several mutual fund schemes and also advises an Indian Fixed Income Fund domiciled in Japan which has assets of ~ USD 300mn. Manish started his career with Aditya Birla Group in 2004.
    By qualification, Manish is Chartered Accountant from Institute of Chartered Accountants of India and holds a Masters in Business Administration from Indian Institute of Foreign Trade (IIFT) Delhi.
    `
  },
  {
    image: Anish,
    name: "Mr. Anish Tawakley",
    designation: "Deputy CIO – Equity & Head of Research ",
    summary: `Anish joined the AMC as Head of Research in April 2016. Anish spearheads the research process and mentors the analyst team which actively covers over 400 companies listed on Indian exchanges. Anish’s core competency lies in providing a macro perspective on the economy and markets and a deep understanding of banking and financial sector. Anish also has manages a flagship large cap fund which has assets under management of over USD 4bn. In addition, he also manages some thematic funds.
    Anish has over two decades of experience as an analyst, portfolio manager and management consultant in developed and emerging markets. Prior to joining ICICI Prudential AMC, Anish was a Director, Sell Side Research and Head of Asia Ex-Japan sector team at Barclays. He has also been associated with leading financial institutions like Credit Suisse, McKinsey and Bernstein London in various leadership positions.   
    Anish holds a Post Graduate Diploma in Management from Indian Institute of Management, Bangalore and B. Tech from Indian Institute of Technology, Delhi.`,
  },
  {
    image: Amit,
    name: "Mr. Amit Bhosale",
    designation: "Head Risk Management",
    summary: `Amit joined the AMC in 2014. In his role, Amit reports directly to the MD & CEO of the AMC. His team does not have any profit targets and is responsible for assessing risks emerging out of an investment strategy or introduction of new products/ processes.
    Prior to joining the AMC, Amit worked as the Director, Financial Institutions Credit Risk at Bank of America (BoA). At BoA, he was an active member of the Risk Governance set up being involved in portfolio reviews, sensitivity analysis, new product approvals, managing regulatory/ statutory audits and credit review exams.    
    Amit has over two decades of experience in managing a set of diverse credits across various industries including Banks, Policy Institutions, Broker Dealers, Insurance and Asset Managers. Over the years he has developed significant product expertise in handling syndicated loans, traded products (derivatives and fixed income issuances), trade finance, liquidity management products etc. In the past he has also been associated with leading organizations like ICICI Bank and Tata Motors.    
    Amit has completed his Masters of Management Studies (MMS) from Jamnalal Bajaj Institute of Management Studies (JBIMS), Mumbai and holds a Bachelor of Engineering (B.E - Production) degree from Mumbai University.`,
  },
  {
    image: Shamit,
    name: "Mr. Shamit Chokshi, CFA",
    designation: "Head – Offshore Fund Investments, International Business",
    summary: `Shamit joined the AMC in February 2016. He brings a rich and diverse industry experience across investments and research, products, asset raising, institutional client services and global strategic partnerships. His core competency lies in developing investment themes, managing equity and fixed income investments tailored for foreign investors and promoting the AMC’s investment capabilities to global institutional clients.
    He has set up and managed several India and developed market funds globally across asset classes and showcased his expertise in asset raising and partnerships across markets.   
    Prior to joining the AMC, Shamit was associated with Reliance Nippon Life Asset Management in Mumbai and Nippon Life Insurance group / Nissay in Tokyo where he led offshore investing and was instrumental in setting up the international funds franchise for the joint venture. Earlier he gained relevant equity research and funds experience with large financial firms in New York, Boston and Mumbai.    
    Shamit pursued a Masters of Business Administration (Finance and Strategy) from the Carroll Graduate School of Management at Boston College, USA. He also holds a Bachelor of Commerce (Accounting) and Masters of Commerce (Banking & Finance) degree from the University of Mumbai, India. Shamit has completed the CFA program and is the holder of the right to use the CFA designation. He is an active member of the Mumbai CFA society.`,
  },
  
  {
    image: Rakesh,
    name: "Mr. Rakesh Shetty",
    designation: "Head Compliance",
    summary: `Rakesh joined the AMC in August 2011.In his current role. Rakesh is responsible for managing compliance & Secretarial function. Rakesh has over 17 years of post-qualification experience in the field of compliance, legal and secretarial matters. Prior to his association with the AMC, he has worked with Travelex India, Axis Bank and Paternoster India.
    By qualification, Rakesh is an A.C.S, Bachelor of Law and a graduate in Commerce.
    `,
  },
  
];

const Team = ({ hamOpen }) => {
  return (
    <motion.div
      animate={{ scale: hamOpen ? 0.995 : 1 }}
      transition={{ duration: 0.3 }}
      initial={false}
      className="page-container"
    >
      <Head>
        <title>Meet Our Team | ICICI Asset Management</title>
        <meta
          name="description"
          content="Know more about the people behind ICICI Asset Management. Click here to know more about the team!"
        />
        <meta name="keywords" content="ICICI, banking, Investment" />
        <link rel="canonical" href="https://www.iciciaminternatonal.com/team" />
      </Head>
      <div className="banner-static">
        <img src={TeamBanner} alt="TeamBanner" className="teamBnr"/>
        <div className="banner-static-content">
          <FadeInWhenVisible delay={0.1}>
            <Title titleText="Our Team" />
          </FadeInWhenVisible>
        </div>
      </div>
      <div className="section-padding">
        <div className="container team-container">
          <FadeInWhenVisible>
            <div className="row team-scale justify-center">
              {data.map((item) => (
                <div className="col-xl-3 col-lg-4 col-md-4">
                  <TeamCard
                    image={item.image}
                    name={item.name}
                    designation={item.designation}
                    summary={item.summary}
                    className="team-card"
                  />
                </div>
              ))}
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </motion.div>
  );
};

export default Team;
