import { useQuery } from '@tanstack/react-query';
import { getAllProperties, Property as ApiProperty } from '../app/utils/api';

type Property = ApiProperty;

const useProperties = () => {
  const {
    data,
    isLoading,
    isError,
    refetch,
  } = useQuery<Property[]>({
    queryKey: ['allProperties'],
    queryFn: getAllProperties,
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
