import ButtonWithPen from "@/components/Button/ButtonPrimary";
import classes from "./CallToAction.module.css";

const CallToAction = () => {
  return (
    <section
      className={`${classes.bgRing} mx-5 bg-black rounded-xl text-white`}
    >
      <div className="container py-20 px-8 flex items-center justify-between">
        <div>
          <h2 className="text-5xl font-medium mb-1">
            Ready to bring your vision to life?
          </h2>
          <p className="text-3xl">Let&apos;s start the journey together.</p>
        </div>

        <div>
          <ButtonWithPen>Let&apos;s Talk</ButtonWithPen>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
