import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pinterest_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="footer_logo"></img>
        <p>Ornof's Pet Store</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>
          <Link to={"/"}>Products</Link>
        </li>
        <li>Offices</li>
        <li>
          <Link to={"/about"}>About </Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="instagram_icon"></img>
        </div>
        <div className="footer-icons-container">
          <img src={pinterest_icon} alt="pinterest_icon"></img>
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="whatsapp_icon"></img>
        </div>
      </div>
      <div className="footer-copyright">
        <hr></hr>
        <p>
          Copyright @ 2024 - All Right Reserved to{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/jabedhossain/"
          >
            Jabed Hossain
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Footer;
