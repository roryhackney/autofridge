import React from "react";
import { View, StyleSheet } from "react-native";
import ToggleSwitch from "../components/ToggleSwitch";
import TextInputWithDropdown from "../components/TextInputWithDropdown";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* This is just for testing components. Will be deleted later. */}
      <TextInputWithDropdown label="Choose an option" options={["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"]} />
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
