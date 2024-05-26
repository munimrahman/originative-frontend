import { useState } from "react";
import { TargetImageIcon } from "../Icons";
import classes from "./WorkMethodCard.module.css";

const WorkMethodCard = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex flex-col items-center justify-center bg-grey-50 hover:bg-blue-500 duration-300 rounded-3xl w-[24rem] group/workCard"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <figure className="mt-10">
        <TargetImageIcon />
      </figure>
      <div className="flex flex-col items-center justify-center relative">
        <p
          className={`${
            hovered ? classes.hoverNumberGradient : classes.numberGradient
          } text-[18.75rem] -mt-20 -mb-10 group-hover/workCard:translate-y-4 duration-300`}
        >
          1
        </p>

        <div className="text-center absolute top-14 w-[21rem]">
          <p className="text-grey-900 group-hover/workCard:text-white duration-300 text-[2.625rem] font-medium mb-4">
            Discovery
          </p>

          <p className="text-gray-800 group-hover/workCard:text-white group-hover/workCard:translate-y-4 duration-300 text-lg ">
            We begin by understanding your goals, target audience, and industry
            landscape to lay a solid foundation for success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkMethodCard;
