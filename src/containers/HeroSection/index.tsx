import { RightArrowIcon } from "@/components/Icons";
import classes from "./HeroSection.module.css";
import Image from "next/image";
import macbook from "@/assets/macbook.png";

const HeroSection = () => {
  return (
    <section className={`${classes.heroBg}`}>
      <div className="py-36">
        <h1 className="text-center text-[3.5rem] uppercase font-medium leading-[5.5rem]">
          Originative HELPS
          <div className="inline-flex relative ms-4 overflow-visible w-48">
            <div className="h-11 w-11 rounded-full border-2 border-blue-200" />
            <div className="absolute top-1/2 -translate-y-1/2 left-1.5">
              <button className="text-base whitespace-nowrap flex items-center bg-white rounded-full ">
                <span className="bg-blue-500 flex items-center justify-center rounded-full h-8 w-8">
                  <RightArrowIcon className="" stroke="white" />
                </span>
                <span className="ps-2 pe-4">View Our Works</span>
              </button>
            </div>
          </div>
          <br />
          Your Brand&apos;s{" "}
          <Image
            src={macbook}
            height={70}
            width={120}
            className="inline-block align-baseline"
            alt="Originative macbook"
            priority
          />{" "}
          Digital Evolution
          <br />
          with Seamless Navigation
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
