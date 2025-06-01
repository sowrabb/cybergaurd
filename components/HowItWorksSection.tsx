import React from 'react';
import { ListChecks, ShieldAlert, Users, ArrowDownCircle } from 'lucide-react';

interface StepCardProps {
  stepNumber: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  isLastStep?: boolean;
}

const StepCard: React.FC<StepCardProps> = ({ stepNumber, icon, title, description, isLastStep }) => {
  return (
    <div className="flex flex-col items-center md:items-stretch w-full">
      <div className="flex flex-col md:flex-row items-start p-6 md:p-8 space-y-4 md:space-y-0 md:space-x-6 rounded-xl shadow-lg bg-white dark:bg-slate-800/80 hover:shadow-xl dark:hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-1 w-full ring-1 ring-slate-200/70 dark:ring-slate-700/50">
        <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-blue-500 text-white font-bold text-2xl md:text-3xl shadow-md mx-auto md:mx-0">
          {icon}
        </div>
        <div className="flex flex-col items-center md:items-start text-center md:text-left flex-grow">
          <span className="text-xs font-semibold tracking-wider uppercase text-blue-500 dark:text-blue-400 mb-1">Step {stepNumber}</span>
          <h3 className="text-xl md:text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-1.5 tracking-tight">{title}</h3>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">{description}</p>
        </div>
      </div>
      {!isLastStep && (
        <div className="flex justify-center md:justify-start md:pl-11 my-5 md:my-6 h-8">
          <ArrowDownCircle size={28} className="text-slate-300 dark:text-slate-600 opacity-70" />
        </div>
      )}
    </div>
  );
};

const HowItWorksSection = () => {
  const steps = [
    {
      stepNumber: "1",
      icon: <ListChecks size={30} strokeWidth={2.5}/>,
      title: "Easy Setup & Activation",
      description: "Download the Cyber Guardians app. Our simple, guided setup will have you protected in minutes. No complicated configurations needed."
    },
    {
      stepNumber: "2",
      icon: <ShieldAlert size={30} strokeWidth={2.5}/>,
      title: "Automatic Background Protection",
      description: "Once installed, Cyber Guardians works tirelessly. It actively monitors for scam calls, suspicious messages, and malicious websites."
    },
    {
      stepNumber: "3",
      icon: <Users size={30} strokeWidth={2.5}/>,
      title: "Stay Alert, Informed & Connected",
      description: "Receive instant alerts for threats. Access educational videos and use the Guardian Angel feature to share your location with loved ones."
    }
  ];

  return (
    <section id="how-it-works" className="w-full py-16 sm:py-20 md:py-24 lg:py-28 bg-slate-50 dark:bg-slate-900/80 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-5 md:space-y-7 text-center mb-12 md:mb-16">
          <div className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-500/20 px-5 py-2.5 text-sm font-semibold tracking-wide text-blue-600 dark:text-blue-400 shadow-md ring-1 ring-blue-200 dark:ring-blue-500/30">
            Simple & Effective
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-slate-900 dark:text-slate-50 max-w-3xl">
            Getting Started is as Easy as 1-2-3
          </h2>
          <p className="max-w-[800px] text-slate-600 text-base sm:text-lg md:text-xl/relaxed dark:text-slate-300 leading-relaxed">
            We&apos;ve designed Cyber Guardians to be intuitive and straightforward, providing powerful protection without the hassle. Follow these simple steps to secure your digital life.
          </p>
        </div>
        <div className="max-w-2xl lg:max-w-3xl mx-auto flex flex-col items-center">
          {steps.map((step, index) => (
            <StepCard key={step.stepNumber} {...step} isLastStep={index === steps.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection; 