import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type AddToFridgeButtonProps = {
  title?: string;
  onPress: () => void;
};

export default function AddToFridgeButton({ title = "Add to Fridge", onPress }: AddToFridgeButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 200,
    height: 44,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00434B", 
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});
