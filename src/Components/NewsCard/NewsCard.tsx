import Nature from "../../images/Nature.png";

export const NewsCard = () => {
  return (
    <div className="relative flex flex-col gap-4 h-[440px] w-[288px] rounded-[10px] bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
      <div className="bg-white h-10 w-10 absolute right-[16px] top-[16px] rounded-[10px] flex">
        <button className="bg-saveIcon h-6 w-6 m-auto"></button>
      </div>
      <img
        src={Nature}
        alt="Nature Image"
        className="max-h-[196px] rounded-t-[10px]"
      />
      <div className="px-4">
        <h1 className="font-RobotoSlab font-normal mb-4 text-[22px] leading-[24px]">
          Everyone Needs a Special 'Sit Spot'
        </h1>
        <p className="font-normal mb-[30px]">
          Ever since I read Richard Louv's influential book, "Last Child in the
          Woods," the idea of having a special "sit spot" has stuck with me.{" "}
        </p>
        <div className="flex gap-4">
          <p className="font-bold font-RobotoSlab text-[#84898b] ">
            Treehugger
          </p>
          <div className="px-2 bg-[#f5f6f7] rounded-md">
            <span className="font-normal font-RobotoSlab text-[#84898b] mb-[10px]">
              November 4, 2020
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
