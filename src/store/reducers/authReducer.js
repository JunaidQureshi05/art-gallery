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
    logoutUser: (state, action) => {},
  },
});

export const { loginUser } = authSlice.actions;
export default authSlice;
