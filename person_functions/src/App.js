import logo from './logo.svg';
import './App.css';
import React from 'react';
import ModalPortalVersion from './ModalPortalVersion';


export default function App() {
  {
    const [showModal, setShowModal] = React.useState(false);
    const [usePortal, setUsePortal] = React.useState(true);

    return (
      <div className="outer-container">
        <button onClick={() => setShowModal(true)}>Show Modal</button>
        <label>
          <input
            type="checkbox"
            checked={usePortal}
            onChange={(e) => setUsePortal(e.target.checked)}
          />
          Use Portal
        </label>


        <div className="inner-container">
          <p>This box has <code>overflow: hidden</code> in it</p>

        </div>
        
    );
  }
}
