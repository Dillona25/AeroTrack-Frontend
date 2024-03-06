import NotFoundImg from "../../images/NotFound.png";

export const NotFound = () => {
  return (
    <div className="flex flex-col items-center gap-4 w-[356px] text-center">
      <img
        alt="Not found image"
        src={NotFoundImg}
        className="w-[82px] h-[82px]"
      />
      <h1 className="font-normal">Nothing Found</h1>
      <p className="font-Roboto font-normal text-[18px] text-[#B6BCBF]">
        Sorry, but nothing matched your search terms
      </p>
    </div>
  );
};
