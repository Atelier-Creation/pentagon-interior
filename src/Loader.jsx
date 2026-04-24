import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Official Lucide-Animated Style Icon Components ---

const LayoutPanelTopIcon = ({ color }) => (
  <svg fill="none" height="80" stroke={color} strokeWidth="1.5" viewBox="0 0 24 24" width="80">
    <motion.rect 
      initial="normal"
      animate="animate"
      height="7" rx="1" 
      variants={{
        normal: { opacity: 1, translateY: 0 },
        animate: { opacity: [0, 1], translateY: [-5, 0], transition: { repeat: Infinity, duration: 1, repeatDelay: 0.5 } },
      }} 
      width="18" x="3" y="3" 
    />
    <motion.rect 
      initial="normal"
      animate="animate"
      height="7" rx="1" 
      variants={{
        normal: { opacity: 1, translateX: 0 },
        animate: { opacity: [0, 1], translateX: [-10, 0], transition: { delay: 0.3, repeat: Infinity, duration: 1, repeatDelay: 0.5 } },
      }} 
      width="7" x="3" y="14" 
    />
    <motion.rect 
      initial="normal"
      animate="animate"
      height="7" rx="1" 
      variants={{
        normal: { opacity: 1, translateX: 0 },
        animate: { opacity: [0, 1], translateX: [10, 0], transition: { delay: 0.4, repeat: Infinity, duration: 1, repeatDelay: 0.5 } },
      }} 
      width="7" x="14" y="14" 
    />
  </svg>
);

const PickaxeIcon = ({ color }) => (
  <motion.svg 
    animate="animate"
    fill="none" height="80" stroke={color} strokeWidth="1.5" 
    style={{ transformOrigin: "0% 100%" }}
    variants={{
      normal: { rotate: 0 },
      animate: { rotate: [0, -25, 30, 0], transition: { duration: 1.2, repeat: Infinity, ease: "easeInOut" } }
    }} 
    viewBox="0 0 24 24" width="80"
  >
    <path d="m14 13-8.381 8.38a1 1 0 0 1-3.001-3L11 9.999" />
    <path d="M15.973 4.027A13 13 0 0 0 5.902 2.373c-1.398.342-1.092 2.158.277 2.601a19.9 19.9 0 0 1 5.822 3.024" />
    <path d="M16.001 11.999a19.9 19.9 0 0 1 3.024 5.824c.444 1.369 2.26 1.676 2.603.278A13 13 0 0 0 20 8.069" />
    <path d="M18.352 3.352a1.205 1.205 0 0 0-1.704 0l-5.296 5.296a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l5.296-5.296a1.205 1.205 0 0 0 0-1.704z" />
  </motion.svg>
);

const ConstructionIcon = ({ color }) => (
  <svg fill="none" height="80" stroke={color} strokeWidth="1.5" viewBox="0 0 24 24" width="80">
    <defs>
      <motion.pattern 
        animate={{ x: [0, 6], transition: { repeat: Infinity, ease: "linear", duration: 0.5 } }} 
        height="14" id="stripes" patternUnits="userSpaceOnUse" width="6"
      >
        <path d="M-4 -2 L14 30" stroke={color} strokeWidth="2" />
      </motion.pattern>
    </defs>
    <rect fill="url(#stripes)" height="8" rx="1" width="20" x="2" y="6" />
    <path d="M17 14v7M7 14v7M17 3v3M7 3v3" />
  </svg>
);

const HomeIcon = ({ color }) => (
  <svg fill="none" height="80" stroke={color} strokeWidth="1.5" viewBox="0 0 24 24" width="80">
    <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <motion.path 
      animate={{ opacity: [0, 1], pathLength: [0, 1] }} 
      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
      d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" 
    />
  </svg>
);

const SparklesIcon = ({ color }) => (
  <svg fill="none" height="80" stroke={color} strokeWidth="1.5" viewBox="0 0 24 24" width="80">
    <motion.path 
      animate={{ y: [0, -2, 0], fill: ["none", "currentColor", "none"] }} 
      transition={{ duration: 1.2, repeat: Infinity }}
      d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" 
    />
    <motion.path 
      animate={{ opacity: [0.3, 1, 0.3] }} 
      transition={{ duration: 1, repeat: Infinity }}
      d="M20 3v4M22 5h-4M4 17v2M5 18H3" 
    />
  </svg>
);

const RockingChairIcon = ({ color }) => (
  <motion.svg 
    animate={{ rotate: [-8, 8, -8] }}
    transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
    fill="none" height="80" stroke={color} strokeWidth="1.5" 
    style={{ originX: "10%", originY: "90%" }}
    viewBox="0 0 24 24" width="80"
  >
    <polyline points="3.5 2 6.5 12.5 18 12.5" />
    <line x1="9.5" x2="5.5" y1="12.5" y2="20" />
    <line x1="15" x2="18.5" y1="12.5" y2="20" />
    <path d="M2.75 18a13 13 0 0 0 18.5 0" />
  </motion.svg>
);

const LogoText = ({ progress, color }) => (
  <svg 
    version="1.2" 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 820 150" 
    className="w-48 h-12 mb-4"
  >
    <g fill={color}>
      {[
        "m10 101.1v-37l24.8-0.3c22-0.3 25.1-0.5 28.6-2.2 9.7-4.8 10.2-18 1-23.7-3.8-2.3-4.5-2.4-29.7-2.7l-25.8-0.3 0.3-11.7 0.3-11.7 23-0.3c23.9-0.3 30.5 0.3 40.2 4 7.1 2.6 15.5 10.4 19 17.6 2.6 5.2 2.8 6.7 2.8 16.7 0 10-0.3 11.5-2.8 16.6-1.5 3.1-4.7 7.5-7.1 9.7-8.8 8.1-17.8 11-37.3 11.9l-13.3 0.6v24.9 24.8h-12-12z", // P
        "m99.2 74.5l0.3-63.5h30.3 30.2v12 12h-18-18v14.5 14.5h25.5 25.5v11 11l-25.2 0.2-25.3 0.3-0.3 14.3-0.3 14.2h18.1 18v11.5 11.5h-30.5-30.6z", // E
        "m248.4 119.4c-36.2-52.1-41.1-58.9-43.3-59.2-2.1-0.3-2.1-0.3-2.1 23.7v24.1h-12-12v-48.5-48.6l11.7 0.3 11.7 0.3 5.3 7.5c2.9 4.1 16 22.7 29.1 41.3l23.7 33.8 0.3-41.6 0.2-41.6 12.3 0.3 12.2 0.3 0.3 63.3 0.2 63.2h-12.3-12.4z", // N
        "m317 58h24v80h-24zm-25.3-24.7c-0.4-0.3-0.7-5.2-0.7-10.9 0-9.7 0.1-10.2 2.3-10.8 1.2-0.3 18.3-0.6 38-0.6h35.7v23h-37.3c-20.6 0-37.7-0.3-38-0.7z", // T
        "m371 137.5c0-0.4 10.6-28 38.7-100.8 6.9-17.8 10-24.7 11-24.5 1.5 0.3 26.6 62.9 47.7 119.1l2.5 6.8-12.6-0.3-12.5-0.3-6.5-18c-3.6-9.9-8.9-24.7-11.8-33-3-8.5-5.9-15.1-6.6-15.3-0.9-0.2-2.5 3-4.8 9.5-1.9 5.4-7.2 20.5-11.9 33.6l-8.6 23.7h-12.3c-6.8 0-12.3-0.2-12.3-0.5z", // A
        "m525.9 136.5c-9.4-1.9-20.1-5.8-25.8-9.4-19.5-12.5-28.9-39-23.6-66.8 2.2-11.9 8-22.6 16.3-30.4 8.1-7.7 13.8-10.9 25.7-14.5 8.3-2.5 10.7-2.7 31.3-3.2l22.2-0.4v11.6 11.6h-17.3c-9.5 0-20 0.5-23.3 1.1-8.3 1.5-17.5 6.1-21.9 11-6.2 6.9-8.8 13.8-9.3 25-0.8 17.7 5.1 30 17.6 36.7 6.8 3.7 17 6.2 25 6.2h5.2v-16-16h-12.5-12.6l0.3-11.7 0.3-11.8 24.3-0.3 24.2-0.2v39.5 39.5l-19.7-0.1c-11.9-0.1-22.4-0.6-26.4-1.4z", // G
        "m627.9 138c-19.2-3-35.3-14.9-44-32.5-5.4-11-7.2-20.2-6.6-34 1-23.4 10.9-41 29.2-52 7.9-4.7 16-7.1 27-8 18.4-1.4 35.1 5 47.3 17.9 11.9 12.8 17.4 27.1 17.4 45.1 0.1 29.4-15.9 52.9-41.3 61-8.9 2.8-20.7 3.8-29 2.5zm23.4-25c20.3-7.6 29.3-35.1 18.8-57.6-3.9-8.4-9.1-13.8-16.9-17.6-6-3-7.6-3.3-15.2-3.3-7.1 0-9.5 0.5-14.2 2.7-7.9 3.7-12.1 7.1-15.9 12.9-11.9 18.5-8.1 46.6 7.9 58.2 4.6 3.3 11.1 6.1 16.2 7.1 4.6 0.8 13.7-0.3 19.3-2.4zm-19.5-27.5c-6.4-3.6-7.7-12.3-2.7-18 2.8-3.1 3.6-3.5 8.1-3.5 6 0 8.3 1.1 10.3 5 4.2 8-0.1 16.8-8.5 17.6-2.9 0.3-5.5-0.1-7.2-1.1z", // O
        "m759.4 98c-15.3-22-28.5-40-29.1-40-1 0-1.3 5.7-1.3 25v25h-12-12v-48.5-48.6l11.7 0.3 11.6 0.3 13.6 19.5c7.6 10.7 20.8 29.6 29.4 41.8l15.7 22.4v-42.1-42.1h12 12v63.5 63.5h-11.8-11.9z" // N
      ].map((d, index) => (
        <motion.path 
          key={index}
          d={d}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: progress > (index / 8) ? 1 : 0,
            opacity: progress > (index / 8) ? 1 : 0
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      ))}
    </g>
  </svg>
);

// --- Loader Component ---

const icons = [
  { id: 'plan', Component: LayoutPanelTopIcon, displayDuration: 3000 },
  { id: 'construction', Component: ConstructionIcon, displayDuration: 3000 },
  { id: 'pickaxe', Component: PickaxeIcon, displayDuration: 2800 },
  { id: 'home', Component: HomeIcon, displayDuration: 3000 },
  { id: 'sparkles', Component: SparklesIcon, displayDuration: 2400 },
  { id: 'furniture', Component: RockingChairIcon, displayDuration: 3600 },
  { id: 'logo', isLogo: true, displayDuration: 3000 }
];

const BRAND_COLOR = "#8c6d5a";

export default function Loader({ onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const currentIconData = icons[currentIndex];
    if (currentIndex < icons.length - 1) {
      const timer = setTimeout(() => {
        setCurrentIndex(prev => prev + 1);
      }, currentIconData.displayDuration);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        if (onComplete) onComplete();
      }, currentIconData.displayDuration);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, onComplete]);

  const currentIconData = icons[currentIndex];

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
      className="fixed inset-0 flex flex-col items-center justify-center bg-white z-[9999] overflow-hidden"
    >
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.05]"
        style={{ 
          backgroundImage: 'url("/Fline-pattern.png")',
          backgroundSize: '400px',
          backgroundRepeat: 'repeat'
        }}
      />

      <div className="relative z-10 w-64 h-64 flex items-center justify-center">
        <AnimatePresence mode="wait">
          {currentIconData && (
            <motion.div
              key={currentIconData.id}
              initial={{ opacity: 0, scale: 0.8, filter: 'blur(15px)', rotate: -15 }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)', rotate: 0 }}
              exit={{ opacity: 0, scale: 1.2, filter: 'blur(15px)', rotate: 15 }}
              transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
              className="absolute flex items-center justify-center"
            >
              {currentIconData.isLogo ? (
                <motion.img 
                  src="/fav.svg" 
                  alt="Pentagon Interior Logo" 
                  className="w-40 h-40 object-contain"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                />
              ) : (
                <currentIconData.Component color={BRAND_COLOR} />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Progress Indicator */}
      <div className="flex flex-col items-center">
        <LogoText progress={(currentIndex + 1) / icons.length} color={BRAND_COLOR} />
        <div className="w-64 h-[2px] bg-gray-100 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-[#8c6d5a]"
            initial={{ width: 0 }}
            animate={{ width: `${((currentIndex + 1) / icons.length) * 100}%` }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
}
