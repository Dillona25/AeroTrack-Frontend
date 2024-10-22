export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? `https://api.AeroTrack.twilightparadox.com`
    : "http://localhost:3001";
