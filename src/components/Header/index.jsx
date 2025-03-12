import React from "react";
import Switch from "../Switch";
import "./Header.css";
import { signInWithGoogle } from "../../firebase/firebaseAuth";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../store/reducers/authReducer";
import UserProfile from "../UserProfile";

const Header = () => {
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state?.auth?.user);
  console.log("user", userProfile);
  return (
    <nav>
      <h1>Art Loom</h1>
      <div className="buttons">
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
        <UserProfile />
        <Switch />
      </div>
    </nav>
  );
};

export default Header;
