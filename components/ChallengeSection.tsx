import React from 'react';
import { AlertTriangle } from 'lucide-react';

const ChallengeSection = () => {
  return (
    <section id="challenge" className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 md:space-y-6 text-center">
          <div className="inline-flex items-center rounded-full bg-amber-100 dark:bg-amber-500/20 px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold tracking-wide text-amber-600 dark:text-amber-300 shadow-md ring-1 ring-amber-200 dark:ring-amber-500/30">
            <AlertTriangle size={18} className="mr-1.5 sm:mr-2 flex-shrink-0" />
            The Growing Threat
          </div>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl text-slate-900 dark:text-slate-50 max-w-2xl md:max-w-3xl">
            Seniors: A Prime Target for Sophisticated Scams
          </h2>
          <p className="max-w-[700px] md:max-w-[800px] text-slate-600 text-sm sm:text-base md:text-lg/relaxed dark:text-slate-300 leading-relaxed sm:leading-relaxed">
            Online and phone scams are becoming alarmingly sophisticated, specifically preying on the trust and vulnerability of seniors. This often leads to devastating financial losses and severe emotional distress. It's a widespread issue demanding urgent attention and proactive solutions to safeguard our elderly community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChallengeSection; 