export const FlightTable = () => {
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
            <tr className="text-center font-Roboto text-base">
              <td className="py-2 px-4 border-b"></td>
              <td className="py-2 px-4 border-b"></td>
              <td className="py-2 px-4 border-b"></td>
              <td className="py-2 px-4 border-b"></td>
              <td className="py-2 px-4 border-b"></td>
              <td className="py-2 px-4 border-b"></td>
            </tr>
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
            <tr className="text-center font-Roboto text-base">
              <td className="py-2 px-4 border-b"></td>
              <td className="py-2 px-4 border-b"></td>
              <td className="py-2 px-4 border-b"></td>
              <td className="py-2 px-4 border-b"></td>
              <td className="py-2 px-4 border-b"></td>
              <td className="py-2 px-4 border-b"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};
