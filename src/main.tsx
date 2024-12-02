import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.tsx";
import "./index.css";
import { CurrentUserProvider } from "./store/currentUserContext.tsx";
import { FlightDataProvider } from "./store/flightDataContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FlightDataProvider>
      <CurrentUserProvider>
        <App />
      </CurrentUserProvider>
    </FlightDataProvider>
  </React.StrictMode>
);
