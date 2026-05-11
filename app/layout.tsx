import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: "MyApp",
    template: "%s | MyApp",
  },
  description: 'A simple Next.js application with a custom layout.',
  keywords: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'Web Development'],
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='hover:'>
      <body className={`${inter.className} min-h-screen flex flex-col justify-between bg-gray-100 text-gray-900`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
