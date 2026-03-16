import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X, ChevronRight } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import companyLogoImage from '../assets/companyLogo.png';
import './Navbar.css';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Platform', path: '/platform' },
    { name: 'Services', path: '/services' },
    { name: 'ACIS', path: '/acis' },
    { name: 'About', path: '/about' },
    // { name: 'Pricing', path: '/pricing' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled glass' : ''}`}>
      <div className="container nav-content">
        <Link to="/" className="logo">
          <img src={companyLogoImage} alt="Netcradus" className="logo-image" />
        </Link>

        <div className="nav-links desktop-only">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="nav-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <Link to="/contact" className="btn btn-primary desktop-only">
            Book a Demo
          </Link>
          <button className="mobile-menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-links">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="mobile-link" 
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name} <ChevronRight size={16} />
            </Link>
          ))}
          <Link to="/contact" className="btn btn-primary" onClick={() => setIsMenuOpen(false)}>
            Book a Demo
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
