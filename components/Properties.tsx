import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types'; // Import your navigation types
import { VscSettings } from 'react-icons/vsc';
import { ToastAndroid } from 'react-native';
import { useProperties } from '../hooks/useProperties';
import Swiper from 'react-native-swiper';
import Item from './Item';
import {Loading} from './Loading';

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const navigation = useNavigation();
  const { data, isLoading, isError } = useProperties();

  if (isError) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error while fetching data</Text>
      </View>
    );
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Your Future Home Awaits!</Text>
        <Text style={styles.subtitle}>Find Your Dream Here</Text>
        <View style={styles.actions}>
          <Text style={styles.count}>
            <Text style={styles.bold}>Showing 1-9</Text> out of 1k properties
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <VscSettings style={styles.settingsIcon} />
          </TouchableOpacity>
        </View>
      </View>

      <Swiper
        autoplay
        showsPagination={false}
        showsButtons={false}
        style={styles.swiper}
      >
        {data.slice(0, 6).map((property) => (
          <Item key={property.id} property={property} />
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  subtitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000',
    marginVertical: 8,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  count: {
    fontSize: 14,
    color: '#666',
  },
  bold: {
    fontWeight: '700',
  },
  settingsIcon: {
    fontSize: 24,
    color: '#000',
  },
  swiper: {
    height: 400,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 16,
    color: '#f00',
  },
});

export default Properties;
