import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
      console.log("scrollY", window.scrollY);
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={scrolled ? s.blurredBg : ""}>
      <h1>
        <Link to="/">Art Loom</Link>
      </h1>
      <div className={s.buttons}>
        <ul className={s.navigation}>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faHouse} title="Home" />
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <FontAwesomeIcon icon={faCartShopping} title="Cart" />
            </Link>
          </li>
          <li>
            <Link to="/support">
              <FontAwesomeIcon icon={faHeadset} title="Support" />
            </Link>
          </li>
        </ul>
        <UserProfile />
        <Switch />
      </div>
    </nav>
  );
};

export default Header;
