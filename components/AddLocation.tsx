import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import MapView from "react-native-maps";
import useCountries from "@/hooks/useCountries";
import { validateString } from "@/utils/common";

interface AddLocationProps {
  propertyDetails: any;
  setPropertyDetails: (details: any) => void;
  nextStep: () => void;
}

const AddLocation: React.FC<AddLocationProps> = ({
  propertyDetails,
  setPropertyDetails,
  nextStep,
}) => {
  const { getAll } = useCountries();
  const [country, setCountry] = useState(propertyDetails.country || "");
  const [city, setCity] = useState(propertyDetails.city || "");
  const [address, setAddress] = useState(propertyDetails.address || "");

  const handleSubmit = () => {
    if (
      !validateString(country) ||
      !validateString(city) ||
      !validateString(address)
    ) {
      setPropertyDetails({ ...propertyDetails, country, city, address });
      nextStep();
    } else {
      Alert.alert(
        "Validation Error",
        "Please fill all fields with at least 3 characters."
      );
    }
  };

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={country}
        onValueChange={(itemValue) => setCountry(itemValue)}
        style={styles.picker}
      >
        {getAll().map((c) => (
          <Picker.Item key={c.value} label={c.label} value={c.value} />
        ))}
      </Picker>
      <TextInput
        placeholder="City"
        value={city}
        onChangeText={setCity}
        style={styles.input}
      />
      <TextInput
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
        style={styles.input}
      />
      <MapView
        style={styles.map}
        region={{
          latitude: 37.78825, // Example coordinates
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text>Next Step</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  picker: {
    height: 50,
    width: "100%",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  map: {
    width: "100%",
    height: 200,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
});

export default AddLocation;
