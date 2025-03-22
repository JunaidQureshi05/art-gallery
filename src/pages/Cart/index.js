import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import s from "./Cart.module.scss";
import { useDispatch, useSelector } from "react-redux";
import data from "../../data";
import {
  addToCart,
  decreaseQty,
  removeFromCart,
} from "../../store/reducers/cartReducer";

const CartPage = () => {
  const cart = useSelector((state) => state?.cart);
  const dispatch = useDispatch();
  console.log("@@@@@", data);
  let cartItems = cart.map((cItem) => {
    let dataItem;
    dataItem = data?.find((item) => item?.id === cItem?.id);
    console.log("Junaid", dataItem);
    return { ...dataItem, qty: cItem?.qty };
  });

  return (
    <div className={s.root}>
      <h1 className={s.title}>Your Cart</h1>
      {cartItems.length > 0 ? (
        <div className={s.cartList}>
          {cartItems.map((item) => (
            <div key={item.id} className={s.cartItem}>
              <img src={item.imageUrl} alt={item.title} className={s.image} />
              <div className={s.details}>
                <h2 className={s.name}>{item.name}</h2>
                <p className={s.price}>
                  ${item.price} x {item.qty}
                </p>
                <div className={s.actions}>
                  <button
                    onClick={() => {
                      dispatch(decreaseQty(item?.id));
                    }}
                  >
                    -
                  </button>
                  <span className={s.quantity}>{item.qty}</span>
                  <button
                    onClick={() => {
                      dispatch(addToCart(item?.id));
                    }}
                  >
                    +
                  </button>
                  <button
                    className={s.deleteButton}
                    onClick={() => {
                      dispatch(removeFromCart(item?.id));
                    }}
                  >
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
