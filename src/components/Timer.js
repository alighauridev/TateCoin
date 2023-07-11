import React, { useState, useEffect } from "react";
import "../scss/timer.scss";

const Timer = () => {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  useEffect(() => {
    const interval = setInterval(() => {
      const countDownDate = new Date("2023-06-30T00:00:00Z").getTime();
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance > 0) {
        const remainingDays = Math.floor(distance / (1000 * 60 * 60 * 24));
        const remainingHours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const remainingMinutes = Math.floor(
          (distance % (1000 * 60 * 60)) / (1000 * 60)
        );
        const remainingSeconds = Math.floor((distance % (1000 * 60)) / 1000);

        setDays(formatTime(remainingDays));
        setHours(formatTime(remainingHours));
        setMinutes(formatTime(remainingMinutes));
        setSeconds(formatTime(remainingSeconds));
      } else {
        clearInterval(interval);
        setDays("00");
        setHours("00");
        setMinutes("00");
        setSeconds("00");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time.toString();
  };

  return (
    <>
      <section id="timer">
        <div className="container">
          <div className="heading" data-aos="fade-up">
            <h1>TIME UNTIL ICO CLOSE</h1>
            <p>
              Minimum purchase is 50 Coins tokens. Get a bonus from 5% to 25% on
              every token purchase
            </p>
          </div>
          <div className="content" data-aos="fade-up">
            <div className="time-boxes">
              <div className="box" data-aos="fade-up">
                <h1>{days}</h1>
                <span>Days</span>
              </div>
              <div className="box" data-aos="fade-up">
                <h1>{hours}</h1>
                <span>Hours</span>
              </div>
              <div className="box" data-aos="fade-up">
                <h1>{minutes}</h1>
                <span>Minutes</span>
              </div>
              <div className="box" data-aos="fade-up">
                <h1>{seconds}</h1>
                <span>Seconds</span>
              </div>
            </div>
            <div className="bottom">
              <div className="bottom-heading">
                <span>TOTAL TOKENS BOUGHT</span>
                <h1>91, 258, 141</h1>
                <p>1 COIN = 0,3 USD</p>
              </div>
              <a target="blank_" href="https://64a4aac909ba2a30a6b02891--dainty-lolly-9ed3ff.netlify.app/" className="btn">Check Presale</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Timer;
