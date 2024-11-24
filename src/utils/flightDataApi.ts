const apiKey = import.meta.env.VITE_API_FLIGHT_KEY;

export const fetchDepartureData = async (flight_icao: string) => {
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

export const fetchArrivalData = async (flight_icao: string) => {
  const url = `https://aviation-edge.com/v2/public/timetable?key=${apiKey}&flight_icao=${flight_icao}&type=arrival`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching arrivals for ${flight_icao}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchDepartureAirport = async (airportCode: string) => {
  const url = ` https://aviation-edge.com/v2/public/airportDatabase?key=${apiKey}&codeIataAirport=${airportCode}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching departure Airport`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchArrivalAirport = async (airportCode: string) => {
  const url = ` https://aviation-edge.com/v2/public/airportDatabase?key=${apiKey}&codeIataAirport=${airportCode}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching arrival Airport`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
