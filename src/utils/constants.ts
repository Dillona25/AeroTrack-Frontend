export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? `https://api.aerotrack.twilightparadox.com`
    : "http://localhost:3001";
