import Image from "next/image";
import classes from "./ExplorePortfolio.module.css";
import img from "@/assets/header-four.jpeg";
import { ArrowRightV2Icon } from "@/components/Icons";
import ButtonSecondary from "@/components/Button/ButtonSecondary";

const ExplorePortfolio = () => {
  return (
    <section className="relative mb-20">
      <div
        className={`text-center ${classes.titleBg} w-[70%] h-[850px] mx-auto flex flex-col items-center justify-center sticky top-0`}
      >
        <h2 className="text-[5rem] z-30 text-violet-900 leading-[96px]">
          <span className="text-grey-900">Explore</span> Our Outstanding Design
          Solutions,{" "}
          <span className="text-grey-900">Crafted Exclusively For You</span>
        </h2>
        <p className="text-2xl text-grey-900 mt-5">
          Explore our portfolio and see how we turn visions into captivating
          digital experiences.
        </p>
      </div>

      <div className="container px-20 relative">
        <figure className="flex justify-start">
          <Image
            src={img}
            width={529}
            height={360}
            className="rounded-xl"
            alt=""
          />
        </figure>
        <figure className="flex justify-end">
          <Image
            src={img}
            width={529}
            height={360}
            className="rounded-xl"
            alt=""
          />
        </figure>
        <figure className="flex justify-start">
          <Image
            src={img}
            width={529}
            height={360}
            className="rounded-xl"
            alt=""
          />
        </figure>

        <div className="flex items-center justify-center pt-16">
          <ButtonSecondary> Explore More</ButtonSecondary>
        </div>
      </div>
    </section>
  );
};

export default ExplorePortfolio;
