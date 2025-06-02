import React from 'react';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { Rocket, Send } from 'lucide-react';

const CallToActionSection = () => {
  const isProd = process.env.NODE_ENV === 'production';
  const prodBasePath = isProd ? '/cybergaurd' : '';

  return (
    <section id="cta" className="w-full py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 dark:from-blue-700 dark:via-indigo-700 dark:to-purple-800 text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-5 py-2.5 text-sm font-semibold tracking-wide shadow-md ring-1 ring-white/30">
              <Rocket size={18} className="mr-2.5 flex-shrink-0" />
              Launching Soon!
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-6xl text-white">
              Ready to Embrace Digital Safety with Confidence?
            </h2>
            <p className="max-w-[650px] mx-auto lg:mx-0 text-blue-100 text-base sm:text-lg md:text-xl/relaxed leading-relaxed">
              Cyber Guardian is poised to help seniors and their families navigate the online world securely. Be the first to know when we launch and get early access tips!
            </p>
            <form className="flex flex-col sm:flex-row w-full max-w-md mx-auto lg:mx-0 gap-3 sm:gap-3.5 pt-2 md:pt-4">
              <label htmlFor="email-cta" className="sr-only">Email for notifications</label>
              <input 
                id="email-cta"
                type="email" 
                placeholder="Enter your email address" 
                className="flex-grow p-3.5 sm:p-4 rounded-lg text-slate-900 bg-white/95 dark:bg-slate-800/90 dark:text-slate-50 dark:placeholder-slate-400 focus:ring-2 focus:ring-yellow-400 dark:focus:ring-yellow-500 outline-none shadow-sm text-sm sm:text-base transition-colors focus:bg-white dark:focus:bg-slate-800/95 placeholder:text-slate-500 dark:placeholder:text-slate-400/80"
                required
              />
              <Button size="lg" type="submit" className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold px-7 py-3.5 sm:px-8 sm:py-4 text-base md:text-lg group transition-transform hover:scale-105 active:scale-95 rounded-lg shadow-md hover:shadow-lg whitespace-nowrap">
                <Send size={18} className="mr-2 transition-transform group-hover:rotate-12 flex-shrink-0" /> Notify Me
              </Button>
            </form>
            <p className="text-xs sm:text-sm text-blue-200/90 mx-auto lg:mx-0 pt-1.5 max-w-md">
              We respect your privacy. No spam, ever. Get ready for a safer digital experience!
            </p>
          </div>
          <div className="flex justify-center items-center mt-10 lg:mt-0 perspective">
            <div className="relative w-[280px] h-[560px] sm:w-[300px] sm:h-[600px] bg-slate-900/30 dark:bg-black/40 rounded-[44px] sm:rounded-[52px] shadow-2xl p-4 sm:p-5 border-2 sm:border-4 border-slate-500/50 dark:border-slate-400/50 transform transition-all duration-700 hover:scale-[1.03] rotate-y-10 hover:rotate-y-0 hover:shadow-yellow-400/40 dark:hover:shadow-yellow-300/30">
              <div className="absolute top-3.5 sm:top-4 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-4 sm:h-5 bg-slate-800/70 dark:bg-black/60 rounded-full"></div> {/* Speaker grille */}
              <div className="absolute top-5 sm:top-6 left-6 sm:left-8 w-3 sm:w-3.5 h-3 sm:h-3.5 bg-slate-800/70 dark:bg-black/60 rounded-full"></div> {/* Camera */}
              <div className="w-full h-full bg-slate-100 dark:bg-slate-800 rounded-[32px] sm:rounded-[36px] overflow-hidden shadow-inner">
                {/* Screen Content */}
                <Image 
                  src={`${prodBasePath}/2.png`} 
                  alt="Cyber Guardian App on Phone Mockup" 
                  width={300} 
                  height={600}
                  className="object-cover w-full h-full"
                />
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