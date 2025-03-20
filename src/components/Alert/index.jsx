import React from "react";
import ReactDOM from "react-dom";
// import { X } from "lucide-react";
import s from "./Alert.module.scss";

const Alert = ({ isOpen, message, onConfirm, onDeny }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={s.root}>
      <button className={s.crossButton} onClick={onDeny} aria-label="Close">
        X
      </button>
      <h1>{message}</h1>
      <div className={s.buttons}>
        <button className={s.confirmButton} onClick={onConfirm}>
          OK
        </button>
        <button className={s.denyButton} onClick={onDeny}>
          Cancel
        </button>
      </div>
    </div>,
    document.body
  );
};

export default Alert;
