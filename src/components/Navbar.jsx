import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#home" className="navbar-name">sarah halverson</a>
      <div className="navbar-links">
        <a href="#about">about</a>
        <a href="#projects">projects</a>
        <a href="#resume">resume</a>
      </div>
    </nav>
  );
}

export default Navbar;