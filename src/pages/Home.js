import React, { useState } from "react";
import Loader from "../components/Loader";
import Navigation from "../components/Navigation";
import Banner from "../components/Banner";

import Footer from "../components/Footer";
import Roadmap from "../components/Roadmap";
import About from "../components/About";

import MoreInfo from "../components/MoreInfo";
import "../scss/home.css";
import BitCoin from "../components/BitCoin";
import AboutTwo from "../components/AboutTwo";
import Parteners from "../components/Parteners";
import BitCoinTwo from "../components/BitCoinTwo";
import Team from "../components/Team";
import Token from "../components/Token";
import Timer from "../components/Timer";
const Home = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffb800");
  return (
    <>
      {/* {loading ? (
        <Loader setLoading={setLoading} />
      ) : ( */}
      <>
        <main>
          <div className="bac-main">
            <Navigation />
            <Banner />
          </div>
          <About />
          <MoreInfo />
          {/* <Timer />
            <AboutTwo />
            <Roadmap />
            <Token />
            <Team />
            <Parteners /> */}
          <Footer />
        </main>
      </>
      {/* )} */}
    </>
  );
};

export default Home;
