import { createSlice } from "@reduxjs/toolkit";

let cachedProfile = JSON.parse(localStorage.getItem("user"));

const authSlice = createSlice({
  name: "authentication",
  initialState: {
    user: cachedProfile || null,
  },
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
      window.localStorage.setItem(
        "user",
        JSON.stringify(Object.assign({}, action?.payload) || {})
      );
    },
    logoutUser: (state) => {
      state.user = null;
      window.localStorage?.removeItem("user");
    },
  },
});

export const { loginUser, logoutUser } = authSlice.actions;
export default authSlice;
