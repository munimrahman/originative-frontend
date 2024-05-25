import serviceImg from "@/assets/header-one.png";
import Image from "next/image";

interface Props {
  isLastChild?: boolean;
}

const ServiceCard = ({ isLastChild }: Props) => {
  return (
    <div
      className={`${
        isLastChild && "border-b border-b-violet-100"
      } border-t border-t-violet-100 py-5`}
    >
      <div className="flex">
        <div className="basis-[70%] border">
          <p className="text-violet-400">
            <span className="font-semibold text-lg">01</span>
          </p>
          <h3 className="text-[2.25rem] font-semibold text-violet-400">
            Mobile App Design
          </h3>
        </div>
        <div className="basis-[30%] border">
          <figure>
            <Image
              src={serviceImg}
              width={200}
              height={150}
              unoptimized={true}
              alt=""
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
