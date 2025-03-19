import React, { useState } from "react";
import s from "./UserProfile.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, logoutUser } from "../../store/reducers/authReducer";
import { signInWithGoogle } from "../../firebase/firebaseAuth";
import Alert from "../Alert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const UserProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const profile = useSelector((state) => state?.auth?.user);
  const dispatch = useDispatch();

  return (
    <div>
      {profile ? (
        <div
          className={s.profile}
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          <div className={s.imageContainer}>
            <img src={profile?.reloadUserInfo?.photoUrl} alt="Profile" />
          </div>

          <p className={s.name}>{profile?.displayName?.split(" ")?.[0]}</p>
          <FontAwesomeIcon icon={faArrowRightFromBracket} />
        </div>
      ) : (
        <button
          onClick={async () => {
            const result = await signInWithGoogle();
            dispatch(loginUser(result));
          }}
          className={s.loginWithGoogleBtn}
        >
          Sign In
        </button>
      )}
      <Alert
        message="Are you sure you want to logout?"
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
