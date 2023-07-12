import React, { useEffect, useRef, useState } from "react";
import { Parallax } from "react-parallax";
import "../scss/banner.scss";
import img1 from "../assests/bg/24783.jpg";
import heading from "../assests/heading.webp";
import logo from "../assests/logo.png";
import { MdKeyboardArrowRight, MdVolumeMute, MdVolumeUp } from "react-icons/md";
import ReactPlayer from "react-player";
import videoUrl from "../assests/bg/file.mp4";

const Banner = () => {
  const vidRef = useRef();
  const imageRef = useRef(null);
  const [muted, setMuted] = useState(true);

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
    vidRef.current.muted = muted;
  }, [muted]);

  const handleToggleMute = () => {
    setMuted(!muted);
  };

  return (
    <>
      <section id="banner">
        <div className="container__">
          <div className="video">
            <video src={videoUrl} ref={vidRef} autoPlay loop />
            <p style={{
              fontSize: '24px',
              color: 'white',
              textAlign: 'center',
              fontFamily: '"light-font-2"',
              width: '100%',
              fontWeight: '900',
              lineHeight: '40px', display: 'flex',
              justifyContent: 'center', marginTop: "50px",
              alignItems: 'center'
            }}>First of all, start the music :      <button className="mute-btn" style={{
              width: '50px',
              height: '50px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '100px',
              border: '0',
              background: 'red',
              cursor: 'pointer',
              marginTop: '-10px'
            }} onClick={handleToggleMute} >
                {muted ? <MdVolumeMute /> : <MdVolumeUp />}
              </button></p>

          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
