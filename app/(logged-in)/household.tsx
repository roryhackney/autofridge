import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput, Alert } from "react-native";

const HouseholdList = () => {
  const [households, setHouseholds] = useState([
    { id: "1", name: "Full Name", isEditing: false },
    { id: "2", name: "Full Name", isEditing: false },
    { id: "3", name: "Full Name", isEditing: false },
    { id: "4", name: "Full Name", isEditing: false },
  ]);

  // Handle click on household photo
  const handlePhotoClick = (item: any) => {
    Alert.alert("Edit Photo", `Edit photo for ${item.name}`);
  };

  
  const toggleEditMode = (id: string) => {
    setHouseholds((prevHouseholds) =>
      prevHouseholds.map((household) =>
        household.id === id ? { ...household, isEditing: !household.isEditing } : household
      )
    );
  };

  
  const handleNameChange = (id: string, newName: string) => {
    setHouseholds((prevHouseholds) =>
      prevHouseholds.map((household) =>
        household.id === id ? { ...household, name: newName } : household
      )
    );
  };

  // Render each household item
  const renderHousehold = ({ item }: any) => (
    <View style={styles.householdContainer}>
      {/* Clickable photo */}
      <TouchableOpacity onPress={() => handlePhotoClick(item)}>
        <View style={styles.photoPlaceholder}>
          <Text style={styles.photoText}>Household Photo</Text>
        </View>
      </TouchableOpacity>

      {/* Clickable/editable full name */}
      <TouchableOpacity onPress={() => toggleEditMode(item.id)}>
        {item.isEditing ? (
          <TextInput
            style={styles.nameTextInput}
            value={item.name}
            onChangeText={(newName) => handleNameChange(item.id, newName)}
            onSubmitEditing={() => toggleEditMode(item.id)} 
            onBlur={() => toggleEditMode(item.id)} 
            autoFocus
          />
        ) : (
          <Text style={styles.nameText}>{item.name}</Text>
        )}
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Household List</Text>
      <FlatList
        data={households}
        renderItem={renderHousehold}
        keyExtractor={(item) => item.id}
        numColumns={2} // Display 2 columns
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.grid}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f7f7f7", 
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 24, 
      textAlign: "center",
      color: "#333", 
    },
    grid: {
      justifyContent: "center",
      alignItems: "center",
    },
    columnWrapper: {
      justifyContent: "space-between", 
      marginBottom: 16, 
    },
    householdContainer: {
      width: '45%', 
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 16, 
    },
    photoPlaceholder: {
        width: 120,
        height: 120,
        backgroundColor: "#66b2a7",
        justifyContent: "center", 
        alignItems: "center", 
        borderRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
      },
      photoText: {
        color: "#FFF",
        fontSize: 16,
        textAlign: "center", 
        width: "100%", 
      },
    nameText: {
      marginTop: 8,
      fontSize: 16,
      fontWeight: "bold",
      color: "#333", 
    },
    nameTextInput: {
      marginTop: 8,
      fontSize: 16,
      fontWeight: "bold",
      borderBottomWidth: 1,
      borderBottomColor: "#333", 
      width: 100,
      textAlign: "center",
    },
  });
  export default HouseholdList;
  