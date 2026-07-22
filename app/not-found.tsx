"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function NotFound() {
  const [mounted, setMounted] = useState(false);
  const [isHacked, setIsHacked] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);

    const handleMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });

    let keys = "";
    const handleKey = (e: KeyboardEvent) => {
      keys += e.key;
      if (keys.includes("god")) {
        setIsHacked(true);
        keys = "";
      }
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("keydown", handleKey);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center transition-colors duration-1000 overflow-hidden ${
        isHacked ? "bg-[#001a0a]" : "bg-[#050a0e]"
      }`}
    >
      <div
        className="pointer-events-none fixed inset-0 z-10"
        style={{
          background: `radial-gradient(150px circle at ${pos.x}px ${pos.y}px, ${
            isHacked ? "rgba(0,255,136,0.2)" : "rgba(0,255,136,0.05)"
          }, transparent)`,
        }}
      />

      <main className="relative z-20 text-center px-6">
        <div className="relative inline-block group">
          <h1
            className={`text-[10rem] md:text-[12rem] font-black leading-none select-none transition-all ${
              isHacked ? "text-[#00ff88] animate-pulse" : "text-[#1a3a2a] group-hover:text-[#00ff88]"
            }`}
          >
            404
          </h1>
          <span className="absolute -top-4 -right-8 border border-[#00ff88] text-[#00ff88] text-[10px] px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity font-mono">
            {isHacked ? "ROOT ACCESS GRANTED" : "Don't touch me!"}
          </span>
        </div>

        <h2
          className={`text-xl font-bold mt-4 mb-6 ${
            isHacked ? "text-[#00ff88] font-mono" : "text-[#5a8a6a]"
          }`}
        >
          {isHacked ? "> SYSTEM_OVERRIDE_SUCCESS" : "// Yo'qolib qoldingizmi?"}
        </h2>

        <div
          className={`mx-auto max-w-sm p-4 mb-10 text-left font-mono text-xs transition-all border ${
            isHacked
              ? "bg-[#0a1419] text-[#00ff88] border-[#00ff88]"
              : "bg-[#0a1419] text-[#5a8a6a] border-[#1a3a2a]"
          }`}
        >
          <p className="mb-1">{isHacked ? "[OK] Decrypting database..." : "> Searching for page..."}</p>
          <p className="mb-1 opacity-70">{isHacked ? "[OK] Bypassing firewall..." : "> Status: Not Found"}</p>
          <p
            className="animate-pulse underline cursor-pointer text-[#00ff88]"
            onClick={() => alert("Pashalka: 'god' so'zini klaviaturada tering!")}
          >
            {isHacked ? "[READY] Welcome, Admin." : "> Hint: Try typing 'god'"}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className={`px-10 py-4 font-bold text-sm transition-all active:scale-95 uppercase tracking-widest ${
              isHacked
                ? "hack-btn-filled"
                : "hack-btn"
            }`}
          >
            Bosh sahifaga qaytish
          </Link>

          <button
            onClick={() => window.location.reload()}
            className="hack-btn px-10 py-4 text-sm"
          >
            Qayta yuklash
          </button>
        </div>
      </main>

      <div className="absolute inset-0 pointer-events-none opacity-20 font-mono text-[#00ff88]">
        <div className="absolute top-10 left-10 animate-bounce text-xs">undefined</div>
        <div className="absolute bottom-20 right-20 animate-pulse text-xs">null</div>
        <div className="absolute top-1/2 left-1/4 animate-bounce text-xs">NaN</div>
      </div>
    </div>
  );
}
