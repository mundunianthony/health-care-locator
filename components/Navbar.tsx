import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import Home from "@/app/screens/HomeScreen";
import Listing from "@/app/screens/ListingScreen";
import Contact from "@/components/About";

const Tab = createBottomTabNavigator();

interface NavbarProps {
  containerStyles?: ViewStyle;
}

const Navbar: React.FC<NavbarProps> = ({ containerStyles }) => {
  return (
    <View style={[styles.container, containerStyles]}>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Listing"
          component={Listing}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="list" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Contact"
          component={Contact}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="contact" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Navbar;
