import React from "react";
import MapView, { Marker } from "react-native-maps";
import GeoCoderMarker from "./GeoCoderMarker"; // Assuming converted

interface MapProps {
  address: string;
  city: string;
  country: string;
}

const Map: React.FC<MapProps> = ({ address, city, country }) => {
  return (
    <MapView
      style={{ height: 300, width: "100%" }}
      initialRegion={{
        latitude: 53.35,
        longitude: 18.8,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <GeoCoderMarker address={`${address} ${city} ${country}`} />
    </MapView>
  );
};

export default Map;