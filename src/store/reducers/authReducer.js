import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  intialState: {
    user: null,
  },
  reducers: {
    loginUser: () => {},
    logoutUser: () => {},
  },
});

export const { login } = authSlice.actions;
export default authSlice;
