import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ParticlesBackground from "./components/ParticlesBackground";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "MyApp",
    template: "%s | MyApp",
  },
  description: "A hacker-themed Next.js application with particles and terminal UI.",
  keywords: ["Next.js", "React", "Hack", "Terminal", "Particles"],
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col justify-between bg-[#050a0e] text-[#c8ffd9] font-mono scanlines">
        <ParticlesBackground />
        <Header />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
