import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const bannerImg = require('../assets/banner.png'); // Assuming a banner image

const Banner: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={bannerImg} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
});

export default Banner;