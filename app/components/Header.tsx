import React from "react";
import Link from "next/link";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Contact", href: "/contact" },
  { name: "Settings", href: "/settings" },
  { name: "Clicker", href: "/clicker" },
];

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 border-b border-[#1a3a2a] bg-[#050a0e]/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto h-16 flex items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 border border-[#00ff88] flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(0,255,136,0.5)] group-hover:bg-[#00ff88]/10">
            <span className="text-[#00ff88] font-bold text-sm">{">"}</span>
          </div>
          <span className="text-lg font-bold tracking-widest text-[#00ff88] uppercase">
            MyApp<span className="cursor-blink"></span>
          </span>
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-1">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#5a8a6a] transition-all duration-300 hover:text-[#00ff88] hover:bg-[#00ff88]/5 border border-transparent hover:border-[#1a3a2a]"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="/form"
          className="hack-btn px-5 py-2 text-xs rounded-none"
        >
          Join Now
        </Link>
      </div>
    </header>
  );
}
