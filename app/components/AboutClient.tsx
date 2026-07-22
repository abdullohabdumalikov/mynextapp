"use client";

import React from "react";
import { motion } from "framer-motion";

function AboutClient() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 overflow-hidden">
      <motion.div initial="initial" animate="animate" className="max-w-4xl mx-auto">
        <header className="mb-20">
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-black tracking-tighter mb-8 text-[#00ff88]">
            Biz kimmiz
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="cursor-blink"
            />
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-base md:text-lg text-[#5a8a6a] leading-relaxed max-w-2xl">
            // Biz zamonaviy texnologiyalar orqali murakkab muammolarga oddiy yechimlar yaratamiz.
            <br />
            // Maqsad — raqamli dunyoni yanada go&apos;zal va qulay qilish.
          </motion.p>
        </header>

        <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div variants={fadeInUp} whileHover={{ y: -5 }} className="hack-card p-8">
            <span className="text-3xl mb-4 block">🎯</span>
            <h3 className="text-xl font-bold mb-4 text-[#00ff88]">Missiyamiz</h3>
            <p className="text-[#5a8a6a] leading-relaxed text-sm">
              Foydalanuvchilar uchun eng yaxshi tajribani yaratish va har bir pikselda sifatni ta&apos;minlash.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            className="hack-card p-8 border-[#00ff88]/30 md:translate-y-12"
          >
            <motion.span
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="text-3xl mb-4 block"
            >
              🚀
            </motion.span>
            <h3 className="text-xl font-bold mb-4 text-[#00ff88]">Kelajak</h3>
            <p className="text-[#5a8a6a] leading-relaxed text-sm">
              AI va innovatsiyalarni integratsiya qilgan holda, yangi avlod veb-ilovalarini ishlab chiqish.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </main>
  );
}

export default AboutClient;
