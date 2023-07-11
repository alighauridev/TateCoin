import React from "react";
import about from "../assests/about.png";

const AboutTwo = () => {
  return (
    <>
      <section id="about">
        <div className="container">
          <div className="content">
            <div data-aos="fade-up" className="heading">
              {/* <h1>Innovative Payment Network</h1> */}
              <h2>USE-CASE OF IGD DIGITAL CASH</h2>
            </div>
            <p data-aos="fade-up">
              IGD DIGITAL CASH will be power by IGD EXCHANGE aiming to be one of the largest crypto exchanges in the world. IGD DIGITAL CASH will be primarily facilitating trades on IGD EXCHANGE platform.

            </p>
            <p data-aos="fade-up">
              IGD DIGITAL CASH will be used for trading, payment processing or even booking travel arrangements. It can also be traded or exchanged for other forms of cryptocurrency, such as Ethereum or Bitcoin.

            </p>
            <a data-aos="fade-up" href="#">Join Community!</a>
          </div>
          <div className="img" data-aos="fade-up">
            <img src={about} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutTwo;
