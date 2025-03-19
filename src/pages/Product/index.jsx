import React, { useEffect, useState } from "react";
import s from "./Product.module.scss";
import Rating from "@components/Rating";
import { formatCurrency } from "../../utils";
import { useParams } from "react-router-dom";
import data from "../../data";

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
            Add to Cart <i className="fa-solid fa-cart-shopping"></i>
          </button>
          <button className={s.wishListButton}>
            Add to wishlist <i className="fa-regular fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
