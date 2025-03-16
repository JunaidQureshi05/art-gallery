import React from "react";
import s from "./Rating.module.scss";
const Rating = ({ rating, size = 16 }) => {
  return (
    <p className={s.rating} style={{ fontSize: size }}>
      {Array.from({ length: Math.floor(rating) }).map((_, idx) => (
        <i className="fa-solid fa-star" key={idx} />
      ))}
      {Math.ceil(rating) - rating > 0 && (
        <i className="fa-solid fa-star-half" />
      )}
    </p>
  );
};

export default Rating;
