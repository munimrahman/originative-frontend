import HeroSection from "@/containers/HeroSection";
import PortfolioSlider from "@/containers/PortfolioSlider";
import AboutUs from "@/containers/AboutUs";
import ServiceSliderOne from "@/containers/ServiceSliderOne";
import ServiceSection from "@/containers/ServiceSection";
import HowWeWork from "@/containers/HowWeWork";
import ExplorePortfolio from "@/containers/ExplorePortfolio";
import CallToAction from "@/containers/CallToAction";
import ReviewSection from "@/containers/ReviewSection";
import FaqSection from "@/containers/FaqSection";
import ContactUs from "@/containers/ContactUs";
import ServiceSliderTwo from "@/containers/ServiceSliderTwo";
import Footer from "@/containers/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PortfolioSlider />
      <AboutUs />
      <ServiceSliderOne />
      <ServiceSection />
      <HowWeWork />
      <ExplorePortfolio />
      <CallToAction />
      <ReviewSection />
      <FaqSection />
      <ContactUs />
      <ServiceSliderTwo />
      <Footer />
    </main>
  );
}
