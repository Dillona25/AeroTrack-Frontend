const apiKey = import.meta.env.VITE_API_FLIGHT_KEY;

export const fetchFlightData = async (flight_icao: string) => {
  const url = `https://aviation-edge.com/v2/public/timetable?key=${apiKey}&flight_icao=${flight_icao}&type=departure`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching departures for ${flight_icao}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
