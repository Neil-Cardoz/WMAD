import React from "react";
import ReactDOM from "react-dom";
import "./modal.css";

export default function ModalPortalVersion({ children, onClose }) {
  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}