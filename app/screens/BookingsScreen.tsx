import React, { useContext, useState } from 'react';
import { View, FlatList, ActivityIndicator, StyleSheet, Text } from 'react-native';
import Searchbar from '../components/Searchbar'; // Must be converted
import Item from '../components/Item'; // Must be converted
import useProperties from '../hooks/useProperties';
import UserDetailContext from '../context/UserDetailContext';

interface PropertyType {
  id: string;
  title: string;
  city: string;
  country: string;
}

const Bookings: React.FC = () => {
  const { data, isError, isLoading } = useProperties();
  const [filter, setFilter] = useState<string>('');
  const { userDetails: { bookings } } = useContext(UserDetailContext);

  if (isError) {
    return (
      <View style={styles.errorContainer}>
        <Text>Error while fetching data</Text>
      </View>
    );
  }

  if (isLoading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#555" />
      </View>
    );
  }

  const filteredData = data
    .filter((property: PropertyType) => bookings.map((booking) => booking.id).includes(property.id))
    .filter((property: PropertyType) =>
      property.title.toLowerCase().includes(filter.toLowerCase()) ||
      property.city.toLowerCase().includes(filter.toLowerCase()) ||
      property.country.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <View style={styles.container}>
      <Searchbar filter={filter} setFilter={setFilter} />
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Item property={item} />}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    paddingBottom: 20,
  },
});

export default Bookings;