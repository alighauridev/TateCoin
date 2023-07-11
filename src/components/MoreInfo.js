import React, { useRef } from "react";
import "../scss/moreinfo.scss";
import img1 from "../assests/fair-icon.png";
import img2 from "../assests/secure-icon.png";
import img3 from "../assests/open-icon.png";
import ReactPlayer from "react-player";
import VIDEO_PATH from "../assests/bg/file.mp4";
const MoreInfo = () => {
  const playerRef = useRef(null);
  return (
    <>
      <section id="section-2">
        <div className="container">
          <div className="heading" data-aos="fade-up">
            <p>THe choice is yours.</p>
            <h1>Still want to be a slave ?</h1>

            <p>Here is our G roadmap...</p>
          </div>
          <div className="content">
            <div className="box-wrapper" data-aos="fade-up">
              <ReactPlayer ref={playerRef} url={VIDEO_PATH} controls={true} />
            </div>
            <div className="box-wrapper" data-aos="fade-up">
              <ReactPlayer ref={playerRef} url={VIDEO_PATH} controls={true} />
            </div>
            <div className="box-wrapper" data-aos="fade-up">
              <ReactPlayer ref={playerRef} url={VIDEO_PATH} controls={true} />
            </div>
            <div className="box-wrapper" data-aos="fade-up">
              <ReactPlayer ref={playerRef} url={VIDEO_PATH} controls={true} />
            </div>
          </div>

          <div className="tokennomics">
            <h1>... and G Tokenomics</h1>
            <div className="tokens">
              <div className="first">
                <div className="box">
                  <p style={{flexDirection:'column',display:'flex',alignItems:'start',justifyContent:'center',rowGap:'10px'}}>
                    <span>333,000,000,000,000</span>
                    Token supply
                  </p>
                </div>
                <div className="box">
                  <p>
                    <span>zero</span>taxes
                  </p>
                  <p>
                    <span>zero </span>bulLshit
                  </p>
                </div>
              </div>
              <div className="box">
                <p>
                  <span>87%</span>supply
                </p>
                <p>
                  <span>10% </span>marketing
                </p>
                <p>
                  <span>3%</span>airdrop
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MoreInfo;
