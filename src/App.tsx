/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Layout } from './components/Layout';
import { Preloader } from './components/Preloader';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Testimonials = lazy(() => import('./pages/Testimonials'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Contact = lazy(() => import('./pages/Contact'));

// Loading fallback
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  const [showPreloader, setShowPreloader] = useState(false);
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    const hasSeenPreloader = sessionStorage.getItem('designpilot-preloader');
    
    if (!hasSeenPreloader) {
      setShowPreloader(true);
    } else {
      setContentLoaded(true);
    }
  }, []);

  const handlePreloaderComplete = () => {
    setShowPreloader(false);
    setContentLoaded(true);
    sessionStorage.setItem('designpilot-preloader', 'true');
  };

  return (
    <Router>
      <AnimatePresence mode="wait">
        {showPreloader && (
          <Preloader key="preloader" useVideo={true} onComplete={handlePreloaderComplete} />
        )}
      </AnimatePresence>

      <motion.div
        initial={showPreloader ? { opacity: 0, y: 20 } : false}
        animate={contentLoaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Layout>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </Layout>
      </motion.div>
    </Router>
  );
}
