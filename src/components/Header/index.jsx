import React, { useEffect, useState } from "react";
import Switch from "../Switch";
import s from "./Header.module.scss";

import UserProfile from "../UserProfile";
import { Link } from "react-router-dom";

const Header = () => {
  const [scrolledPosition, setScrolledPosition] = useState(0);
  function handleScroll() {
    setScrolledPosition(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return function () {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className={scrolledPosition > 0 ? s.blurredBg : null}>
      <h1>Art Loom</h1>
      <div className={s.buttons}>
        <ul className={s.navigation}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart"> Cart</Link>
          </li>
          <li>
            <Link to="#"> Contact</Link>
          </li>
        </ul>
        <UserProfile />
        <Switch />
      </div>
    </nav>
  );
};

export default Header;
