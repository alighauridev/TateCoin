import React from "react";
import {
  FaAccessibleIcon,
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaPage4,
  FaTelegram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineTwitter, AiOutlineTelegram } from "react-icons/ai";
import "../scss/footer.scss";
import { LinkRounded } from "@material-ui/icons";
import bac from "../assests/footer-bac.jpg";
import logo from "../assests/bg/footer-logo.gif";

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="container">

          <div className="top" >
            <h1>This is your last chance to enter the portal</h1>
            <div className="logo">
              <a href="#">
                <img src={logo} alt="" />
              </a>
            </div>
            <p>Beyond this point we cannot save you</p>

          </div>
          <div className="bottom" >
            <p>
              <span>Copyright ©2023 WALLST</span>
              <a href="mailto:Support@WALLST.vip">  <span>Support@WALLST.vip</span></a>
            </p>

            <div className="icons">
              <a href="https://twitter.com/WALLSTeth">
                <FaTwitter />
              </a>

              <a href="http://t.me/WALLSTEth">
                <FaTelegramPlane />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
