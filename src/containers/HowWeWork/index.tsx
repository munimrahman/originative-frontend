import SectionTitle, { SectionHeaderInfo } from "@/components/SectionTitle";
import WorkMethodCard from "@/components/WorkMethodCard";
import { Fragment } from "react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import { Grid, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const sectionHeaderInfo: SectionHeaderInfo = {
  name: "How we work",
  title: "Our Comprehensive and Customized Work Process",
  description:
    "Our process is simple. We start with your needs, create engaging experiences, research, experiment with ideas, and use your feedback to guide us.",
};

const HowWeWork = () => {
  const items = [1, 2, 3, 4, 5, 6, 7];

  return (
    <section className="my-20 px-8 py-24 bg-black mx-4 rounded-xl">
      <SectionTitle
        className="container"
        sectionInfo={sectionHeaderInfo}
        variation="dark"
      />

      <Swiper
        spaceBetween={12}
        slidesPerView={1.4}
        slidesPerGroup={3}
        speed={700}
        breakpoints={{
          500: {
            slidesPerView: 3.5,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Grid]}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <WorkMethodCard />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <div className="flex gap-4">
        {items.map((item, index) => (
          <div key={index}>
            <WorkMethodCard />
          </div>
        ))}
      </div> */}
    </section>
  );
};

export default HowWeWork;
