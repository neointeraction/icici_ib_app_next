import React, { useState,useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const CookieOverlay = ({handleSessionCookie}) => {
  const [show, setShow] = useState();
  
  useEffect(() => {
 
    var cookieView = sessionStorage.getItem("cookieView");
    console.log(cookieView);
    if (cookieView == null) {
     console.log(cookieView, "cook"); //null
     cookieView = true;
     console.log(cookieView, "cookt"); //true
     setShow(true);
   }   
   else if(cookieView == true) {
     console.log(cookieView, "cook");
     show = true; //visited = true also works
   }
   else if(cookieView = false){
     console.log(cookieView, "cook");
      show = false;
     setShow(false);
   }


  }, []);
  const handleCookieClose = () => {
    setShow(false);
    sessionStorage.setItem("cookieView", false);
  };
  return (
    <motion.div
      animate={{ y: show ? [500, 0] : [0, 500] }}
      transition={{ duration: 1 }}
      className= { show ? "cookie-container" : "cookie-disappear" }
    >
      <div className="cookie-content">
        <h1 className="cookie-title">
          ICICI Global Investments uses cookies to enhance your experience
        </h1>
        <p className="cookie-text">
          We use cookies to collect data to improve your experience on our
          site.By using our website, you agree to the collection of data as
          described in our{" "}
          <Link
            href="/Privacy "        
            className="link-text"
          >
            Privacy Policy
          </Link>
        </p>
      </div>
      <button className="custom-button cookie-btn" onClick={handleCookieClose}>
        OK
      </button>
    </motion.div>
  );
};

export default CookieOverlay;
