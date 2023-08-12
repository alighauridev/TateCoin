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
            <h1>Now escape the matrix</h1>
            <div className="para">
              <p>
                We are an independent team,{" "}
                <span>NOT Affiliated with the TATEXbrothers</span>
                building a community of like-minded individuals who are ready to
                break free from the modern prison and achieve financial
                independence.
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
            </div>
            <div className="img">
              <img src={about} alt="" />
            </div>
            <div className="box-right">
              <p>
                <span>contract </span>
                renounced
              </p>
              <p>
                <span>like a</span>
                <b>G</b>
              </p>
            </div>
          </div>
          <div className="about-bottom">
            <div className="bottom-heading">
              <span>
                <b> $</b>
                TATEX
              </span>
              <p>the portal has opened</p>
              <div className="btns">
                <a href="http://netflix.com" style={{ background: "rgb(0, 36, 255)" }}>
                  Stay poor
                </a>
                <a
                  href="https://app.uniswap.org/#/swap?outputCurrency=0xdd6df7c7b52d8154a45c4781967e1dcd61fac6ef"
                  style={{
                    background: "#FF0000",
                  }}
                >
                  Buy now
                </a>
              </div>
            </div>
            <div className="content-address">
              <h3 style={{
                color: '#00ec45',
                fontFamily: "\'light-font-2\'"
              }}>$TATEXX Smart contract address :</h3>
              <div className="address">
                <h4>0xdd6DF7C7B52D8154A45C4781967E1dCD61Fac6Ef</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
