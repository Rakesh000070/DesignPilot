import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Dynamic page title
    const routeName = pathname === '/' ? 'Home' : pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2);
    document.title = `${routeName} | WebForge Digital Agency`;
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col selection:bg-primary-100 selection:text-primary-900">
      <Navigation />
      
      <main className="flex-grow pt-24">
        {children}
      </main>

      <Footer />
    </div>
  );
};
