import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Radar, Users, Layers, ArrowRight, CheckCircle2 } from 'lucide-react';

export const PRODUCTS = [
  {
    id: 'acis',
    name: 'ACIS',
    tagline: 'SIEM Tool',
    description:
      'Advanced Cyber Intelligence System for SIEM, SOAR, Threat Intelligence and SOC.',
    path: '/acis',
    icon: Shield,
  },
  {
    id: 'netxdr',
    name: 'Net XDR',
    tagline: 'XDR Platform',
    description: 'Extended Detection & Response Platform.',
    path: '/netxdr',
    icon: Radar,
  },
  {
    id: 'crm',
    name: 'CRM Workspace',
    tagline: 'CRM Platform',
    description: 'Customer Relationship Management Platform.',
    path: '/crm',
    icon: Users,
  },
  {
    id: 'netcrad',
    name: 'NetCrad',
    tagline: 'Unified Platform',
    description: 'Unified Cybersecurity Platform.',
    path: '/netcrad',
    icon: Layers,
  },
];

const WHY_CHOOSE_US = [
  'Enterprise Security',
  'AI Powered',
  'Fast Deployment',
  'Easy Integration',
  '24×7 Support',
];

const ProductMegaMenu = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        // <motion.div
        //   initial={{ opacity: 0, y: -14 }}
        //   animate={{ opacity: 1, y: 0 }}
        //   exit={{ opacity: 0, y: -14 }}
        //   transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        //   className="fixed top-[100px] left-1/2 -translate-x-1/2 z-[1000] w-[1150px] max-w-[95vw] px-4"
        //   onMouseLeave={onClose}
        // >
        <motion.div
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed top-[100px] left-1/2 z-[1000] w-[1150px] max-w-[95vw]"
          style={{ marginLeft: '-575px' }}
          onMouseLeave={onClose}
        >
          <div
            className="bg-white border overflow-hidden"
            style={{
              borderRadius: '24px',
              borderColor: '#E5E7EB',
              boxShadow: '0 25px 60px -12px rgba(17,24,39,0.18), 0 8px 20px -8px rgba(17,24,39,0.08)',
            }}
          >
            <div className="grid" style={{ gridTemplateColumns: '300px 1fr' }}>
              {/* LEFT COLUMN */}
              <div
                className="p-8 flex flex-col"
                style={{ background: '#FAFAFA', borderRight: '1px solid #E5E7EB' }}
              >
                <span
                  className="text-[11px] font-bold uppercase tracking-[0.2em] mb-3"
                  style={{ color: '#FF6A00' }}
                >
                  Our Products
                </span>
                <p className="text-sm leading-relaxed mb-8" style={{ color: '#6B7280' }}>
                  Powerful cybersecurity products designed for enterprises.
                </p>

                <h4 className="text-sm font-bold mb-4" style={{ color: '#111827' }}>
                  Why Choose Our Products?
                </h4>

                <ul className="flex flex-col gap-3">
                  {WHY_CHOOSE_US.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm" style={{ color: '#374151' }}>
                      <CheckCircle2 size={16} style={{ color: '#FF6A00' }} strokeWidth={2.5} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* RIGHT COLUMN - PRODUCT CARDS */}
              <div className="grid grid-cols-2" style={{ gridAutoRows: '1fr' }}>
                {PRODUCTS.map((product, index) => {
                  const Icon = product.icon;
                  const isRightEdge = index % 2 === 1;
                  const isBottomRow = index >= 2;

                  return (
                    <Link
                      key={product.id}
                      to={product.path}
                      onClick={onClose}
                      className="group p-7 flex flex-col transition-colors duration-300"
                      style={{
                        borderRight: isRightEdge ? 'none' : '1px solid #E5E7EB',
                        borderBottom: isBottomRow ? 'none' : '1px solid #E5E7EB',
                        textDecoration: 'none',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = '#FFF7ED')}
                      onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                    >
                      <div
                        className="w-11 h-11 flex items-center justify-center mb-4 transition-all duration-300"
                        style={{
                          borderRadius: '12px',
                          background: '#FFF0E5',
                          color: '#FF6A00',
                        }}
                      >
                        <Icon size={20} />
                      </div>

                      <h4 className="text-base font-bold mb-0.5" style={{ color: '#111827' }}>
                        {product.name}
                      </h4>

                      <span
                        className="text-[11px] font-semibold uppercase tracking-wider mb-2.5"
                        style={{ color: '#FF6A00' }}
                      >
                        {product.tagline}
                      </span>

                      <p className="text-sm leading-relaxed mb-4 flex-grow" style={{ color: '#6B7280' }}>
                        {product.description}
                      </p>

                      <span
                        className="inline-flex items-center gap-1.5 text-sm font-bold transition-all duration-300 group-hover:gap-2.5"
                        style={{ color: '#FF6A00' }}
                      >
                        Learn More <ArrowRight size={15} />
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductMegaMenu;