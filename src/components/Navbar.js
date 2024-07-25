import React, { useState } from 'react';
import Logo from '../images/Screenshot 2024-07-09 191722.png';
import LoginModal from './LoginModal'; // Ensure the path is correct

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    const handleLoginClick = () => {
        setShowLogin(true);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="container">
                <a href="#" className="logo">
                    <img src={Logo} alt="Climate Troopers Logo" className="logo-image" />
                </a>
                <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    <li><a href="#about" onClick={closeMenu}>About Us</a></li>
                    <li><a href="#vision-mission" onClick={closeMenu}>Vision & Mission</a></li>
                    <li><a href="#core-elements" onClick={closeMenu}>Core Elements</a></li>
                    <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
                    <li><a href="#get-involved" onClick={closeMenu}>Get Involved</a></li>
                </ul>
                <div className="nav-buttons">
                    <button onClick={handleLoginClick} className="btn-login">Login</button>
                </div>
                <div className={`menu-icon ${menuOpen ? 'change' : ''}`} onClick={toggleMenu}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
            </div>
            {showLogin && <LoginModal setShowLogin={setShowLogin} />}
        </nav>
    );
}

export default Navbar;
