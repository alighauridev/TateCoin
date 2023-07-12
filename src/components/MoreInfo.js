import React, { useRef, useState } from "react";
import "../scss/moreinfo.scss";
import img1 from "../assests/fair-icon.png";
import img2 from "../assests/secure-icon.png";
import img3 from "../assests/open-icon.png";
import thumb1 from "../assests/open-icon.png";
import ReactPlayer from "react-player";
import vid1 from "../assests/videos/TATE.mp4";
import vid2 from "../assests/videos/TATE_2.mp4";
import vid3 from "../assests/videos/TATE_3_2.mp4";
import vid4 from "../assests/videos/TATE_4.mp4";
import VIDEO_PATH from "../assests/bg/file.mp4";

const MoreInfo = () => {
  const [currentVideo, setCurrentVideo] = useState(null);
  const playerRef = useRef(null);

  const playVideo = (video) => {
    setCurrentVideo(video);
  };

  return (
    <>
      <section id="section-2">
        <div className="container">
          <div className="heading" data-aos="fade-up">
            <p>The choice is yours.</p>
            <h1>Still want to be a slave?</h1>
            <p>Here is our G roadmap...</p>
          </div>
          <div className="content">
            <div className="box-wrapper" data-aos="fade-up">
              <div className="video-wrapper">
                <div
                  className={`poster ${currentVideo === vid1 ? "hide" : ""}`}
                  onClick={() => playVideo(vid1)}
                >
                  <img
                    src="https://i.gyazo.com/1f7f9732568ce05fa1f20380d66fe09f.png"
                    alt="Thumbnail"
                  />
                  <div className="play-button"></div>
                </div>
                {currentVideo === vid1 && (
                  <ReactPlayer
                    ref={playerRef}
                    url={vid1}
                    playing={true}
                    controls={true}
                    width="100%"
                    height="100%"
                    onEnded={() => setCurrentVideo(null)}
                  />
                )}
              </div>
            </div>
            <div className="box-wrapper" data-aos="fade-up">
              <div className="video-wrapper">
                <div
                  className={`poster ${currentVideo === vid2 ? "hide" : ""}`}
                  onClick={() => playVideo(vid2)}
                >
                  <img
                    src="https://i.gyazo.com/94f653a6084e0f4642818bbb4fe951c6.png"
                    alt="Thumbnail"
                  />
                  <div className="play-button"></div>
                </div>
                {currentVideo === vid2 && (
                  <ReactPlayer
                    ref={playerRef}
                    url={vid2}
                    playing={true}
                    controls={true}
                    width="100%"
                    height="100%"
                    onEnded={() => setCurrentVideo(null)}
                  />
                )}
              </div>
            </div>
            <div className="box-wrapper" data-aos="fade-up">
              <div className="video-wrapper">
                <div
                  className={`poster ${currentVideo === vid3 ? "hide" : ""}`}
                  onClick={() => playVideo(vid3)}
                >
                  <img
                    src="https://i.gyazo.com/b51d19d8e205c7ba30891fe392e08c0a.png"
                    alt="Thumbnail"
                  />
                  <div className="play-button"></div>
                </div>
                {currentVideo === vid3 && (
                  <ReactPlayer
                    ref={playerRef}
                    url={vid3}
                    playing={true}
                    controls={true}
                    width="100%"
                    height="100%"
                    onEnded={() => setCurrentVideo(null)}
                  />
                )}
              </div>
            </div>
            <div className="box-wrapper" data-aos="fade-up">
              <div className="video-wrapper">
                <div
                  className={`poster ${currentVideo === vid4 ? "hide" : ""}`}
                  onClick={() => playVideo(vid4)}
                >
                  <img
                    src="https://i.gyazo.com/61f13b32dea93d5ef12d6ddb0c8ec383.png"
                    alt="Thumbnail"
                  />
                  <div className="play-button"></div>
                </div>
                {currentVideo === vid4 && (
                  <ReactPlayer
                    ref={playerRef}
                    url={vid4}
                    playing={true}
                    controls={true}
                    width="100%"
                    height="100%"
                    onEnded={() => setCurrentVideo(null)}
                  />
                )}
              </div>
            </div>
          </div>

          <div className="tokennomics">
            <h1>... and G Tokenomics</h1>
            <div className="tokens">
              <div className="first">
                <div className="box">
                  <p
                    style={{
                      flexDirection: "column",
                      display: "flex",
                      alignItems: "start",
                      justifyContent: "center",
                      rowGap: "10px"
                    }}
                  >
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
