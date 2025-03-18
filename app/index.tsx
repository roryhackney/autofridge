
import React from "react";
import { View } from "react-native";
import ToggleSwitch from "../components/ToggleSwitch";
import TopTabNavigator from "../components/TopTabNavigator";
import { globalStyles } from "@/assets/global";

export default function Index() {
  return (
      <View style={globalStyles.container}>
      <TopTabNavigator />
      <ToggleSwitch />
    </View>
  );
}
