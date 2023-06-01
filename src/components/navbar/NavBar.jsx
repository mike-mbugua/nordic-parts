import React from "react";
import "./navbar.css";
import logo from "./../../assets/images/nordic-logo.jpeg";

function NavBar() {
  return (
    <div className="Navbar__container">
      {/* logo Side */}
      <div className="logo">
        <img className="nordic_logo" src={logo} alt="" />
      </div>

      {/* Menu side */}
      <div className="navLinks">
        <div>
          <a href="#">Home</a>
        </div>
        <div>
          <a href="#">Services</a>
        </div>
        <div>
          <a href="#">Contact</a>
        </div>
        <div>
          <a href="#">Visit</a>
        </div>
        <div>
          <a href="#">Vehicle Parts</a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
