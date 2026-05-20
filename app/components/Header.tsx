import React from 'react';
import Link from 'next/link';
import { link } from 'fs/promises';

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
    <header className="fixed top-0 w-full z-50 border-b border-gray-100 bg-white/70 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto h-16 flex items-center justify-between px-6">

        {/* LOGO */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:rotate-12">
            <span className="text-white font-bold">M</span>
          </div>
          <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
            MyApp
          </span>
        </div>

        {/* NAVIGATION */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-1">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-gray-600 transition-all duration-300 hover:text-blue-600 hover:bg-blue-50 rounded-full"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* ACTION BUTTON */}
        <Link
          href={'/form'}
          className="px-4 py-2 text-sm font-medium text-gray-600 transition-all duration-300 hover:text-blue-600 hover:bg-blue-50 rounded-full"
        >
          <button className="bg-gray-900 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-200 active:scale-95">
            Join Now
          </button>
        </Link>


      </div>
    </header>
  );
}