// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logomain.png";
import { CiMenuBurger } from "react-icons/ci";
const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };
  return (
    <nav className="container">
      <img src={logo} alt="" className="logo" />
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>Home</li>
        <li>About us</li>
        <li>Plans</li>
        <li>Services</li>
        <li>Products</li>
        <li>
          <button className="btn">Contact us</button>
        </li>
      </ul>
      <CiMenuBurger size={34} className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
