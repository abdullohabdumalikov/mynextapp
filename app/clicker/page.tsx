"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Clicker() {
    const [clicks, setClicks] = useState(0);

    const handleClick = () => {
        setClicks(prev => prev + 1);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-[#fafafa] font-sans">
            {/* Orqa fondagi yirik xira raqam */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
                <h1 className="text-[40rem] font-black">{clicks}</h1>
            </div>

            <div className="relative z-10 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-gray-400 uppercase tracking-[0.2em] text-sm mb-4 font-bold"
                >
                    Total Interactions
                </motion.p>

                {/* Raqam animatsiyasi */}
                <div className="mb-12 h-24 flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.h2
                            key={clicks}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="text-8xl font-black tracking-tighter text-black"
                        >
                            {clicks}
                        </motion.h2>
                    </AnimatePresence>
                </div>

                {/* Tugma */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleClick}
                    className="relative group bg-black text-white px-12 py-6 rounded-2xl font-black text-xl shadow-2xl hover:shadow-black/20 transition-all duration-300 overflow-hidden"
                >
                    <span className="relative z-10 flex items-center gap-3">
                        CLICK ME
                        <svg
                            width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                            className="group-hover:translate-x-1 transition-transform"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </span>

                    {/* Tugma ichidagi yaltirash effekti */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.6 }}
                    />
                </motion.button>


            </div>
        </div>
    );
}

export default Clicker;