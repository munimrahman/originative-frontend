import { DownArrowIconV2 } from "@/components/Icons";
import SectionTitle, { SectionHeaderInfo } from "@/components/SectionTitle";
import { useState } from "react";
import { Collapse } from "react-collapse";

export interface FaqData {
  id: number;
  question: string;
  answer: string;
}

const sectionHeaderInfo: SectionHeaderInfo = {
  name: "Contact us",
  title: "Have a Project Idea? Let’s Work Together",
  description:
    "Have something in mind or just want to say hello? Drop us a message using the form below. We're excited to hear from you!",
};

const faqData: FaqData[] = [
  {
    id: 1,
    question: "What are your focus areas as a UI/UX agency?",
    answer:
      "Our focus areas include user research, interaction design, visual design, usability testing, and prototyping. We aim to create intuitive, user-friendly interfaces that enhance user experience and meet business goals.",
  },
  {
    id: 2,
    question: "What sets Musemind apart from other top UI/UX design agencies?",
    answer:
      "Musemind distinguishes itself with a user-centric approach, personalized design solutions, and a commitment to continuous innovation. Our team combines expertise with a passion for creating seamless digital experiences, ensuring client satisfaction and impactful results.",
  },
  {
    id: 3,
    question:
      "What services do you offer for start-ups, and how can they add value to my business?",
    answer:
      "We offer comprehensive services for start-ups, including user research, branding, web and mobile app design, and prototyping. These services help establish a strong brand identity, enhance user engagement, and accelerate your product's go-to-market strategy, driving growth and success for your business.",
  },
  {
    id: 4,
    question:
      "Can you help us redesign our app, website, or enterprise/B2B software?",
    answer:
      "Yes, we specialize in redesigning apps, websites, and enterprise/B2B software. Our goal is to improve usability, enhance user experience, and align the design with your business objectives, ensuring a modern and efficient digital presence.",
  },
  {
    id: 5,
    question: "How do you estimate the time for the UI/UX project?",
    answer:
      "We estimate the time for a UI/UX project by evaluating the project scope, complexity, and specific requirements. This involves a detailed discussion with the client, followed by creating a project timeline that includes key milestones and deliverables.",
  },
  {
    id: 6,
    question: "How much does a UI/UX design project cost?",
    answer:
      "The cost of a UI/UX design project varies based on its scope, complexity, and specific requirements. After understanding your needs, we provide a customized quote that reflects the project's demands and our expertise.",
  },
];

const FaqSection = () => {
  return (
    <section className={`py-20 container`}>
      <SectionTitle sectionInfo={sectionHeaderInfo} />

      <div className="px-40">
        {faqData.map((item) => (
          <FaqCard key={item.id} faqItem={item} />
        ))}
      </div>
    </section>
  );
};

export default FaqSection;

const FaqCard = ({ faqItem: { question, answer } }: { faqItem: FaqData }) => {
  const [isOpened, setIsOpened] = useState<boolean>();

  return (
    <div className="border-b border-b-violet-50 pb-8 mt-6">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpened(!isOpened)}
      >
        <h3 className="text-2xl font-medium">{question}</h3>
        <span className="bg-[#EDF0F2] w-12 h-12 rounded-full flex items-center justify-center">
          <DownArrowIconV2 />
        </span>
      </div>
      <Collapse isOpened={isOpened || false}>
        <p className="text-lg">{answer}</p>
      </Collapse>
    </div>
  );
};
