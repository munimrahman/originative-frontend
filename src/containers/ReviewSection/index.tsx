import SectionTitle, { SectionHeaderInfo } from "@/components/SectionTitle";
import classes from "./ReviewSection.module.css";
import ReviewCard from "@/components/ReviewCard";
import { StaticImageData } from "next/image";
import img from "@/assets/jad-bourji.png";

export interface ReviewData {
  name: string;
  image: StaticImageData;
  review: string;
}

const sectionHeaderInfo: SectionHeaderInfo = {
  name: "Client Stories",
  title: "Discover What Our Clients Have to Say About Us",
  description:
    "Discover what our clients have to say about their experience working with us. Read our raving reviews and see how we've helped businesses like yours succeed in the digital world.",
};

const reviewData: ReviewData[] = [
  {
    name: "Ridoy Rock",
    image: img,
    review:
      "Congratulations on the launch of the Keep Design System. A great product, I am using the free version. It helps me to increase my work speed and productivity. The premium version has more elements. I'm going to definitely try this!",
  },
  {
    name: "Jad Bourji",
    image: img,
    review:
      "Looks INSANELY good! It's very generous of you (and smart of course) to have a free version for trying. Looks amazing!",
  },
  {
    name: "Sumit Saha",
    image: img,
    review: "Amazing work TEAM Keep Design! I wish you all the best.",
  },

  {
    name: "Md. Saddam Hossain",
    image: img,
    review:
      "My Design Team Recently Designed our own Design System by following the Keep Design System. Awesome and Clean Component Design. Kudos to the Team Keep Design System",
  },
  {
    name: "MD Mostafa Khan",
    image: img,
    review:
      "We are extremely happy😍😊 that our brothers from Bangladesh have made such a lovely React UI component library. I hope that the era will advance in the future.",
  },
  {
    name: "Somrat Sorkar",
    image: img,
    review:
      "This is a great design system with every possible component in it.",
  },
];

const ReviewSection = () => {
  return (
    <section className={`${classes.reviewBg} py-20 container`}>
      <SectionTitle sectionInfo={sectionHeaderInfo} />

      <div className="flex items-stretc gap-4 md:columns-3 px-20">
        <div className="space-y-4 basis-1/3 flex-1 flex flex-col">
          <ReviewCard reviewData={reviewData[0]} />
          <ReviewCard reviewData={reviewData[1]} />
        </div>
        <div className="space-y-4 basis-1/3 flex-1 flex flex-col">
          <ReviewCard reviewData={reviewData[2]} />
          <ReviewCard reviewData={reviewData[3]} className="h-full" />
        </div>
        <div className="space-y-4 basis-1/3 flex-1 flex flex-col">
          <ReviewCard reviewData={reviewData[4]} />
          <ReviewCard reviewData={reviewData[5]} className="h-full" />
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
