import { createSlice } from "@reduxjs/toolkit";
import { changeThemeAction } from "../actions/config.actions";

let pastTheme = window.localStorage.getItem("theme");
document.body.setAttribute("data-theme", pastTheme || "light");

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
