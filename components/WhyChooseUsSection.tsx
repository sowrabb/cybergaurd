import React from 'react';
import { Users, Shield, Brain, HeartHandshake, CheckCircle2, TrendingUp } from 'lucide-react';

const WhyChooseUsSection = () => {
  const benefits = [
    {
      icon: <Users size={28} className="text-blue-500 dark:text-blue-400" />,
      title: "Designed for Simplicity",
      description: "Intuitive interface and straightforward setup mean less confusion and more confidence for seniors."
    },
    {
      icon: <Shield size={28} className="text-green-500 dark:text-green-400" />,
      title: "Proactive Security",
      description: "Works tirelessly in the background to identify and neutralize threats before they cause harm."
    },
    {
      icon: <Brain size={28} className="text-purple-500 dark:text-purple-400" />,
      title: "Empowering Education",
      description: "Simple video guides help seniors learn to spot scams, making them more resilient online."
    },
    {
      icon: <HeartHandshake size={28} className="text-red-500 dark:text-red-400" />,
      title: "Peace of Mind for Families",
      description: "Guardian Angel feature allows loved ones to stay connected and ensure safety discreetly."
    },
    {
      icon: <CheckCircle2 size={28} className="text-sky-500 dark:text-sky-400" />,
      title: "Dedicated Support",
      description: "Easy access to help and resources if any questions or issues arise with the app."
    },
    {
      icon: <TrendingUp size={28} className="text-amber-500 dark:text-amber-400" />,
      title: "Always Improving",
      description: "We continuously update our scam detection algorithms to combat the latest threats effectively."
    }
  ];

  return (
    <section id="why-us" className="w-full py-16 sm:py-20 md:py-24 lg:py-28 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-5 md:space-y-7 text-center mb-12 md:mb-16 lg:mb-20">
          <div className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-500/20 px-5 py-2.5 text-sm font-semibold tracking-wide text-blue-600 dark:text-blue-400 shadow-md ring-1 ring-blue-200 dark:ring-blue-500/30">
            Trusted Protection
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-6xl text-slate-900 dark:text-slate-50 max-w-3xl">
            Experience True Peace of Mind
          </h2>
          <p className="max-w-[800px] text-slate-600 text-base sm:text-lg md:text-xl/relaxed dark:text-slate-300 leading-relaxed">
            Cyber Guardian isn&apos;t just an app; it&apos;s a commitment to the safety and well-being of seniors in an increasingly digital world. We prioritize ease of use, robust security, and compassionate support.
          </p>
        </div>
        
        <div className="grid gap-6 sm:gap-7 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="p-6 sm:p-7 rounded-xl shadow-lg bg-slate-50 dark:bg-slate-800/80 hover:shadow-xl dark:hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-1.5 ring-1 ring-slate-200/70 dark:ring-slate-700/50 flex flex-col">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-0.5 p-3 bg-slate-100 dark:bg-slate-700/60 rounded-full shadow-sm">
                  {benefit.icon}
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-slate-100 tracking-tight mb-1.5">{benefit.title}</h3>
                  <p className="text-sm sm:text-[0.9rem] text-slate-600 dark:text-slate-300 leading-relaxed min-h-[42px] sm:min-h-[63px]">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUsSection; 