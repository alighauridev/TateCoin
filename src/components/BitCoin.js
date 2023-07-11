import React from "react";
import "../scss/bit.scss";
import img1 from "../assests/icon-user-professional.png";
const BitCoin = () => {
  return (
    <>
      <section id="bit">
        <div className="container">
          <div className="heading" data-aos="fade-up">
            <h1>Why BitCoin?</h1>
            <h2>SECURE TRANSACTIONS PLATFORM</h2>
          </div>
          <div className="content">
            <div className="box-wrapper" data-aos="fade-up">
              <div className="box">
                <img src={img1} alt="" />
                <h2>Easy to Transact</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut
                </p>
              </div>
            </div>
            <div className="box-wrapper" data-aos="fade-up">
              <div className="box">
                <img src={img1} alt="" />
                <h2>Easy to Transact</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut
                </p>
              </div>
            </div>
            <div className="box-wrapper" data-aos="fade-up">
              <div className="box">
                <img src={img1} alt="" />
                <h2>Easy to Transact</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut
                </p>
              </div>
            </div>
            <div className="box-wrapper" data-aos="fade-up">
              <div className="box">
                <img src={img1} alt="" />
                <h2>Easy to Transact</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BitCoin;
