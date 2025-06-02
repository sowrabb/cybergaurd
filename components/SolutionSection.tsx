import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { LifeBuoy, ShieldCheck, BellRing } from 'lucide-react';

const SolutionSection = () => {
  const isProd = process.env.NODE_ENV === 'production';
  const prodBasePath = isProd ? '/cybergaurd' : '';

  return (
    <section id="solution" className="w-full py-16 sm:py-20 md:py-24 lg:py-28 bg-slate-50 dark:bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-500/20 px-5 py-2.5 text-sm font-semibold tracking-wide text-blue-600 dark:text-blue-400 shadow-md ring-1 ring-blue-200 dark:ring-blue-500/30">
              <LifeBuoy size={18} className="mr-2.5 flex-shrink-0" />
              Our Commitment to Safety
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-6xl text-slate-900 dark:text-slate-50">
              Cyber Guardian: Your Digital Lifeline
            </h2>
            <p className="max-w-[650px] mx-auto lg:mx-0 text-slate-600 text-base sm:text-lg md:text-xl/relaxed dark:text-slate-300 leading-relaxed">
              We believe everyone deserves to navigate the digital world with confidence and security. Cyber Guardian is a thoughtfully designed, user-friendly application empowering seniors by proactively detecting and blocking scams, providing instant alerts, offering clear educational content, and enabling live location sharing with trusted contacts for peace of mind.
            </p>
            <div className="flex flex-col gap-3.5 min-[400px]:flex-row pt-2 md:pt-4 justify-center lg:justify-start">
              <Link href="#features">
                <Button size="lg" className="w-full min-[400px]:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 text-base md:text-lg dark:bg-blue-500 dark:hover:bg-blue-600 transition-transform hover:scale-105 active:scale-95 rounded-lg shadow-md hover:shadow-lg">
                  Discover Our Features
                </Button>
              </Link>
              <Link href="#how-it-works">
                <Button size="lg" variant="outline" className="w-full min-[400px]:w-auto border-blue-500 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/30 dark:hover:border-blue-500 px-8 py-3.5 text-base md:text-lg transition-transform hover:scale-105 active:scale-95 rounded-lg shadow-sm hover:shadow-md">
                  See How It Works
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center p-0 md:p-4 lg:p-6 mt-10 lg:mt-0">
            <div className="relative w-[280px] h-[560px] sm:w-[300px] sm:h-[600px] bg-slate-800 dark:bg-slate-950 rounded-[44px] sm:rounded-[52px] shadow-2xl p-4 sm:p-5 border-2 sm:border-4 border-slate-700 dark:border-slate-600 transform transition-all duration-500 hover:scale-[1.03] hover:shadow-blue-500/30 dark:hover:shadow-blue-400/30">
              <div className="absolute top-3.5 sm:top-4 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-4 sm:h-5 bg-slate-700 dark:bg-slate-600 rounded-full opacity-50"></div> {/* Speaker grille */}
              <div className="absolute top-5 sm:top-6 left-6 sm:left-8 w-3 sm:w-3.5 h-3 sm:h-3.5 bg-slate-700 dark:bg-slate-600 rounded-full opacity-70"></div> {/* Camera */}
              <div className="w-full h-full bg-slate-100 dark:bg-slate-800 rounded-[32px] sm:rounded-[36px] overflow-hidden">
                {/* Screen Content */}
                <Image 
                  src={`${prodBasePath}/3.png`} 
                  alt="Cyber Guardian App Screenshot" 
                  width={300} 
                  height={600}
                  className="object-cover w-full h-full"
                />
                {/* Example overlay content if needed, can be removed or customized */}
                <div className="absolute inset-0 flex flex-col justify-between p-3 sm:p-4 pointer-events-none">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium text-slate-700 dark:text-slate-200">9:41 AM</span>
                    <div className="flex items-center space-x-1">
                      <ShieldCheck size={14} className="text-green-500 dark:text-green-400" />
                      <BellRing size={14} className="text-yellow-500 dark:text-yellow-400" />
                    </div>
                  </div>
                  <div className="pb-2">
                    <p className="text-center text-xs text-slate-600 dark:text-slate-400 font-medium">Cyber Guardian Active</p>
                  </div>
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