export interface SectionHeaderInfo {
  name: string;
  title: string;
  description: string;
}

interface Props {
  sectionInfo: SectionHeaderInfo;
}

const SectionTitle = ({ sectionInfo }: Props) => {
  return (
    <div className="flex items-center justify-between px-8 mb-16">
      <div className="basis-[70%]">
        <p className="text-blue-500">{sectionInfo.name}</p>
        <h2 className="text-[3.25rem] font-semibold">{sectionInfo.title}</h2>
      </div>
      <p className="basis-[20%] text-gray-900">{sectionInfo.description}</p>
    </div>
  );
};

export default SectionTitle;
