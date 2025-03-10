import { createSlice } from "@reduxjs/toolkit";

let cachedProfile = JSON.parse(localStorage.getItem("user"));

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: cachedProfile || null,
  },
  reducers: {
    loginUser: (state, action) => {
      debugger;
      state.user = action.payload;
      global?.window?.localStorage.setItem(
        "user",
        JSON.stringify(Object.assign({}, action?.payload) || {})
      );
    },
    logoutUser: (state, action) => {
      state.user = null;
      global?.window?.localStorage?.removeItem("user");
    },
  },
});

export const { loginUser, logoutUser } = authSlice.actions;
export default authSlice;
