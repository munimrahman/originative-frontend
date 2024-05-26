export interface SectionHeaderInfo {
  name: string;
  title: string;
  description: string;
}

interface Props {
  className?: string;
  sectionInfo: SectionHeaderInfo;
  variation?: "dark" | "light";
}

const SectionTitle = ({ className, sectionInfo, variation }: Props) => {
  return (
    <div
      className={`${className} flex items-center justify-between px-8 mb-16`}
    >
      <div className="basis-[70%]">
        <p
          className={`${
            variation === "dark" ? "text-blue-50" : "text-blue-500"
          }`}
        >
          {sectionInfo.name}
        </p>
        <h2
          className={`text-[3.25rem] font-semibold ${
            variation === "dark" && "text-white"
          }`}
        >
          {sectionInfo.title}
        </h2>
      </div>
      <p
        className={`basis-[20%] ${
          variation === "dark" ? "text-violet-100" : "text-grey-900"
        }`}
      >
        {sectionInfo.description}
      </p>
    </div>
  );
};

export default SectionTitle;
