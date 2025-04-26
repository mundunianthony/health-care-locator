import React, { Suspense, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserDetailContext from './context/UserDetailContext';
import HomeScreen from './app/screens/HomeScreen';
import ListingScreen from './app/screens/ListingScreen';
import AddPropertyScreen from './app/screens/AddPropertyScreen';
import BookingsScreen from './app/screens/BookingsScreen';
import FavouritesScreen from './app/screens/FavouritesScreen';
import BlogScreen from './components/Blogs';
import BlogDetailsScreen from './components/BlogDetails';
import { DevToolsBubble } from 'react-native-react-query-devtools';
import Loading from './Loading';
import { UserDetails } from './context/UserDetailContext'; // Corrected import path

const Tab = createBottomTabNavigator();

const App = () => {
  const [userDetails, setUserDetails] = useState<UserDetails>({
    favourites: [],
    bookings: [],
    token: "",
  });

  const queryClient = new QueryClient();

  return (
    <UserDetailContext.Provider value={{ userDetails, setUserDetails }}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Suspense fallback={<Loading />}>
            <Tab.Navigator>
              <Tab.Screen name="Home" component={HomeScreen} />
              <Tab.Screen name="Listing" component={ListingScreen} />
              <Tab.Screen name="Add Property" component={AddPropertyScreen} />
              <Tab.Screen name="Bookings" component={BookingsScreen} />
              <Tab.Screen name="Favourites" component={FavouritesScreen} />
              <Tab.Screen name="Blogs" component={BlogScreen} />
              <Tab.Screen name="Blog Details" component={BlogDetailsScreen} />
            </Tab.Navigator>
          </Suspense>
        </NavigationContainer>
        <DevToolsBubble />
      </QueryClientProvider>
    </UserDetailContext.Provider>
  );
};

export default App;
