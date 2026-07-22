"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Contact", href: "/contact" },
  { name: "Settings", href: "/settings" },
];

function Footer() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="w-full border-t border-[#1a3a2a] bg-[#050a0e]/90 overflow-hidden relative z-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-6 py-12"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start gap-3">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-7 h-7 border border-[#00ff88] flex items-center justify-center group-hover:shadow-[0_0_10px_rgba(0,255,136,0.4)]">
                <span className="text-[#00ff88] text-xs font-bold">{">"}</span>
              </div>
              <span className="text-lg font-bold tracking-widest text-[#00ff88] uppercase">MyApp</span>
            </Link>
            <p className="text-xs text-[#3a6a4a] max-w-[250px] text-center md:text-left leading-relaxed">
              // Building the future of web applications with precision.
            </p>
          </motion.div>

          <nav>
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              {links.map((link) => (
                <motion.li key={link.name} variants={itemVariants} whileHover={{ y: -2 }}>
                  <Link
                    href={link.href}
                    className="text-xs font-bold uppercase tracking-widest text-[#5a8a6a] transition-colors hover:text-[#00ff88] relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#00ff88] transition-all group-hover:w-full"></span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          <motion.div variants={itemVariants} className="flex flex-col items-center md:items-end gap-3">
            <p className="text-[10px] font-bold text-[#3a6a4a] uppercase tracking-[0.2em]">
              © {new Date().getFullYear()} MyApp Inc.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-12 pt-8 border-t border-[#1a3a2a] flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <div className="flex gap-6">
            <Link href="#" className="text-[10px] text-[#3a6a4a] hover:text-[#00ff88] transition-colors uppercase tracking-widest">
              Privacy
            </Link>
            <Link href="#" className="text-[10px] text-[#3a6a4a] hover:text-[#00ff88] transition-colors uppercase tracking-widest">
              Terms
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
            className="flex items-center gap-2 bg-[#0a1419] px-3 py-1.5 border border-[#1a3a2a]"
          >
            <div className="w-1.5 h-1.5 bg-[#00ff88] shadow-[0_0_6px_#00ff88]"></div>
            <span className="text-[9px] text-[#00ff88] font-bold uppercase tracking-widest">
              System Operational
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
    </footer>
  );
}

export default Footer;
