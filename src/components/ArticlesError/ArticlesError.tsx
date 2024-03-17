import NotFoundImg from "../../assets/NotFound.svg";

type Props = {
  handleContactModal?: () => void;
};

export const ArticleError = (props: Props) => {
  return (
    <div className=" bg-[#f5f6f7] py-10 flex flex-col items-center gap-4 text-center">
      <img
        alt="Not found image"
        src={NotFoundImg}
        className="w-[82px] h-[82px]"
      />
      <h1 className="font-normal">Oops</h1>
      <p className="font-Roboto font-normal text-[18px] text-[#B6BCBF] px-5 sm:w-[356px]">
        Hmm, we've hit a roadblock on our end
      </p>
      <p className="font-Roboto font-normal text-[18px] text-[#B6BCBF] px-5 sm:w-[356px]">
        Please report this error{" "}
        <button onClick={props.handleContactModal} className="underline">
          here
        </button>
      </p>
    </div>
  );
};
