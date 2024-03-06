type Props = {
  isLoggedIn?: boolean;
  src?: string;
  title?: string;
  description?: string;
  keyword?: string;
  date?: string;
};

export const NewsCard = (props: Props) => {
  return (
    <div className="relative flex flex-col sm:h-[576px] w-[288px] sm:w-[400px] rounded-[20px] bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
      {props.isLoggedIn ? (
        <div className="bg-white h-10 w-10 absolute right-[16px] top-[16px] rounded-[10px] flex">
          <button className="bg-saveIcon hover:bg-saveIconHover h-6 w-6 m-auto"></button>
        </div>
      ) : (
        ""
      )}
      <img
        src={props.src}
        className="h-[196px] sm:h-[272px] rounded-t-[10px]"
      />
      <div className="flex flex-col gap-3 px-4 py-5">
        <span className="font-normal font-RobotoSlab text-[#84898b] text-[16px]">
          {props.date}
        </span>
        <h1 className="font-RobotoSlab font-normal mb-4 text-[22px] sm:text-[26px] leading-[24px] sm:leading-[30px] line-clamp-2">
          {props.title}
        </h1>
        <p className="font-normal line-clamp-4 sm:line-clamp-5">
          {props.description}
        </p>

        <p className="font-bold font-RobotoSlab text-[18px] text-[#84898b] ">
          {props.keyword}
        </p>
        <div className="px-2 bg-[#f5f6f7] rounded-md"></div>
      </div>
    </div>
  );
};
