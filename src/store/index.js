import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducers/authReducer";
import configSlice from "./reducers/configReducer";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    config: configSlice.reducer,
  },
});

export default store;
