import React from "react";
import "./style.scss";
import logo from "../../assets/logo/logo-navbar.png";
import { NavLink } from "react-router-dom";


const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <div className="image-wrapper">
          <img src={logo} alt="logo" />
        </div>
        <div className="link-wrapper">
          <h2>Links</h2>
          <ul className="nav-menu">
            <li>
              <NavLink to="/"># HOME</NavLink>
            </li>
            <li>
              <NavLink to="/aboutus"># ABOUT US</NavLink>
            </li>
            <li>
              <NavLink to="/architecture"># ARCHITECTURE</NavLink>
            </li>
            <li>
              <NavLink to="/services"># SERVICES</NavLink>
            </li>
            <li>
              <NavLink to="/projects"># PROJECTS</NavLink>
            </li>
            <li>
              <NavLink to="/contact"># CONTACT</NavLink>
            </li>
          </ul>
        </div>
        <div className="link-wrapper">
          <h2>Info</h2>
          <ul className="nav-menu">
            <li>
              
              <NavLink to="/home"># HOME</NavLink>
            </li>
            <li>
              <NavLink to="/aboutus"># ABOUT US</NavLink>
            </li>
            <li>
              <NavLink to="/architecture"># ARCHITECTURE</NavLink>
            </li>
            <li>
              <NavLink to="/services"># SERVICES</NavLink>
            </li>
            <li>
              <NavLink to="/projects"># PROJECTS</NavLink>
            </li>
            <li>
              <NavLink to="/contact"># CONTACT</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright-container">
        <div className="copyright-wrapper">
          <div className="copy1">
            <p>
              Copyright © 2023 | <span>EDMA</span>
            </p>
          </div>
          <div className="icons">
            <div className="icon">
              <NavLink to="https://www.facebook.com/" target="blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"></path>{" "}
                </svg>
              </NavLink>
              <NavLink to="https://instagram.com/" target="blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>{" "}
                </svg>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
