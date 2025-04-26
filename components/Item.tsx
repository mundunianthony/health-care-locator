import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import HeartBtn from './HeartBtn';

interface Facilities {
  bedrooms: number;
  bathrooms: number;
  parkings: number;
}

interface Property {
  id: number;
  city: string;
  title: string;
  image: string;
  description: string;
  price: number;
  facilities: Facilities;
}

interface ItemProps {
  property: Property;
}

const Item: React.FC<ItemProps> = ({ property }) => {
  const navigation = useNavigation<any>(); // replace 'any' with your stack type if using TypeScript navigation types

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('ListingDetails', { id: property.id })}
    >
      <View style={styles.imageContainer}>
        <Image source={{ uri: property.image }} style={styles.image} />
        <View style={styles.heartBtn}>
          <HeartBtn id={property.id} />
        </View>
      </View>

      <Text style={styles.city}>{property.city}</Text>
      <Text style={styles.title} numberOfLines={1}>{property.title}</Text>

      <View style={styles.facilities}>
        <View style={styles.facilityItem}>
          <MaterialIcons name="bed" size={18} />
          <Text>{property.facilities.bedrooms}</Text>
        </View>
        <View style={styles.facilityItem}>
          <MaterialIcons name="bathtub" size={18} />
          <Text>{property.facilities.bathrooms}</Text>
        </View>
        <View style={styles.facilityItem}>
          <MaterialIcons name="garage" size={18} />
          <Text>{property.facilities.parkings}</Text>
        </View>
        <View style={styles.facilityItem}>
          <SimpleLineIcons name="ruler" size={18} />
          <Text>400</Text>
        </View>
      </View>

      <Text style={styles.description} numberOfLines={2}>
        {property.description}
      </Text>

      <View style={styles.bottomRow}>
        <Text style={styles.price}>${property.price}.00</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ListingDetails', { id: property.id })}
        >
          <Text style={styles.buttonText}>View details</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    padding: 16,
    backgroundColor: 'white',
    marginBottom: 20,
  },
  imageContainer: {
    position: 'relative',
    paddingBottom: 8,
  },
  image: {
    borderRadius: 12,
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
  heartBtn: {
    position: 'absolute',
    top: 12,
    right: 16,
  },
  city: {
    fontWeight: '600',
    fontSize: 16,
    color: '#007aff',
    marginTop: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
  },
  facilities: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  facilityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  description: {
    color: '#555',
    marginBottom: 10,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontWeight: '700',
    fontSize: 18,
  },
  button: {
    backgroundColor: '#007aff',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
});
