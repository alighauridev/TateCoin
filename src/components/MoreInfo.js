import React, { useRef } from "react";
import "../scss/moreinfo.scss";
import img1 from "../assests/fair-icon.png";
import img2 from "../assests/secure-icon.png";
import img3 from "../assests/open-icon.png";
import thumb1 from "../assests/open-icon.png";
import ReactPlayer from "react-player";
import vid1 from "../assests/videos/TATE.mp4"
import vid2 from "../assests/videos/TATE_2.mp4"
import vid3 from "../assests/videos/TATE_3_2.mp4"
import vid4 from "../assests/videos/TATE_4.mp4"
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
              <ReactPlayer ref={playerRef} url={vid1} poster controls={true} config={{
                file: {
                  attributes: {
                    poster: "https://i.gyazo.com/1f7f9732568ce05fa1f20380d66fe09f.png" // Specify the corresponding thumbnail for this video
                  }
                },
                thumbnails: [
                  {
                    url: "https://i.gyazo.com/1f7f9732568ce05fa1f20380d66fe09f.png", // Thumbnail for the first video
                    width: 320,
                    height: 180
                  },

                ]
              }} />
            </div>
            <div className="box-wrapper" data-aos="fade-up">
              <ReactPlayer ref={playerRef} url={vid2} poster controls={true} config={{
                file: {
                  attributes: {
                    poster: "https://i.gyazo.com/94f653a6084e0f4642818bbb4fe951c6.png" // Specify the corresponding thumbnail for this video
                  }
                },
                thumbnails: [
                  {
                    url: "https://i.gyazo.com/94f653a6084e0f4642818bbb4fe951c6.png", // Thumbnail for the first video
                    width: 320,
                    height: 180
                  },

                ]
              }} />
            </div>
            <div className="box-wrapper" data-aos="fade-up">
              <ReactPlayer ref={playerRef} url={vid3} poster controls={true} config={{
                file: {
                  attributes: {
                    poster: "https://i.gyazo.com/b51d19d8e205c7ba30891fe392e08c0a.png" // Specify the corresponding thumbnail for this video
                  }
                },
                thumbnails: [
                  {
                    url: "https://i.gyazo.com/b51d19d8e205c7ba30891fe392e08c0a.png", // Thumbnail for the first video
                    width: 320,
                    height: 280
                  },

                ]
              }} />
            </div>
            <div className="box-wrapper" data-aos="fade-up">
              <ReactPlayer ref={playerRef} url={vid4} poster controls={true} config={{
                file: {
                  attributes: {
                    poster: "https://i.gyazo.com/61f13b32dea93d5ef12d6ddb0c8ec383.png" // Specify the corresponding thumbnail for this video
                  }
                },
                thumbnails: [
                  {
                    url: "https://i.gyazo.com/61f13b32dea93d5ef12d6ddb0c8ec383.png", // Thumbnail for the first video
                    width: 320,
                    height: 180
                  },

                ]
              }} />
            </div>
          </div>

          <div className="tokennomics">
            <h1>... and G Tokenomics</h1>
            <div className="tokens">
              <div className="first">
                <div className="box">
                  <p style={{ flexDirection: 'column', display: 'flex', alignItems: 'start', justifyContent: 'center', rowGap: '10px' }}>
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
