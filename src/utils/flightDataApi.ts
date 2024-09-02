import { API_KEY_AVI_STACK } from "./constants";

const AVIATION_BASE_URL = "https://api.aviationstack.com/v1/timetable";

const iataCode = "PDX";
const type = "departure";

export const getTimetable = async () => {
  try {
    const response = await fetch(
      `${AVIATION_BASE_URL}?access_key=${API_KEY_AVI_STACK}&iataCode=${iataCode}&type=${type}`,
      {
        method: "GET",
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Failed to fetch timetable:", error);
  }
};
