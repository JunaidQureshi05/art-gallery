import { createSlice } from "@reduxjs/toolkit";
import {
  addItemToCart,
  decreaseItemQty,
  removeItemFromCart,
} from "../actions/cart.actions";

const cartSlice = createSlice({
  name: "cartItems",
  initialState: [],

  reducers: {
    addToCart: addItemToCart,
    removeFromCart: removeItemFromCart,
    decreaseQty: decreaseItemQty,
    updateCartItem: (state, action) => {},
  },
});

export const { addToCart, removeFromCart, decreaseQty } = cartSlice.actions;

export default cartSlice;
