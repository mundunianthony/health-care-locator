import React, { useContext, useEffect, useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Importing vector icon for React Native
import useAuthCheck from "../hooks/useAuthCheck";
import { useMutation } from "react-query";
import { useAuth0 } from "@auth0/auth0-react";
import UserDetailContext from "../context/UserDetailContext";
import { toFav } from "../app/utils/api";
import { checkFavourites, updateFavourites } from "../app/utils/common";

// Define the expected props for the HeartBtn component
interface HeartBtnProps {
  id: number;
}

const HeartBtn: React.FC<HeartBtnProps> = ({ id }) => {
  const [heartColor, setHeartColor] = useState<string>("white");
  const { validateLogin } = useAuthCheck();
  const { user } = useAuth0();

  // Ensure the context value is correctly typed
  const {
    userDetails: { favourites, token },
    setUserDetails,
  } = useContext(UserDetailContext);

  useEffect(() => {
    setHeartColor(() => checkFavourites(id.toString(), favourites));
  }, [favourites, id]);

  const { mutate } = useMutation({
    mutationFn: () => toFav(id.toString(), user?.email || "", token),
    onSuccess: () => {
      setUserDetails((prev) => ({
        ...prev,
        favourites: updateFavourites(id.toString(), prev.favourites),
      }));
    },
  });

  const handleLike = () => {
    if (validateLogin()) {
      mutate();
      setHeartColor((prev) => (prev === "#8ac243" ? "white" : "#8ac243"));
    }
  };

  return (
    <TouchableOpacity onPress={handleLike}>
      <Icon
        name="heart"
        color={heartColor}
        size={30} // Adjust the size as needed
      />
      <Text>{heartColor === "#8ac243" ? "Liked" : "Like"}</Text>
    </TouchableOpacity>
  );
};

export default HeartBtn;
