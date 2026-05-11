"use client";

import { motion } from "framer-motion";
import { useState } from "react";

function ContactClient() {
    const [formData, setFormData] = useState({ name: "", email: "" });
    const [errors, setErrors] = useState({ name: "", email: "" });
    const [isSubmitted, setIsSubmitted] = useState(false);


    // Formani validatsiya qilish
    const validate = () => {
        let newErrors = { name: "", email: "" };
        if (!formData.name) newErrors.name = "Ismingizni kiritishingiz shart";
        if (!formData.email) {
            newErrors.email = "Email kiritishingiz shart";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email noto'g'ri kiritilgan";
        }
        setErrors(newErrors);
        return !newErrors.name && !newErrors.email;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            setIsSubmitted(true);
            // Bu yerda API chaqiruvi bo'lishi mumkin
            setTimeout(() => setIsSubmitted(false), 3000);
        }
    };

    return (
        <main className="min-h-screen bg-[#fafafa] pt-40 pb-20 px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-xl mx-auto"
            >
                <header className="mb-12">
                    <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-6xl font-black mb-6 tracking-tighter"
                    >
                        Bog'lanish<span className="text-blue-600">.</span>
                    </motion.h1>
                    <p className="text-gray-500 text-xl font-medium leading-relaxed">
                        Loyiha bo'yicha taklifingiz bormi? <br /> Bizga yozing, biz 24 soat ichida javob beramiz.
                    </p>
                </header>

                <form className="space-y-8" onSubmit={handleSubmit}>
                    {/* Ism Input */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="group relative"
                    >
                        <label className={`text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 ${errors.name ? 'text-red-500' : 'text-gray-400 group-focus-within:text-black'}`}>
                            Ismingiz
                        </label>
                        <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className={`w-full bg-transparent border-b-2 py-4 outline-none transition-all text-xl font-bold ${errors.name ? 'border-red-500' : 'border-gray-200 focus:border-black'}`}
                            placeholder="Ismingizni kiriting"
                        />
                        {errors.name && (
                            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-xs font-bold mt-2 block">
                                {errors.name}
                            </motion.span>
                        )}
                    </motion.div>

                    {/* Email Input */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="group relative"
                    >
                        <label className={`text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 ${errors.email ? 'text-red-500' : 'text-gray-400 group-focus-within:text-black'}`}>
                            Email manzilingiz
                        </label>
                        <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className={`w-full bg-transparent border-b-2 py-4 outline-none transition-all text-xl font-bold ${errors.email ? 'border-red-500' : 'border-gray-200 focus:border-black'}`}
                            placeholder="example@mail.com"
                        />
                        {errors.email && (
                            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-xs font-bold mt-2 block">
                                {errors.email}
                            </motion.span>
                        )}
                    </motion.div>

                    {/* Submit Button */}
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full py-6 rounded-3xl font-black text-lg transition-all shadow-2xl ${isSubmitted ? 'bg-green-500' : 'bg-black'} text-white shadow-black/10`}
                    >
                        {isSubmitted ? "Xabar yuborildi ✓" : "Xabarni yuborish"}
                    </motion.button>
                </form>


            </motion.div>
        </main>
    )

}

export default ContactClient;



