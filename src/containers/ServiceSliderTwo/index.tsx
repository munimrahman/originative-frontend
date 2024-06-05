import { SeparatorIcon } from "@/components/Icons";
import Marquee from "@/components/Marquee";

const serviceData: string[] = [
  "mobile app design",
  "web design",
  "web development",
  "webflow design",
  "Logo & branding",
  "UI/UX Design",
];
const serviceData2: string[] = [
  "mobile app design",
  "web design",
  "web development",
  "webflow design",
  "Logo & branding",
  "UI/UX Design",
];

const ServiceSliderTwo = () => {
  return (
    <section className="my-20">
      <div className="py-8">
        <Marquee pauseOnHover>
          <div className="flex gap-6">
            {serviceData.map((item, index) => (
              <div
                key={index}
                className={`flex gap-6 items-center ${
                  index === serviceData.length - 1 && "me-6"
                }`}
              >
                <p
                  className={`text-[2rem] font-medium py-2 uppercase text-blue-500`}
                >
                  {item}
                </p>
                <SeparatorIcon />
              </div>
            ))}
          </div>
        </Marquee>

        <Marquee pauseOnHover direction="right">
          <div className="flex gap-6 mt-12">
            {serviceData2.map((item, index) => (
              <div
                key={index}
                className={`flex gap-6 items-center ${
                  index === serviceData.length - 1 && "me-6"
                }`}
              >
                <p
                  className={`text-[2rem] font-medium py-2 uppercase text-blue-500`}
                >
                  {item}
                </p>
                <SeparatorIcon />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default ServiceSliderTwo;
