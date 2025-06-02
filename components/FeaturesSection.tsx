import React from 'react';
import { ShieldCheck, BellRing, PlayCircle, MapPin } from 'lucide-react'; // Import Lucide icons

interface FeatureCardProps {
  icon: React.ReactNode; // Changed to React.ReactNode to accept icon components
  title: string;
  description: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, className }) => {
  return (
    <div className={`flex flex-col items-center p-6 space-y-3.5 rounded-xl shadow-lg bg-white dark:bg-slate-800/80 text-center hover:shadow-xl dark:hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-1 ${className} ring-1 ring-slate-200/70 dark:ring-slate-700/50`}>
      <div className="p-3.5 rounded-full bg-blue-500 text-white mb-3 shadow-md">
        {icon} 
      </div>
      <h3 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-slate-100 tracking-tight">{title}</h3>
      <p className="text-sm text-slate-600 dark:text-slate-300 min-h-[60px] sm:min-h-[70px] leading-relaxed px-1">
        {description}
      </p>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <ShieldCheck size={28} strokeWidth={2.5} />,
      title: "Scam Shield",
      description: "Proactively detects and blocks suspicious calls, messages, and websites to keep you safe.",
      className: "dark:hover:shadow-green-400/20"
    },
    {
      icon: <BellRing size={28} strokeWidth={2.5} />,
      title: "Instant Alert",
      description: "Receive immediate notifications for threats. Quickly connect to 911 or emergency contacts.",
      className: "dark:hover:shadow-red-400/20"
    },
    {
      icon: <PlayCircle size={28} strokeWidth={2.5} />,
      title: "Stay Informed",
      description: "Access easy-to-understand educational videos on identifying and avoiding common online scams.",
      className: "dark:hover:shadow-yellow-400/20"
    },
    {
      icon: <MapPin size={28} strokeWidth={2.5} />,
      title: "Guardian Angel",
      description: "Share your live location with trusted friends or family for peace of mind and extra safety.",
      className: "dark:hover:shadow-purple-400/20"
    }
  ];

  return (
    <section id="features" className="w-full py-16 sm:py-20 md:py-24 lg:py-28 bg-slate-100 dark:bg-slate-900/80 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-5 md:space-y-7 text-center mb-12 md:mb-16">
          <div className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-500/20 px-5 py-2.5 text-sm font-semibold tracking-wide text-blue-600 dark:text-blue-400 shadow-md ring-1 ring-blue-200 dark:ring-blue-500/30">
            Core Features
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-slate-900 dark:text-slate-50 max-w-3xl">
            Comprehensive Protection, Simply Delivered
          </h2>
          <p className="max-w-[800px] text-slate-600 text-base sm:text-lg md:text-xl/relaxed dark:text-slate-300 leading-relaxed">
            Cyber Guardian is packed with features designed for ease of use and robust security, empowering seniors in their digital lives.
          </p>
        </div>
        <div className="grid gap-5 sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 