import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, ChevronDown, Phone } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import SolutionsMegaMenu, { SOLUTIONS } from './SolutionsMegaMenu';
import ProductMegaMenu, { PRODUCTS } from './ProductMegaMenu';
import './Navbar.css';

const Navbar = () => {
  useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null); // 'solutions' | 'products' | null
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);

  const closeTimeoutRef = useRef(null);
  const navRef = useRef(null);
  const location = useLocation();

  // Handle Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll on mobile drawer open
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

  // Close mega menus on route change
  useEffect(() => {
    setActiveMenu(null);
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Click Outside & Escape key handlers
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Hover Handlers with 180ms debounce delay
  const handleMouseEnter = (menuName) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setActiveMenu(menuName);
  };

  const handleMouseLeave = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 180);
  };

  // Click / Touch Toggle Handler
  const handleMenuToggle = (menuName, e) => {
    e.stopPropagation();
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setActiveMenu((prev) => (prev === menuName ? null : menuName));
  };

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
    <nav ref={navRef} className={`navbar ${isScrolled ? 'scrolled glass' : ''}`}>
      <div className="container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-16 xl:px-24 flex lg:grid lg:grid-cols-[auto_1fr_auto] items-center justify-between h-20 lg:h-24">
        
        {/* Mobile Left: Hamburger Toggle */}
        <button
          className="lg:hidden w-10 h-10 flex items-center justify-center text-white bg-transparent border-none cursor-pointer p-0 shrink-0 z-10"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Brand Logo (Centered on mobile, Left aligned on desktop) */}
        <Link to="/" className="flex items-center justify-center gap-2 group mx-auto lg:mx-0">
          <img
            src="/Netcradus logo01.png"
            alt="Netcradus"
            className="h-10 sm:h-12 md:h-14 lg:h-24 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="nav-links desktop-only hidden lg:flex justify-center items-center gap-8">
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

          {/* Solutions Mega Menu Trigger */}
          <div
            className={`nav-item-solutions relative ${activeMenu === 'solutions' ? 'open' : ''}`}
            onMouseEnter={() => handleMouseEnter('solutions')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              onClick={(e) => handleMenuToggle('solutions', e)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleMenuToggle('solutions', e);
                }
              }}
              aria-expanded={activeMenu === 'solutions'}
              aria-haspopup="true"
              className={`nav-link-solutions nav-link text-sm font-semibold tracking-wide transition-colors flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0 outline-none ${
                isActiveLink('/services') || SOLUTIONS.some((s) => isActiveLink(s.path)) || activeMenu === 'solutions'
                  ? 'active text-accent'
                  : 'text-text-secondary hover:text-accent'
              }`}
            >
              Solutions
              <ChevronDown
                size={14}
                className={`transition-transform duration-300 ${activeMenu === 'solutions' ? 'rotate-180 text-accent' : ''}`}
              />
            </button>

            <SolutionsMegaMenu
              isOpen={activeMenu === 'solutions'}
              onClose={() => setActiveMenu(null)}
              onMouseEnter={() => handleMouseEnter('solutions')}
              onMouseLeave={handleMouseLeave}
            />
          </div>

          {/* Products Mega Menu Trigger */}
          <div
            className={`nav-item-products relative ${activeMenu === 'products' ? 'open' : ''}`}
            onMouseEnter={() => handleMouseEnter('products')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              onClick={(e) => handleMenuToggle('products', e)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleMenuToggle('products', e);
                }
              }}
              aria-expanded={activeMenu === 'products'}
              aria-haspopup="true"
              className={`nav-link-products nav-link text-sm font-semibold tracking-wide transition-colors flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0 outline-none ${
                PRODUCTS.some((p) => isActiveLink(p.path)) || activeMenu === 'products'
                  ? 'active text-accent'
                  : 'text-text-secondary hover:text-accent'
              }`}
            >
              Products
              <ChevronDown
                size={14}
                className={`transition-transform duration-300 ${activeMenu === 'products' ? 'rotate-180 text-accent' : ''}`}
              />
            </button>

            <ProductMegaMenu
              isOpen={activeMenu === 'products'}
              onClose={() => setActiveMenu(null)}
              onMouseEnter={() => handleMouseEnter('products')}
              onMouseLeave={handleMouseLeave}
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

        {/* CTA Buttons & Mobile Phone Call Icon */}
        <div className="flex justify-end items-center gap-3 sm:gap-4 shrink-0 z-10">
          {/* Mobile Right: Circular Phone Call Icon Button */}
          <a
            href="tel:1800121008800"
            className="lg:hidden w-10 h-10 rounded-full border border-[#FF6B00] flex items-center justify-center text-[#FF6B00] hover:bg-[#FF6B00] hover:text-white transition-colors duration-300 shrink-0"
            aria-label="Call Us"
          >
            <Phone size={18} />
          </a>

          {/* Desktop Toll-Free Number CTA Button */}
          <a
            href="tel:1800121008800"
            className="hidden lg:inline-flex items-center gap-2 px-3.5 py-2 md:px-4 md:py-2.5 lg:px-5 lg:py-3 text-[13px] md:text-[14px] lg:text-[15px] font-semibold text-[#111111] bg-white border border-[#FF6A00] rounded-full transition-all duration-300 hover:bg-[#FF6A00] hover:text-white hover:-translate-y-0.5 hover:shadow-[0_4px_15px_rgba(255,106,0,0.35)] no-underline whitespace-nowrap group shrink-0"
          >
            <Phone size={15} className="shrink-0 text-[#FF6A00] group-hover:text-white transition-colors duration-300" />
            <span>1800 121 008800</span>
          </a>

          {/* Desktop Talk to an Expert CTA Button */}
          <Link 
            to="/contact" 
            className="hidden lg:inline-flex btn-primary px-8 py-3.5 text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-lg hover:scale-105 transition-all no-underline shrink-0"
            style={{ background: 'var(--color-accent)', color: '#ffffff' }}
          >
            Talk to an Expert
          </Link>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-header">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="mobile-close"
            aria-label="Close menu"
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

          {/* Mobile Toll-Free Number CTA Button */}
          <div className="pt-6 px-2">
            <a
              href="tel:1800121008800"
              className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 text-[15px] font-semibold text-[#111111] bg-white border border-[#FF6A00] rounded-full transition-all duration-300 hover:bg-[#FF6A00] hover:text-white no-underline shadow-md group"
              onClick={() => setIsMenuOpen(false)}
            >
              <Phone size={18} className="text-[#FF6A00] group-hover:text-white transition-colors" />
              <span>1800 121 008800</span>
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;