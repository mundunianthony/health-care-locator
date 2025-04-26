import React, { useContext } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useMutation } from "react-query";
import Toast from "react-native-toast-message";
import { createResidency } from "@/app/utils/api";
import UserDetailContext from "@/context/UserDetailContext";
import { useAuth0 } from "@auth0/auth0-react";

interface FacilitiesProps {
  prevStep: () => void;
  propertyDetails: {
    facilities: {
      bedrooms: number;
      parkings: number;
      bathrooms: number;
    };
    [key: string]: any;
  };
  setPropertyDetails: (details: any) => void;
  setOpened: (opened: boolean) => void;
  setActiveStep: (step: number) => void;
}

const Facilities: React.FC<FacilitiesProps> = ({
  prevStep,
  propertyDetails,
  setPropertyDetails,
  setOpened,
  setActiveStep,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      bedrooms: propertyDetails.facilities.bedrooms,
      parkings: propertyDetails.facilities.parkings,
      bathrooms: propertyDetails.facilities.bathrooms,
    },
  });

  const { user } = useAuth0();
  const {
    userDetails: { token },
  } = useContext(UserDetailContext);

  const { mutate, isLoading } = useMutation({
    mutationFn: () =>
      createResidency(
        {
          ...propertyDetails,
          facilities: {
            bedrooms: propertyDetails.facilities.bedrooms,
            parkings: propertyDetails.facilities.parkings,
            bathrooms: propertyDetails.facilities.bathrooms,
          },
        },
        token,
        user?.email ?? ""
      ),
    onError: (error: any) =>
      Toast.show({
        type: "error",
        text1: error.response?.data?.message || "Error creating residency",
      }),
    onSuccess: () => {
      Toast.show({
        type: "success",
        text1: "Added Successfully",
      });
      setPropertyDetails({
        title: "",
        description: "",
        price: 0,
        country: "",
        city: "",
        address: "",
        image: null,
        facilities: {
          bedrooms: 0,
          parkings: 0,
          bathrooms: 0,
        },
        userEmail: user?.email,
      });
      setOpened(false);
      setActiveStep(0);
    },
  });

  const onSubmit = (data: { bedrooms: number; parkings: number; bathrooms: number }) => {
    setPropertyDetails((prev: any) => ({
      ...prev,
      facilities: data,
    }));
    mutate();
  };

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="bedrooms"
        rules={{ min: { value: 1, message: "Must have at least one bedroom" } }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="No of Bedrooms"
            keyboardType="numeric"
            value={value.toString()}
            onChangeText={(text) => onChange(parseInt(text, 10))}
          />
        )}
      />
      {errors.bedrooms && <Text>{errors.bedrooms.message}</Text>}

      <Controller
        control={control}
        name="parkings"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="No of parkings"
            keyboardType="numeric"
            value={value.toString()}
            onChangeText={(text) => onChange(parseInt(text, 10))}
          />
        )}
      />

      <Controller
        control={control}
        name="bathrooms"
        rules={{
          min: { value: 1, message: "Must have at least one bathroom" },
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="No of bathrooms"
            keyboardType="numeric"
            value={value.toString()}
            onChangeText={(text) => onChange(parseInt(text, 10))}
          />
        )}
      />
      {errors.bathrooms && <Text>{errors.bathrooms.message}</Text>}

      <View style={styles.buttonContainer}>
        <Button title="Back" onPress={prevStep} />
        <Button
          title={isLoading ? "Submitting" : "Add Property"}
          onPress={handleSubmit(onSubmit)}
          disabled={isLoading}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
});

export default Facilities;
