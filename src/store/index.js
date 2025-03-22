import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducers/authReducer";
import configSlice from "./reducers/configReducer";
import cartSlice from "./reducers/cartReducer";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    config: configSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
