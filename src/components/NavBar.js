import React, { useState } from "react";
import Icon from "./Icon";
import { Link } from "@reach/router";

import logo from "../assets/statics/logo.png";

const NavBar = ({ navlinks }) => {
  //const [navOpen, setNavOpen] = useState(false);
  return (
    <header className="navbar">
      <nav className="navbar-container">
        <div className="braud-section">
          <a href="/">
            <img src={logo} alt="Jhon logo"></img>
          </a>
        </div>
        <div className="navbar-navegator">
          <div className="navbar-menu">
            <ul className="menu-links">
              {navlinks.map((item, id) => (
                <li key={id}>
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
            <div className="navbar-social">
              <div className="social-icons">
                <span>
                  <a href="https://facebook.com/" target="_blank">
                    <Icon name="facebook"></Icon>
                  </a>
                </span>
                <span>
                  <a href="https://github.com/" target="_blank">
                    <Icon name="github"></Icon>
                  </a>
                </span>
                <span>
                  <a href="https://gitlab.com/" target="_blank">
                    <Icon name="gitlab"></Icon>
                  </a>
                </span>
                <span>
                  <a href="https://instagram.com/" target="_blank">
                    <Icon name="instagram"></Icon>
                  </a>
                </span>
                <span>
                  <a href="https://twitter.com/" target="_blank">
                    <Icon name="twitter"></Icon>
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="burger-buttom">
            <button type="button">
              <span>
                <Icon name="hamburger"></Icon>
              </span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default NavBar;
