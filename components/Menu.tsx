import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import MenuIcon from "../assets/icons/MenuIcon"; // Make sure this is a default export
import MenuScreen from "../components/MenuScreen"; // Make sure this is a default export

export default function Menu() {
  const [isMenuVisible, setIsMenuVisible] = useState(false); // Manage the menu visibility

  // Handle Menu Icon click to toggle menu visibility
  const handleMenuClick = () => {
    setIsMenuVisible(!isMenuVisible); // Toggle menu visibility
  };

  return (
    <View style={styles.container}>
      {/* Header with Menu Icon */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleMenuClick}>
          {/* Menu Icon SVG */}
          <MenuIcon />
        </TouchableOpacity>
      </View>
      {/* Render MenuScreen when isMenuVisible is true */}
      {isMenuVisible && <MenuScreen />}


     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10, // Added some padding for spacing
  },
});
