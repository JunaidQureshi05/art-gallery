import React from "react";
import "./PaintingCard.css";
import { formatCurrency } from "../../utils";
const PaintingCard = ({ painting }) => {
  return (
    <div className="painting">
      <div className="imageContaienr">
        <img
          src={painting.imageUrl}
          height={200}
          width={200}
          alt={painting.title}
        />
      </div>
      <h3 className="title"> {painting.name}</h3>
      <p className="rating">
        {Array.from({ length: Math.floor(painting.rating) }).map((_, idx) => (
          <i class="fa-solid fa-star"></i>
        ))}
        {Math.ceil(painting.rating) - painting.rating > 0 && (
          <i class="fa-solid fa-star-half"></i>
        )}
      </p>
      <div className="pricing">
        <div className="actual"> {formatCurrency(painting.price)}</div>
        <div className="discounted">
          {formatCurrency(painting.discountedPrice)}
        </div>
      </div>
      <button className="addButton">Add to Cart</button>
    </div>
  );
};

export default PaintingCard;
