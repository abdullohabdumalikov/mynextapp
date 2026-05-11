'use client';

import React from 'react';
//csr
//ssr
//isr

function Loading() {
    return (
        <div className="min-h-screen bg-[#fafafa] flex flex-col items-center justify-center p-6 overflow-hidden">

            {/* 1. ASOSIY ANIMATSION LOGO (Skeleton o'rnida) */}
            <div className="relative mb-12">
                {/* Pulsatsiyalanuvchi halqalar */}
                <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping" />
                <div className="relative w-24 h-24 bg-black rounded-[2rem] flex items-center justify-center shadow-2xl">
                    <div className="w-8 h-8 border-4 border-t-blue-500 border-r-transparent border-b-white border-l-transparent rounded-full animate-spin" />
                </div>
            </div>

            {/* TAILWIND UCHUN MAXSUS ANIMATSIYA (Buni global CSS ga qo'shish shart emas, inline style yoki Tailwind config bilan ishlaydi) */}
            <style jsx>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
        </div>
    );
}

export default Loading;