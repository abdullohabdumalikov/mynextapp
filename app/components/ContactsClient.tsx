"use client";

import { motion } from "framer-motion";
import { useState } from "react";

function ContactClient() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({ name: "", email: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = { name: "", email: "" };
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
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <main className="min-h-screen pt-40 pb-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-xl mx-auto"
      >
        <header className="mb-12">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl font-black mb-6 tracking-tighter text-[#00ff88]"
          >
            Bog&apos;lanish<span className="cursor-blink"></span>
          </motion.h1>
          <p className="text-[#5a8a6a] text-base font-medium leading-relaxed">
            // Loyiha bo&apos;yicha taklifingiz bormi? Bizga yozing.
          </p>
        </header>

        <form className="space-y-8" onSubmit={handleSubmit}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="group relative"
          >
            <label
              className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-colors ${
                errors.name ? "text-[#ff3366]" : "text-[#3a6a4a] group-focus-within:text-[#00ff88]"
              }`}
            >
              Ismingiz
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={`w-full bg-transparent border-b py-4 outline-none transition-all text-lg font-bold text-[#c8ffd9] ${
                errors.name ? "border-[#ff3366]" : "border-[#1a3a2a] focus:border-[#00ff88]"
              }`}
              placeholder="Ismingizni kiriting"
            />
            {errors.name && (
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[#ff3366] text-xs font-bold mt-2 block">
                {errors.name}
              </motion.span>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="group relative"
          >
            <label
              className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-colors ${
                errors.email ? "text-[#ff3366]" : "text-[#3a6a4a] group-focus-within:text-[#00ff88]"
              }`}
            >
              Email manzilingiz
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`w-full bg-transparent border-b py-4 outline-none transition-all text-lg font-bold text-[#c8ffd9] ${
                errors.email ? "border-[#ff3366]" : "border-[#1a3a2a] focus:border-[#00ff88]"
              }`}
              placeholder="example@mail.com"
            />
            {errors.email && (
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[#ff3366] text-xs font-bold mt-2 block">
                {errors.email}
              </motion.span>
            )}
          </motion.div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-5 font-black text-sm uppercase tracking-widest transition-all ${
              isSubmitted ? "hack-btn-filled !bg-[#00ff88]" : "hack-btn-filled"
            }`}
          >
            {isSubmitted ? "Xabar yuborildi ✓" : "Xabarni yuborish"}
          </motion.button>
        </form>
      </motion.div>
    </main>
  );
}

export default ContactClient;
