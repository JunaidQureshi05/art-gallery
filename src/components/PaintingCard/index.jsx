import React from "react";
import "./PaintingCard.css";
import { formatCurrency } from "../../utils";
import { useNavigate } from "react-router-dom";
import Rating from "@components/Rating";
const PaintingCard = ({ painting }) => {
  let navigate = useNavigate();
  return (
    <div
      className="painting"
      onClick={() => {
        navigate(`/products/${painting.id}`);
      }}
    >
      <div className="imageContaienr">
        <img
          src={painting.imageUrl}
          height={200}
          width={200}
          alt={painting.title}
        />
      </div>
      <h3 className="title"> {painting.name}</h3>
      <Rating rating={painting.rating} />
      <div className="pricing">
        <div className="actual"> {formatCurrency(painting?.price)}</div>
        <div className="discounted">
          {formatCurrency(painting?.discountedPrice)}
        </div>
      </div>
      <button className="addButton">Add to Cart</button>
    </div>
  );
};

export default PaintingCard;
