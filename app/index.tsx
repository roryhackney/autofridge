
import React from "react";
import { View, StyleSheet } from "react-native";
import ToggleSwitch from "../components/ToggleSwitch";
import TopTabNavigator from "../components/TopTabNavigator";

export default function Index() {
  return (
      <View style={styles.container}>
      <TopTabNavigator />
      <ToggleSwitch />
    </View>
  );
}
