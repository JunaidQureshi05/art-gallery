import React, { useState } from "react";
import "./UserProfile.css";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, logoutUser } from "../../store/reducers/authReducer";
import { signInWithGoogle } from "../../firebase/firebaseAuth";
import Alert from "../Alert/Alert";
const UserProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const profile = useSelector((state) => state?.auth?.user);
  const dispatch = useDispatch();
  return (
    <div>
      {profile ? (
        <div
          className="profile"
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          <div className="imageContainer">
            <img src={profile?.photoURL} />
          </div>

          <p className="name">{profile?.displayName?.split(" ")?.[0]}</p>
          <i class="fa-solid fa-arrow-right-from-bracket"></i>
        </div>
      ) : (
        <button
          onClick={async () => {
            const result = await signInWithGoogle();
            console.log("######## I AM HERE", result);
            debugger;
            dispatch(loginUser(result));
          }}
          className="signInButton"
        >
          Sign In
        </button>
      )}
      <Alert
        message="Are you sure you want to logout ?"
        isOpen={isModalOpen}
        onConfirm={() => {
          dispatch(logoutUser());
          setIsModalOpen(false);
        }}
        onDeny={() => {
          setIsModalOpen(false);
        }}
      />
    </div>
  );
};

export default UserProfile;
