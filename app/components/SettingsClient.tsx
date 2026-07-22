"use client";

import React, { useState } from "react";

export default function SettingsClient() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-2xl mx-auto hack-card p-8 md:p-12">
        <header className="mb-12">
          <h1 className="text-3xl font-black mb-2 tracking-tight text-[#00ff88]">Sozlamalar</h1>
          <p className="text-[#5a8a6a] text-sm">// Hisobingiz va ilova interfeysini boshqaring.</p>
        </header>

        <div className="space-y-10">
          <section>
            <h3 className="text-[10px] font-bold text-[#3a6a4a] uppercase tracking-[0.2em] mb-6">Profil</h3>
            <div className="flex items-center gap-5 p-5 border border-[#1a3a2a] hover:border-[#00ff88]/30 transition-all cursor-pointer group">
              <div className="w-14 h-14 border border-[#00ff88] flex items-center justify-center text-[#00ff88] font-bold text-xl group-hover:shadow-[0_0_10px_rgba(0,255,136,0.3)]">
                A
              </div>
              <div className="flex-1">
                <p className="font-bold text-[#c8ffd9]">Abdulloh</p>
                <p className="text-sm text-[#5a8a6a]">abdulloh@next.app</p>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h3 className="text-[10px] font-bold text-[#3a6a4a] uppercase tracking-[0.2em] mb-2">Ilova</h3>

            <div className="flex items-center justify-between py-2">
              <div>
                <p className="font-bold text-[#c8ffd9] text-sm">Bildirishnomalar</p>
                <p className="text-xs text-[#5a8a6a]">Email va Push xabarlarni yoqish</p>
              </div>
              <button
                onClick={() => setNotifications(!notifications)}
                className={`w-14 h-7 border p-0.5 transition-all ${
                  notifications ? "border-[#00ff88] bg-[#00ff88]/10" : "border-[#1a3a2a]"
                }`}
              >
                <div
                  className={`w-5 h-5 transition-transform duration-300 ${
                    notifications ? "translate-x-7 bg-[#00ff88]" : "translate-x-0 bg-[#3a6a4a]"
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between py-2">
              <div>
                <p className="font-bold text-[#c8ffd9] text-sm">Hack rejim</p>
                <p className="text-xs text-[#5a8a6a]">Terminal interfeysi</p>
              </div>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`w-14 h-7 border p-0.5 transition-all ${
                  darkMode ? "border-[#00ff88] bg-[#00ff88]/10" : "border-[#1a3a2a]"
                }`}
              >
                <div
                  className={`w-5 h-5 transition-transform duration-300 ${
                    darkMode ? "translate-x-7 bg-[#00ff88]" : "translate-x-0 bg-[#3a6a4a]"
                  }`}
                />
              </button>
            </div>
          </section>

          <section className="pt-6 border-t border-[#1a3a2a]">
            <button className="w-full text-left py-3 text-[#ff3366] font-bold hover:text-[#ff6699] transition-colors text-sm">
              // Hisobni o&apos;chirish
            </button>
          </section>
        </div>
      </div>
    </main>
  );
}
