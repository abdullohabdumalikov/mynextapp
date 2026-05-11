import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: { rate: number; count: number };
};

// 🔥 FETCH (ISR)
async function getProduct(id: string): Promise<Product | null> {
    try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
            next: { revalidate: 3600 }, // 1 soat
        });

        if (!res.ok) return null;

        return res.json();
    } catch (error) {
        console.error("Product fetch error:", error);
        return null;
    }
}

// 🔥 DYNAMIC SEO
export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: string }>;
}): Promise<Metadata> {
    const { id } = await params;

    const product = await getProduct(id);

    if (!product) {
        return {
            title: "Product not found",
            description: "This product does not exist",
        };
    }

    return {
        title: product.title,
        description: product.description,

        openGraph: {
            title: product.title,
            description: product.description,
            images: [product.image],
        },

        twitter: {
            card: "summary_large_image",
            title: product.title,
            description: product.description,
            images: [product.image],
        },

        alternates: {
            canonical: `/products/${id}`,
        },
    };
}

// ⭐ Rating UI
function StarRating({ rate }: { rate: number }) {
    return (
        <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
                <span
                    key={star}
                    className={`text-lg ${star <= Math.round(rate)
                        ? "text-amber-700"
                        : "text-stone-300"
                        }`}
                >
                    ★
                </span>
            ))}
        </div>
    );
}

// 🔥 PAGE
export default async function ProductSinglePage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const product = await getProduct(id);

    if (!product) notFound();

    return (
        <main className="min-h-screen bg-[#f5f0eb] font-['DM_Sans',sans-serif]">
            <div className="max-w-5xl mx-auto px-6 py-14">

                {/* Back */}
                <Link
                    href="/products"
                    className="inline-flex items-center gap-2 text-sm text-stone-400 
          hover:text-stone-800 transition-colors mb-12 tracking-wide uppercase"
                >
                    ← Orqaga qaytish
                </Link>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

                    {/* IMAGE */}
                    <div className="md:sticky md:top-10">
                        <div className="bg-white rounded-sm p-12 aspect-square flex items-center 
              justify-center shadow-[0_2px_40px_rgba(0,0,0,0.08)] overflow-hidden group">

                            <Image
                                src={product.image}
                                alt={product.title}
                                width={320}
                                height={320}
                                priority
                                className="object-contain max-h-72 transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* INFO */}
                    <div>
                        {/* Category */}
                        <span className="inline-block text-[11px] font-medium tracking-widest uppercase 
              text-amber-800 border border-amber-600/50 px-3 py-1 rounded-sm mb-5">
                            {product.category}
                        </span>

                        {/* Title */}
                        <h1 className="font-['Playfair_Display',serif] text-3xl font-bold leading-snug 
              text-stone-900 mb-5">
                            {product.title}
                        </h1>

                        {/* Rating */}
                        <div className="flex items-center gap-3 mb-7">
                            <StarRating rate={product.rating.rate} />
                            <span className="text-sm text-stone-400">
                                {product.rating.rate} / 5 · {product.rating.count} ta sharh
                            </span>
                        </div>

                        {/* Price */}
                        <div className="flex items-baseline gap-1 pb-8 mb-8 border-b border-stone-200">
                            <span className="text-lg font-medium text-amber-900">$</span>
                            <span className="font-['Playfair_Display',serif] text-5xl font-bold text-stone-900">
                                {product.price.toFixed(2)}
                            </span>
                        </div>

                        {/* Description */}
                        <p className="text-[15px] leading-relaxed text-stone-500 font-light mb-10">
                            {product.description}
                        </p>

                        {/* Actions */}
                        <div className="flex flex-col gap-3">
                            <button className="bg-stone-900 text-[#f5f0eb] py-4 px-8 text-[13px] font-medium 
                tracking-widest uppercase rounded-sm hover:bg-stone-800 
                transition-all hover:-translate-y-0.5 active:translate-y-0">
                                Savatga qo'shish
                            </button>

                            <button className="bg-transparent text-stone-900 border border-amber-600/50 
                py-4 px-8 text-[13px] font-medium tracking-widest uppercase 
                rounded-sm hover:bg-amber-50 transition-colors">
                                Sevimlilarga saqlash
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}