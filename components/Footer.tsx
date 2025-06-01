import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldHalf } from 'lucide-react'; // Icon for branding

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerLinks = [
    { href: "#privacy", label: "Privacy Policy" },
    { href: "#terms", label: "Terms of Service" },
    { href: "#contact", label: "Contact Us" },
    { href: "#faq", label: "FAQ" }, // Added FAQ
  ];

  return (
    <footer className="border-t border-slate-200/80 dark:border-slate-700/60 bg-slate-100 dark:bg-slate-950/90 py-10 sm:py-12 text-sm overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center mb-8 sm:mb-10">
          {/* Left Side: Logo and Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start text-center md:text-left space-y-3 sm:space-y-0 sm:space-x-4">
            <Link href="/" className="group shrink-0">
              <Image 
                src="/3.png" 
                alt="Cyber Guardians Logo"
                width={170} 
                height={38} 
                className="transition-opacity duration-300 group-hover:opacity-80 h-auto" // Added h-auto for better responsive scaling with fixed width
              />
            </Link>
            <div className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm pt-1 sm:pt-0">
              <p>&copy; {currentYear} All rights reserved.</p>
            </div>
          </div>

          {/* Right Side: Navigation Links */}
          <nav className="flex flex-wrap justify-center md:justify-end gap-x-4 sm:gap-x-5 gap-y-2">
            {footerLinks.map(link => (
              <Link 
                key={link.label}
                href={link.href} 
                className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 hover:underline underline-offset-2"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        
        {/* Optional: Small Divider & Tagline */}
        <div className="pt-6 sm:pt-8 border-t border-slate-200/80 dark:border-slate-700/60 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-y-2 sm:gap-y-0">
            <p className="text-xs text-slate-500 dark:text-slate-500">
                Protecting seniors, empowering families.
            </p>
            <div className="flex items-center text-xs text-slate-500 dark:text-slate-500">
                <ShieldHalf size={13} className="mr-1.5 opacity-70"/> Built with care.
            </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer; 