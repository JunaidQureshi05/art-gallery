import { createSlice } from "@reduxjs/toolkit";
import { changeThemeAction } from "store/actions/config.actions";

let pastTheme = window.localStorage.getItem("theme");

const configSlice = createSlice({
  name: "configurations",
  initialState: {
    theme: pastTheme,
  },

  reducers: {
    changeTheme: changeThemeAction,
  },
});
export const { changeTheme } = configSlice.actions;

export default configSlice;
