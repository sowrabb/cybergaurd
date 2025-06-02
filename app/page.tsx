// import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import ChallengeSection from "@/components/ChallengeSection";
import SolutionSection from "@/components/SolutionSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import CallToActionSection from "@/components/CallToActionSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ChallengeSection />
      <SolutionSection />
      <FeaturesSection />
      <HowItWorksSection />
      <WhyChooseUsSection />
      <CallToActionSection />
      {/*
        Hero Section
        The Challenge
        Introducing Cyber Guardian (Our Solution)
        Core Features Showcase
        How It Works (Simplified)
        Why Choose Us / Peace of Mind
        Stay Updated / Download (Future CTA)
        Footer
      */}
    </div>
  );
}
