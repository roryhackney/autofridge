import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";

export default function TextInputWithDropdown(props: { label: string; options: string[] }) {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setDropdownVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Dropdown Button */}
      <TouchableOpacity
        style={styles.dropdown}
        onPress={() => setDropdownVisible(!isDropdownVisible)}
      >
        <Text style={selectedOption ? styles.selectedText : styles.placeholderText}>
          {selectedOption || "Select an option"}
        </Text>
        <Text style={styles.arrow}>⌄</Text> 
      </TouchableOpacity>

      {/* Dropdown List */}
      {isDropdownVisible && (
        <View style={styles.dropdownList}>
          <FlatList
            data={props.options}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.dropdownItem} onPress={() => handleSelect(item)}>
                <Text style={styles.itemText}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  dropdown: {
    width: 272,
    height: 44,
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "black",
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center", 
    justifyContent: "space-between",
  },
  placeholderText: {
    color: "gray",
    flex: 1,
  },
  selectedText: {
    color: "black",
    flex: 1,
  },
  arrow: {
    fontSize: 18, 
    color: "black",
    textAlignVertical: "center", 
    marginBottom: 10,
  },
  dropdownList: {
    marginTop: 4,
    width: 272,
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "black",
    maxHeight: 150,
  },
  dropdownItem: {
    padding: 10,
  },
  itemText: {
    fontSize: 16,
  },
});
