import { motion } from 'framer-motion';
import { 
  Package, 
  ShoppingCart, 
  BarChart3, 
  UtensilsCrossed, 
  Users, 
  Receipt 
} from 'lucide-react';
import './Features.css';

const features = [
  {
    title: 'Inventarios',
    description: 'Control preciso de existencias, alertas de stock bajo y gestión de múltiples bodegas.',
    icon: <Package size={32} />,
  },
  {
    title: 'Ventas y Compras',
    description: 'Flujo completo desde la orden de compra hasta la factura final al cliente.',
    icon: <ShoppingCart size={32} />,
  },
  {
    title: 'Dashboard Analítico',
    description: 'Visualiza tus ingresos, gastos y tendencias en tiempo real con gráficos modernos.',
    icon: <BarChart3 size={32} />,
  },
  {
    title: 'Modo Restaurante',
    description: 'Gestión de mesas, comandas y división de cuentas integrada al sistema.',
    icon: <UtensilsCrossed size={32} />,
  },
  {
    title: 'Gestión de Usuarios',
    description: 'Roles y permisos detallados para proteger la integridad de tu información.',
    icon: <Users size={32} />,
  },
  {
    title: 'Gastos Operativos',
    description: 'Registro detallado de egresos para un control financiero impecable.',
    icon: <Receipt size={32} />,
  },
];

const Features = () => {
  return (
    <section id="features" className="features-section">
      <div className="container">
        <div className="section-header">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-subtitle"
          >
            Poderoso y Flexible
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            Todo lo que tu empresa <span className="highlight">necesita</span>
          </motion.h2>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="feature-icon-wrapper">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
