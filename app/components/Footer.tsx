"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Contact", href: "/contact" },
  { name: "Settings", href: "/settings" },
];

function Footer() {
  // Variantlar
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="w-full bg-white border-t border-gray-100 overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-6 py-12"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Logo & Info */}
          <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start gap-3">
            <Link href="/" className="flex items-center gap-2 group cursor-pointer">
              <motion.div
                whileHover={{ rotate: -12, scale: 1.1 }}
                className="w-7 h-7 bg-black rounded-lg flex items-center justify-center transition-all shadow-lg shadow-black/10"
              >
                <span className="text-white text-xs font-bold">M</span>
              </motion.div>
              <span className="text-lg font-bold tracking-tight text-gray-900">MyApp</span>
            </Link>
            <p className="text-sm text-gray-400 max-w-[200px] text-center md:text-left leading-relaxed">
              Building the future of web applications with precision.
            </p>
          </motion.div>

          {/* Navigation Links */}
          <nav>
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              {links.map((link) => (
                <motion.li
                  key={link.name}
                  variants={itemVariants}
                  whileHover={{ y: -2 }}
                >
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-gray-500 transition-colors hover:text-black relative group"
                  >
                    {link.name}
                    <motion.span
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black"
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                    {/* Hover bo'lganda tagidagi chiziq animatsiyasi */}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Social / Copy */}
          <motion.div variants={itemVariants} className="flex flex-col items-center md:items-end gap-3">
            <div className="flex gap-4">
              {[1, 2].map((i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4, backgroundColor: "#f3f4f6" }}
                  whileTap={{ scale: 0.9 }}
                  className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center cursor-pointer transition-colors border border-gray-100"
                >
                  <div className="w-3 h-3 bg-gray-400 rounded-sm"></div>
                </motion.div>
              ))}
            </div>
            <p className="text-xs font-medium text-gray-400 uppercase tracking-[0.2em]">
              © {new Date().getFullYear()} MyApp Inc.
            </p>
          </motion.div>

        </div>

        {/* Pastki qism */}
        <motion.div
          variants={itemVariants}
          className="mt-12 pt-8 border-t border-gray-50 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <div className="flex gap-6">
            <Link href="#" className="text-[10px] text-gray-300 hover:text-gray-600 transition-colors uppercase tracking-widest">Privacy Policy</Link>
            <Link href="#" className="text-[10px] text-gray-300 hover:text-gray-600 transition-colors uppercase tracking-widest">Terms of Service</Link>
          </div>

          <motion.div
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
            className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
            <span className="text-[9px] text-gray-500 font-bold uppercase tracking-widest">System Operational</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </footer>
  );
}

export default Footer;