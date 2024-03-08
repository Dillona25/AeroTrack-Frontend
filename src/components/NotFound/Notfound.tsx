import NotFoundImg from "../../images/NotFound.png";

export const NotFound = () => {
  return (
    <div className=" bg-[#f5f6f7] py-10 flex flex-col items-center gap-4 text-center">
      <img
        alt="Not found image"
        src={NotFoundImg}
        className="w-[82px] h-[82px]"
      />
      <h1 className="font-normal">Nothing Found</h1>
      <p className="font-Roboto font-normal text-[18px] text-[#B6BCBF] w-[356px]">
        Sorry, but nothing matched your search terms
      </p>
    </div>
  );
};
