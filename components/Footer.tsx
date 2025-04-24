import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "../constant/data";

const Footer: React.FC = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.title}>Homely.com</Text>
      <Text>Subscribe to our newsletter</Text>
      <View style={styles.subscribe}>
        <TextInput placeholder="Enter your email" style={styles.input} />
        <Button title="Subscribe" />
      </View>
      <View style={styles.links}>
        {FOOTER_LINKS.map((col) => (
          <View key={col.title}>
            <Text>{col.title}</Text>
            {col.links.map((link) => (
              <TouchableOpacity key={link}>
                <Text>{link}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
      <View style={styles.contact}>
        <Text>{FOOTER_CONTACT_INFO.title}</Text>
        {FOOTER_CONTACT_INFO.links.map((link) => (
          <Text key={link.label}>
            {link.label}: {link.value}
          </Text>
        ))}
      </View>
      <View style={styles.socials}>
        {SOCIALS.links.map((link) => (
          <TouchableOpacity key={link.id}>
            <Icon name={link.icon} />
          </TouchableOpacity>
        ))}
      </View>
      <Text>2025 Homely.com All rights reserved</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    padding: 16,
    backgroundColor: "#f1f1f1",
  },
  title: {
    fontSize: 24,
    fontWeight: "900",
  },
  subscribe: {
    flexDirection: "row",
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    flex: 1,
  },
  links: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  contact: {
    marginVertical: 10,
  },
  socials: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default Footer;