import React, { useContext, useEffect, useState } from "react";
import "./Switch.css";
import { ThemeContext } from "../../context/Theme";
const Switch = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [isChecked, setIsChecked] = useState(false);
  useEffect(() => {
    setIsChecked(theme === "dark");
  }, [theme]);

  return (
    <div>
      <input
        type="checkbox"
        class="checkbox"
        checked={isChecked}
        id="checkbox"
        style={{ display: "none" }}
        onChange={(e) => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      />
      <label
        for="checkbox"
        class={["checkbox-label", !isChecked ? "bg-light" : ""]
          .filter(Boolean)
          .join(" ")}
      >
        <i class="fas fa-moon"></i>
        <i class="fas fa-sun"></i>
        <span class="ball"></span>
      </label>
    </div>
  );
};

export default Switch;
