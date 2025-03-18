import React from "react";
import { View, Text } from "react-native";

export default function NotificationsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20 }}>Notifications</Text>
      <Text style={{ marginTop: 10 }}>Hey, milk is added!</Text> {/* Example notification message */}
    </View>
  );
}
