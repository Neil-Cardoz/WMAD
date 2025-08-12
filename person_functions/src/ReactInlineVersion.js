import ReactDOM from "react-dom"
import "./modal.css"
import React from "react"   

export default function ReactInlineVersion({children, onClose}){
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                {children}
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    )
}
