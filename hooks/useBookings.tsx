import { useContext, useEffect, useRef } from "react";
import UserDetailContext from "../app/context/UserDetailContext";
import { useQuery } from "react-query";
import { useAuth0 } from "@auth0/auth0-react";
import { getAllBookings } from "../services/api";
import type { Booking } from "../models/types"; // Define your Booking type

const useBookings = () => {
  const { userDetails, setUserDetails } = useContext(UserDetailContext);
  const queryRef = useRef<() => void>();
  const { user } = useAuth0();

  const { data, isLoading, isError, refetch } = useQuery<Booking[]>({
    queryKey: "allBookings",
    queryFn: () => getAllBookings(user?.email, userDetails?.token),
    onSuccess: (data) =>
      setUserDetails((prev) => ({ ...prev, bookings: data })),
    enabled: !!user,
    staleTime: 30000,
  });

  queryRef.current = refetch;

  useEffect(() => {
    queryRef.current?.();
  }, [userDetails?.token]);

  return { data, isError, isLoading, refetch };
};

export default useBookings;
