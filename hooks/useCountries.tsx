import countries from "world-countries";
import type { Country } from "../models/types";

const formattedCountries: Country[] = countries.map((country) => ({
  value: country.name.common,
  label: `${country.name.common} ${country.flag}`,
  latlng: country.latlng,
  region: country.region,
}));

const useCountries = () => {
  const getAll = (): Country[] => formattedCountries;
  return { getAll };
};

export default useCountries;
