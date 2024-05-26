import classes from "./ExplorePortfolio.module.css";

const ExplorePortfolio = () => {
  return (
    <div>
      <div
        className={`text-center ${classes.titleBg} w-[70%] h-[850px] mx-auto flex flex-col items-center justify-center`}
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

      <div></div>
    </div>
  );
};

export default ExplorePortfolio;
