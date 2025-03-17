import React from "react";
import { View, StyleSheet } from "react-native";
import ToggleSwitch from "../components/ToggleSwitch";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* This is just for testing components. Will be deleted later. */}
      <ToggleSwitch />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: "center",
    alignItems: "center",
  },
});
