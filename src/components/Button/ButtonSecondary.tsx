import { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";
import { ArrowRightV2Icon } from "../Icons";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

const ButtonSecondary = ({ children, className, style }: Props) => {
  return (
    <button className="flex items-center gap-2 bg-black text-white px-6 py-2 rounded-full">
      {children}{" "}
      <span className="bg-white h-8 w-8 rounded-full flex items-center justify-center">
        <ArrowRightV2Icon className="w-5 h-5" stroke="black" strokeWidth={3} />
      </span>
    </button>
  );
};

export default ButtonSecondary;
