import { useFlightData } from "../../store/flightDataContext";

export const FlightTrackResults = () => {
  const { flightData } = useFlightData();

  if (!flightData) {
    return null;
  }

  function timeConversion(dateTime: string): string {
    const date = new Date(dateTime);
    let hours: number = date.getHours();
    let minutes: number = date.getMinutes();

    const ampm: string = hours >= 12 ? "pm" : "am";

    hours = hours % 12;
    hours = hours ? hours : 12;

    minutes = minutes < 10 ? Number("0" + minutes) : minutes;

    return `${hours}:${minutes < 10 ? "0" + minutes : minutes} ${ampm}`;
  }

  return (
    <section className="py-8 bg-[#f5f6f7]">
      <div className="flex justify-center items-center max-w-[1200px] m-auto">
        <div className="flex justify-center gap-10 flex-grow">
          <div className="flex flex-col flex-1">
            <h1 className="text-[36px] font-RobotoSlab">
              {flightData.airline.name}
            </h1>
            <h2 className="text-[30px] font-RobotoSlab mb-5">
              {flightData.flight.icaoNumber}
            </h2>
            <div className="flex items-center">
              <div className="flex flex-col">
                {flightData.status === "active" ? (
                  <span className="text-gray-400">Departed From</span>
                ) : (
                  <span className="text-gray-400">Departing From</span>
                )}
                <span className="text-[36px] font-RobotoSlab">
                  {flightData.departure.iataCode}
                </span>
              </div>
              <span className="border-b-[2px] border-black mx-4 mt-5 flex-1"></span>
              <div className="flex flex-col">
                {flightData.status === "landed" ? (
                  <span className="text-gray-400">Landed at</span>
                ) : (
                  <span className="text-gray-400">Arriving at</span>
                )}
                <span className="text-[36px] font-RobotoSlab">
                  {flightData.arrival.iataCode}
                </span>
              </div>
            </div>
            <div className="flex justify-between mt-5">
              <span className="text-xl">
                Departure time:
                <span className="text-green-600">
                  {" "}
                  {timeConversion(flightData.departure.scheduledTime)}
                </span>
              </span>
              <span className="text-xl">
                Arrival Time:
                <span className="text-green-600">
                  {" "}
                  {timeConversion(flightData.arrival.scheduledTime)}
                </span>
              </span>
            </div>
            <div className="flex justify-between mt-5">
              <span className="text-xl">
                Departure Gate:
                <span className="font-bold text-3xl">
                  {" "}
                  {flightData.departure.gate
                    ? flightData.departure.gate
                    : "N/A"}
                </span>
              </span>
              <span className="text-xl">
                Arrival Gate:
                <span className="font-bold text-3xl">
                  {" "}
                  {flightData.arrival.gate ? flightData.arrival.gate : "N/A"}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlightTrackResults;
