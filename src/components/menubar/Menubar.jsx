import React from "react";
import "./Menubar.css";
import { IoClose } from "react-icons/io5";

function Menubar({ onClose }) {
  return (
    <div className="Menubar">
      <div className="overlay" onClick={onClose}></div>
      <div className="menu-content">
        <div className="header">
          <div className="heading">Go to...</div>
          <div className="close-btn" onClick={onClose}>
            <IoClose />
          </div>
        </div>

        <ul className="go-to">
          <li className="section">Home</li>
          <li className="section">About Us</li>
          <li className="section">Services Offered</li>
        </ul>
      </div>
    </div>
  );
}

export default Menubar;
