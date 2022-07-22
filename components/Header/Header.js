import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import Menu from "../Menu/Menu";

import Logo from "../../assets/images/logo.svg";

const Header = ({ getOpenState }) => {
  const [open, setOpen] = useState(false);
  const [headerBg, setHeaderBg] = useState("");

  useEffect(() => {
    getOpenState(open);
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 1) {
        setHeaderBg("white");
      } else if (window.scrollY === 0) {
        setHeaderBg("");
      }
    });
  }, [open, getOpenState]);

  const handleMenuOpen = () => {
    setOpen(!open);
  };

  const menuItems = [

    {
      name: "Home",
      link: "/",
    },

    {
      name: "About Us",
      link: "/about-us",
    },
    {
      name: "Investment Expertise",
      link: "/investment-expertise",
    },
    {
      name: "Investment Strategies",
      link: "/funds-investment-strategies",
    },
    {
      name: "Team",
      link: "/team",
    },
    
    {
      name: "Downloads",
      link: "/downloads",
    },
    // {
    //   name: "News & Insights",
    //   link: "/News",
    // },
    {
      name: "Contact us",
      link: "/contact-us",
    },
  ];

  return (
    <div className="header-container">
      <div className={`header-content with-bg ${open ? "" : headerBg}`}>
        <motion.div
          animate={{ scale: open ? 0.9 : 1, x: open ? -10 : 0 }}
          transition={{ duration: 0.2 }}
          className="ham-menu-icon"
          onClick={handleMenuOpen}
        >
          <div id="hamburger" className={open ? "active" : null}>
            <span></span>
          </div>
        </motion.div>

        <Link href="/">
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
        </Link>
        <div>
          <a href="mailto:globalenquiry@icicipruamc.com" className="header-icon">
            <svg
              width="26"
              height="20"
              viewBox="0 0 26 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.5 0H0.5125L0.5 20H25.5V0ZM23 17.5H3V5L13 11.25L23 5V17.5ZM13 8.75L3 2.5H23L13 8.75Z"
                fill={headerBg === "white" ? "#c9b16d" : "#c9b16d"}
              />
            </svg>
          </a>
        </div>
      </div>
      <Menu open={open} setOpen={setOpen} menuList={menuItems} />
      <div
        className={`${open ? "overlay" : null}`}
        onClick={handleMenuOpen}
      ></div>
    </div>
  );
};

export default Header;
