import NotFoundImg from "../../assets/NotFound.svg";

export const FlightDataNotFound = () => {
  return (
    <div className=" bg-[#f5f6f7] py-10 flex flex-col items-center gap-4 text-center">
      <img
        alt="Not found image"
        src={NotFoundImg}
        className="w-[82px] h-[82px]"
      />
      <h1 className="font-normal">No Flights Found</h1>
      <p className="font-Roboto font-normal text-[18px] text-[#B6BCBF] px-5 sm:w-[356px]">
        Sorry, but we have no record of this flight.
      </p>
    </div>
  );
};
