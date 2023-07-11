import React from "react";
import i1 from "../assests/brand1.png";
import i2 from "../assests/brand2.png";
import i3 from "../assests/brand3.png";
import i4 from "../assests/brand4.png";
import i5 from "../assests/brand5.png";
import i6 from "../assests/brand6.png";
import "../scss/parteners.scss";
const Parteners = () => {
  return (
    <>
      <section id="parteners">
        <div className="container">
          <div className="heading" data-aos="fade-up">
            <h2> Our Partners</h2>
          </div>
          <div className="content">
            <img src={'https://golddinar.co.uk/img/Digital-Journal-Logosm.png'} alt="" data-aos="fade-up" />
            <img src={"https://golddinar.co.uk/img/media-11.png"} alt="" data-aos="fade-up" />
            <img src={"https://golddinar.co.uk/img/media-18.png"} alt="" data-aos="fade-up" />
            <img src={"https://golddinar.co.uk/img/media-12.png"} alt="" data-aos="fade-up" />
            <img style={{ height: '40px' }} src={"https://golddinar.co.uk/img/media-15.png"} alt="" data-aos="fade-up" />
            <img style={{ height: '40px' }} src={"https://golddinar.co.uk/img/media-2.png"} alt="" data-aos="fade-up" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Parteners;
