import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import s from "./Cart.module.scss";

const CartPage = () => {
  const cartItems = [
    {
      id: 1,
      title: "Sunset Bliss",
      price: 120,
      quantity: 1,
      image:
        "https://images.pexels.com/photos/102127/pexels-photo-102127.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      id: 2,
      title: "Ocean Waves",
      price: 95,
      quantity: 2,
      image:
        "https://images.pexels.com/photos/102127/pexels-photo-102127.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
  ];

  return (
    <div className={s.root}>
      <h1 className={s.title}>Your Cart</h1>
      {cartItems.length > 0 ? (
        <div className={s.cartList}>
          {cartItems.map((item) => (
            <div key={item.id} className={s.cartItem}>
              <img src={item.image} alt={item.title} className={s.image} />
              <div className={s.details}>
                <h2 className={s.name}>{item.title}</h2>
                <p className={s.price}>
                  ${item.price} x {item.quantity}
                </p>
                <div className={s.actions}>
                  <button variant="outline">-</button>
                  <span className={s.quantity}>{item.quantity}</span>
                  <button variant="outline">+</button>
                  <button variant="destructive" className={s.deleteButton}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className={s.empty}>Your cart is empty.</p>
      )}
      <div className={s.checkoutSection}>
        <button className={s.checkOutButton}>Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
