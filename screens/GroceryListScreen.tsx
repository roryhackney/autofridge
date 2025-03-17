import React from "react";
import { View, StyleSheet } from "react-native";
import ListItems from "../components/ListItems";

export default function GroceryListScreen() {
  const groceryItems = [
    { id: "1", name: "Item" },
    { id: "2", name: "Item" },
    { id: "3", name: "Item" },
    { id: "4", name: "Item" },
    { id: "5", name: "Item" },
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
