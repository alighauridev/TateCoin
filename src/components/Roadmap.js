import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../scss/roadmap.scss";
import { roadmap } from "../assests/data";
import icon from "../assests/logo.png";

const Roadmap = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
    });
    // how to check page distance from top
  }, []);

  return (
    <>
      <section id="roadmap" className="roadmap">
        <div className="heading" data-aos="fade-up">
          <h1> Roadmap</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </p>
        </div>
        <div className="container">
          <div className="roadmap__grid">
            {roadmap.map((item, i) => {
              return (
                <>
                  <div
                    className={`item-wrapper ${
                      i % 2 == 0 ? "item-left" : "item-right"
                    }`}
                    data-aos="fade-up"
                  >
                    <div className={`item ${i % 2 == 0 ? "left" : "right"}`}>
                      <div className="icon">
                        <img src={icon} alt="" />
                      </div>
                      <h2>Phase {item.id}</h2>
                      <ul>
                        {item.points.map((item, i) => {
                          return <li key={i}>{item}</li>;
                        })}
                      </ul>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Roadmap;
