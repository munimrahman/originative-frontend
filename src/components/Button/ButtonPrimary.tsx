import { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";
import { PenIcon } from "../Icons";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

const ButtonWithPen = ({ children, className, style, ...rest }: Props) => {
  return (
    <button
      className={`${className} bg-blue-500 hover:bg-white hover:text-black rounded-full flex items-center gap-2 px-6 py-3 group duration-200`}
      style={style}
      {...rest}
    >
      {children}
      <span className="bg-white group-hover:bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center duration-200">
        <PenIcon strokeClassName="group-hover:stroke-white" />
      </span>
    </button>
  );
};

export default ButtonWithPen;
