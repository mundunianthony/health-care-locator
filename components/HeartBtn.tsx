import React, { useContext, useEffect, useState } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import useAuthCheck from "@/hooks/useAuthCheck";
import { useMutation } from "react-query";
import { useAuth0 } from "@auth0/auth0-react";
import UserDetailContext from "@/context/UserDetailContext";
import { toFav } from "@/utils/api";
import { checkFavourites, updateFavourites } from "@/utils/common";

interface HeartBtnProps {
  id: string;
}

const HeartBtn: React.FC<HeartBtnProps> = ({ id }) => {
  const [heartColor, setHeartColor] = useState<string>("white");
  const { validateLogin } = useAuthCheck();
  const { user } = useAuth0();

  const {
    userDetails: { favourites, token },
    setUserDetails,
  } = useContext(UserDetailContext);

  useEffect(() => {
    setHeartColor(() => checkFavourites(id, favourites));
  }, [favourites, id]);

  const { mutate } = useMutation({
    mutationFn: () => toFav(id, user?.email ?? "", token),
    onSuccess: () => {
      setUserDetails((prev) => ({
        ...prev,
        favourites: updateFavourites(id, prev.favourites),
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
    <TouchableOpacity onPress={handleLike} style={styles.heart}>
      <Icon name="heart" type="font-awesome" color={heartColor} size={23} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  heart: {
    padding: 5,
  },
});

export default HeartBtn;