export const changeThemeAction = (state) => {
  let updatedTheme = state?.theme === "light" ? "dark" : "light";
  state.theme = updatedTheme;
  document.body.setAttribute("data-theme", updatedTheme);
  window.localStorage.setItem("theme", updatedTheme);
};
