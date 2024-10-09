interface FlightTableProps {
  departures: any[];
  arrivals: any[];
}

export const FlightTable: React.FC<FlightTableProps> = ({
  departures,
  arrivals,
}) => {
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
            {departures.map((departure, index) => (
              <tr className="text-center font-Roboto text-base" key={index}>
                <td className="py-2 px-4 border-b">
                  {new Date(
                    departure.departure.actualTime ||
                      departure.departure.scheduledTime
                  ).toLocaleTimeString()}
                </td>
                <td className="py-2 px-4 border-b">
                  {departure.departure.gate === "null"
                    ? "N/A"
                    : departure.departure.gate}
                </td>
                <td className="py-2 px-4 border-b">{departure.airline.name}</td>
                <td className="py-2 px-4 border-b">
                  {departure.flight.number}
                </td>
                <td className="py-2 px-4 border-b">
                  {departure.departure.iataCode}
                </td>
                <td className="py-2 px-4 border-b">
                  {departure.arrival.iataCode}
                </td>
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
            {arrivals.map((arrival, index) => (
              <tr className="text-center font-Roboto text-base" key={index}>
                <td className="py-2 px-4 border-b">
                  {new Date(
                    arrival.arrival.actualTime || arrival.arrival.scheduledTime
                  ).toLocaleTimeString()}
                </td>
                <td className="py-2 px-4 border-b">{arrival.arrival.gate}</td>
                <td className="py-2 px-4 border-b">{arrival.airline.name}</td>
                <td className="py-2 px-4 border-b">{arrival.flight.number}</td>
                <td className="py-2 px-4 border-b">
                  {arrival.departure.iataCode}
                </td>
                <td className="py-2 px-4 border-b">
                  {arrival.arrival.iataCode}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
