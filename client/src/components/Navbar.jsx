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
    { name: 'Solutions', path: '/services' },
    { name: 'ACIS', path: '/acis' },
    { name: 'About', path: '/about' },
    // { name: 'Pricing', path: '/pricing' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActiveLink = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }

    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled glass' : ''}`}>
      <div className="container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-16 xl:px-24 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2 group">
          <img src={companyLogoImage} alt="Netcradus" className="h-14 w-auto object-contain transition-transform duration-500 group-hover:scale-105" />
        
        </Link>

        <div className="nav-links desktop-only flex gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`nav-link text-sm font-semibold tracking-wide transition-colors ${isActiveLink(link.path) ? 'active text-accent' : 'text-text-secondary hover:text-accent'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="nav-actions flex items-center gap-4">
          <button 
            className="theme-toggle p-2.5 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors flex items-center justify-center border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400" 
            onClick={toggleTheme} 
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={18} className="text-accent-bright" /> : <Moon size={18} className="text-accent" />}
          </button>
          <Link to="/contact" className="btn-primary desktop-only px-8 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
            Initial Briefing
          </Link>
          <button className="mobile-menu-toggle p-2 lg:hidden text-zinc-900 dark:text-white" onClick={() => setIsMenuOpen(prev => !prev)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
     <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
  {/* CLOSE BUTTON */}
  <div className="mobile-header">
    <button onClick={() => setIsMenuOpen(false)} className="mobile-close">
      <X size={28} />
    </button>
  </div>

  {/* LINKS */}
  <div className="mobile-links">
    {navLinks.map((link) => (
      <Link 
        key={link.name} 
        to={link.path} 
        className="mobile-link"
        onClick={() => setIsMenuOpen(false)}
      >
        {link.name}
        <ChevronRight size={18} />
      </Link>
    ))}

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

