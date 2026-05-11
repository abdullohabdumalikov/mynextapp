"use client";

import React from 'react'
import { motion } from "framer-motion";

function AboutClient() {
    // Animatsiya variantlari
    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
    };

    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };
    return (
        <main className="min-h-screen bg-white pt-32 pb-20 px-6 overflow-hidden">
            <motion.div
                initial="initial"
                animate="animate"
                className="max-w-4xl mx-auto"
            >
                {/* Header qismi animatsiyasi */}
                <header className="mb-20">
                    <motion.h1
                        variants={fadeInUp}
                        className="text-6xl md:text-8xl font-black tracking-tighter mb-8"
                    >
                        Biz kimmiz<motion.span
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5, type: "spring" }}
                            className="inline-block text-blue-600"
                        >
                            .
                        </motion.span>
                    </motion.h1>

                    <motion.p
                        variants={fadeInUp}
                        className="text-xl md:text-2xl text-gray-500 leading-relaxed max-w-2xl"
                    >
                        Biz zamonaviy texnologiyalar orqali murakkab muammolarga oddiy yechimlar yaratamiz.
                        Bizning maqsadimiz — raqamli dunyoni yanada go'zal va qulay qilish.
                    </motion.p>
                </header>

                {/* Cardlar animatsiyasi */}
                <motion.div
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12"
                >
                    {/* Oq card */}
                    <motion.div
                        variants={fadeInUp}
                        whileHover={{ y: -5 }}
                        className="group p-8 border border-gray-100 rounded-3xl hover:border-black transition-colors duration-500 bg-white"
                    >
                        <motion.span
                            whileHover={{ rotate: [0, -10, 10, 0] }}
                            className="text-4xl mb-4 block origin-bottom-left"
                        >
                            🎯
                        </motion.span>
                        <h3 className="text-2xl font-bold mb-4">Missiyamiz</h3>
                        <p className="text-gray-500 leading-relaxed">
                            Foydalanuvchilar uchun eng yaxshi tajribani (UX) yaratish va har bir pikselda sifatni ta'minlash.
                        </p>
                    </motion.div>

                    {/* Qora card */}
                    <motion.div
                        variants={fadeInUp}
                        whileHover={{ scale: 1.02 }}
                        className="group p-8 bg-black text-white rounded-3xl md:translate-y-12 transition-all duration-500 shadow-2xl shadow-black/20"
                    >
                        <motion.span
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 3,
                                ease: "easeInOut"
                            }}
                            className="text-4xl mb-4 block"
                        >
                            🚀
                        </motion.span>
                        <h3 className="text-2xl font-bold mb-4 text-white">Kelajak</h3>
                        <p className="text-gray-400 leading-relaxed">
                            AI va innovatsiyalarni integratsiya qilgan holda, yangi avlod veb-ilovalarini ishlab chiqish.
                        </p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </main>
    );
}

export default AboutClient
