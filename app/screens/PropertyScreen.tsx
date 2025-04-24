import React, { useContext, useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, ActivityIndicator, TouchableOpacity, Alert } from 'react-native';
import { useMutation, useQuery } from 'react-query';
import { useRoute } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import { getProperty, removeBooking } from '../utils/api';
import useAuthCheck from '../hooks/useAuthCheck';
import { useAuth0 } from '@auth0/auth0-react';
import BookingModal from '../components/BookingModal'; // Must be converted
import UserDetailContext from '../context/UserDetailContext';
import HeartBtn from '../components/HeartBtn'; // Must be converted

interface PropertyType {
  id: string;
  title: string;
  city: string;
  country: string;
  image: string;
  price: number;
  facilities: {
    bedrooms: number;
    bathrooms: number;
    parkings: number;
  };
  description: string;
  address: string;
  latitude: number; // Required for map
  longitude: number; // Required for map
}

const Property: React.FC = () => {
  const route = useRoute<any>();
  const id = route.params?.id;
  const { data, isLoading, isError } = useQuery(['resd', id], () => getProperty(id));
  const [modalOpened, setModalOpened] = useState<boolean>(false);
  const { validateLogin } = useAuthCheck();
  const { user } = useAuth0();
  const { userDetails: { token, bookings }, setUserDetails } = useContext(UserDetailContext);

  const { mutate: cancelBooking, isLoading: cancelling } = useMutation({
    mutationFn: () => removeBooking(id, user?.email, token),
    onSuccess: () => {
      setUserDetails((prev) => ({
        ...prev,
        bookings: prev.bookings.filter((booking) => booking?.id !== id),
      }));
      Alert.alert('Success', 'Booking cancelled');
    },
  });

  if (isLoading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#555" />
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.errorContainer}>
        <Text>Error while fetching data</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: data.image }} style={styles.image} />
      <View style={styles.heartBtn}>
        <HeartBtn id={id} />
      </View>
      <View style={styles.content}>
        <Text style={styles.city}>{data.city}</Text>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.price}>${data.price}.00</Text>
        </View>
        <View style={styles.facilities}>
          <Text>Bedrooms: {data.facilities.bedrooms}</Text>
          <Text>Bathrooms: {data.facilities.bathrooms}</Text>
          <Text>Parkings: {data.facilities.parkings}</Text>
        </View>
        <Text style={styles.description}>{data.description}</Text>
        <Text style={styles.address}>
          {data.address} {data.city} {data.country}
        </Text>
        {bookings?.map((booking) => booking.id).includes(id) ? (
          <>
            <TouchableOpacity
              style={[styles.button, styles.cancelButton]}
              onPress={() => cancelBooking()}
              disabled={cancelling}
            >
              <Text style={styles.buttonText}>Cancel Booking</Text>
            </TouchableOpacity>
            <Text style={styles.bookingText}>
              You've already booked visit for{' '}
              {bookings?.filter((booking) => booking?.id === id)[0].date}
            </Text>
          </>
        ) : (
          <TouchableOpacity
            style={styles.button}
            onPress={() => validateLogin() && setModalOpened(true)}
          >
            <Text style={styles.buttonText}>Book the Visit</Text>
          </TouchableOpacity>
        )}
        <BookingModal
          opened={modalOpened}
          setOpened={setModalOpened}
          propertyId={id}
          email={user?.email}
        />
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: data.latitude,
            longitude: data.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker coordinate={{ latitude: data.latitude, longitude: data.longitude }} />
        </MapView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 300,
  },
  heartBtn: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  content: {
    padding: 10,
  },
  city: {
    fontSize: 16,
    color: '#555',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  facilities: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  description: {
    marginVertical: 10,
  },
  address: {
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  cancelButton: {
    backgroundColor: '#FF3B30',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  bookingText: {
    color: 'red',
    marginTop: 10,
  },
  map: {
    width: '100%',
    height: 200,
    marginVertical: 10,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Property;