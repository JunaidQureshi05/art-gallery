import React from "react";
import ReactDOM from "react-dom";
import "./Alert.css";
const Alert = ({ isOpen, message, onConfirm, onDeny }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="root">
      <span className="crossButton" onClick={onDeny}>
        <i class="fa-solid fa-xmark"></i>
      </span>
      <h1>{message}</h1>
      <div className="buttons">
        <button onClick={onConfirm}>OK</button>
        <button onClick={onDeny}>Cancel</button>
      </div>
    </div>,
    document.body
  );
};

export default Alert;
