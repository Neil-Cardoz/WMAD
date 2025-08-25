import React from "react";
import "./modal.css";

export default function ModalInlineVersion({ children, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}