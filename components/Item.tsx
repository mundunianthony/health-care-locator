import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import HeartBtn from "@/components/HeartBtn";

interface ItemProps {
  property: any;
}

const Item: React.FC<ItemProps> = ({ property }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Property", { id: property.id })}
      style={styles.item}
    >
      <Image source={{ uri: property.image }} style={styles.image} />
      <HeartBtn id={property.id} />
      <Text style={styles.city}>{property.city}</Text>
      <Text style={styles.title}>{property.title}</Text>
      <View style={styles.facilities}>
        <Text>Bedrooms: {property.facilities.bedrooms}</Text>
        <Text>Bathrooms: {property.facilities.bathrooms}</Text>
        <Text>Parkings: {property.facilities.parkings}</Text>
      </View>
      <Text style={styles.description}>{property.description}</Text>
      <Text style={styles.price}>${property.price}.00</Text>
      <Button title="View details" onPress={() => {}} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 16,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 200,
  },
  city: {
    fontSize: 16,
    color: "#555",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  facilities: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  description: {
    marginVertical: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Item;
