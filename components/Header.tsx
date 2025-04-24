import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigation } from "@react-navigation/native";
import ProfileMenu from "@/components/ProfileMenu";

const Header: React.FC = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
  const navigation = useNavigation();

  const toggleMenu = () => setMenuOpened(!menuOpened);

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text style={styles.logo}>Homely.com</Text>
      </TouchableOpacity>
      {isAuthenticated ? (
        <ProfileMenu user={user} logout={logout} />
      ) : (
        <TouchableOpacity onPress={loginWithRedirect}>
          <Image
            source={require("../assets/user.svg")}
            style={styles.userIcon}
          />
          <Text>Login</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
  },
  logo: {
    fontSize: 24,
    fontWeight: "900",
  },
  userIcon: {
    width: 22,
    height: 22,
  },
});

export default Header;
