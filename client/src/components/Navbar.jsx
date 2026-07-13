import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, ChevronDown } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import companyLogoImage from '../assets/companyLogo.png';
import SolutionsMegaMenu, { SOLUTIONS } from './SolutionsMegaMenu';
import ProductMegaMenu, { PRODUCTS } from './ProductMegaMenu';
import './Navbar.css';

const Navbar = () => {
useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Platform', path: '/platform' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActiveLink = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }

    return (
      location.pathname === path ||
      location.pathname.startsWith(`${path}/`)
    );
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled glass' : ''}`}>
<div className="container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-16 xl:px-24 grid grid-cols-[auto_1fr_auto] items-center h-20">
        
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src={companyLogoImage}
            alt="Netcradus"
            className="h-14 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

       <div className="nav-links desktop-only flex justify-center items-center gap-8">
          <Link
            to="/"
            className={`nav-link text-sm font-semibold tracking-wide transition-colors ${
              isActiveLink('/')
                ? 'active text-accent'
                : 'text-text-secondary hover:text-accent'
            }`}
          >
            Home
          </Link>

          <Link
            to="/platform"
            className={`nav-link text-sm font-semibold tracking-wide transition-colors ${
              isActiveLink('/platform')
                ? 'active text-accent'
                : 'text-text-secondary hover:text-accent'
            }`}
          >
            Platform
          </Link>

          <div
            className={`nav-item-solutions ${isSolutionsOpen ? 'open' : ''}`}
            onMouseEnter={() => setIsSolutionsOpen(true)}
            onMouseLeave={() => setIsSolutionsOpen(false)}
          >
            <Link
              to="/services"
              className={`nav-link-solutions nav-link text-sm font-semibold tracking-wide transition-colors ${
                isActiveLink('/services') || SOLUTIONS.some((s) => isActiveLink(s.path))
                  ? 'active text-accent'
                  : 'text-text-secondary hover:text-accent'
              }`}
            >
              Solutions
              <ChevronDown size={14} />
            </Link>

            <SolutionsMegaMenu
              isOpen={isSolutionsOpen}
              onClose={() => setIsSolutionsOpen(false)}
            />
          </div>

          <div
            className={`nav-item-products ${isProductsOpen ? 'open' : ''}`}
            onMouseEnter={() => setIsProductsOpen(true)}
            onMouseLeave={() => setIsProductsOpen(false)}
          >
            <button
              type="button"
              className={`nav-link-products nav-link text-sm font-semibold tracking-wide transition-colors ${
                PRODUCTS.some((p) => isActiveLink(p.path))
                  ? 'active text-accent'
                  : 'text-text-secondary hover:text-accent'
              }`}
            >
              Products
              <ChevronDown size={14} />
            </button>

            <ProductMegaMenu
              isOpen={isProductsOpen}
              onClose={() => setIsProductsOpen(false)}
            />
          </div>

          <Link
            to="/contact"
            className={`nav-link text-sm font-semibold tracking-wide transition-colors ${
              isActiveLink('/contact')
                ? 'active text-accent'
                : 'text-text-secondary hover:text-accent'
            }`}
          >
            Contact
          </Link>
        </div>
                

        <div className="flex justify-end items-center">
          <button
            className="mobile-menu-toggle p-2 lg:hidden text-zinc-900 dark:text-white"
            onClick={() => setIsMenuOpen(prev => !prev)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          </div>
      </div>

      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-header">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="mobile-close"
          >
            <X size={28} />
          </button>
        </div>

        <div className="mobile-links">
          <Link
            to="/"
            className="mobile-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
            <ChevronRight size={18} />
          </Link>

          <Link
            to="/platform"
            className="mobile-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Platform
            <ChevronRight size={18} />
          </Link>

          <button
            type="button"
            className={`mobile-solutions-toggle ${isMobileSolutionsOpen ? 'open' : ''}`}
            onClick={() => setIsMobileSolutionsOpen((prev) => !prev)}
          >
            Solutions
            <ChevronRight size={18} />
          </button>

          <div className={`mobile-solutions-list ${isMobileSolutionsOpen ? 'open' : ''}`}>
            {SOLUTIONS.map((solution) => (
              <Link
                key={solution.id}
                to={solution.path}
                className="mobile-solution-link"
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsMobileSolutionsOpen(false);
                }}
              >
                <span className="mobile-solution-name">{solution.name}</span>
                <span className="mobile-solution-desc">{solution.description}</span>
              </Link>
            ))}
          </div>

          <button
            type="button"
            className={`mobile-products-toggle ${isMobileProductsOpen ? 'open' : ''}`}
            onClick={() => setIsMobileProductsOpen((prev) => !prev)}
          >
            Products
            <ChevronRight size={18} />
          </button>

          <div className={`mobile-products-list ${isMobileProductsOpen ? 'open' : ''}`}>
            {PRODUCTS.map((product) => (
              <Link
                key={product.id}
                to={product.path}
                className="mobile-product-link"
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsMobileProductsOpen(false);
                }}
              >
                <span className="mobile-product-name">{product.name}</span>
                <span className="mobile-product-desc">{product.description}</span>
              </Link>
            ))}
          </div>

          <Link
            to="/contact"
            className="mobile-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
            <ChevronRight size={18} />
          </Link>

          <Link
            to="/contact"
            className="btn-primary mt-6 text-center py-3"
            onClick={() => setIsMenuOpen(false)}
          >
            Book a Demo
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;