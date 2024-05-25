import Image from "next/image";
import { Inter } from "next/font/google";
import HeroSection from "@/containers/HeroSection";
import PortfolioSlider from "@/containers/PortfolioSlider";
import AboutUs from "@/containers/AboutUs";
import ServiceSliderOne from "@/containers/ServiceSliderOne";
import ServiceSection from "@/containers/ServiceSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PortfolioSlider />
      <AboutUs />
      <ServiceSliderOne />
      <ServiceSection />
    </main>
  );
}
