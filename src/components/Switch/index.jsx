import React, { useEffect, useState } from "react";
import "./Switch.css";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../store/reducers/configReducer";
const Switch = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state?.config?.theme);
  const [isChecked, setIsChecked] = useState(false);
  useEffect(() => {
    setIsChecked(theme === "dark");
  }, [theme]);

  return (
    <div>
      <input
        type="checkbox"
        className="checkbox"
        checked={isChecked}
        id="checkbox"
        style={{ display: "none" }}
        onChange={() => {
          dispatch(changeTheme());
        }}
      />
      <label
        htmlFor="checkbox"
        className={["checkbox-label", !isChecked ? "bg-light" : ""]
          .filter(Boolean)
          .join(" ")}
      >
        <i className="fas fa-moon"></i>
        <i className="fas fa-sun"></i>
        <span className="ball"></span>
      </label>
    </div>
  );
};

export default Switch;
