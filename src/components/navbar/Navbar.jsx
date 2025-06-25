import React, { useState } from 'react'
import "./Navbar.css"
import { useNavigate } from 'react-router-dom'
import Menubar from "../menubar/Menubar";
import { FiMenu } from "react-icons/fi";

function Navbar() {
    const [menubar, setMenubar] = useState(false);
    const navigate = useNavigate();

    return (
        <nav className="Navbar">
            <div className="container">
                <div className="banner" onClick={() => navigate("/")}>
                    CoreAssist
                </div>

                <ul className='menu'>
                    <li><a className='menu-item' href="#home">Home</a></li>
                    <li><a className='menu-item' href="#about-us">About Us</a></li>
                    <li><a className='menu-item' href="#services-offered">Services Offered</a></li>
                </ul>

                <div className="right-side">
                    <button className="contact-btn"><a className='contact-btn' href="#contact-us">Contact Us</a></button>
                    <button className="menu-btn" onClick={() => setMenubar(true)}>
                        <FiMenu />
                    </button>
                </div>
            </div>
            {menubar && <Menubar onClose={() => setMenubar(false)} />}
        </nav>
    )
}

export default Navbar