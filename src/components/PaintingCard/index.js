import React from "react";
import styles from "./PaintingCard.module.scss"; // Import SCSS module
import { formatCurrency } from "../../utils";
import { useNavigate } from "react-router-dom";
import Rating from "@components/Rating";

const PaintingCard = ({ painting }) => {
  let navigate = useNavigate();

  return (
    <div
      className={styles.painting} // ✅ Apply styles correctly
      onClick={() => navigate(`/products/${painting.id}`)}
    >
      <div className={styles.imageContainer}>
        <img src={painting.imageUrl} alt={painting.title} />
      </div>
      <h3 className={styles.title}>{painting.name}</h3>
      <Rating rating={painting.rating} />
      <div className={styles.pricing}>
        <div className={styles.actual}>{formatCurrency(painting?.price)}</div>
        <div className={styles.discounted}>
          {formatCurrency(painting?.discountedPrice)}
        </div>
      </div>
      <button className={styles.addButton}>Add to Cart</button>
    </div>
  );
};

export default PaintingCard;
