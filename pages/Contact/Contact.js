import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";

import FadeInWhenVisible from "../../hooks/FadeInWhenVisible";
import Title from "../../components/Title/Title";

import ContactBanner from "../../assets/images/contact-banner.jpg";

const Contact = ({ hamOpen }) => {
  return (
    <motion.div
      animate={{ scale: hamOpen ? 0.995 : 1 }}
      transition={{ duration: 0.3 }}
      initial={false}
      className="page-container"
    >
      <Head>
        <title>ICICI | Contact Us</title>
        <meta
          name="description"
          content="ICICI Lorem ipsum dolor sit amet, consectetur adipiscing elit.."
        />
        <meta name="keywords" content="ICICI, banking, Investment" />
      </Head>
      <div className="banner-static">
        <img src={ContactBanner} alt="ContactBanner" />
        <div className="banner-static-content">
          <FadeInWhenVisible delay={0.1}>
            <Title titleText="Contact Us" />
          </FadeInWhenVisible>
        </div>
      </div>
      <div className="section-padding text-center">
        <div className="container">
          <FadeInWhenVisible>
            <h4 className="section-subtitle">Get in touch with us</h4>
            <div className="contact-detail-block">
              <p className="cd-name">
                ICICI Prudential Asset Management Company Limited (The AMC)
              </p>
              <p className="cd-address">
                One BKC A-Wing, 13th Floor, Bandra Kurla Complex, Mumbai - 400
                051
              </p>
              <ul className="contact-info">
                <li>
                  <span>Phone:</span> +91 22 2652 5000
                </li>
                <li>
                  <span>Fax:</span> +91 22 2652 8100
                </li>
                <li>
                  <span>Email:</span> globalenquiry@icicipruamc.com
                </li>
                <li>
                  <span>For customer complaints:</span> kba.fixedincomefund@icicipruamc.com
                </li>
              </ul>
            </div>
          </FadeInWhenVisible>
          {/* <FadeInWhenVisible>
            <div className="form-section">
              <form action="/action_page.php">
                <div className="form-block">
                  <div className="input-block">
                    <label for="fname">
                      Full name <span className="star-imprt">*</span>
                    </label>
                    <input
                      type="text"
                      className="input-custom "
                      id="fname"
                      name="fname"
                      pattern="[a-zA-Z][a-zA-Z ]{2,}"
                      required
                    />
                    <p className="error-text">Enter a valid name</p>
                  </div>
                  <div className="input-block error">
                    <label for="email-form">
                      Email Address<span className="star-imprt">*</span>
                    </label>
                    <input
                      type="email"
                      className="input-custom"
                      id="email-form"
                      name="email"
                      required
                    />
                    <p className="error-text">Enter a valid email address</p>
                  </div>
                  <div className="input-block ">
                    <label for="contactNum">Contact Number</label>
                    <div className="input-block ">
                      <div className="input-with-subtext">
                        <input
                          type="tel"
                          className="input-custom"
                          id="contactNum"
                          name="contact"
                          pattern="[6789][0-9]{9}"
                          required
                        />
                        
                      </div>

                     
                    </div>
                  </div>
                 

                  <div className="input-block">
                    <label for="query">
                      Queries<span className="star-imprt">*</span>
                    </label>
                    <textarea
                      className="input-custom"
                      id="query"
                      name="query"
                      required
                      rows="4"
                    ></textarea>
                  </div>
                  <button className="custom-button sbmt-btn w-100">SUBMIT</button>
                </div>
              </form>
            </div>
          </FadeInWhenVisible> */}

          <div className="map-embed">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3771.0691286915053!2d72.864319!3d19.060698!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8c2a70ef19d%3A0xfc10f390be68e54!2sOne%20Bkc!5e0!3m2!1sen!2sin!4v1645000821492!5m2!1sen!2sin" allowfullscreen="" loading="lazy"></iframe>
          </div>
          
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
