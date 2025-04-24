import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Header from "./Header"; // Assuming converted
import Footer from "./Footer"; // Assuming converted
import Home from "./Home"; // Example screen
import Listing from "./Listing"; // Example screen

const Stack = createStackNavigator();

const Layout: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Listing" component={Listing} />
        {/* Add other screens */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Layout;