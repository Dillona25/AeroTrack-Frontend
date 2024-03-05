import Nature from "../../images/Nature.png";

type Props = {
  isLoggedIn?: boolean;
};

export const NewsCard = (props: Props) => {
  return (
    <div className="relative flex flex-col h-[440px] w-[288px] sm:w-[400px] sm:h-fit rounded-[10px] bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
      {props.isLoggedIn ? (
        <div className="bg-white h-10 w-10 absolute right-[16px] top-[16px] rounded-[10px] flex">
          <button className="bg-saveIcon h-6 w-6 m-auto"></button>
        </div>
      ) : (
        ""
      )}
      <img
        src={Nature}
        alt="Nature Image"
        className="h-[196px] rounded-t-[10px] sm:h-[272px]"
      />
      <div className="px-4 py-5">
        <h1 className="font-RobotoSlab font-normal mb-4 text-[22px] sm:text-[26px] leading-[24px] sm:leading-[30px]">
          Everyone Needs a Special 'Sit Spot'
        </h1>
        <p className="font-normal h-[88px] mb-[30px] sm:text-[16px] sm:h-[110px] overflow-hidden text-ellipsis">
          Ever since I read Richard Louv's influential book, "Last Child in the
          Woods," the idea of having a special "sit spot" has stuck with me.
          This advice, which Louv attributes to nature educator Jon Young, is
          for both adults and children to find...
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
