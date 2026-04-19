import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
      <div className="container navbar-flex">
        <div className="navbar-logo">
          <span className="logo-text">ERP <span className="logo-accent">SV</span></span>
        </div>

        <div className="navbar-links desktop">
          <a href="#hero">Inicio</a>
          <a href="#features">Funciones</a>
          <a href="#dte">Facturación DTE</a>
          <a href="#contact" className="nav-cta">Adquirir Ahora</a>
        </div>

        <div className="navbar-mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar-mobile-menu ${isOpen ? 'active' : ''}`}>
        <a href="#hero" onClick={() => setIsOpen(false)}>Inicio</a>
        <a href="#features" onClick={() => setIsOpen(false)}>Funciones</a>
        <a href="#dte" onClick={() => setIsOpen(false)}>Facturación DTE</a>
        <a href="#contact" className="mobile-cta" onClick={() => setIsOpen(false)}>Adquirir Ahora</a>
      </div>
    </nav>
  );
};

export default Navbar;
