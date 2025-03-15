import React from "react";
import ReactDOM from "react-dom";
import s from "./Alert.module.scss";
const Alert = ({ isOpen, message, onConfirm, onDeny }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={s.root}>
      <span className={s.crossButton} onClick={onDeny}>
        <i className="fa-solid fa-xmark"></i>
      </span>
      <h1>{message}</h1>
      <div className={s.buttons}>
        <button onClick={onConfirm}>OK</button>
        <button onClick={onDeny}>Cancel</button>
      </div>
    </div>,
    document.body
  );
};

export default Alert;
