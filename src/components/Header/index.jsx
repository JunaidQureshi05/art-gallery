import React, { useEffect, useState } from "react";
import Switch from "../Switch";
import s from "./Header.module.scss";

import UserProfile from "../UserProfile";

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
            <a href="#"> Home</a>
          </li>
          <li>
            <a href="#"> About</a>
          </li>
          <li>
            <a href="#"> Contact</a>
          </li>
        </ul>
        <UserProfile />
        <Switch />
      </div>
    </nav>
  );
};

export default Header;
