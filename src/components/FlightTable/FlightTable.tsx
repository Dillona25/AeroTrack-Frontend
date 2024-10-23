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
      <div className="max-w-[1600px] m-auto flex flex-col justify-center gap-4">
        <div className="flex flex-col xl:flex-row justify-center gap-4">
          {/* Departure Table */}
          <table className="w-full xl:w-1/2 bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr>
                <th
                  className="py-2 px-4 border-b text-center bg-[#76a0e9] font-RobotoSlab"
                  colSpan={7}
                >
                  Departures
                </th>
              </tr>
              <tr className="font-RobotoSlab text-sm">
                <th className="py-2 px-4 border-b">Departure Time</th>
                <th className="py-2 px-4 border-b hidden md:table-cell">
                  Status
                </th>
                <th className="py-2 px-4 border-b">Gate</th>
                <th className="py-2 px-4 border-b hidden md:table-cell">
                  Airline
                </th>
                <th className="py-2 px-4 border-b">Flight</th>
                <th className="py-2 px-4 border-b hidden md:table-cell">
                  Origin
                </th>
                <th className="py-2 px-4 border-b">Destination</th>
              </tr>
            </thead>
            <tbody>
              {departures.map((departure, index) => (
                <tr
                  className={`text-center font-Roboto text-sm ${
                    index % 2 === 0 ? "bg-gray-100" : ""
                  }`}
                  key={index}
                >
                  <td className="py-2 px-4 border-b">
                    {new Date(
                      departure.departure.actualTime ||
                        departure.departure.scheduledTime
                    ).toLocaleTimeString([], {
                      hour: "numeric",
                      minute: "2-digit",
                      hour12: true,
                    })}
                  </td>
                  <td
                    className={`py-2 px-4 border-b hidden md:table-cell ${
                      departure.status === "active" ||
                      departure.status === "scheduled"
                        ? "text-green-600"
                        : departure.status === "canceled"
                        ? "text-red-600"
                        : departure.status === "diverted"
                        ? "text-yellow-500"
                        : "text-red-600"
                    }`}
                  >
                    {departure.status.charAt(0).toUpperCase() +
                      departure.status.slice(1)}
                  </td>
                  <td className="py-2 px-4 border-b">
                    {departure.departure.gate ?? "N/A"}
                  </td>
                  <td className="py-2 px-4 border-b hidden md:table-cell">
                    {departure.airline.name}
                  </td>
                  <td className="py-2 px-4 border-b">
                    {departure.flight.icaoNumber}
                  </td>
                  <td className="py-2 px-4 border-b hidden md:table-cell">
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
          <table className="w-full xl:w-1/2 bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr>
                <th
                  className="py-2 px-4 border-b text-center bg-[#76a0e9] font-RobotoSlab"
                  colSpan={7}
                >
                  Arrivals
                </th>
              </tr>
              <tr className="font-RobotoSlab text-sm">
                <th className="py-2 px-4 border-b">Arrival Time</th>
                <th className="py-2 px-4 border-b hidden md:table-cell">
                  Status
                </th>
                <th className="py-2 px-4 border-b">Gate</th>
                <th className="py-2 px-4 border-b hidden md:table-cell">
                  Airline
                </th>
                <th className="py-2 px-4 border-b">Flight</th>
                <th className="py-2 px-4 border-b hidden md:table-cell">
                  Origin
                </th>
                <th className="py-2 px-4 border-b">Destination</th>
              </tr>
            </thead>
            <tbody>
              {arrivals.map((arrival, index) => (
                <tr
                  className={`text-center font-Roboto text-sm ${
                    index % 2 === 0 ? "bg-gray-100" : ""
                  }`}
                  key={index}
                >
                  <td className="py-2 px-4 border-b">
                    {new Date(
                      arrival.arrival.actualTime ||
                        arrival.arrival.scheduledTime
                    ).toLocaleTimeString([], {
                      hour: "numeric",
                      minute: "2-digit",
                      hour12: true,
                    })}
                  </td>
                  <td
                    className={`py-2 px-4 border-b hidden md:table-cell ${
                      arrival.status === "landed" ||
                      arrival.status === "scheduled"
                        ? "text-green-600"
                        : arrival.status === "canceled"
                        ? "text-red-600"
                        : arrival.status === "diverted"
                        ? "text-yellow-500"
                        : "text-red-600"
                    }`}
                  >
                    {arrival.status.charAt(0).toUpperCase() +
                      arrival.status.slice(1)}
                  </td>
                  <td className="py-2 px-4 border-b">
                    {arrival.arrival.gate ?? "N/A"}
                  </td>
                  <td className="py-2 px-4 border-b hidden md:table-cell">
                    {arrival.airline.name}
                  </td>
                  <td className="py-2 px-4 border-b">
                    {arrival.flight.icaoNumber}
                  </td>
                  <td className="py-2 px-4 border-b hidden md:table-cell">
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
      </div>
    </section>
  );
};
