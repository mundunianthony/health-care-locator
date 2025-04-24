import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BLOGS } from "@/constants/data";

const Blogs: React.FC = () => {
  const navigation = useNavigation();

  const handleContinueReading = (id: number) => {
    navigation.navigate("BlogDetails", { blogId: id });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Our Expert Blogs</Text>
      <FlatList
        data={BLOGS}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.blogCard}>
            <Image source={{ uri: item.image }} style={styles.blogImage} />
            <View style={styles.blogContent}>
              <Text style={styles.blogTitle}>{item.title}</Text>
              <Text style={styles.blogCategory}>{item.category}</Text>
              <TouchableOpacity
                onPress={() => handleContinueReading(item.id)}
                style={styles.readButton}
              >
                <Text style={styles.readButtonText}>Continue Reading</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  blogCard: {
    marginBottom: 20,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  blogImage: {
    width: "100%",
    height: 150,
  },
  blogContent: {
    padding: 10,
  },
  blogTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  blogCategory: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
  },
  readButton: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 8,
  },
  readButtonText: {
    color: "#fff",
    textAlign: "center",
  },
});

export default Blogs;
