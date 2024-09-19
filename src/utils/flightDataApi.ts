const apiKey = import.meta.env.VITE_API_FLIGHT_KEY;

export interface FlightData {
  scheduledTime: string;
  gate?: string;
  airline: string;
  iataNumber: string;
  departureIata: string;
  arrivalIata: string;
}

export const fetchDepartureData = async (airportCode: string) => {
  const url = `https://aviation-edge.com/v2/public/timetable?key=${apiKey}&iataCode=${airportCode}&type=departure&limit=20`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching departures for ${airportCode}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchArrivalData = async (airportCode: string) => {
  const url = `https://aviation-edge.com/v2/public/timetable?key=${apiKey}&iataCode=${airportCode}&type=arrival&limit=20`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching arrivals for ${airportCode}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
