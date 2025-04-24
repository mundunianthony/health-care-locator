import React from "react";
import { View, Text, ImageBackground, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Hero: React.FC = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require("../assets/hero.jpg")} // Adjust path
      style={styles.hero}
    >
      <View style={styles.content}>
        <Text style={styles.title}>Your Dream Home Awaits</Text>
        <Text style={styles.subtitle}>
          Book Property Visits Effortlessly with Homely.com
        </Text>
        <Text style={styles.description}>
          Schedule viewings for homes you love with our simple platform.
        </Text>
        <Button
          title="Browse Homes"
          onPress={() => navigation.navigate("Listing")}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  hero: {
    height: 400,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    padding: 16,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  title: {
    fontSize: 32,
    color: "#fff",
  },
  subtitle: {
    fontSize: 24,
    color: "#fff",
  },
  description: {
    fontSize: 16,
    color: "#fff",
    marginVertical: 10,
  },
});

export default Hero;