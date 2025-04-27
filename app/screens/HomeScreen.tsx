import React from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';
import Hero from '../components/Hero';
import About from '../components/About';
import Properties from '../components/Properties';
import Blogs from '../components/Blogs';
import bannerImg from '../assets/banner.png';

const Home: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Hero />
      <About />
      <Properties />
      <Blogs />
      <View style={styles.bannerContainer}>
        <Image source={bannerImg} style={styles.bannerImage} resizeMode="cover" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 16,
  },
  bannerContainer: {
    paddingVertical: 16,
    overflow: 'hidden',
    alignItems: 'center',
  },
  bannerImage: {
    width: '100%',
    height: 200, // You can adjust the height to your needs
  },
});

export default Home;
