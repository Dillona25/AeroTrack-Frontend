export const FlightTrackResults = () => {
  return (
    <section className="max-w-[1600px] m-auto py-8">
      <div className="flex justify-center items-center px-">
        <div className="flex justify-center gap-10 flex-grow">
          {/* <FlightMap /> */}
          <div className="flex flex-col flex-1">
            <h1 className="text-[36px] font-RobotoSlab">Alaska Airlines</h1>
            <h2 className="text-[30px] font-RobotoSlab mb-5">Flight: AS2345</h2>
            <div className="flex items-center">
              <div className="flex flex-col">
                <span className="text-gray-400">Departing</span>
                <span className="text-[36px] font-RobotoSlab">DEN</span>
              </div>
              <span className="border-b-[2px] border-black mx-4 mt-5 flex-1"></span>
              <div className="flex flex-col">
                <span className="text-gray-400">Arriving at</span>
                <span className="text-[36px] font-RobotoSlab">PDX</span>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Denver International</span>
              <span className="text-gray-400">Portland International</span>
            </div>
            <div className="flex justify-between mt-5">
              <span className="text-xl">
                Departure time:<span className="text-green-600"> 8:23 AM</span>
              </span>
              <span className="text-xl">
                Arrival Time:<span className="text-green-600"> 11:30 PM</span>
              </span>
            </div>
            <div className="flex justify-between mt-5">
              <span className="text-xl">
                Departure Gate:<span className="font-bold text-3xl"> A7</span>
              </span>
              <span className="text-xl">
                Arrival Gate:<span className="font-bold text-3xl"> C19</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlightTrackResults;
