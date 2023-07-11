import React, { useState } from "react";
import { Link } from "react-router-dom";
import { nav } from "../assests/data";
import "../scss/navigation.scss";
import { FaDiscord } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { MdKeyboardArrowUp } from "react-icons/md";
import logo1 from "../assests/logo.main.webp";

import { LinkOff, LinkOffOutlined, LinkRounded } from "@material-ui/icons";
const Navigation = () => {
  const [navToggler, setNavToggler] = useState(false);
  const [navColor, setNavColor] = useState(false);
  const [scroll, setScroll] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      setScroll(true);
    } else {
      setScroll(false);
    }
    if (window.scrollY >= 70) {
      setNavColor(true);
    } else {
      setNavColor(false);
      setNavToggler(false);
    }
  });
  function barBtn() {
    setNavToggler(!navToggler);
    setNavColor(!navColor);
  }
  return (
    <>
      <header className={navToggler ? "nav__active" : ""}>
        <div className="outer">
          <div className="container">
            <div className="nav__grid">
              <div className="logo">
                <a href="#">
                  <img src={logo1} alt="" />
                  <span>
                    <b> $</b>
                    TATE
                  </span>
                </a>
              </div>

              <nav style={navToggler ? { transform: "translateX(0px)" } : {}}>
                <ul className={navToggler ? "ul__active" : ""}>
                  {nav.map((ite, ind) => {
                    return (
                      <li key={ind}>
                        <a
                          style={navColor ? { textShadow: "none" } : {}}
                          href={ite.path}
                        >
                          {ite.name}
                        </a>
                      </li>
                    );
                  })}
                  <li className="mobile-btn">
                    <a
                      target="blank_"
                      href="https://64a4aac909ba2a30a6b02891--dainty-lolly-9ed3ff.netlify.app/"
                      className="btn"
                    >
                      Buy Now
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="nav__btns">
                <a
                  target="blank_"
                  href="https://64a4aac909ba2a30a6b02891--dainty-lolly-9ed3ff.netlify.app/"
                  className="btn"
                >
                  Buy Now
                </a>
                <i onClick={() => barBtn()} className="bars">
                  <img
                    src={
                      !navToggler ? "/images/bb (1).png" : "/images/bb (2).png"
                    }
                    alt=""
                    style={{
                      width: "40px",
                      height: "auto",
                      // filter: "invert(1)",
                      cursor: "pointer",
                      transitions: "all 0.5s ease-in-out",
                    }}
                  />
                </i>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        onClick={() => window.scroll(0, 0)}
        className="auto_scroll"
        style={scroll ? { transform: "scale(1)" } : {}}
      >
        <i>
          <MdKeyboardArrowUp />
        </i>
      </div>
      <div
        className="bac-color"
        style={navToggler ? { display: "block" } : {display:"none"}}
        onClick={() => {
          setNavToggler(false);
        }}
      ></div>
    </>
  );
};

export default Navigation;
