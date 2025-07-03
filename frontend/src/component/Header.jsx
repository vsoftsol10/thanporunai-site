import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/thanporunai-logo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="main-header">
      <div className="header-container">
        <Link to="/" className="logo">
          <img src={logo} alt="Logo" />
        </Link>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/about" onClick={closeMenu}>Who We Are</Link>
          <Link to="/services" onClick={closeMenu}>What We Do</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
        </nav>

        <button className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
