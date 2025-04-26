export const updateFavourites = (
  id: string,
  favourites: string[]
): string[] => {
  if (favourites.includes(id)) {
    return favourites.filter((resId) => resId !== id);
  } else {
    return [...favourites, id];
  }
};

export const checkFavourites = (
  id: string,
  favourites?: string[]
): string => {
  return favourites?.includes(id) ? "#8ac243" : "white";
};

export const validateString = (value: string | null | undefined): string | null => {
  return !value || value.length < 3
    ? "Enter at least 3 characters"
    : null;
};
