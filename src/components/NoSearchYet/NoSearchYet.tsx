import Search from "../../assets/Search.svg";

export const NoSearchYet = () => {
  return (
    <div className=" bg-[#f5f6f7] py-10 flex flex-col items-center gap-4 text-center">
      <img alt="Not found image" src={Search} className="w-[82px] h-[82px]" />
      <h1 className="font-normal">Search Results</h1>
      <p className="font-Roboto font-normal text-[18px] text-[#B6BCBF] px-5 sm:w-[356px]">
        Make a search, results will appear here!
      </p>
    </div>
  );
};
