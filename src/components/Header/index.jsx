import React from "react";
import Switch from "../Switch";
import "./Header.css";
const Header = () => {
  return (
    <nav>
      <h1>Art Gallery</h1>
      <ul className="navigation">
        <li>
          <a href="#"> Home</a>
        </li>
        <li>
          <a href="#"> About</a>
        </li>
        <li>
          <a href="#"> Contact</a>
        </li>
      </ul>
      <Switch />
    </nav>
  );
};

export default Header;
