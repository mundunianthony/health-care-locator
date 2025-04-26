import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Geocoder from "react-native-geocoding";

// Configure the Geocoder with your API key (Google Maps, OpenCage, etc.)
Geocoder.init("YOUR_GOOGLE_MAPS_API_KEY"); // Replace with your API key

interface GeoCoderMarkerProps {
  address: string;
}

const GeoCoderMarker: React.FC<GeoCoderMarkerProps> = ({ address }) => {
  const [position, setPosition] = useState<{ latitude: number; longitude: number }>({
    latitude: 60,
    longitude: 19,
  });

  useEffect(() => {
    const geocodeAddress = async () => {
      try {
        // Geocode the address and get latitude/longitude
        const response = await Geocoder.from(address);
        if (response.results.length > 0) {
          const { lat, lng } = response.results[0].geometry.location;
          setPosition({ latitude: lat, longitude: lng });
        }
      } catch (error) {
        console.error("Geocoding error:", error);
      }
    };

    geocodeAddress();
  }, [address]);

  return (
    <MapView style={styles.map} initialRegion={{ latitude: 60, longitude: 19, latitudeDelta: 10, longitudeDelta: 10 }}>
      <Marker coordinate={position}>
        <View style={styles.marker}>
          <Text style={styles.markerText}>📍</Text>
        </View>
      </Marker>
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  marker: {
    width: 30,
    height: 30,
    backgroundColor: "red",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  markerText: {
    fontSize: 18,
    color: "#fff",
  },
});

export default GeoCoderMarker;
