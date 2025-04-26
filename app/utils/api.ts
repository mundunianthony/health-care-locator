import axios from "axios";
import dayjs from "dayjs";
import { Alert } from "react-native";

export const api = axios.create({
  baseURL: "http://localhost:8000/api",
});

// Types (You can move these to a separate types.ts file if needed)
export interface Property {
  id: number;
  title: string;
  // Add more property fields as needed
}

export interface Booking {
  id: string;
  date: string;
  propertyId: string;
}

export const getAllProperties = async (): Promise<Property[]> => {
  try {
    const response = await api.get<Property[]>("/residency/allresd", {
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

export const getProperty = async (id: string | number): Promise<Property> => {
  try {
    const response = await api.get<Property>(`/residency/${id}`, {
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

export const createUser = async (email: string, token: string): Promise<void> => {
  try {
    await api.post(
      `/user/register`,
      { email },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    Alert.alert("Error", "Something's not right, Please Try again");
    throw error;
  }
};

export const bookVisit = async (
  date: Date,
  propertyId: string | number,
  email: string,
  token: string
): Promise<void> => {
  try {
    await api.post(
      `/user/bookVisit/${propertyId}`,
      {
        email,
        id: propertyId,
        date: dayjs(date).format("DD/MM/YYYY"),
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    Alert.alert("Error", "Something's not right. Please try again.");
    throw error;
  }
};

export const removeBooking = async (
  id: string,
  email: string,
  token: string
): Promise<void> => {
  try {
    await api.post(
      `/user/removeBooking/${id}`,
      { email },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    Alert.alert("Error", "Something's not right. Please try again.");
    throw error;
  }
};

export const toFav = async (
  id: string,
  email: string,
  token: string
): Promise<void> => {
  try {
    await api.post(
      `/user/toFav/${id}`,
      { email },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    throw error;
  }
};

export const getAllFav = async (
  email: string,
  token: string
): Promise<string[] | undefined> => {
  if (!token) return;
  try {
    const res = await api.post<{ favResidenciesID: string[] }>(
      `/user/allFav`,
      { email },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data.favResidenciesID;
  } catch (error) {
    Alert.alert("Error", "Something went wrong while fetching favs");
    throw error;
  }
};

export const getAllBookings = async (
  email: string,
  token: string
): Promise<Booking[] | undefined> => {
  if (!token) return;
  try {
    const res = await api.post<{ bookedVisits: Booking[] }>(
      `/user/allBookings`,
      { email },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data.bookedVisits;
  } catch (error) {
    Alert.alert("Error", "Something went wrong while fetching bookings");
    throw error;
  }
};

export const createResidency = async (
  data: Record<string, any>,
  token: string,
  userEmail: string
): Promise<void> => {
  const requestData = { ...data, userEmail };
  try {
    await api.post(`/residency/create`, requestData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    throw error;
  }
};
