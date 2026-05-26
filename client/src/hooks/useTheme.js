import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    // document.documentElement.setAttribute('data-theme', theme);
    // localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', 'dark');
  }, [theme]);

  const toggleTheme = () => {
    // setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return { theme: 'dark', toggleTheme };
};
