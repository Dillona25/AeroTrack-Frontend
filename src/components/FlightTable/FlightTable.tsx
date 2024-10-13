import { FaArrowCircleDown } from "react-icons/fa";

interface FlightTableProps {
  departures: any[];
  arrivals: any[];
}

export const FlightTable: React.FC<FlightTableProps> = ({
  departures,
  arrivals,
}) => {
  return (
    <section className="py-8 bg-[#f5f6f7] px-4 scroll-smooth">
      <div className="max-w-[1600px] m-auto flex flex-col justify-center gap-4">
        <div className="flex flex-col gap-2 m-auto justify-center">
          <h1 className="font-bold text-base">Quick Scroll To Arrivals</h1>
          <a
            href="#arrivals"
            className="bg-gray-200 rounded-full p-4 w-fit m-auto"
          >
            <FaArrowCircleDown className="text-2xl hover:scale-110 ease-in-out duration-75 cursor-pointer" />
          </a>
        </div>
        {/* Departure Table */}
        <table className="w-full bg-white border border-gray-200 rounded-lg mt-5">
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
              {" "}
              {/* Adjusted to text-sm */}
              <th className="py-2 px-4 border-b">Departure Time</th>
              <th className="py-2 px-4 border-b hidden md:table-cell">
                Status
              </th>{" "}
              {/* Hidden on sm and smaller */}
              <th className="py-2 px-4 border-b">Gate</th>
              <th className="py-2 px-4 border-b hidden md:table-cell">
                Airline
              </th>{" "}
              {/* Hidden on sm and smaller */}
              <th className="py-2 px-4 border-b">Flight</th>
              <th className="py-2 px-4 border-b hidden md:table-cell">
                Origin
              </th>{" "}
              {/* Hidden on sm and smaller */}
              <th className="py-2 px-4 border-b">Destination</th>
            </tr>
          </thead>
          <tbody>
            {departures.map((departure, index) => (
              <tr className="text-center font-Roboto text-sm" key={index}>
                {" "}
                {/* Adjusted to text-sm */}
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
                    departure.status === "active" || "scheduled"
                      ? `text-green-600`
                      : `text-red-600`
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
                </td>{" "}
                {/* Hidden on sm and smaller */}
                <td className="py-2 px-4 border-b">
                  {departure.flight.icaoNumber}
                </td>
                <td className="py-2 px-4 border-b hidden md:table-cell">
                  {departure.departure.iataCode}
                </td>{" "}
                {/* Hidden on sm and smaller */}
                <td className="py-2 px-4 border-b">
                  {departure.arrival.iataCode}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Arrival Table */}
        <table
          id="arrivals"
          className="w-full bg-white border border-gray-200 rounded-lg"
        >
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
              {" "}
              {/* Adjusted to text-sm */}
              <th className="py-2 px-4 border-b">Arrival Time</th>
              <th className="py-2 px-4 border-b hidden md:table-cell">
                Status
              </th>{" "}
              {/* Hidden on sm and smaller */}
              <th className="py-2 px-4 border-b">Gate</th>
              <th className="py-2 px-4 border-b hidden md:table-cell">
                Airline
              </th>{" "}
              {/* Hidden on sm and smaller */}
              <th className="py-2 px-4 border-b">Flight</th>
              <th className="py-2 px-4 border-b hidden md:table-cell">
                Origin
              </th>{" "}
              {/* Hidden on sm and smaller */}
              <th className="py-2 px-4 border-b">Destination</th>
            </tr>
          </thead>
          <tbody>
            {arrivals.map((arrival, index) => (
              <tr className="text-center font-Roboto text-sm" key={index}>
                {" "}
                {/* Adjusted to text-sm */}
                <td className="py-2 px-4 border-b">
                  {new Date(
                    arrival.arrival.actualTime || arrival.arrival.scheduledTime
                  ).toLocaleTimeString([], {
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </td>
                <td
                  className={`py-2 px-4 border-b hidden md:table-cell ${
                    arrival.status === "landed" || "scheduled"
                      ? `text-green-600`
                      : `text-red-600`
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
                </td>{" "}
                {/* Hidden on sm and smaller */}
                <td className="py-2 px-4 border-b">
                  {arrival.flight.icaoNumber}
                </td>
                <td className="py-2 px-4 border-b hidden md:table-cell">
                  {arrival.departure.iataCode}
                </td>{" "}
                {/* Hidden on sm and smaller */}
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
