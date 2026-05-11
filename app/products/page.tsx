import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

// 🔥 SEO (STATIC)
export const metadata: Metadata = {
  title: "Products",
  description: "Browse all available products in our store",
};

// 🔥 ISR (har 60 sekundda yangilanadi)
async function getProducts(): Promise<Product[]> {
  const res = await fetch("https://fakestoreapi.com/products", {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main className="min-h-screen bg-[#fafafa] pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <h1 className="text-5xl font-black tracking-tight">Products</h1>
          <p className="text-gray-500 font-medium">
            Selected Works ({products.length})
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <div className="group bg-white p-6 rounded-2xl border border-transparent hover:border-black/5 hover:shadow-xl transition-all duration-300">

                <Image
                  src={product.image}
                  alt={product.title}
                  width={250}
                  height={250}
                  className="mx-auto mb-4 group-hover:scale-105 transition-transform duration-300"
                />

                <h3 className="font-bold text-lg mb-2 line-clamp-1">
                  {product.title}
                </h3>

                <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex justify-between items-center">
                  <span className="text-xl font-black">
                    ${product.price}
                  </span>

                  <span className="text-sm bg-black text-white px-3 py-1 rounded-full uppercase tracking-wider font-bold">
                    {product.category}
                  </span>
                </div>

              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}