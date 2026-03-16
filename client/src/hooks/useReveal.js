import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useReveal = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    // Initial check for elements already in view or newly added
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => {
      // If already below scroll or near, observe
      observer.observe(el);
      
      // Immediate check if element is already in view (common on page load)
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add('active');
      }
    });

    return () => observer.disconnect();
  }, [pathname]); // Re-run on route change
};
