import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import s from "./Rating.module.scss";

const Rating = ({ rating, size = 16 }) => {
  return (
    <p className={s.rating} style={{ fontSize: size }}>
      {Array.from({ length: Math.floor(rating) }).map((_, idx) => (
        <FontAwesomeIcon icon={faStar} key={idx} />
      ))}
      {Math.ceil(rating) - rating > 0 && <FontAwesomeIcon icon={faStarHalf} />}
    </p>
  );
};

export default Rating;
