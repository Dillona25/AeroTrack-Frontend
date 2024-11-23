import { FlightMap } from "../FlightMap/FlightMap";

export const FlightSearchResults = () => {
  return (
    <section className="max-w-[1600px] m-auto py-8">
      <div className="flex justify-center items-center">
        <div className="flex justify-center gap-10 flex-grow">
          <FlightMap />
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
            <div className="flex justify-between mt-5">
              <span className="text-xl">Departure time:</span>
              <span className="text-xl">Arrival Time:</span>
            </div>
            <div className="flex justify-between mt-5">
              <span className="text-xl">Departure Gate:</span>
              <span className="text-xl">Arrival Gate:</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlightSearchResults;
