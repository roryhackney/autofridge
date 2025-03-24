import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function MenuScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.menuItem}>Profile</Text> {/* Example menu item */}
      <Text style={styles.menuItem}>Household</Text> {/* Example menu item */}
      <Text style={styles.menuItem}>Foods</Text> {/* Example menu item */}
      <Text style={styles.menuItem}>Notifications</Text> {/* Example menu item */}
      <Text style={styles.menuItem}>Log Out</Text> {/* Example menu item */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 20,
  },
  menuItem: {
    marginTop: 10,
    fontSize: 18,
    color: "#1D1B20",
  },
});
