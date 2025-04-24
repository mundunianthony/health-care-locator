import React from 'react';
import { ScrollView, Image, View, StyleSheet } from 'react-native';
import Hero from '../components/Hero'; // Must be converted
import About from '../components/About'; // Must be converted
import Properties from '../components/Properties'; // Must be converted
import Blogs from '../components/Blogs'; // Must be converted

const bannerImg = require('../assets/banner.png'); // Use require for local images

const Home: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Hero />
      <About />
      <Properties />
      <Blogs />
      <View style={styles.bannerContainer}>
        <Image source={bannerImg} style={styles.banner} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bannerContainer: {
    padding: 16,
  },
  banner: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
});

export default Home;