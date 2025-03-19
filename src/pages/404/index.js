import React from "react";
import { useNavigate } from "react-router-dom";
import s from "./NotFound.module.scss";

const _404_Page = () => {
  const navigate = useNavigate();

  return (
    <main className={s.root}>
      <h1 className={s.heading}>404</h1>
      <h3 className={s.subheading}>
        Oops! The page you are looking for does not exist.
      </h3>
      <button className={s.homeButton} onClick={() => navigate("/")}>
        Go Home
      </button>
    </main>
  );
};

export default _404_Page;
