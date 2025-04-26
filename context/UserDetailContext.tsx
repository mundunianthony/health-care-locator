import React, { createContext, useState } from "react";

interface Booking {
  id: string;
  date: string;
}

interface UserDetails {
  token: string;
  bookings: Booking[];
}

interface UserDetailContextProps {
  userDetails: UserDetails;
  setUserDetails: React.Dispatch<React.SetStateAction<UserDetails>>;
}

const UserDetailContext = createContext<UserDetailContextProps>({
  userDetails: { token: "", bookings: [] },
  setUserDetails: () => {},
});

export const UserDetailProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [userDetails, setUserDetails] = useState<UserDetails>({
    token: "",
    bookings: [],
  });

  return (
    <UserDetailContext.Provider value={{ userDetails, setUserDetails }}>
      {children}
    </UserDetailContext.Provider>
  );
};

export default UserDetailContext;
