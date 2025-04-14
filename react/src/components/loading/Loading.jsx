import React from "react";
import { motion } from "framer-motion";

function Loading() {
  const text = "Loading...".split("");

  return (
    <div className="relative flex justify-center items-center min-h-screen">
      <div className="absolute inset-0 bg-slate-400 opacity-50"></div>
      <div className="flex gap-1 text-xl md:text-2xl font-bold text-white">
        {text.map((char, index) => (
          <motion.span
            key={index}
            className="text-blue-600"
            initial={{ y: 0, opacity: 0.5 }}
            animate={{
              y: [0, -10, 0], 
              opacity: [0.5, 1, 0.5], 
            }}
            transition={{
              duration: 1, 
              ease: "easeInOut",
              repeat: Infinity,
              delay: index * 0.1, 
            }}
          >
            {char}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

export default Loading;
