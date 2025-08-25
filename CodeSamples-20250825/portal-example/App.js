import React, { useState } from "react";
import ModalPortalVersion from "./ModalPortalVersion";
import ModalInlineVersion from "./ModalInlineVersion";
//import PortalDemo from "./PortalDemo";
import "./styles.css";

export default function App() {
  
  const [showModal, setShowModal] = useState(false);
  const [usePortal, setUsePortal] = useState(true);

  return (
    <div className="outer-container">
      <h1>React Modal – Portal vs Inline</h1>

      <label>
        <input
          type="checkbox"
          checked={usePortal}
          onChange={() => setUsePortal(!usePortal)}
        />
        Use Portal
      </label>

      <div className="inner-container">
        <p>This box has <code>overflow: hidden</code> & a stacking context.</p>
        <button onClick={() => setShowModal(true)}>Open Modal</button>

        {showModal &&
          (usePortal ? (
            <ModalPortalVersion onClose={() => setShowModal(false)}>
              <h2>Portal Modal</h2>
              <p>I escape overflow & stacking issues.aaaaaaaaaabbbbbbbbbbcccccccccc
              </p>
            </ModalPortalVersion>
          ) : (
            <ModalInlineVersion onClose={() => setShowModal(false)}>
              <h2>Inline Modal</h2>
              <p>I might get clipped or stuck.aaaaaaaaaabbbbbbbbbbcccccccccc
              </p>
            </ModalInlineVersion>
          ))}
      </div>
    </div>
  );
}