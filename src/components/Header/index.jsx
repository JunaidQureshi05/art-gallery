import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCartShopping,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";
import Switch from "../Switch";
import UserProfile from "../UserProfile";
import s from "./Header.module.scss";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={scrolled ? s.blurredBg : ""}>
      <h1>
        <NavLink to="/" className={s.logo}>
          Art Loom
        </NavLink>
      </h1>
      <div className={s.buttons}>
        <ul className={s.navigation}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? `${s.activeLink}` : "")}
            >
              <FontAwesomeIcon icon={faHouse} title="Home" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) => (isActive ? `${s.activeLink}` : "")}
            >
              <FontAwesomeIcon icon={faCartShopping} title="Cart" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/support"
              className={({ isActive }) => (isActive ? `${s.activeLink}` : "")}
            >
              <FontAwesomeIcon icon={faHeadset} title="Support" />
            </NavLink>
          </li>
        </ul>
        <UserProfile />
        <Switch />
      </div>
    </nav>
  );
};

export default Header;
