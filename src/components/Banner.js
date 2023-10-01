import React, { useEffect, useRef, useState } from "react";
import { Parallax } from "react-parallax";
import "../scss/banner.scss";

import { MdKeyboardArrowRight, MdVolumeMute, MdVolumeUp } from "react-icons/md";
import ReactPlayer from "react-player";
import videoUrl from "../assests/bg/file.mp4";

const Banner = () => {
  const vidRef = useRef();
  const imageRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [displayModal, setDIsplayModal] = useState(true)
  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;

        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const scrollPercentage =
            (window.innerHeight - rect.top) / window.innerHeight;
          const rotationAngle = -90 + scrollPercentage * 90;

          imageRef.current.style.transform = `rotateY(${rotationAngle}deg)`;
          imageRef.current.style.transition = "transform 0.5s ease-out";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (vidRef.current) {
      vidRef.current.muted = muted;
      vidRef.current.play();
    }
  }, [muted]);

  const handleToggleMute = () => {
    setMuted(!muted);
  };

  return (
    <>
      <section id="banner">
        <div className="container__">
          <div className="video">
            <video src={videoUrl} ref={vidRef} autoPlay loop muted={muted} />
            <p
              style={{
                fontSize: "24px",
                color: "white",
                textAlign: "center",
                width: "100%",
                fontWeight: "100",
                lineHeight: "40px",
                display: "flex",
                justifyContent: "center",
                marginTop: "50px",
                alignItems: "center",
                gap: "10px",
              }}
            >
              First of all, start the music :
              <button
                className="mute-btn"
                style={{
                  width: "50px",
                  height: "50px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "100px",
                  border: "0",
                  background: "#fb58fb",
                  cursor: "pointer",
                  marginTop: "-10px",
                }}
                onClick={handleToggleMute}
              >
                {muted ? <MdVolumeMute /> : <MdVolumeUp />}
              </button>
            </p>
          </div>
        </div>
      </section>
      {
        displayModal && <div className="modal" id="myModal">
          <div class="modal-content">
            <p>Continue the website...</p>
            <div>
              <button id="agree-btn" onClick={() => {
                setMuted(false)
                setDIsplayModal(false)
              }}>With Music</button>
              <button id="agree-btn" onClick={() => {
                setMuted(true)
                setDIsplayModal(false)
              }}>No Music</button>
            </div>
          </div>
        </div>
      }

    </>
  );
};

export default Banner;
