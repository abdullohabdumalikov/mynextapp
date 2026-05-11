"use client"
import React, { useState } from 'react'

 export default function SettingsClient() {

    const [notifications, setNotifications] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    return (

        <main className="min-h-screen bg-[#fafafa] pt-32 pb-20 px-6">
            <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-[40px] shadow-sm border border-gray-100 transition-all duration-500 hover:shadow-xl hover:shadow-gray-100">

                <header className="mb-12">
                    <h1 className="text-4xl font-black mb-2 tracking-tight text-gray-900">Sozlamalar</h1>
                    <p className="text-gray-500 font-medium">Hisobingiz va ilova interfeysini boshqaring.</p>
                </header>

                <div className="space-y-10">

                    {/* PROFIL QISMI */}
                    <section>
                        <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-6">Profil</h3>
                        <div className="flex items-center gap-5 p-5 rounded-3xl bg-gray-50 border border-transparent hover:border-gray-200 hover:bg-gray-100 transition-all cursor-pointer group">
                            <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center text-white font-bold text-xl transition-transform group-hover:rotate-6">
                                A
                            </div>
                            <div className="flex-1">
                                <p className="font-bold text-gray-900">Abdulloh</p>
                                <p className="text-sm text-gray-500 font-medium">abdulloh@next.app</p>
                            </div>
                            <svg className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </section>

                    {/* ILOVA SOZLAMALARI */}
                    <section className="space-y-6">
                        <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-2">Ilova</h3>

                        {/* Bildirishnomalar Switch */}
                        <div className="flex items-center justify-between py-2 group">
                            <div>
                                <p className="font-bold text-gray-800">Bildirishnomalar</p>
                                <p className="text-xs text-gray-500">Email va Push xabarlarni yoqish</p>
                            </div>
                            <button
                                onClick={() => setNotifications(!notifications)}
                                className={`w-14 h-8 rounded-full p-1 transition-all duration-300 ease-in-out ${notifications ? 'bg-black' : 'bg-gray-200'}`}
                            >
                                <div className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${notifications ? 'translate-x-6' : 'translate-x-0'}`} />
                            </button>
                        </div>

                        {/* Dark Mode Switch */}
                        <div className="flex items-center justify-between py-2 group">
                            <div>
                                <p className="font-bold text-gray-800">Tungi rejim</p>
                                <p className="text-xs text-gray-500">Interfeys rangini o'zgartirish</p>
                            </div>
                            <button
                                onClick={() => setDarkMode(!darkMode)}
                                className={`w-14 h-8 rounded-full p-1 transition-all duration-300 ease-in-out ${darkMode ? 'bg-blue-600' : 'bg-gray-200'}`}
                            >
                                <div className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${darkMode ? 'translate-x-6' : 'translate-x-0'}`} />
                            </button>
                        </div>
                    </section>

                    {/* XAVFSIZLIK */}
                    <section className="pt-6 border-t border-gray-100">
                        <button className="w-full text-left py-3 px-1 text-red-500 font-bold hover:text-red-600 transition-colors flex items-center justify-between group">
                            <span>Hisobni o'chirish</span>
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs uppercase tracking-widest">Ehtiyot bo'ling</span>
                        </button>
                    </section>

                </div>
            </div>
        </main>
    );
}

