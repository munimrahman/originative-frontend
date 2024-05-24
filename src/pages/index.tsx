import Image from "next/image";
import { Inter } from "next/font/google";
import HeroSection from "@/containers/HeroSection";
import PortfolioSlider from "@/containers/PortfolioSlider";
import AboutUs from "@/containers/AboutUs";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PortfolioSlider />
      <AboutUs />
    </main>
  );
}
