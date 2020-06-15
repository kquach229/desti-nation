import React from "react";
import {Nav, Link} from "react-router-dom";


const NavBar = () => {
    return(
        <nav>
        <div className="nav-wrapper">
          <img className="countrify-logo" src={require("../assets/images/countrify-logo.png")}/>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li className="nav__link"><Link to="/">Home</Link></li>
            <li className="nav__link"><Link to="/about">About</Link></li>
          </ul>
        </div>
      </nav>
    )
}

export default NavBar;