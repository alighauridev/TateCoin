import React from "react";
import img1 from "../assests/Dyer-min.png";
import img2 from "../assests/Moh-min.png";
import img3 from "../assests/kama-min.png";
import img4 from "../assests/snipe-min.png";
import img5 from "../assests/Mike-min.png";
import img6 from "../assests/viladimir-min.png";
import img7 from "../assests/mehmet-min.png";
import img8 from "../assests/marketing-min.png";
import img9 from "../assests/customer support-min.png";
import img10 from "../assests/partners-min.png";
import "../scss/team.scss";
const Team = () => {
  const team = [
    {
      name: "Dyer, Nicosia/Cyprus",
      detial: "Ceo/Founder",
      img: img1,
    },
    {
      name: "Moh, Abu Dhabi/UAE",
      detial: "Ceo/Founder",
      img: img2,
    },
    {
      name: "Kamal, London/UK",
      detial: "Ceo/Founder",
      img: img3,
    },
    {
      name: "Snipe, Islamabad/Pakistan",
      detial: "Developer",
      img: img4,
    },
    {
      name: "Mike, Berlin/Germany",
      detial: "Developer",
      img: img5,
    },
    {
      name: "Vladimir, Kiev/Ukraine",
      detial: "Graphic Designer",
      img: img6,
    },
    {
      name: "Mehmet, Istanbul/Ukraine",
      detial: "Graphic Designer",
      img: img7,
    },
    {
      name: "Marketing Team In House",
      detial: "(TBA)",
      img: img8,
    },

    {
      name: "Customers Support Team In House",
      detial: "(TBA)",
      img: img9,
    },
    {
      name: "Partners In Malaysia,Indonesia,UAE",
      detial: "More TBA",
      img: img10,
    },
  ];
  return (
    <>
      <section id="team">
        <div className="container">
          <div className="heading" data-aos="fade-up">
            {/* <h1>Buy, Store and Learn from</h1> */}
            <h2>Our Team</h2>
          </div>
          <div className="content">
            {team.map((i) => {
              return (
                <>
                  <div className="team-box" data-aos="fade-up">
                    <img src={i.img} alt="" />
                    <div className="detial">
                      <h4>{i.name}</h4>
                      <span>{i.detial}</span>
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

export default Team;
