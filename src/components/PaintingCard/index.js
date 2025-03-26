import React from "react";
import styles from "./PaintingCard.module.scss"; // Import SCSS module
import { formatCurrency } from "../../utils";
import { useNavigate } from "react-router-dom";
import Rating from "@components/Rating";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/reducers/cartReducer";

const PaintingCard = ({ painting }) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div
      className={styles.painting} // ✅ Apply styles correctly
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
      <div className={styles.buttons}>
        {" "}
        <button
          className={styles.addButton}
          onClick={() => {
            dispatch(addToCart(painting?.id));
            navigate(`/cart`);
          }}
        >
          Add to Cart
        </button>
        <button
          className={styles.viewButton}
          onClick={() => navigate(`/products/${painting.id}`)}
        >
          View
        </button>
      </div>
    </div>
  );
};

export default PaintingCard;
