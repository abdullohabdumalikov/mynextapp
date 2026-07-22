"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HomeClient() {
  return (
    <div className="min-h-screen pt-16">
      <main className="relative flex flex-col items-center justify-center px-6 py-24 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00ff88]/5 rounded-full blur-[120px] -z-10"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#1a3a2a] bg-[#0a1419]/80 text-[#00ff88] text-xs font-bold mb-8 uppercase tracking-widest"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full bg-[#00ff88] opacity-50"></span>
            <span className="relative inline-flex h-2 w-2 bg-[#00ff88] shadow-[0_0_6px_#00ff88]"></span>
          </span>
          [ V2.0 // SYSTEM ONLINE ]
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-7xl font-black mb-6 tracking-tighter leading-[1.1]"
        >
          <span className="text-[#3a6a4a]">{"> "}</span>
          <span className="glitch-text" data-text="Build your next">
            Build your next
          </span>
          <br />
          <span className="text-[#00ff88] text-shadow-[0_0_30px_rgba(0,255,136,0.3)]">
            big idea fast
          </span>
          <span className="text-[#3a6a4a]">{";"}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-[#5a8a6a] max-w-xl text-sm md:text-base mb-10 leading-relaxed"
        >
          // Everything you need to ship your project today.
          <br />
          // Clean code, modern design, production ready.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Link href="/about" className="hack-btn-filled w-full sm:w-auto px-10 py-4 text-sm">
            Get Started
          </Link>
          <Link href="/contact" className="hack-btn w-full sm:w-auto px-10 py-4 text-sm">
            View Demo
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 pt-10 border-t border-[#1a3a2a] w-full max-w-4xl"
        >
          <p className="text-[10px] font-bold text-[#3a6a4a] uppercase tracking-[0.3em] mb-6">
            // Trusted by developers
          </p>
          <div className="flex flex-wrap justify-center gap-8 opacity-40">
            <div className="text-sm font-bold text-[#00ff88] tracking-widest">TechFlow</div>
            <div className="text-sm font-bold text-[#00ff88] tracking-widest">DevStack</div>
            <div className="text-sm font-bold text-[#00ff88] tracking-widest">NextGen</div>
          </div>
        </motion.div>

        <div className="absolute bottom-10 left-6 text-[10px] text-[#3a6a4a] hidden md:block font-mono">
          <p>root@myapp:~$ status --check</p>
          <p className="text-[#00ff88]">[OK] All systems nominal</p>
        </div>
      </main>
    </div>
  );
}
