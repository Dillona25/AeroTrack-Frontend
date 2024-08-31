import { FlightData } from "../../utils/flightDataApi";

type FlightTableProps = {
  departures: FlightData[];
  arrivals: FlightData[];
};

export const FlightTable: React.FC<FlightTableProps> = ({
  departures,
  arrivals,
}) => {
  const formatTime = (isoString: string): string => {
    const date = new Date(isoString);
    return new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }).format(date);
  };

  return (
    <section className="py-8 bg-[#f5f6f7] px-4">
      <div className="max-w-[1600px] m-auto flex flex-wrap justify-center gap-4">
        {/* Departure Table */}
        <table className="w-full sm:w-[48%] bg-white border border-gray-200 rounded-lg">
          <thead>
            <tr>
              <th
                className="py-2 px-4 border-b text-center bg-[#76a0e9] font-RobotoSlab"
                colSpan={6}
              >
                Departures
              </th>
            </tr>
            <tr className="font-RobotoSlab text-base">
              <th className="py-2 px-4 border-b">Time</th>
              <th className="py-2 px-4 border-b">Gate</th>
              <th className="py-2 px-4 border-b">Airline</th>
              <th className="py-2 px-4 border-b">Flight</th>
              <th className="py-2 px-4 border-b">Origin</th>
              <th className="py-2 px-4 border-b">Destination</th>
            </tr>
          </thead>
          <tbody>
            {departures.map((flight, index) => (
              <tr key={index} className="text-center font-Roboto text-base">
                <td className="py-2 px-4 border-b">
                  {formatTime(flight.scheduledTime)}
                </td>
                <td className="py-2 px-4 border-b">
                  {flight.gate ? flight.gate : "N/A"}
                </td>
                <td className="py-2 px-4 border-b">{flight.airline}</td>
                <td className="py-2 px-4 border-b">{flight.flightNumber}</td>
                <td className="py-2 px-4 border-b">{flight.departureIata}</td>
                <td className="py-2 px-4 border-b">{flight.arrivalIata}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Arrival Table */}
        <table className="w-full sm:w-[48%] bg-white border border-gray-200 rounded-lg">
          <thead>
            <tr>
              <th
                className="py-2 px-4 border-b text-center bg-[#76a0e9] font-RobotoSlab"
                colSpan={6}
              >
                Arrivals
              </th>
            </tr>
            <tr className="font-RobotoSlab text-base">
              <th className="py-2 px-4 border-b">Time</th>
              <th className="py-2 px-4 border-b">Gate</th>
              <th className="py-2 px-4 border-b">Airline</th>
              <th className="py-2 px-4 border-b">Flight</th>
              <th className="py-2 px-4 border-b">Origin</th>
              <th className="py-2 px-4 border-b">Destination</th>
            </tr>
          </thead>
          <tbody>
            {arrivals.map((flight, index) => (
              <tr key={index} className="text-center font-Roboto text-base">
                <td className="py-2 px-4 border-b">
                  {formatTime(flight.scheduledTime)}
                </td>
                <td className="py-2 px-4 border-b">
                  {flight.gate ? flight.gate : "N/A"}
                </td>
                <td className="py-2 px-4 border-b">{flight.airline}</td>
                <td className="py-2 px-4 border-b">{flight.flightNumber}</td>
                <td className="py-2 px-4 border-b">{flight.departureIata}</td>
                <td className="py-2 px-4 border-b">{flight.arrivalIata}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
