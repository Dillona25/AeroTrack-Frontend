import { FaPlane } from "react-icons/fa";

export const PreLoader = () => {
  return (
    <div className="flex flex-col bg-[#f5f6f7] items-center gap-4 py-10">
      <div className="flex items-center justify-center">
        <FaPlane className="h-5 w-5 text-[#2F71E5] rounded-full mr-1 animate-leftToRight" />
      </div>
      <p className="font-Roboto font-normal text-[18px] text-[#B6BCBF]">
        Searching for Data
      </p>
    </div>
  );
};
