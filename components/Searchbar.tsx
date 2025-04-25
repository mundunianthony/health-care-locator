import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6'; // FontAwesome6 is similar to the one you were using

type SearchbarProps = {
  filter: string;
  setFilter: (value: string) => void;
};

const Searchbar: React.FC<SearchbarProps> = ({ filter, setFilter }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={filter}
        onChangeText={(text) => setFilter(text)}
        placeholder="Enter an address or city"
      />
      <Icon name="location-dot" style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingLeft: 16,
    height: 52, // Adjusted height for React Native
    backgroundColor: 'white',
    width: '100%',
    maxWidth: 366,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#e0e0e0', // Slightly adjusted for React Native's style
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: 'transparent',
    borderWidth: 0,
    outlineWidth: 0,
    paddingLeft: 8,
    fontSize: 16,
  },
  icon: {
    position: 'absolute',
    right: 16,
    fontSize: 24,
    color: '#757575', // Adjust for your secondary color
  },
});

export default Searchbar;
