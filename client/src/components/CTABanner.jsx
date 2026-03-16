import React from 'react';
import { Link } from 'react-router-dom';
import './CTABanner.css';

const CTABanner = () => {
  return (
    <section className="cta-banner reveal">
      <div className="cta-shimmer"></div>
      <div className="container cta-container">
        <h2 className="cta-headline">Ready to Secure Your Organisation?</h2>
        <p className="cta-subtext">
          Join leading enterprises who trust Netcradus for their most critical digital defence needs.
        </p>
        <div className="cta-buttons">
          <Link to="/contact" className="btn cta-btn-white no-underline">Book a Free Consultation</Link>
          <Link to="/contact" className="btn btn-ghost no-underline">Schedule Demo</Link>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
