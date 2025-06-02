"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#why-us", label: "Why Us" },
  ];

  const isProd = process.env.NODE_ENV === 'production';
  const prodBasePath = isProd ? '/cybergaurd' : '';

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/90 dark:border-slate-700/60 dark:bg-slate-950/90 backdrop-blur-lg">
      <div className="container flex h-20 max-w-screen-xl items-center justify-between mx-auto px-4 md:px-8">
        <Link href={`${prodBasePath}/`} className="flex items-center group">
          <Image src={`${prodBasePath}/4.png`} alt="Cyber Guardian Logo" width={270} height={60} className="transition-opacity duration-300 group-hover:opacity-90" priority />
        </Link>

        <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 hover:text-blue-600 dark:hover:bg-slate-800 dark:hover:text-blue-400 transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
          <Link href="#cta">
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors ml-2">
              Get Started
            </Button>
          </Link>
        </nav>

        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">
                <Menu size={28} />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-white dark:bg-slate-950 p-6">
              <div className="flex justify-between items-center mb-8">
                <Link href={`${prodBasePath}/`} className="flex items-center group" onClick={() => setIsMobileMenuOpen(false)}>
                  <Image src={`${prodBasePath}/4.png`} alt="Cyber Guardian Logo" width={225} height={50} />
                </Link>
                <SheetClose asChild>
                   <Button variant="ghost" size="icon" className="text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800">
                    <X size={24} />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </SheetClose>
              </div>
              <nav className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <SheetClose key={link.label} asChild>
                    <Link
                      href={link.href}
                      className="px-3 py-2.5 rounded-md text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 hover:text-blue-600 dark:hover:bg-slate-800 dark:hover:text-blue-400 transition-all duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Link href="#cta" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button size="lg" className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors">
                      Get Started
                    </Button>
                  </Link>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar; 