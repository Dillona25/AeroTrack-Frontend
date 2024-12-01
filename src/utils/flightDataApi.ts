const apiKey = import.meta.env.VITE_API_FLIGHT_KEY;

export interface departureFlightData {
  airline?: string;
  iataNumber?: string;
  scheduledTime?: string;
  gate?: string;
}

export interface arrivalFlightData {
  airline?: string;
  iataNumber?: string;
  scheduledTime?: string;
  gate?: string;
}

export interface airportDepartureData {
  codeIataAirport?: string;
  nameAirport?: string;
}

export interface airportArrivalData {
  codeIataAirport?: string;
  nameAirport?: string;
}

export const fetchDepartureData = async (
  flight_icao: string
): Promise<departureFlightData[]> => {
  const url = `https://aviation-edge.com/v2/public/timetable?key=${apiKey}&flight_icao=${flight_icao}&type=departure`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching departures for ${flight_icao}`);
    }
    const data: departureFlightData[] = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchArrivalData = async (
  flight_icao: string
): Promise<arrivalFlightData[]> => {
  const url = `https://aviation-edge.com/v2/public/timetable?key=${apiKey}&flight_icao=${flight_icao}&type=arrival`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching arrivals for ${flight_icao}`);
    }
    const data: arrivalFlightData[] = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchDepartureAirport = async (
  airportCode: string
): Promise<airportDepartureData[]> => {
  const url = ` https://aviation-edge.com/v2/public/airportDatabase?key=${apiKey}&codeIataAirport=${airportCode}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching departure Airport`);
    }
    const data: airportDepartureData[] = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchArrivalAirport = async (
  airportCode: string
): Promise<airportArrivalData[]> => {
  const url = ` https://aviation-edge.com/v2/public/airportDatabase?key=${apiKey}&codeIataAirport=${airportCode}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching arrival Airport`);
    }
    const data: airportArrivalData[] = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
