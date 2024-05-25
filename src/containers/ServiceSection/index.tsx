import ServiceCard from "@/components/ServiceCard";

const ServiceSection = () => {
  const items = [1, 2, 3];
  return (
    <section className="container my-20">
      <div className="flex items-center justify-between px-8 mb-16">
        <div className="basis-[70%]">
          <p className="text-blue-500">Service We Offer</p>
          <h2 className="text-[3.25rem] font-semibold">
            Discover Our Range of Tailored Services
          </h2>
        </div>
        <p className="basis-[20%] text-gray-900">
          Explore our range of services designed to elevate your digital
          presence. Contact us to schedule a consultation and kickstart your
          journey towards success.
        </p>
      </div>
      <div>
        {items.map((item, index) => (
          <ServiceCard key={index} isLastChild={index === items.length - 1} />
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
