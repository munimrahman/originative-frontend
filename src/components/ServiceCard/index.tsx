import serviceImg from "@/assets/header-one.png";
import Image from "next/image";
import { ArrowRightV2Icon, RightArrowIcon } from "../Icons";
import ButtonWithPen from "../Button/ButtonPrimary";
import classes from "./ServiceCard.module.css";
import BadgeRounded from "../BadgeRounded";
import { useState } from "react";

interface Props {
  isLastChild?: boolean;
}

const ServiceCard = ({ isLastChild }: Props) => {
  const [groupHover, setGroupHover] = useState<boolean>(false);

  return (
    <div
      className={`${
        isLastChild && "border-b border-b-violet-100"
      } border-t border-t-violet-100 py-5 px-4 group/serviceCard duration-700`}
      onMouseEnter={() => setGroupHover(true)}
      onMouseLeave={() => setGroupHover(false)}
    >
      <div className="flex justify-between items-center">
        <div className="basis-[70%] flex gap-4">
          <p className="text-violet-400 pt-3">
            <span className="font-semibold text-lg align-middle">01</span>
          </p>
          <div>
            <h3 className="text-5xl font-medium">Mobile App Design</h3>
            <div
              className={`${classes.details} ${
                groupHover ? classes.groupHover : "duration-700"
              }`}
            >
              <p className="my-8 text-gray-800 text-sm">
                Transforming ideas into captivating digital experiences, our
                UI/UX design service ensures seamless navigation and user
                engagement. Elevate your brand with intuitive designs tailored
                to delight your audience.
              </p>

              <div className="space-x-2">
                <BadgeRounded />
                <BadgeRounded />
                <BadgeRounded />
                <BadgeRounded />
              </div>

              <div className="flex gap-4 my-8">
                <ButtonWithPen className="text-white shadow duration-300">
                  Contact Us
                </ButtonWithPen>
                <button>Explore More</button>
              </div>
            </div>
          </div>
        </div>

        <div className="basis-[30%]">
          <div className="flex gap-10 items-center">
            <figure>
              <Image
                src={serviceImg}
                width={200}
                height={150}
                unoptimized={true}
                className={`${groupHover && classes.img} duration-700`}
                alt=""
              />
            </figure>
            <div>
              <button
                className={`flex items-center justify-center w-16 h-16 border border-violet-400 rounded-full duration-300 ${
                  groupHover && `${classes.icon} bg-blue-500`
                }`}
              >
                <ArrowRightV2Icon
                  stroke={`${groupHover ? "white" : "#453C4F"}`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
