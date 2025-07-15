import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Logo from '../../assets/thanporunai-logo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="main-header">
      <div className="header-container">
        {/* Top Row - Logo and Support Button */}
        <div className="top-row">
          <div className="logo-icon">
            <a href="/">
              <img
                src={Logo}
                alt="thanporunai-logo"
                className="logo-img"
                style={{ width: '180px', height: '180px', cursor: 'pointer' }}
              />
            </a>
          </div>

          <button className="support-btn">
            <span>Need Us</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </button>

          {/* Mobile Hamburger */}
          <button
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Bottom Row - Navigation Menu */}
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <Link to="/about" onClick={closeMenu}>About Us</Link>
          <Link to="/team" onClick={closeMenu}>Our Team</Link>
          <Link to="/campaigns" onClick={closeMenu}>Our Campaigns</Link>
          <Link to="/projects" onClick={closeMenu}>Our Projects</Link>
          <Link to="/partners" onClick={closeMenu}>Our Partners</Link>
          <Link to="/contact" onClick={closeMenu}>Contact Us</Link>

          {/* Mobile Need Us Button */}
          <div className="mobile-support-btn">
            <button className="support-btn mobile-only">
              <span>Need Us</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;