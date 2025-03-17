import React from "react";
import { View, Text } from "react-native";

export default function MenuScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ marginTop: 10 }}>Profile</Text> {/* Example notification message */}
      <Text style={{ marginTop: 10 }}>Household</Text> {/* Example notification message */}
      <Text style={{ marginTop: 10 }}>Foods</Text> {/* Example notification message */}
      <Text style={{ marginTop: 10 }}>Notifications</Text> {/* Example notification message */}
      <Text style={{ marginTop: 10 }}>Log Out</Text> {/* Example notification message */}
    </View>
  );
}
