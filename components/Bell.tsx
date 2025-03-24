import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

import BellIcon from "@/assets/icons/BellIcon";
import NotificationScreen from "@/components/NotificationScreen"; // Import NotificationScreen component



export default function Bell({ width = 43, height = 44, color = "#1E1E1E", notifications = 3 }) {
  const [isMenuVisible, setIsMenuVisible] = useState(false); // State to control Screen visibility
  const hasNotifications = notifications > 0;

  const handleMenuClick = () => {
    setIsMenuVisible(!isMenuVisible); // Toggle menu visibility on bell icon press
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleMenuClick}>
        <BellIcon/>
        {/* Show red dot with number "3" */}
        {hasNotifications && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>3</Text>
          </View>
        )}
      </TouchableOpacity>

      {/* Conditionally render NotificationScreen when menu is visible */}
      {isMenuVisible && <NotificationScreen />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
