import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function NotificationScreen() {
  const notifications = [
    "Hey, milk is added!",
    "Your fridge is running low on eggs.",
    "New grocery list item: Apples",
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notifications</Text>
      <ScrollView style={styles.scrollView}>
        {notifications.map((notification, index) => (
          <Text key={index} style={styles.notificationText}>
            {notification}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1D1B20",
    marginBottom: 20,
  },
  scrollView: {
    width: "100%",
  },
  notificationText: {
    fontSize: 16,
    color: "#1D1B20",
    marginVertical: 5,
  },
});
