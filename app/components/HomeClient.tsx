"use client";

import Link from "next/link";


export default function HomeClient() {
    return (
        <div className="min-h-screen bg-[#fafafa] pt-16">
            <main className="relative flex flex-col items-center justify-center px-6 py-24 text-center overflow-hidden">

                {/* Orqa fondagi gradient dog'lar (Animatsiyasiz ham zamonaviy) */}
                <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl -z-10 animate-pulse"></div>

                {/* BADGE (Kichik belgi) */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold mb-8 transition-transform hover:scale-105 cursor-default">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    V2.0 IS NOW LIVE
                </div>

                {/* MAIN TITLE */}
                <h1 className="text-5xl md:text-8xl font-black text-gray-900 mb-6 tracking-tighter leading-[1.1]">
                    Build your next <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 transition-all duration-500">
                        big idea fast.
                    </span>
                </h1>

                {/* DESCRIPTION */}
                <p className="text-gray-500 max-w-xl text-lg md:text-xl mb-10 leading-relaxed">
                    Everything you need to ship your project today.
                    Clean code, modern design, and ready for production.
                </p>

                {/* BUTTONS */}
                <div className="flex flex-col sm:flex-row items-center gap-4">
                    <Link
                        href="/about"
                        className="w-full sm:w-auto px-10 py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg shadow-xl shadow-blue-200 transition-all duration-300 hover:bg-blue-700 hover:-translate-y-1 active:translate-y-0"
                    >
                        Get Started Free
                    </Link>

                    <Link
                        href="/contact"
                        className="w-full sm:w-auto px-10 py-4 bg-white text-gray-900 border border-gray-200 rounded-2xl font-bold text-lg transition-all duration-300 hover:bg-gray-50 hover:border-gray-300 active:scale-95"
                    >
                        View Demo
                    </Link>
                </div>

                {/* TRUST BADGE (Ixtiyoriy) */}
                <div className="mt-20 pt-10 border-t border-gray-100 w-full max-w-4xl">
                    <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">Trusted by developers</p>
                    <div className="flex flex-wrap justify-center gap-8 grayscale opacity-50">
                        {/* Bu yerga logolar qo'yish mumkin */}
                        <div className="text-xl font-bold italic">TechFlow</div>
                        <div className="text-xl font-bold italic">DevStack</div>
                        <div className="text-xl font-bold italic">NextGen</div>
                    </div>
                </div>
            </main>

        </div>
    );
}