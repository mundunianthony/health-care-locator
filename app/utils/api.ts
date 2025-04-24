import axios, { AxiosInstance, AxiosResponse } from "axios";
import dayjs from "dayjs";
import { Alert } from "react-native"; // Use Alert for React Native

export const api: AxiosInstance = axios.create({
  baseURL: "http://localhost:8000/api",
});

export const getAllProperties = async (): Promise<any> => {
  try {
    const response: AxiosResponse = await api.get("/residency/allresd", {
      timeout: 10 * 1000,
    });
    if (response.status === 400 || response.status === 500) {
      throw response.data;
    }
    return response.data;
  } catch (error) {
    Alert.alert("Error", "Something's not right");
    throw error;
  }
};

// ... (similar conversions for other API functions)