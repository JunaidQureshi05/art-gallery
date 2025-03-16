import React from "react";
import s from "./Product.module.scss";
import Rating from "@components/Rating";
import { formatCurrency } from "../../utils";
const ProductPage = () => {
  return (
    <div className={s.root}>
      <div className="imageContainer">
        <img src="https://images.pexels.com/photos/1585325/pexels-photo-1585325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      </div>

      <div className={s.description}>
        <h1 className={s.name}>Composition VII</h1>
        <h2 className={s.painterName}> - Junaid Qureshi </h2>
        <Rating rating={3.5} size={32} />
        <p className={s.descriptionText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          voluptatibus inventore quisquam nesciunt veritatis rem nobis non!
          Sequi similique dicta non! Voluptatibus repellat corporis vel sit odio
          quam facilis ipsa, ab blanditiis saepe placeat magnam esse itaque
          excepturi provident rem ipsum eius perspiciatis quod tenetur. Maxime
          excepturi rerum odit pariatur voluptas dolore animi sed magnam!
          Perferendis, ad accusamus ab dicta unde enim molestias delectus?
          Ducimus sint deleniti doloremque ab recusandae ex minus magni.
          Voluptate nostrum ullam ex veritatis numquam natus quasi pariatur
          repellat, ut repellendus consequuntur dicta nemo cum velit? Eos iusto
          ducimus autem illo quis quaerat, optio nihil impedit.
        </p>
      </div>
      <div className={s.actions}>
        <span className={s.price}>{formatCurrency(50000)}</span>
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
