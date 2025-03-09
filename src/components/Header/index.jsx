import React from "react";
import Switch from "../Switch";
import "./Header.css";
import { signInWithGoogle } from "../../firebase/firebaseAuth";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../store/reducers/authReducer";

const Header = () => {
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state?.auth?.user);
  console.log("user", userProfile);
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
        <li>
          {userProfile ? (
            <React.Fragment>
              <img src={userProfile?.photoURL} />
              <p>{userProfile?.displayName}</p>
            </React.Fragment>
          ) : (
            <button
              href="#"
              onClick={async () => {
                const result = await signInWithGoogle();
                dispatch(loginUser(result));
              }}
            >
              Sign In
            </button>
          )}
        </li>
      </ul>
      <Switch />
    </nav>
  );
};

export default Header;
