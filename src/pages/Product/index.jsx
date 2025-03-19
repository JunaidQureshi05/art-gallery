import React, { useEffect, useState } from "react";
import s from "./Product.module.scss";
import Rating from "@components/Rating";
import { formatCurrency } from "../../utils";
import { useParams } from "react-router-dom";
import data from "../../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";

const ProductPage = () => {
  const [pageData, setPageData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setPageData(data?.find((painting) => painting?.id === +id));
  }, [id]);

  if (!pageData) return <h2>Loading...</h2>;

  return (
    <div className={s.root}>
      <div className={s.imageContainer}>
        <img src={pageData?.imageUrl} alt={pageData?.name} />
      </div>

      <div className={s.description}>
        <h1 className={s.name}>{pageData?.name}</h1>
        <h2 className={s.painterName}> - {pageData?.painter} </h2>
        <Rating rating={pageData?.rating} size={32} />
        <p className={s.descriptionText}>{pageData?.description}</p>
      </div>

      <div className={s.actions}>
        <span className={s.price}>{formatCurrency(pageData?.price)}</span>
        <div className={s.buttons}>
          <button>
            Add to Cart <FontAwesomeIcon icon={faCartShopping} />
          </button>
          <button className={s.wishListButton}>
            Add to wishlist <FontAwesomeIcon icon={faHeart} />
          </button>
        </div>
      </div>

      {/* User Reviews Section */}
      <div className={s.reviewsSection}>
        <h2>User Reviews</h2>
        {pageData?.reviews?.length > 0 ? (
          pageData.reviews.map((review, index) => (
            <div key={index} className={s.review}>
              <div className={s.reviewHeader}>
                <div className={s.userInfo}>
                  <img
                    src={review.image}
                    alt={review.user}
                    className={s.userImage}
                  />
                  <strong>{review.user}</strong>
                </div>
                <Rating rating={review.rating} size={20} />
              </div>
              <p>{review.comment}</p>
            </div>
          ))
        ) : (
          <p>No reviews yet. Be the first to review!</p>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
