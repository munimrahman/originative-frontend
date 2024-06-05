import Image from "next/image";
import { ReviewData } from "@/containers/ReviewSection";

const ReviewCard = ({
  className,
  reviewData: { name, image, review },
}: {
  reviewData: ReviewData;
  className?: string;
}) => {
  return (
    <div
      className={`${className} bg-white/60 p-6 rounded-xl border border-white`}
    >
      <div className="flex items-center gap-3 mb-4">
        <figure>
          <Image
            src={image}
            width={40}
            height={40}
            className="rounded-full"
            unoptimized={true}
            alt=""
          />
        </figure>
        <div>
          <p className="text-[#1C222B] font-medium">{name}</p>
          <p>Rating</p>
        </div>
      </div>
      <p className="text-[#455468] text-sm leading-[22px] tracking-[-0.20px]">
        {review}
      </p>
    </div>
  );
};

export default ReviewCard;
