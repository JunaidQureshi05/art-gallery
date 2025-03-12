import React, { useState } from "react";
import s from "./UserProfile.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, logoutUser } from "../../store/reducers/authReducer";
import { signInWithGoogle } from "../../firebase/firebaseAuth";
import Alert from "../Alert/Alert";
const UserProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const profile = useSelector((state) => state?.auth?.user);
  const dispatch = useDispatch();
  console.log("######PROFILE IS ", profile);
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
            <img src={profile?.reloadUserInfo?.photoUrl} />
          </div>

          <p className={s.name}>{profile?.displayName?.split(" ")?.[0]}</p>
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
          className={s.signInButton}
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
