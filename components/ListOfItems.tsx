import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Checkbox } from "react-native-paper";

type ListItemProps = {
  items: { id: string; name: string }[];
  onToggleCheck: (id: string) => void;
  checkedItems: string[];
};

export default function ListOfItems({ items, onToggleCheck, checkedItems }: ListItemProps) {
  return (
    <View>
      {items.map((item) => (
        <View key={item.id} style={styles.itemContainer}>
          <Checkbox
            status={checkedItems.includes(item.id) ? "checked" : "unchecked"}
            onPress={() => onToggleCheck(item.id)}
          />
          <Text style={styles.itemText}>{item.name}</Text>
          <TouchableOpacity onPress={() => alert(`Showing details for: ${item.name}`)}>
            <Text style={styles.detailText}>Detail</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    justifyContent: "space-between",
  },
  itemText: {
    fontSize: 18,
    flex: 1,
    marginLeft: 10,
    marginRight: 250,
  },
  detailText: {
    fontSize: 16,
    color: "#A1D8D0",
    marginLeft: 250,
  },
});
