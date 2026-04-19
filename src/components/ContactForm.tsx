import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, MapPin, Phone, Mail } from 'lucide-react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-grid-container">
          <div className="contact-info-panel">
            <span className="section-subtitle">Contacto</span>
            <h2 className="section-title">¿Listo para <span className="highlight">transformar</span> tu empresa?</h2>
            <p className="contact-intro">Déjanos tus datos y un asesor te contactará para una demostración personalizada del ERP SV.</p>
            
            <div className="contact-links-stack">
              <div className="contact-link-item">
                <MapPin className="contact-link-icon" />
                <span>San Salvador, El Salvador</span>
              </div>
              <div className="contact-link-item">
                <Phone className="contact-link-icon" />
                <span>+503 2222-2222</span>
              </div>
              <div className="contact-link-item">
                <Mail className="contact-link-icon" />
                <span>info@erpsv.com</span>
              </div>
            </div>
          </div>

          <div className="contact-form-card-wrapper">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form 
                  key="form"
                  className="contact-main-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                >
                  <div className="form-input-group">
                    <label htmlFor="name">Nombre Completo</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required 
                      placeholder="Ej. Juan Pérez"
                    />
                  </div>
                  <div className="form-input-group">
                    <label htmlFor="email">Correo Electrónico</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required 
                      placeholder="juan@empresa.com"
                    />
                  </div>
                  <div className="form-input-group">
                    <label htmlFor="company">Nombre de tu Empresa</label>
                    <input 
                      type="text" 
                      id="company" 
                      name="company" 
                      value={formData.company}
                      onChange={handleChange}
                      required 
                      placeholder="Mi Negocio S.A. de C.V."
                    />
                  </div>
                  <div className="form-input-group">
                    <label htmlFor="message">Mensaje (Opcional)</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      value={formData.message}
                      onChange={handleChange}
                      rows={4} 
                      placeholder="Cuéntanos un poco sobre tus necesidades..."
                    ></textarea>
                  </div>
                  <button type="submit" className="btn-form-submit" disabled={loading}>
                    {loading ? 'Enviando...' : (
                      <>Enviar Mensaje <Send size={18} /></>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  className="contact-success-panel"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <CheckCircle size={60} className="success-check-icon" />
                  <h3>¡Mensaje Enviado!</h3>
                  <p>Gracias por tu interés. Un especialista de ERP SV se pondrá en contacto contigo muy pronto.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="btn-secondary"
                  >
                    Enviar otro mensaje
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
