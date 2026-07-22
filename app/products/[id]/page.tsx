"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowLeft, FaRegHeart, FaBagShopping, FaStar } from "react-icons/fa6";
import useCart from "../../store/add";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: { rate: number; count: number };
};

export default function ProductSinglePage() {
  const params = useParams();
  const id = params.id as string;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!res.ok) throw new Error("Not found");
        const data = await res.json();
        setProduct(data);
      } catch {
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

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

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-[#ff3366] font-bold">// ERROR: Product not found</p>
        <Link href="/products" className="hack-btn px-6 py-3 text-xs">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-10">
          <Link
            href="/products"
            className="group inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#5a8a6a] hover:text-[#00ff88] transition-all"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            Back to Collection
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-7">
            <div className="hack-card p-10 aspect-square flex items-center justify-center">
              <motion.div whileHover={{ scale: 1.05 }} className="relative w-full h-full">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  priority
                  className="object-contain p-4"
                />
              </motion.div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-[#00ff88] border border-[#1a3a2a] px-3 py-1 mb-6">
              {product.category}
            </span>

            <h1 className="text-3xl font-black tracking-tight mb-6 leading-tight text-[#c8ffd9]">
              {product.title}
            </h1>

            {product.rating && (
              <div className="flex items-center gap-4 mb-6">
                <div className="flex text-[#00ff88] text-sm gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <span className="text-[10px] font-bold text-[#5a8a6a] uppercase tracking-widest">
                  {product.rating.rate} / 5.0 ({product.rating.count})
                </span>
              </div>
            )}

            <div className="text-3xl font-black mb-8 text-[#00ff88]">
              ${product.price.toFixed(2)}
            </div>

            <div className="border-t border-[#1a3a2a] pt-6 mb-8">
              <p className="text-[#5a8a6a] leading-relaxed text-sm">{product.description}</p>
            </div>

            <div className="flex flex-col gap-3">
              <button
                onClick={() => addToCart(product)}
                className="w-full hack-btn-filled py-4 flex items-center justify-center gap-3 text-xs"
              >
                <FaBagShopping /> Add to Cart
              </button>
              <button className="w-full hack-btn py-4 flex items-center justify-center gap-3 text-xs">
                <FaRegHeart /> Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
