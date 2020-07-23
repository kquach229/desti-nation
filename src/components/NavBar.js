import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/home">
          <img
            alt="country-logo"
            className="countrify-logo"
            src={require("../assets/images/countrify-logo.png")}
          />
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li className="nav__link">
            <Link to="/home">Home</Link>
          </li>
          <li className="nav__link">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
