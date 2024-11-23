import { useRef } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const center = {
  lat: 39.8283,
  lng: -98.5795,
};

const containerStyle = {
  width: "100%",
  height: "100%",
};

const DepartureMarkerPosition = { lat: 39.849312, lng: -104.673828 };
const ArrivalMarkerPosition = { lat: 45.5853, lng: -122.5917 };

export const FlightMap = () => {
  const mapRef = useRef<google.maps.Map | null>(null);

  const onLoad = (map: google.maps.Map) => {
    mapRef.current = map;

    // Define the bounds to include both markers
    const bounds = new google.maps.LatLngBounds();
    bounds.extend(DepartureMarkerPosition);
    bounds.extend(ArrivalMarkerPosition);

    // Fit the map to the defined bounds
    map.fitBounds(bounds);

    // Add departure marker
    new google.maps.Marker({
      position: DepartureMarkerPosition,
      map,
      title: "Departure",
    });

    // Add arrival marker
    new google.maps.Marker({
      position: ArrivalMarkerPosition,
      map,
      title: "Arrival",
    });
  };

  return (
    <div className="h-[400px] w-[800px] bg-gray-300 flex items-center justify-center">
      <LoadScript googleMapsApiKey="AIzaSyBdeY04v9JglCkQYo6bK8wdxSBMlsTNfoQ">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={4}
          onLoad={onLoad}
        ></GoogleMap>
      </LoadScript>
    </div>
  );
};
