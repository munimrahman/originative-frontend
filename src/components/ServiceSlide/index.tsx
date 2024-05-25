import classes from "./ServiceSlide.module.css";

interface Props {
  direction?: "left" | "right";
  backgroundColor?: string;
  data: string[];
}

const ServiceSlide = ({ direction = "left", backgroundColor, data }: Props) => {
  return (
    <div className={`${classes.slide}`}>
      <div className="flex gap-4">
        <h1 className="text-3xl">Service 1</h1>
        <h1 className="text-3xl">Service 1</h1>
        <h1 className="text-3xl">Service 1</h1>
        <h1 className="text-3xl">Service 1</h1>
      </div>
    </div>
  );
};

export default ServiceSlide;
