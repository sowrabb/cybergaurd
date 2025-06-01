import React from 'react';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { ChevronRight } from 'lucide-react'; // Icon for button

const HeroSection = () => {
  return (
    <section className="w-full overflow-hidden bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container px-4 md:px-6 py-10 sm:py-14 md:py-20 lg:py-24 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4 sm:space-y-5 text-center lg:text-left">
            <div className="space-y-2 sm:space-y-2.5">
              <h1 className="text-3xl font-bold tracking-tight xs:text-[2.25rem] sm:text-4xl md:text-5xl lg:text-[3.25rem]/[1.1] text-slate-900 dark:text-slate-50">
                Protecting Seniors from Cyber Scams—One Touch at a Time
              </h1>
              <p className="max-w-full md:max-w-md lg:max-w-lg mx-auto lg:mx-0 text-slate-600 text-sm xs:text-base sm:text-lg dark:text-slate-300 leading-relaxed">
                An easy-to-use app that blocks scam calls, sends instant alerts, and teaches online safety.
              </p>
            </div>
            <div className="flex flex-col items-center lg:items-start pt-2 sm:pt-3">
              <Button size="lg" className="w-full min-[420px]:w-auto bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base px-6 py-3 md:px-8 md:py-3.5 group dark:bg-blue-500 dark:hover:bg-blue-600 transition-transform hover:scale-105 active:scale-95 rounded-lg shadow-md hover:shadow-lg">
                Get Protected <ChevronRight className="ml-1.5 sm:ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
          <div className="relative w-full aspect-[4/3] sm:aspect-video max-h-[280px] xs:max-h-[320px] sm:max-h-[360px] md:max-h-[420px] lg:max-h-[480px] rounded-lg md:rounded-xl overflow-hidden shadow-xl hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20 transition-shadow duration-500 mx-auto lg:mx-0 mt-4 sm:mt-0">
            <Image
              alt="Elderly woman smiling while using her phone, with a computer and security icons illustrating digital safety."
              className="object-cover"
              fill
              src="/cybergaurd/hero.jpg"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 50vw"
              priority
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/5 group-hover:from-black/10 transition-all duration-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 