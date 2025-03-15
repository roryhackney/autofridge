import React from "react";
import { View, StyleSheet } from "react-native";
import ListItems from "../components/ListItems";

export default function GroceryListScreen() {
  const groceryItems = [
    { id: "1", name: "Milk" },
    { id: "2", name: "Eggs" },
    { id: "3", name: "Bread" },
    { id: "4", name: "Butter" },
    { id: "5", name: "Cheese" },
  ];

  return (
    <View style={styles.container}>
      <ListItems items={groceryItems} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 15,
  },
});
