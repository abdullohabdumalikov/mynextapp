'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function NotFound() {
    const [mounted, setMounted] = useState(false);
    const [terminalText, setTerminalText] = useState('');
    const [isHacked, setIsHacked] = useState(false);
    const [pos, setPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        setMounted(true);
        const handleMove = (e) => setPos({ x: e.clientX, y: e.clientY });
        window.addEventListener('mousemove', handleMove);

        // Pashalka 1: Klaviaturada "god" deb yozilsa, rang o'zgaradi
        let keys = '';
        const handleKey = (e) => {
            keys += e.key;
            if (keys.includes('god')) {
                setIsHacked(true);
                keys = '';
            }
        };
        window.addEventListener('keydown', handleKey);

        return () => {
            window.removeEventListener('mousemove', handleMove);
            window.removeEventListener('keydown', handleKey);
        };
    }, []);

    if (!mounted) return null;

    return (
        <div className={`min-h-screen flex flex-col items-center justify-center transition-colors duration-1000 overflow-hidden ${isHacked ? 'bg-green-950' : 'bg-white'}`}>

            {/* Pashalka 2: Sichqoncha nuri (Faqat qorong'u rejimda ko'rinadi) */}
            <div
                className="pointer-events-none fixed inset-0 z-10"
                style={{
                    background: `radial-gradient(150px circle at ${pos.x}px ${pos.y}px, ${isHacked ? 'rgba(34,197,94,0.2)' : 'rgba(0,0,0,0.05)'}, transparent)`
                }}
            />

            <main className="relative z-20 text-center px-6">
                {/* Raqamlar bilan o'yin */}
                <div className="relative inline-block group">
                    <h1 className={`text-[12rem] font-black leading-none select-none transition-all ${isHacked ? 'text-green-500 animate-pulse' : 'text-black group-hover:skew-x-12'}`}>
                        404
                    </h1>
                    {/* Pashalka 3: Ustiga borganda chiqadigan yozuv */}
                    <span className="absolute -top-4 -right-8 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        {isHacked ? "ROOT ACCESS GRANTED" : "Don't touch me!"}
                    </span>
                </div>

                <h2 className={`text-2xl font-bold mt-4 mb-6 ${isHacked ? 'text-green-400 font-mono' : 'text-gray-900'}`}>
                    {isHacked ? "> SYSTEM_OVERRIDE_SUCCESS" : "Yo'qolib qoldingizmi?"}
                </h2>

                {/* Terminal qismi */}
                <div className={`mx-auto max-w-sm p-4 rounded-lg mb-10 text-left font-mono text-xs transition-all ${isHacked ? 'bg-black text-green-500 border border-green-500' : 'bg-gray-100 text-gray-500'}`}>
                    <p className="mb-1 transition-all">{isHacked ? "[OK] Decrypting database..." : "> Searching for page..."}</p>
                    <p className="mb-1 opacity-70">{isHacked ? "[OK] Bypassing firewall..." : "> Status: Not Found"}</p>
                    <p className="animate-pulse underline cursor-pointer" onClick={() => alert("Pashalka: 'god' so'zini klaviaturada tering!")}>
                        {isHacked ? "[READY] Welcome, Admin." : "> Hint: Try typing 'god'"}
                    </p>
                </div>

                {/* Tugmalar */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/"
                        className={`px-10 py-4 rounded-2xl font-bold text-lg transition-all active:scale-95 ${isHacked
                            ? 'bg-green-500 text-black hover:bg-green-400 shadow-[0_0_20px_rgba(34,197,94,0.5)]'
                            : 'bg-black text-white hover:bg-gray-800'
                            }`}
                    >
                        Bosh sahifaga qaytish
                    </Link>

                    <button
                        onClick={() => window.location.reload()}
                        className={`px-10 py-4 rounded-2xl font-bold text-lg border-2 transition-all active:scale-95 ${isHacked
                            ? 'border-green-500 text-green-500 hover:bg-green-500/10'
                            : 'border-gray-200 text-gray-900 hover:bg-gray-50'
                            }`}
                    >
                        Qayta yuklash
                    </button>
                </div>
            </main>

            {/* Pashalka 4: Suzib yuruvchi kichik xatolar */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute top-10 left-10 animate-bounce delay-75 text-xs font-mono">undefined</div>
                <div className="absolute bottom-20 right-20 animate-pulse text-xs font-mono">null</div>
                <div className="absolute top-1/2 left-1/4 animate-bounce delay-500 text-xs font-mono">NaN</div>
            </div>
        </div>
    );
}