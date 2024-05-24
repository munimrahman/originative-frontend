import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import { Grid, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import Link from "next/link";

import portfolioOne from "@/assets/header-one.png";
import portfolioTwo from "@/assets/header-two.png";
import portfolioThree from "@/assets/header-three.jpeg";
import portfolioFour from "@/assets/header-four.jpeg";

import dribble from "@/assets/icons/dribble.svg";
import linkedin from "@/assets/icons/LinkedIn.svg";
import instagram from "@/assets/icons/instagrame.svg";
import facebook from "@/assets/icons/facebook.svg";
import twitter from "@/assets/icons/twitter.svg";
import {
  CustomerChatIcon,
  ThumbsUpIcon,
  UserLoveIcon,
} from "@/components/Icons";

const portfolioData = [
  {
    id: 1,
    name: "Portfolio One",
    image: portfolioOne,
    link: "/",
  },
  {
    id: 2,
    name: "Portfolio Two",
    image: portfolioTwo,
    link: "/",
  },
  {
    id: 3,
    name: "Portfolio Three",
    image: portfolioThree,
    link: "/",
  },
  {
    id: 4,
    name: "Portfolio Four",
    image: portfolioFour,
    link: "/",
  },
];

const socialMedia = [
  {
    id: 1,
    name: "Dribble",
    icon: dribble,
    link: "/",
  },
  {
    id: 2,
    name: "LinkedIn",
    icon: linkedin,
    link: "/",
  },
  {
    id: 3,
    name: "Instagram",
    icon: instagram,
    link: "/",
  },
  {
    id: 4,
    name: "Facebook",
    icon: facebook,
    link: "/",
  },
  {
    id: 5,
    name: "Twitter",
    icon: twitter,
    link: "/",
  },
];

const PortfolioSlider = () => {
  return (
    <section className="mb-28">
      <Slider />
      <StatsAndSocialLinks />
    </section>
  );
};

export default PortfolioSlider;

const Slider = () => {
  return (
    <Swiper
      spaceBetween={25}
      slidesPerView={1.4}
      slidesPerGroup={3}
      speed={700}
      breakpoints={{
        500: {
          slidesPerView: 2.6,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Grid]}
    >
      {portfolioData.map((item) => (
        <SwiperSlide key={item.id}>
          <Link href={item.link} className="rounded-" title={item.name}>
            <Image
              src={item.image}
              width={589}
              height={401}
              className="w-full h-full rounded-2xl object-cover aspect-[589/401]"
              unoptimized={true}
              alt="originative portfolio"
            />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const StatsAndSocialLinks = () => {
  return (
    <div className="container flex justify-between mt-12">
      <div className="flex gap-20">
        <div className="flex items-center gap-2">
          <ThumbsUpIcon />
          <p className="text-violet-400">
            <span className="font-semibold text-lg">100%</span> Client
            Satisfaction
          </p>
        </div>

        <div className="flex items-center gap-2">
          <CustomerChatIcon />
          <p className="text-violet-400">
            <span className="font-semibold text-lg">24/7</span> Customer Support
          </p>
        </div>

        <div className="flex items-center gap-2">
          <UserLoveIcon />
          <p className="text-violet-400">
            <span className="font-semibold text-lg">37+</span> Happy Customers
          </p>
        </div>
      </div>

      <div className="flex gap-4">
        {socialMedia.map((item) => (
          <Link href={item.link} key={item.id} title={item.name}>
            <Image
              src={item.icon}
              width={24}
              height={24}
              className="w-full h-full rounded-full object-cover aspect-[24/24]"
              unoptimized={true}
              alt="originative social media"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
