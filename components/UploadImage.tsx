import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

interface UploadImageProps {
  prevStep: () => void;
  nextStep: () => void;
  propertyDetails: { image: string };
  setPropertyDetails: (updateFn: (prev: any) => any) => void;
}

const UploadImage: React.FC<UploadImageProps> = ({
  prevStep,
  nextStep,
  propertyDetails,
  setPropertyDetails,
}) => {
  const [imageURL, setImageURL] = useState<string>(propertyDetails.image);

  const simulateCloudinaryUpload = async () => {
    // Simulate a successful upload with a placeholder image URL
    // Replace with real upload logic using react-native-image-picker or a custom uploader
    Alert.alert("Uploading...", "Simulating image upload", [
      {
        text: "OK",
        onPress: () => {
          const uploadedURL = "https://via.placeholder.com/400x300.png";
          setImageURL(uploadedURL);
        },
      },
    ]);
  };

  const handleNext = () => {
    setPropertyDetails((prev: any) => ({ ...prev, image: imageURL }));
    nextStep();
  };

  return (
    <View style={styles.container}>
      {!imageURL ? (
        <TouchableOpacity style={styles.uploadBox} onPress={simulateCloudinaryUpload}>
          <Icon name="cloud-upload" size={44} color="grey" />
          <Text>Upload Image</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={simulateCloudinaryUpload} style={styles.imageContainer}>
          <Image source={{ uri: imageURL }} style={styles.image} />
        </TouchableOpacity>
      )}

      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.buttonDefault} onPress={prevStep}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonNext, !imageURL && styles.buttonDisabled]}
          onPress={handleNext}
          disabled={!imageURL}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UploadImage;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    alignItems: "center",
  },
  uploadBox: {
    width: "75%",
    height: 336,
    borderStyle: "dashed",
    borderWidth: 2,
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  imageContainer: {
    width: "75%",
    height: 350,
    borderRadius: 12,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  buttonGroup: {
    flexDirection: "row",
    marginTop: 24,
    gap: 16,
  },
  buttonDefault: {
    backgroundColor: "#ccc",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonNext: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonDisabled: {
    backgroundColor: "#aaa",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
