import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#home" className="navbar-name">sarah halverson</a>

      {/* Desktop links */}
      <div className="navbar-links">
        <a href="#about">about</a>
        <a href="#projects">projects</a>
        <a href="#resume">resume</a>
      </div>

      {/* Hamburger button */}
      <button
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <a href="#about" onClick={closeMenu}>about</a>
        <a href="#projects" onClick={closeMenu}>projects</a>
        <a href="#resume" onClick={closeMenu}>resume</a>
      </div>
    </nav>
  );
}

export default Navbar;