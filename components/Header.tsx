import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";
import { useAuth0 } from "react-native-auth0"; // RN-specific Auth0 SDK
import ProfileMenu from "./ProfileMenu"; // This will also need to be RN-friendly
import Navbar from "./Navbar"; // You’ll need to convert this too
const userIcon = require("../assets/user.png"); // Ensure this is a local asset

const Header: React.FC = () => {
  const [active, setActive] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => setMenuOpened(!menuOpened);

  const { authorize, clearSession, user, getCredentials } = useAuth0();

  // Simulate scroll behavior
  useEffect(() => {
    // This is not directly available in React Native
    // You'd handle scroll events inside ScrollView/FlatList, not globally
    // So we leave this out or add it in a parent component with onScroll
  }, []);

  const handleLogin = async () => {
    try {
      await authorize();
    } catch (e) {
      console.error("Login failed", e);
    }
  };

  const handleLogout = async () => {
    try {
      await clearSession();
    } catch (e) {
      console.error("Logout failed", e);
    }
  };

  return (
    <View style={[styles.headerContainer, active && styles.headerActive]}>
      <View style={styles.innerContainer}>
        {/* Logo */}
        <TouchableOpacity onPress={() => console.log("Navigate home")}>
          <Text style={styles.logo}>
            Homely<Text style={styles.logoDot}>.com</Text>
          </Text>
        </TouchableOpacity>

        {/* Navbar */}
        <View>
          {/* You'll need to adapt Navbar component too */}
          {menuOpened && (
            <Navbar containerStyles={{ marginTop: 20 }} />
          )}
        </View>

        {/* Menu Button & Login/Profile */}
        <View style={styles.menuRight}>
          <TouchableOpacity onPress={toggleMenu}>
            <Text style={styles.menuIcon}>{menuOpened ? "✕" : "☰"}</Text>
          </TouchableOpacity>

          {!user ? (
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Image
                source={userIcon}
                style={styles.userIcon}
                resizeMode="contain"
              />
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
          ) : (
            <ProfileMenu user={user} logout={handleLogout} />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    elevation: 4,
  },
  headerActive: {
    paddingVertical: 4,
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    fontSize: 24,
    fontWeight: "900",
  },
  logoDot: {
    fontWeight: "600",
    fontSize: 20,
  },
  menuRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  menuIcon: {
    fontSize: 28,
    paddingHorizontal: 8,
  },
  loginButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#007AFF",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
  },
  loginText: {
    color: "#fff",
    marginLeft: 8,
  },
  userIcon: {
    width: 22,
    height: 22,
  },
});

export default Header;
