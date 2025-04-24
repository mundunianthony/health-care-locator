import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ri";
import aboutImg from "@/assets/about.jpg";

const About: React.FC = () => {
  const statistics = [
    { label: 'Satisfied homebuyers', value: 12 },
    { label: 'Cities served', value: 3 },
    { label: 'Home visits booked', value: 45 },
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Handle visibility logic if needed
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.left}>
          <Image source={aboutImg} style={styles.image} />
          <View style={styles.quoteContainer}>
            <Icon name="double-quotes-l" size={24} />
            <Text style={styles.quoteText}>
              "Homely.com transformed our home search by making viewings effortless and stress-free!"
            </Text>
          </View>
        </View>
        <View style={styles.right}>
          <Text style={styles.sectionTitle}>Our Story</Text>
          <Text style={styles.heading}>Simplifying Your Home Buying Journey</Text>
          <Text style={styles.paragraph}>
            At Homely.com, we're revolutionizing the way you find your dream home...
          </Text>
          <View style={styles.statsContainer}>
            {statistics.map((stat, index) => (
              <View key={index} style={styles.stat}>
                <Text style={styles.statValue}>{stat.value}k+</Text>
                <Text style={styles.statLabel}>{stat.label}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  left: {
    flex: 1,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 16,
  },
  quoteContainer: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
  },
  quoteText: {
    textAlign: 'center',
  },
  right: {
    flex: 1,
    paddingLeft: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  stat: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 8,
    margin: 5,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
});

export default About;