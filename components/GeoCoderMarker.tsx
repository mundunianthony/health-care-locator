import React, { useEffect, useState } from "react";
import { Marker } from "react-native-maps";
import * as ELG from "esri-leaflet-geocoder";

interface GeoCoderMarkerProps {
  address: string;
}

const GeoCoderMarker: React.FC<GeoCoderMarkerProps> = ({ address }) => {
  const [position, setPosition] = useState({ latitude: 60, longitude: 19 });

  useEffect(() => {
    ELG.geocode()
      .text(address)
      .run((err, results) => {
        if (results?.results?.length > 0) {
          const { lat, lng } = results.results[0].latlng;
          setPosition({ latitude: lat, longitude: lng });
        }
      });
  }, [address]);

  return <Marker coordinate={position} />;
};

export default GeoCoderMarker;
