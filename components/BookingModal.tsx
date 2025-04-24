import React, { useContext, useState } from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import DatePicker from "react-native-date-picker";
import { useMutation } from "react-query";
import UserDetailContext from "@/context/UserDetailContext";
import { bookVisit } from "@/utils/api";
import { Alert } from "react-native";
import dayjs from "dayjs";

interface BookingModalProps {
  opened: boolean;
  setOpened: (opened: boolean) => void;
  email: string;
  propertyId: string;
}

const BookingModal: React.FC<BookingModalProps> = ({ opened, setOpened, email, propertyId }) => {
  const [date, setDate] = useState<Date | null>(null);
  const { userDetails: { token }, setUserDetails } = useContext(UserDetailContext);

  const handleBookingSuccess = () => {
    Alert.alert('Success', 'You have successfully booked visit');
    setUserDetails((prev) => ({
      ...prev,
      bookings: [
        ...prev.bookings,
        {
          id: propertyId,
          date: dayjs(date).format('DD/MM/YYYY'),
        },
      ],
    }));
  };

  const { mutate, isLoading } = useMutation({
    mutationFn: () => bookVisit(date, propertyId, email, token),
    onSuccess: handleBookingSuccess,
    onError: (error) => Alert.alert('Error', error.message),
    onSettled: () => setOpened(false),
  });

  return (
    <Modal visible={opened} animationType="slide" transparent={false}>
      <View style={styles.modalContainer}>
        <Text style={styles.title}>Select your date of visit</Text>
        <DatePicker date={date || new Date()} onDateChange={setDate} />
        <TouchableOpacity
          disabled={!date || isLoading}
          onPress={() => mutate()}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Book Visit</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default BookingModal;