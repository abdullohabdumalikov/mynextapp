"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCartShopping, FaXmark, FaPlus, FaMinus } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

import useCart from "../store/add";


// --- TAYPLAR ---
type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

export default function ProductsPage() {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // --- MA'LUMOTLARNI YUKLASH ---
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Xatolik:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // --- LOADING EKRANI ---
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="w-12 h-12 border-4 border-black border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#fafafa] pt-24 pb-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto">

        {/* HEADER SECTION */}
        <header className="flex justify-between items-end mb-16">
          <div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-7xl font-black tracking-tighter mt-2"
            >
              Products
            </motion.h1>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsCartOpen(true)}
            className="relative cursor-pointer bg-white p-5 rounded-[2rem] shadow-xl shadow-black/5 border border-gray-100 transition-all"
          >
            <FaCartShopping className="text-3xl text-black" />
            <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] w-6 h-6 flex items-center justify-center rounded-full font-bold border-4 border-[#fafafa]">
              {cart.length}
            </span>
          </motion.div>
        </header>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="bg-white p-8 rounded-[2.5rem] border border-transparent hover:border-black/5 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] transition-all duration-500 h-full flex flex-col relative overflow-hidden">

                {/* Product Image */}
                <div className="h-64 relative mb-8 flex items-center justify-center">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={220}
                    height={220}
                    className="object-contain group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                    <span className="text-xl font-black text-black">${product.price}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 line-clamp-1 group-hover:text-blue-600 transition-colors">
                    {product.title}
                  </h3>

                  <p className="text-gray-400 text-sm line-clamp-2 mb-8 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="mt-auto flex gap-3">
                    <Link href={`/products/${product.id}`} className="flex-grow">
                      <button className="w-full py-4 bg-gray-50 text-black text-xs font-black rounded-2xl hover:bg-black hover:text-white transition-all duration-300 uppercase tracking-widest">
                        Details
                      </button>
                    </Link>
                    <button className="p-4 bg-black text-white rounded-2xl hover:bg-blue-600 transition-colors"
                      onClick={addToCart.bind(null, product, product.id)}
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- CART DRAWER (SIDEBAR) --- */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            {/* Background Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[100]"
            />

            {/* Sidebar Content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-[101] shadow-2xl p-10 flex flex-col"
            >
              <div className="flex justify-between items-center mb-12">
                <div>
                  <h2 className="text-4xl font-black tracking-tighter">Your Cart</h2>
                  <p className="text-gray-400 text-sm mt-1 font-medium">{cart.length} items selected</p>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-4 hover:bg-gray-100 rounded-full transition-all active:scale-90"
                >
                  <FaXmark className="text-2xl" />
                </button>
              </div>

              {/* Cart Items Area */}
              <div className="flex-grow overflow-y-auto">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-gray-400">
                    <FaCartShopping className="text-6xl mb-4" />
                    <p className="text-lg font-medium">Your cart is empty</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {cart.map((item: any, index: number) => (
                      <div key={index} className="flex items-center gap-4">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={80}
                          height={80}
                          className="object-contain rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="font-bold">{item.title}</h3>
                          <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
                          >
                            <FaMinus className="text-sm" />
                          </button>
                          <span className="font-bold">{item.qty}</span>
                          <button
                            onClick={() => addToCart(item, item.id)}
                            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
                          >
                            <FaPlus className="text-sm" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Checkout Footer */}
              <div className="mt-10 pt-10 border-t border-gray-100">
                <div className="flex justify-between items-center mb-6">
                  <span className="font-bold text-gray-400">Total:</span>
                  <span className="text-3xl font-black">$ {cart.reduce((total: any, item: any) => total + (item.price * item.qty), 0).toFixed(2)}</span>
                </div>
                <button className="w-full py-5 bg-black text-white rounded-[1.5rem] font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-black/10">
                  CHECKOUT
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}