import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();
const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    global.localStorage.getItem("theme") || "light"
  );
  useEffect(() => {
    let pastTheme = global.localStorage.getItem("theme");
    console.log(">>>>>", pastTheme);
    if (pastTheme) {
      setTheme(pastTheme);
    } else {
      console.log("inside else");
      setTheme("light");
    }
  }, []);
  useEffect(() => {
    // set to Local Storage
    if (theme) {
      global.localStorage.setItem("theme", theme);
      document.body.setAttribute("data-theme", theme);
    }
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
