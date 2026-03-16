import React from 'react';
import './SubHero.css';

const SubHero = ({ title, subtitle, label }) => {
  return (
    <section className="subhero">
      <div className="container">
        <div className="subhero-content reveal">
          {label && <span className="section-label">{label}</span>}
          <h1 className="subhero-title">{title}</h1>
          {subtitle && <p className="subhero-subtitle">{subtitle}</p>}
        </div>
      </div>
      <div className="subhero-bg"></div>
    </section>
  );
};

export default SubHero;
