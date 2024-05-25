import Marquee from "@/components/Marquee";
import ServiceSlide from "@/components/ServiceSlide";

const serviceData: string[] = [
  "Webflow",
  "Web Design",
  "Mobile Application",
  "Wordpress",
  "Figma Design",
];

const ServiceSliderOne = () => {
  return (
    <section className="my-20">
      {/* <ServiceSlide data={serviceData} /> */}
      <Marquee>
        I can be a React component, multiple React components, or just some
        text.
      </Marquee>
    </section>
  );
};

export default ServiceSliderOne;
