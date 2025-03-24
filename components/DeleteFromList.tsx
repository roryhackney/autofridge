import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type DeleteFromListProps = {
  title?: string;
  onPress: () => void;
};

export default function DeleteFromList({ title = "Add to Fridge", onPress }: DeleteFromListProps) {
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
    backgroundColor: "#A1D8D0", 
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});
