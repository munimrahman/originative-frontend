import ServiceCard from "@/components/ServiceCard";
import SectionTitle, { SectionHeaderInfo } from "@/components/SectionTitle";

const sectionHeaderInfo: SectionHeaderInfo = {
  name: "Services We Offer",
  title: "Discover Our Range of Tailored Services",
  description:
    "Explore our range of services designed to elevate your digital presence. Contact us to schedule a consultation and kickstart your journey towards success.",
};

const ServiceSection = () => {
  const items = [1, 2, 3];
  return (
    <section className="container my-20">
      <SectionTitle sectionInfo={sectionHeaderInfo} />
      <div>
        {items.map((item, index) => (
          <ServiceCard key={index} isLastChild={index === items.length - 1} />
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
