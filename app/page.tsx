"use client"
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import CustomizationSection from "@/components/CustomizationSection";
import FeaturedSection from "@/components/FeaturedSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <div className="bg-slate-200">
      <Header />
      <HeroSection />
      <AboutSection />
      <FeaturedSection />
      <CustomizationSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
