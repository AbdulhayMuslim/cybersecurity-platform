import Header from "./components/layout/Header";
import SectionDots from "./components/ui/SectionDots";
import ContactSection from "./components/sections/ContactSection";
import HeroSection from "./components/sections/HeroSection";
import NetworkSection from "./components/sections/NetworkSection";
import PasswordSection from "./components/sections/PasswordSection";
import PhishingSection from "./components/sections/PhishingSection";
import TrainingSection from "./components/sections/TrainingSection";

export default function HomePage() {
  return (
    <main className="overflow-clip bg-[#07111f] text-slate-50 [scroll-snap-type:y_mandatory]">
      <Header />
      <SectionDots />
      <HeroSection />
      <PhishingSection />
      <PasswordSection />
      <NetworkSection />
      <TrainingSection />
      <ContactSection />
    </main>
  );
}
