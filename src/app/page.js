import Header from "./components/layout/Header";
import SectionDots from "./components/ui/SectionDots";
import { ContactSection, HeroSection, NetworkSection, PasswordSection, PhishingSection, TrainingSection } from "./components/sections/HomeSections";

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
