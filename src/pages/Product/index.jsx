import React from "react";
import s from "./Product.module.scss";

const ProductPage = () => {
  return (
    <div className={s.root}>
      <h1>This is product page</h1>
      <div className="imageContainer">
        <img src="https://images.pexels.com/photos/1585325/pexels-photo-1585325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      </div>
      <div>texttual Content</div>
      <div></div>
    </div>
  );
};

export default ProductPage;
