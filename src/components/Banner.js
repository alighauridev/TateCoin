import React, { useEffect, useRef } from "react";
import { Parallax } from "react-parallax";
import "../scss/banner.scss";
import img1 from "../assests/bg/24783.jpg";
import heading from "../assests/heading.webp";
import logo from "../assests/logo.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import ReactPlayer from "react-player";
import videoUrl from "../assests/bg/file.mp4";
const Banner = () => {
  const vidRef = useRef();
  const imageRef = useRef(null);

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
    vidRef.current.play();
  }, []);

  return (
    <>
      <section id="banner">
        <div className="container__">
          <div className="video">
            <video src={videoUrl} ref={vidRef} muted autoPlay loop />
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
