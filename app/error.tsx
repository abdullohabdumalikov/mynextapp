'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

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
    <div className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden px-6">

      {/* BACKGROUND ERROR CODE (ORQA FONDAGI KOD) */}
      {error.digest && (
        <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
          <span className="text-[15vw] font-black text-gray-50 opacity-[0.4] tracking-tighter uppercase leading-none">
            {error.digest.slice(0, 8)}
          </span>
        </div>
      )}

      <div className="relative z-10 w-full max-w-xl text-center">

        {/* ERROR ICON & TITLE */}
        <div className="mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-red-50 text-red-500 rounded-3xl mb-6 transform -rotate-12 hover:rotate-0 transition-transform duration-500">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-gray-900 mb-4 tracking-tighter">
            {error.name || "Error"}
          </h1>

          <p className="text-gray-500 text-lg md:text-xl font-medium max-w-md mx-auto leading-relaxed">
            Kutilmagan xatolik yuz berdi. Tizimda nosozlik bo'lishi mumkin, biz buni tekshirib chiqamiz.
          </p>
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto px-10 py-4 bg-red-500 text-white rounded-2xl font-bold text-lg shadow-xl shadow-red-100 hover:bg-red-600 hover:-translate-y-1 transition-all active:scale-95"
          >
            Try Again
          </button>

          <Link
            href="/"
            className="w-full sm:w-auto px-10 py-4 bg-gray-900 text-white rounded-2xl font-bold text-lg shadow-xl shadow-gray-200 hover:bg-black hover:-translate-y-1 transition-all active:scale-95"
          >
            Go Home
          </Link>
        </div>

        {/* FOOTER TEXT */}
        <p className="mt-16 text-sm text-gray-400 font-medium">
          {error.message || "An unexpected error has occurred."}
        </p>
      </div>

      {/* DECORATIVE BLUR (Glow effekt) */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-red-50 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[30%] bg-blue-50 rounded-full blur-[100px] -z-10"></div>
    </div>
  );
}