import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

type PreloaderProps = {
  useVideo?: boolean;
  onComplete: () => void;
};

/**
 * Preloader Component
 * 
 * Features:
 * - Fullscreen overlay with brand background (#F1E8E6)
 * - Support for Logo Video or Image
 * - Framer Motion controlled animation timeline
 * - Body scroll locking during active state
 */
export const Preloader: React.FC<PreloaderProps> = ({ useVideo = true, onComplete }) => {
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Prevent scrolling while preloader is active
    document.body.style.overflow = "hidden";

    // Timeline implementation
    // Total duration ~3.3s
    // Start fading out logo/background at 2.5s
    const exitTimer = setTimeout(() => {
      setShouldRender(false);
    }, 2800); 

    const completeTimer = setTimeout(() => {
      onComplete();
      document.body.style.overflow = "auto";
    }, 3600); // 3.3s + extra buffer for exit transition

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
      document.body.style.overflow = "auto";
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {shouldRender && (
        <motion.div
          id="designpilot-preloader-root"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#F1E8E6]"
        >
          {/* Subtle Brand Glow behind Logo */}
          <div className="absolute w-[300px] h-[300px] bg-[#F55951]/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Logo Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98, y: -40 }}
            transition={{ 
              opacity: { delay: 0.4, duration: 0.6, ease: "easeOut" },
              scale: { delay: 0.4, duration: 0.6, ease: "easeOut" },
              exit: { duration: 0.7, ease: "easeInOut" }
            }}
            className="relative z-10 w-full max-w-[320px] md:max-w-[480px] p-4"
          >
            {useVideo ? (
              <video
                autoPlay
                muted
                playsInline
                className="w-full h-auto drop-shadow-2xl"
              >
                <source src="Images/logo-video.mp4" type="video/mp4" />
                {/* Fallback if video fails to load or browser blocks it */}
                <img src="/Images/logo.png" alt="DesignPilot" />
              </video>
            ) : (
              <img
                src="/Images/logo.png"
                alt="DesignPilot Logo"
                className="w-full h-auto drop-shadow-xl"
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
