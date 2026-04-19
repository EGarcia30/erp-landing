import React from 'react';
import { Globe, Send, Camera, Users } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="logo-text">ERP <span className="logo-accent">SV</span></div>
          <p>La solución integral para la gestión empresarial y facturación electrónica en El Salvador.</p>
          <div className="social-links">
            <a href="#"><Globe size={20} /></a>
            <a href="#"><Send size={20} /></a>
            <a href="#"><Camera size={20} /></a>
            <a href="#"><Users size={20} /></a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Producto</h4>
          <ul>
            <li><a href="#hero">Inicio</a></li>
            <li><a href="#features">Funciones</a></li>
            <li><a href="#dte">DTE</a></li>
            <li><a href="#">Precios</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Empresa</h4>
          <ul>
            <li><a href="#">Sobre Nosotros</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Carreras</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Legal</h4>
          <ul>
            <li><a href="#">Privacidad</a></li>
            <li><a href="#">Términos</a></li>
            <li><a href="#">Seguridad</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} ERP SV. Todos los derechos reservados. Desarrollado en El Salvador.</p>
      </div>
    </footer>
  );
};

export default Footer;
