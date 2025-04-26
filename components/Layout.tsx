import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Header from "./Header";
import Footer from "./Footer"; 
import Listing from "app/screens/ListingScreen"; 
import Home from "app/screens/HomeScreen"; 

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