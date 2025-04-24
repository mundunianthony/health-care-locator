import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import AddLocation from './AddLocation'; // Must be converted
import UploadImage from './UploadImage'; // Must be converted
import BasicDetails from './BasicDetails'; // Must be converted
import Facilities from './Facilities'; // Must be converted
import { useAuth0 } from '@auth0/auth0-react';

const AddPropertyModal: React.FC<{ opened: boolean; setOpened: (opened: boolean) => void }> = ({ opened, setOpened }) => {
  const [active, setActive] = useState(0);
  const { user } = useAuth0();
  const [propertyDetails, setPropertyDetails] = useState({
    title: '',
    description: '',
    price: 0,
    country: '',
    city: '',
    address: '',
    image: null,
    facilities: {
      bedrooms: 0,
      parkings: 0,
      bathrooms: 0,
    },
    userEmail: user?.email,
  });

  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  const steps = [
    <AddLocation key="location" nextStep={nextStep} propertyDetails={propertyDetails} setPropertyDetails={setPropertyDetails} />,
    <UploadImage key="image" prevStep={prevStep} nextStep={nextStep} propertyDetails={propertyDetails} setPropertyDetails={setPropertyDetails} />,
    <BasicDetails key="details" prevStep={prevStep} nextStep={nextStep} propertyDetails={propertyDetails} setPropertyDetails={setPropertyDetails} />,
    <Facilities key="facilities" prevStep={prevStep} propertyDetails={propertyDetails} setPropertyDetails={setPropertyDetails} setOpened={setOpened} setActiveStep={setActive} />,
  ];

  return (
    <Modal visible={opened} animationType="slide" transparent={false}>
      <View style={styles.modalContainer}>
        <Text style={styles.stepTitle}>Step {active + 1} of 4</Text>
        {steps[active]}
        <View style={styles.buttonContainer}>
          {active > 0 && (
            <TouchableOpacity onPress={prevStep} style={styles.button}>
              <Text>Back</Text>
            </TouchableOpacity>
          )}
          {active < 3 && (
            <TouchableOpacity onPress={nextStep} style={styles.button}>
              <Text>Next</Text>
            </TouchableOpacity>
          )}
          {active === 3 && (
            <TouchableOpacity onPress={() => setOpened(false)} style={styles.button}>
              <Text>Finish</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    padding: 20,
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 8,
  },
});

export default AddPropertyModal;