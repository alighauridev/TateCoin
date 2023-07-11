import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../scss/token.scss";
import Chart from "./Chart";
import token from "../assests/token.png"

// import { gsap } from "gsap";
// import { TimelineLite, Power3 } from "gsap/gsap-core";
// import { ScrollTrigger } from "gsap/all";
// gsap.registerPlugin(ScrollTrigger);
// const data = [2, 15, 3, 10, 12, 8, 4, 40];
const data = [
    {
        name: "New Token emissions:",
        percent: "Unavailable",
    },
    {
        name: "Bonus system:",
        percent: "Yes",
    },
    {
        name: "Presale of Private Sale:",
        percent: "Not held",
    },
    {
        name: "Know Your Customer (KYC):",
        percent: "Yes",
    },
    {
        name: "Min/Max Personal Cap:",
        percent: "0.01 ETH / No limit",
    },
    {
        name: "Whitelist:",
        percent: "No",
    },
];

const data2 = [
    {
        name: "Accounting & Legal: 12%",
        percent: 12,
    },
    {
        name: "SMM Community Leaders: 8%",
        percent: 8,
    },
    {
        name: "Audits: 10%",
        percent: 10,
    },
    {
        name: "Distribution: 40%",
        percent: 40,
    },
];
const Token = ({ ease }) => {
    return (
        <section id="token">
            <div className="container">
                <div className="first">
                    <img src={token} style={{ width: "100%" }} alt="" data-aos="fade-up"/>
                    {/* <Chart /> */}
                    <div className="percent" data-aos="fade-up">
                        <div className="h">
                            <span></span> <p>Liquidity</p>
                        </div>

                        <div className="h">
                            <span></span> <p>Marketing</p>
                        </div>
                        <div className="h">
                            <span></span> <p>Team</p>
                        </div>
                        <div className="h">
                            <span></span> <p>Advisors</p>
                        </div>
                    </div>
                </div>
                <div className="second">
                    <div className="heading" data-aos="fade-up">
                        <h1>Token Distribution</h1>
                    </div>
                    <div className="detial" data-aos="fade-up">
                        <div className="d">
                            <h1>Name:</h1>
                            <span>Golddinar Coin</span>
                        </div>
                        <div className="d">
                            <h1>Purchase methods accepted:</h1>
                            <span>BTC, ETH, LTC</span>
                        </div>
                    </div>
                    <div className="data-info" data-aos="fade-up">
                        <div className="item">
                            <p>Hard cap</p>
                            <h3
                                style={{
                                    color: " rgb(0 0 0)",
                                }}
                            >
                                24.000 ETH
                            </h3>
                        </div>
                        <div className="item">
                            <p>Soft cap</p>
                            <h3
                                style={{
                                    color: "rgb(0 0 0)",
                                }}
                            >
                                4.000 ETH
                            </h3>
                        </div>
                        <div className="item">
                            <p>Cost of 1 Token</p>
                            <h3
                                style={{
                                    color: " rgb(0 0 0) ",
                                }}
                            >
                                0.00001 ETH
                            </h3>
                        </div>
                    </div>
                    <div className="datalist">
                        {data.map((a) => {
                            return (
                                <div className="box" data-aos="fade-up">
                                    <h2>{a.name}</h2>
                                    <span>{a.percent}</span>
                                </div>
                            );
                        })}
                    </div>
                    <div className="btn" data-aos="fade-up">
                        <a href="#">Buys Tokens</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Token;
