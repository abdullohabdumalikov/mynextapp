"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCartShopping, FaXmark, FaPlus, FaMinus } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import useCart from "../store/add";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

export default function ProductsPage() {
  const { cart, addToCart, removeFromCart, decreaseQty } = useCart();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartCount = cart.reduce((sum: number, item: Product & { qty: number }) => sum + item.qty, 0);

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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="w-12 h-12 border-2 border-[#00ff88] border-t-transparent"
        />
      </div>
    );
  }

  return (
    <main className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-end mb-16">
          <div>
            <p className="text-[10px] text-[#3a6a4a] uppercase tracking-[0.3em] mb-2">
              // catalog.load()
            </p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black tracking-tighter text-[#00ff88]"
            >
              Products
            </motion.h1>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsCartOpen(true)}
            className="relative cursor-pointer hack-card p-5 transition-all"
          >
            <FaCartShopping className="text-2xl text-[#00ff88]" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#00ff88] text-[#050a0e] text-[10px] w-6 h-6 flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </motion.button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="group"
            >
              <div className="hack-card p-6 h-full flex flex-col transition-all duration-500">
                <div className="h-56 relative mb-6 flex items-center justify-center">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={200}
                    height={200}
                    className="object-contain group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div className="flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#00ff88] border border-[#1a3a2a] px-2 py-0.5">
                      {product.category}
                    </span>
                    <span className="text-lg font-black text-[#00ff88]">${product.price}</span>
                  </div>

                  <h3 className="text-base font-bold mb-2 line-clamp-1 text-[#c8ffd9] group-hover:text-[#00ff88] transition-colors">
                    {product.title}
                  </h3>

                  <p className="text-[#5a8a6a] text-xs line-clamp-2 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="mt-auto flex gap-3">
                    <Link href={`/products/${product.id}`} className="flex-grow">
                      <button className="w-full py-3 hack-btn text-[10px]">
                        Details
                      </button>
                    </Link>
                    <button
                      className="p-3 hack-btn-filled"
                      onClick={() => addToCart(product)}
                      aria-label="Add to cart"
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

      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 h-full w-full max-w-md bg-[#0a1419] border-l border-[#1a3a2a] z-[101] p-8 flex flex-col"
            >
              <div className="flex justify-between items-center mb-10">
                <div>
                  <h2 className="text-3xl font-black tracking-tighter text-[#00ff88]">Cart</h2>
                  <p className="text-[#5a8a6a] text-xs mt-1">{cartCount} items</p>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-3 hover:bg-[#00ff88]/10 transition-all text-[#00ff88]"
                >
                  <FaXmark className="text-xl" />
                </button>
              </div>

              <div className="flex-grow overflow-y-auto">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-[#3a6a4a]">
                    <FaCartShopping className="text-5xl mb-4" />
                    <p className="text-sm">// cart is empty</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item: Product & { qty: number }) => (
                      <div key={item.id} className="flex items-center gap-4 border border-[#1a3a2a] p-3">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={60}
                          height={60}
                          className="object-contain"
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-sm text-[#c8ffd9] truncate">{item.title}</h3>
                          <p className="text-xs text-[#00ff88]">${item.price.toFixed(2)}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => decreaseQty(item.id)}
                            className="p-2 border border-[#1a3a2a] hover:border-[#00ff88] transition-colors text-[#00ff88]"
                          >
                            <FaMinus className="text-xs" />
                          </button>
                          <span className="font-bold text-sm w-4 text-center">{item.qty}</span>
                          <button
                            onClick={() => addToCart(item)}
                            className="p-2 border border-[#1a3a2a] hover:border-[#00ff88] transition-colors text-[#00ff88]"
                          >
                            <FaPlus className="text-xs" />
                          </button>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="p-2 text-[#ff3366] hover:bg-[#ff3366]/10 transition-colors text-xs"
                          >
                            ✕
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-8 pt-6 border-t border-[#1a3a2a]">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[#5a8a6a] text-sm">Total:</span>
                  <span className="text-2xl font-black text-[#00ff88]">
                    ${cart.reduce((total: number, item: Product & { qty: number }) => total + item.price * item.qty, 0).toFixed(2)}
                  </span>
                </div>
                <button className="w-full py-4 hack-btn-filled text-sm">
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
