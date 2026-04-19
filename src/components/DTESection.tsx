import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Zap, FileText } from 'lucide-react';
import './DTESection.css';

const DTESection = () => {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0.3, 0.7], [50, -50]);
  const rotateParallax = useTransform(scrollYProgress, [0.3, 0.7], [-2, 2]);

  return (
    <section id="dte" className="dte-section">
      <div className="container">
        <div className="dte-grid-container">
          <motion.div 
            className="dte-visual-side"
            style={{ y: yParallax, rotate: rotateParallax }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="digital-invoice-card">
              <div className="invoice-header">
                <div className="invoice-icon-box">
                  <FileText className="text-primary" size={32} />
                </div>
                <div className="invoice-meta">
                  <h4>Factura Electrónica</h4>
                  <p>DTE-01-HAS8291-001</p>
                </div>
              </div>
              <div className="invoice-divider"></div>
              <div className="invoice-items">
                <div className="invoice-item">
                  <span>Licencia ERP Anual</span>
                  <span>$450.00</span>
                </div>
                <div className="invoice-item">
                  <span>Soporte Premium</span>
                  <span>$50.00</span>
                </div>
                <div className="invoice-item">
                  <span>IVA (13%)</span>
                  <span>$65.00</span>
                </div>
                <div className="invoice-total-row">
                  <span>Total</span>
                  <span>$565.00</span>
                </div>
              </div>
              <div className="invoice-footer">
                <div className="qr-box"></div>
                <div className="sello-mh">
                  <ShieldCheck size={14} /> Sello Recibido MH
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="dte-text-side"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-subtitle">Cumplimiento Fiscal</span>
            <h2 className="section-title">Olvídate de las <span className="highlight">complicaciones</span> del DTE</h2>
            <p className="dte-main-description">
              Nuestra integración nativa con el Ministerio de Hacienda de El Salvador permite que tu negocio emita documentos tributarios electrónicos de forma inmediata y segura.
            </p>

            <div className="dte-benefits">
              <div className="benefit-row">
                <div className="benefit-icon"><Zap size={20} /></div>
                <div className="benefit-content">
                  <h4>Transmisión Automática</h4>
                  <p>Envío directo al API del MH en el momento de la venta.</p>
                </div>
              </div>
              <div className="benefit-row">
                <div className="benefit-icon"><CheckCircle2 size={20} /></div>
                <div className="benefit-content">
                  <h4>Validación Instantánea</h4>
                  <p>Verificación de NIT/DUI y estructura del JSON DTE v1.</p>
                </div>
              </div>
              <div className="benefit-row">
                <div className="benefit-icon"><ShieldCheck size={20} /></div>
                <div className="benefit-content">
                  <h4>Respaldo Permanente</h4>
                  <p>Almacenamiento seguro de sellos y códigos de generación.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DTESection;
