import React from 'react';
import { motion } from 'framer-motion';

const SimpleLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-[50]">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full"
      />
    </div>
  );
};

export default SimpleLoader;
