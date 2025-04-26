import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { validateString } from '../app/utils/common';

interface BasicDetailsProps {
  propertyDetails: any;
  setPropertyDetails: (details: any) => void;
  prevStep: () => void;
  nextStep: () => void;
}

const BasicDetails: React.FC<BasicDetailsProps> = ({ propertyDetails, setPropertyDetails, prevStep, nextStep }) => {
  const [title, setTitle] = useState(propertyDetails.title || '');
  const [description, setDescription] = useState(propertyDetails.description || '');
  const [price, setPrice] = useState(propertyDetails.price || 0);

  const handleSubmit = () => {
    if (!validateString(title) || !validateString(description) || price < 999) {
      setPropertyDetails({ ...propertyDetails, title, description, price });
      nextStep();
    } else {
      Alert.alert('Validation Error', 'Please fill all fields correctly.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
        multiline
      />
      <TextInput
        placeholder="Price"
        value={price.toString()}
        onChangeText={(text) => setPrice(parseInt(text, 10))}
        keyboardType="numeric"
        style={styles.input}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={prevStep} style={styles.button}>
          <Text>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 8,
  },
});

export default BasicDetails;