import React from "react";
import mobile from "../assests/token.png";
import { MdKeyboardArrowRight, MdKeyboardArrowUp } from "react-icons/md";
import "../scss/bittwo.scss";
const BitCoinTwo = () => {
  return (
    <>
      <section id="bittwo">
        <div className="container">
          <div className="content">
            <div className="heading" data-aos="fade-up">
              {/* <h1>Get to know the popular brands</h1> */}
              <h2>Tokenomics</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,
              </p>
            </div>
            <div className="grid__">
              <div className="box">
                <div className="box-content">
                  <h4>Network</h4>
                  <p>Binance Smart Chain</p>
                </div>
              </div>
              <div className="box">
                <div className="box-content">
                  <h4>Total Supply</h4>
                  <p>2,200,000,000</p>
                </div>
              </div>
              <div className="box">
                <div className="box-content">
                  <h4>Initial Market Cap BA</h4>
                  <p></p>
                </div>
              </div>
            </div>
            <div className="btns" data-aos="fade-up">
              <a href="#">Buy BitCon</a>
              <div className="des">
                <p>New to Bitcoin ?</p>
                <p>
                  Learn more on our
                  <strong>Learning Portal</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="img" data-aos="fade-up">
            <img src={mobile} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default BitCoinTwo;
