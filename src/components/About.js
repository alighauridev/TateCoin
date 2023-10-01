import React from "react";
import heading from "../assests/about.h.png";
import about from "../assests/about.webp";
import "../scss/about.scss";
const About = () => {
  return (
    <>
      <section id="about">
        <div className="container">
          <div className="heading">
            <h1>Unlock the Power of Wall Street</h1>
            <div className="para">
              <p>
                We are an independent team, dedicated to helping you navigate the complex world of finance and investments. Join our community of like-minded individuals who are ready to conquer Wall Street and achieve financial success.
              </p>
            </div>
          </div>
          <div className="content">
            <div className="box-left">
              <p>
                <span>1</span>/<span>1</span>
              </p>
              <p>
                <span>LP &nbsp;</span>
                Locked
              </p>
              <p>
                <span></span>100<span>M</span>
              </p>
              <p>
                Token Supply
              </p>
            </div>
            <div className="img">
              <img src={about} alt="" />
            </div>
            <div className="box-right">
              <p>
                <span>Contract </span>
                Renounced
              </p>
              <p>
                <span>like a</span>
                <b style={{ fontWeight: '100' }}>Pro</b>
              </p>
            </div>
          </div>
          <div className="about-bottom">
            <div className="bottom-heading">
              <span>
                <b> $</b>
                WALLST
              </span>
              <p>Your Gateway to Financial Freedom</p>
              <div className="btns">
                <a href="http://netflix.com" >
                  Stay Informed
                </a>
                <a
                  href="https://app.uniswap.org/#/swap?outputCurrency=0xdd6df7c7b52d8154a45c4781967e1dcd61fac6ef"

                >
                  Invest Now
                </a>
              </div>
            </div>
            <div className="content-address">
              <h3 style={{
                color: '#fb58fb',
                fontFamily: "\'light-font-2\'"
              }}>$WALLST Smart Contract Address:</h3>
              <div className="address">
                <h4>0x00000000000000000000000000000</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
