import React, { useRef, useState } from "react";
import "../scss/moreinfo.scss";
import img1 from "../assests/memes/one.gif"
import img2 from "../assests/memes/two.gif"
import img3 from "../assests/memes/three.gif"
import img4 from "../assests/memes/four.gif"

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
            <p>Your Financial Freedom Awaits.</p>
            <h1>Ready to Conquer Wall Street?</h1>
            {/* <p>Explore Our Roadmap...</p> */}
          </div>
          <div className="content">
            <div className="box-wrapper" data-aos="fade-up">
              <img src={img1} alt="" style={{ minHeight: '300px' }} />

            </div>
            <div className="box-wrapper" data-aos="fade-up">
              <img src={img2} alt="" style={{ minHeight: '300px' }} />

            </div>
            <div className="box-wrapper" data-aos="fade-up">
              <img src={img3} alt="" style={{ minHeight: '300px' }} />

            </div>
            <div className="box-wrapper" data-aos="fade-up">
              <img src={img4} alt="" style={{ minHeight: '300px' }} />

            </div>

          </div>


        </div>
      </section>
    </>
  );
};

export default MoreInfo;
