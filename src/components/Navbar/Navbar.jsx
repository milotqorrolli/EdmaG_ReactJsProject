import React, { useContext, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import logo from "../../assets/logo/logo-navbar.png";
import './style.scss';
import { data } from "../../assets/data/dummyData";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 800, behaviour: "smooth" });
  };

  
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <RouterLink onClick={() => scrollToTop()} to="/home">
          <img src={logo} alt="logo" />
        </RouterLink>

        <div className="menu-icon" onClick={toggleMenu}>
          <MenuIcon />
        </div>

        <ul className={`nav-links ${menuVisible ? "active" : ""}`}>
          {data.navbar.map((item) => (
            <li key={item.id}>
              <RouterLink onClick={() => scrollToTop()} to={item.path}>
                {item.name}
              </RouterLink>
            </li>
          ))}
          {/* Add more menu items with increasing ids dynamically */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
