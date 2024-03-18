export const PreLoader = () => {
  return (
    <div className="flex flex-col bg-[#f5f6f7] items-center gap-4 py-10">
      <div className="flex">
        <div className="h-2.5 w-2.5 bg-[#2F71E5] rounded-full mr-1 animate-bounce"></div>
        <div className="h-2.5 w-2.5 bg-[#2F71E5] rounded-full mr-1 animate-bounce200"></div>
        <div className="h-2.5 w-2.5 bg-[#2F71E5] rounded-full mr-1 animate-bounce400"></div>
      </div>
      <p className="font-Roboto font-normal text-[18px] text-[#B6BCBF]">
        Searching for News
      </p>
    </div>
  );
};
