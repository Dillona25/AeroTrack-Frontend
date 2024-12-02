import React, { createContext, useContext, useState } from "react";

export const FlightDataContext = createContext<any>(null);

export const FlightDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [flightData, setFlightData] = useState<any>(null);

  return (
    <FlightDataContext.Provider value={{ flightData, setFlightData }}>
      {children}
    </FlightDataContext.Provider>
  );
};

export const useFlightData = () => useContext(FlightDataContext);
