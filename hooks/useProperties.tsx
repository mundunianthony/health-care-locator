import { useQuery } from '@tanstack/react-query';
import { getAllProperties, Property } from '../app/utils/api'; // Import Property from api.ts

const useProperties = () => {
  const {
    data,
    isLoading,
    isError,
    refetch,
  } = useQuery<Property[]>({
    queryKey: ['allProperties'],
    queryFn: getAllProperties, // Ensure the query function matches the imported Property type
    refetchOnWindowFocus: false, // optional, mostly useful for web
  });

  return {
    data,
    isLoading,
    isError,
    refetch,
  };
};

export default useProperties;
