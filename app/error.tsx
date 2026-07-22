"use client";

import React, { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {error.digest && (
        <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
          <span className="text-[15vw] font-black text-[#0a1419] opacity-80 tracking-tighter uppercase leading-none">
            {error.digest.slice(0, 8)}
          </span>
        </div>
      )}

      <div className="relative z-10 w-full max-w-xl text-center">
        <div className="mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 border border-[#ff3366] text-[#ff3366] mb-6 shadow-[0_0_20px_rgba(255,51,102,0.2)]">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-[#ff3366] mb-4 tracking-tighter uppercase">
            {error.name || "Error"}
          </h1>

          <p className="text-[#5a8a6a] text-sm md:text-base font-medium max-w-md mx-auto leading-relaxed">
            // Kutilmagan xatolik yuz berdi. Tizimda nosozlik bo&apos;lishi mumkin.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button onClick={() => reset()} className="hack-btn-filled w-full sm:w-auto px-10 py-4 text-sm !border-[#ff3366] !bg-[#ff3366] hover:!shadow-[0_0_20px_rgba(255,51,102,0.4)]">
            Try Again
          </button>

          <Link href="/" className="hack-btn w-full sm:w-auto px-10 py-4 text-sm">
            Go Home
          </Link>
        </div>

        <p className="mt-12 text-xs text-[#3a6a4a] font-mono border border-[#1a3a2a] p-3 mt-8">
          {"> "}{error.message || "An unexpected error has occurred."}
        </p>
      </div>

      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#ff3366]/5 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[30%] bg-[#00ff88]/5 rounded-full blur-[100px] -z-10"></div>
    </div>
  );
}
