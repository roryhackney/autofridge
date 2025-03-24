import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function SaveButton({ title = "Save", onPress }: { title?: string; onPress: () => void }) {
  const styles = StyleSheet.create({
    button: {
      width: 200, 
      height: 44,
      backgroundColor: "#00434B", 
      borderRadius: 8,
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "500",
    },
  });

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
