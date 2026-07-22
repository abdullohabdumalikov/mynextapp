"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Clicker() {
  const [clicks, setClicks] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
        <h1 className="text-[30rem] font-black text-[#00ff88]">{clicks}</h1>
      </div>

      <div className="relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[#3a6a4a] uppercase tracking-[0.3em] text-xs mb-4 font-bold"
        >
          // Total Interactions
        </motion.p>

        <div className="mb-12 h-24 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.h2
              key={clicks}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-7xl font-black tracking-tighter text-[#00ff88] shadow-[0_0_30px_rgba(0,255,136,0.2)]"
            >
              {clicks}
            </motion.h2>
          </AnimatePresence>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setClicks((prev) => prev + 1)}
          className="hack-btn-filled px-12 py-6 text-sm relative overflow-hidden group"
        >
          <span className="relative z-10 flex items-center gap-3">
            CLICK ME
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:translate-x-1 transition-transform"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
        </motion.button>
      </div>
    </div>
  );
}

export default Clicker;
