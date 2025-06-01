import React from 'react';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { Rocket, Send } from 'lucide-react';

const CallToActionSection = () => {
  return (
    <section id="cta" className="w-full py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 dark:from-blue-700 dark:via-indigo-700 dark:to-purple-800 text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div className="space-y-5 md:space-y-7 text-center lg:text-left">
            <div className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-5 py-2.5 text-sm font-semibold tracking-wide shadow-md ring-1 ring-white/30">
              <Rocket size={18} className="mr-2 flex-shrink-0" />
              Launching Soon!
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
              Ready to Embrace Digital Safety with Confidence?
            </h2>
            <p className="max-w-[600px] mx-auto lg:mx-0 text-blue-100 text-base sm:text-lg md:text-xl/relaxed leading-relaxed">
              Cyber Guardians is poised to help seniors and their families navigate the online world securely. Be the first to know when we launch and get early access tips!
            </p>
            <form className="flex flex-col sm:flex-row w-full max-w-md mx-auto lg:mx-0 gap-2.5 sm:gap-3 pt-2 md:pt-3">
              <label htmlFor="email-cta" className="sr-only">Email for notifications</label>
              <input 
                id="email-cta"
                type="email" 
                placeholder="Enter your email address" 
                className="flex-grow p-3 sm:p-3.5 rounded-md text-slate-900 bg-white/90 dark:bg-slate-800/80 dark:text-slate-50 dark:placeholder-slate-400 focus:ring-2 focus:ring-yellow-400 dark:focus:ring-yellow-500 outline-none shadow-sm text-sm sm:text-base transition-colors focus:bg-white dark:focus:bg-slate-800/95"
                required
              />
              <Button size="lg" type="submit" className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold px-6 py-3 sm:px-7 sm:py-3.5 text-sm sm:text-base group transition-transform hover:scale-105 active:scale-95 rounded-md shadow-md hover:shadow-lg">
                <Send size={16} className="mr-2 transition-transform group-hover:rotate-12 flex-shrink-0" /> Notify Me
              </Button>
            </form>
            <p className="text-xs text-blue-200 mx-auto lg:mx-0 pt-1 max-w-md">
              We respect your privacy. No spam, ever. Get ready for a safer digital experience!
            </p>
          </div>
          <div className="flex justify-center items-center mt-8 lg:mt-0 perspective">
            <div className="relative w-[270px] h-[540px] sm:w-[280px] sm:h-[560px] bg-slate-900/30 dark:bg-black/30 rounded-[40px] sm:rounded-[48px] shadow-xl p-4 sm:p-5 border-2 sm:border-4 border-slate-500/40 dark:border-slate-400/40 transform transition-all duration-500 hover:scale-[1.03] hover:shadow-yellow-400/30 rotate-y-10 hover:rotate-y-0">
              <div className="absolute top-3 sm:top-4 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-4 sm:h-5 bg-slate-800/60 dark:bg-black/50 rounded-full"></div> {/* Speaker grille */}
              <div className="absolute top-5 sm:top-6 left-6 sm:left-8 w-2.5 sm:w-3 h-2.5 sm:h-3 bg-slate-800/60 dark:bg-black/50 rounded-full"></div> {/* Camera */}
              <div className="w-full h-full bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 dark:from-slate-800 dark:via-slate-800/90 dark:to-slate-900 rounded-[28px] sm:rounded-[32px] flex flex-col items-center justify-between overflow-hidden p-0.5 sm:p-1 shadow-inner">
                <div className="w-full bg-blue-500/80 backdrop-blur-sm py-2.5 sm:py-3 px-4 rounded-t-[26px] sm:rounded-t-[28px]">
                  <h3 className="text-white font-semibold text-center text-base sm:text-lg drop-shadow-sm">Cyber Guardians</h3>
                </div>
                <div className="flex-grow flex flex-col items-center justify-center p-3 sm:p-4 space-y-4">
                  <Image src="/1.png" alt="Cyber Guardians App Icon" width={90} height={90} className="rounded-2xl sm:rounded-3xl shadow-lg transform group-hover:scale-105 transition-transform duration-300" />
                  <p className="text-slate-800 dark:text-slate-100 font-medium sm:font-semibold text-lg sm:text-xl text-center">Your Safety, Simplified.</p>
                  <div className="w-16 h-1.5 bg-green-400 dark:bg-green-500 rounded-full mt-1 sm:mt-2"></div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Loading interface...</p>
                </div>
                <div className="w-full text-center pb-2.5 sm:pb-3 pt-1.5 sm:pt-2 bg-slate-100/80 dark:bg-slate-800/70 rounded-b-[26px] sm:rounded-b-[28px]">
                    <div className="inline-block px-4 py-1 sm:px-5 sm:py-1.5 rounded-full bg-green-500 text-white text-xs font-medium shadow-md">
                        Status: Coming Soon!
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

export default CallToActionSection;

// Add this to your global CSS if you want the perspective and rotate-y effects for the phone
/*
.perspective {
  perspective: 1000px;
}
.rotate-y-10 {
  transform: rotateY(10deg);
}
.hover\:rotate-y-0:hover {
  transform: rotateY(0deg);
}
*/ 