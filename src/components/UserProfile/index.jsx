import React, { useState } from "react";
import s from "./UserProfile.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, logoutUser } from "../../store/reducers/authReducer";
import { signInWithGoogle } from "../../firebase/firebaseAuth";
import Alert from "../Alert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const UserProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const profile = useSelector((state) => state?.auth?.user);
  const dispatch = useDispatch();
  console.log("profile", profile);
  return (
    <div className={s.container}>
      {profile ? (
        <div className={s.profile} onClick={() => setIsModalOpen(true)}>
          <div className={s.imageContainer}>
            <img src={profile?.reloadUserInfo?.photoUrl} alt="Profile" />
          </div>
          <div className={s.userName}> {profile?.displayName}</div>

          <FontAwesomeIcon icon={faRightFromBracket} className={s.logoutIcon} />
        </div>
      ) : (
        <button
          onClick={async () => {
            const result = await signInWithGoogle();
            dispatch(loginUser(result));
          }}
          className={s.loginWithGoogleBtn}
        >
          Sign in with Google
        </button>
      )}
      <Alert
        message="Are you sure you want to logout?"
        isOpen={isModalOpen}
        onConfirm={() => {
          dispatch(logoutUser());
          setIsModalOpen(false);
        }}
        onDeny={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default UserProfile;
