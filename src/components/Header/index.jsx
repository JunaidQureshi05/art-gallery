import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Switch from "../Switch";
import UserProfile from "../UserProfile";
import s from "./Header.module.scss";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log("scrollY", window.scrollY);
      setScrolled(window.scrollY > 10 ? true : false);
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
              <i className="fa-solid fa-house" title="Home"></i>
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <i className="fa-solid fa-cart-shopping" title="Cart"></i>
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="fa-solid fa-headset" title="Support"></i>
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
