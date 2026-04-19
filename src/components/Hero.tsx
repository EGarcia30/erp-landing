import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <section id="hero" className="hero-section">
      {/* Background that covers the full viewport width */}
      <motion.div 
        className="hero-bg-overlay"
        style={{ y: y1 }}
      />
      
      <div className="container">
        <div className="hero-content-grid">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-badge">
              <span className="badge-dot"></span>
              Listo para DTE El Salvador
            </div>
            <h1>
              Control Total de tu Negocio con <span className="highlight">Facturación Electrónica</span>
            </h1>
            <p>
              Gestiona inventarios, ventas, mesas y cumple con el Ministerio de Hacienda de forma automática. El ERP diseñado para el mercado salvadoreño.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn-primary">
                Empieza Hoy <ChevronRight size={20} />
              </a>
              <a href="#features" className="btn-secondary">
                Ver Funciones <ArrowRight size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="hero-image-container"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ y: y2 }}
          >
            <div className="image-wrapper">
              <div className="dashboard-mockup">
                <div className="mockup-header"></div>
                <div className="mockup-body">
                  <div className="mockup-sidebar"></div>
                  <div className="mockup-main">
                    <div className="mockup-card"></div>
                    <div className="mockup-card"></div>
                    <div className="mockup-chart"></div>
                  </div>
                </div>
              </div>
              <div className="floating-element dte-card">
                <div className="dte-icon">DTE</div>
                <span>Sello Recibido</span>
              </div>
              <div className="floating-element stats-card">
                <span className="stats-value">+25%</span>
                <p>Eficiencia</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
