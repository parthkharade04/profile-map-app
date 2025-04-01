import React, { useState } from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

interface MapProps {
  latitude: number;
  longitude: number;
}

const MapComponent: React.FC<MapProps> = ({ latitude, longitude }) => {
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="w-full">
      <LoadScript
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY || ""}
        onError={() => setError("Failed to load Google Maps. Check API key!")}
      >
        {error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={{ lat: latitude, lng: longitude }}
            zoom={10}
          >
            <Marker position={{ lat: latitude, lng: longitude }} />
          </GoogleMap>
        )}
      </LoadScript>
    </div>
  );
};

export default MapComponent;
