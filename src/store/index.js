import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducers/authReducer";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export default store;
