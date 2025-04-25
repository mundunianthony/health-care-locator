import { useQuery } from "react-query";
import { getAllProperties } from "../services/api";
import type { Property } from "../models/types";

const useProperties = () => {
  const { data, isLoading, isError, refetch } = useQuery<Property[]>(
    "allProperties",
    getAllProperties,
    { refetchOnWindowFocus: false }
  );

  return { data, isLoading, isError, refetch };
};

export default useProperties;
