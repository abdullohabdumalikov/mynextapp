"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowLeft, FaRegHeart, FaBagShopping, FaStar } from "react-icons/fa6";
import Loader from "../../../app/loading"
export default function ProductSinglePage({ product }: { product: any }) {

    if (!product) {
        return (
            <Loader />
        );
    }

    return (
        <main className="min-h-screen bg-[#fafaf9] text-stone-900 selection:bg-amber-100">
            <div className="max-w-6xl mx-auto px-6 py-12 lg:py-20">

                {/* Orqaga qaytish */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-12">
                    <Link
                        href="/products"
                        className="group inline-flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.2em] text-stone-400 hover:text-stone-900 transition-all"
                    >
                        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                        Back to Collection
                    </Link>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

                    {/* IMAGE SECTION */}
                    <div className="lg:col-span-7">
                        <div className="relative bg-white rounded-[2.5rem] p-12 aspect-square flex items-center justify-center shadow-sm border border-stone-100 overflow-hidden">
                            {/* product.image borligini tekshirish uchun ixtiyoriy '?' belgisi */}
                            {product?.image && (
                                <motion.div whileHover={{ scale: 1.05 }} className="relative w-full h-full">
                                    <Image
                                        src={product.image}
                                        alt={product.title || "Product Image"}
                                        fill
                                        priority
                                        className="object-contain p-4"
                                    />
                                </motion.div>
                            )}
                        </div>
                    </div>

                    {/* INFO SECTION */}
                    <div className="lg:col-span-5">
                        <span className="inline-block text-[10px] font-black uppercase tracking-[0.2em] text-amber-700 bg-amber-50 px-3 py-1.5 rounded-lg mb-6">
                            {product?.category}
                        </span>

                        <h1 className="text-4xl font-black tracking-tight mb-6 leading-tight">
                            {product?.title}
                        </h1>

                        <div className="flex items-center gap-4 mb-8">
                            <div className="flex text-amber-500 text-sm">
                                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                            </div>
                            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">
                                {product?.rating?.rate} / 5.0 ({product?.rating?.count})
                            </span>
                        </div>

                        <div className="text-4xl font-black mb-10 text-stone-900">
                            ${product?.price?.toFixed(2)}
                        </div>

                        <div className="border-t border-stone-100 pt-8 mb-10">
                            <p className="text-stone-500 leading-relaxed">
                                {product?.description}
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <button className="w-full bg-stone-900 text-white py-5 rounded-2xl flex items-center justify-center gap-3 font-bold uppercase tracking-widest hover:bg-stone-800 transition-all">
                                <FaBagShopping /> Add to Bag
                            </button>
                            <button className="w-full border-2 border-stone-100 py-5 rounded-2xl flex items-center justify-center gap-3 font-bold uppercase tracking-widest hover:bg-white transition-all">
                                <FaRegHeart /> Wishlist
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}