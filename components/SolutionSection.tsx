import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { LifeBuoy, ShieldCheck, BellRing } from 'lucide-react';

const SolutionSection = () => {
  return (
    <section id="solution" className="w-full py-16 sm:py-20 md:py-24 lg:py-28 bg-slate-50 dark:bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div className="space-y-5 md:space-y-7 text-center lg:text-left">
            <div className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-500/20 px-5 py-2.5 text-sm font-semibold tracking-wide text-blue-600 dark:text-blue-400 shadow-md ring-1 ring-blue-200 dark:ring-blue-500/30">
              <LifeBuoy size={18} className="mr-2 flex-shrink-0" />
              Our Commitment to Safety
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-slate-900 dark:text-slate-50">
              Cyber Guardians: Your Digital Lifeline
            </h2>
            <p className="max-w-[600px] mx-auto lg:mx-0 text-slate-600 text-base sm:text-lg md:text-xl/relaxed dark:text-slate-300 leading-relaxed">
              We believe everyone deserves to navigate the digital world with confidence and security. Cyber Guardians is a thoughtfully designed, user-friendly application empowering seniors by proactively detecting and blocking scams, providing instant alerts, offering clear educational content, and enabling live location sharing with trusted contacts for peace of mind.
            </p>
            <div className="flex flex-col gap-3 min-[400px]:flex-row pt-2 md:pt-3 justify-center lg:justify-start">
              <Link href="#features">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 text-base md:text-lg dark:bg-blue-500 dark:hover:bg-blue-600 transition-transform hover:scale-105 active:scale-95 rounded-lg shadow-md hover:shadow-lg">
                  Discover Our Features
                </Button>
              </Link>
              <Link href="#how-it-works">
                <Button size="lg" variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/30 dark:hover:border-blue-500 px-7 py-3 text-base md:text-lg transition-transform hover:scale-105 active:scale-95 rounded-lg shadow-sm hover:shadow-md">
                  See How It Works
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center p-0 md:p-4 mt-8 lg:mt-0">
            <div className="relative w-[270px] h-[540px] sm:w-[280px] sm:h-[560px] bg-slate-800 dark:bg-slate-950 rounded-[40px] sm:rounded-[48px] shadow-xl p-4 sm:p-5 border-2 sm:border-4 border-slate-700 dark:border-slate-600 transform transition-all duration-500 hover:scale-[1.03] hover:shadow-blue-500/30 dark:hover:shadow-blue-400/30">
              <div className="absolute top-3 sm:top-4 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-4 sm:h-5 bg-slate-700 dark:bg-slate-600 rounded-full opacity-50"></div> {/* Speaker grille */}
              <div className="absolute top-5 sm:top-6 left-6 sm:left-8 w-2.5 sm:w-3 h-2.5 sm:h-3 bg-slate-700 dark:bg-slate-600 rounded-full opacity-70"></div> {/* Camera */}
              <div className="w-full h-full bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-600 dark:from-blue-500 dark:via-blue-600 dark:to-indigo-700 rounded-[28px] sm:rounded-[32px] flex flex-col items-center justify-between overflow-hidden p-0.5 sm:p-1">
                <div className="w-full bg-white/20 backdrop-blur-sm py-2.5 sm:py-3 px-4 rounded-t-[26px] sm:rounded-t-[28px]">
                  <h3 className="text-white font-semibold text-center text-base sm:text-lg drop-shadow-sm">Cyber Guardians</h3>
                </div>
                <div className="flex-grow flex flex-col items-center justify-center p-3 sm:p-4 space-y-4 text-white">
                  <Image src="/cybergaurd/1.png" alt="Cyber Guardians App Icon" width={80} height={80} className="rounded-2xl shadow-md transform group-hover:scale-105 transition-transform duration-300" />
                  <p className="font-medium sm:font-semibold text-lg sm:text-xl text-center drop-shadow-sm">Your Safety, Simplified.</p>
                  <div className="space-y-1.5 w-full px-2 sm:px-4">
                    <div className="flex items-center bg-white/20 p-2 rounded-md shadow-sm">
                        <ShieldCheck size={18} className="mr-2 text-green-300 flex-shrink-0"/>
                        <span className="text-xs sm:text-sm">Scam Shield Active</span>
                    </div>
                    <div className="flex items-center bg-white/20 p-2 rounded-md shadow-sm">
                        <BellRing size={18} className="mr-2 text-yellow-300 flex-shrink-0"/>
                        <span className="text-xs sm:text-sm">Instant Alerts On</span>
                    </div>
                  </div>
                </div>
                <div className="w-full bg-black/20 backdrop-blur-sm py-2.5 sm:py-3 px-4 rounded-b-[26px] sm:rounded-b-[28px]">
                  <p className="text-slate-200 text-xs text-center font-medium">Guardian Mode: <span className="text-green-300 font-bold">Protected</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection; 