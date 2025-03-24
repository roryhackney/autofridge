import React, { useState } from 'react';
import { Text, View, ScrollView, TextInput, TouchableOpacity } from "react-native";
import ListOfItems from "../../components/ListOfItems";
import FridgeButton from "../../components/FridgeButton"; 
import DeleteFromList from "../../components/DeleteFromList";
import TextInputWithDropdown from "../../components/TextInputWithDropdown";
import AddItems from "../../components/AddItems";
import AddItemModal from "../../components/AddItemModal";

export default function GroceryList() {
    const [groceryItems, setGroceryItems] = useState([
        { id: "1", name: "1 Granny Smith Apples" },
        { id: "2", name: "2.5 Ground Beef 80%" },
        { id: "3", name: "1 Broccoli" },
        { id: "4", name: "1 Soy Sauce" },
        { id: "5", name: "1 Carrot" },
        { id: "6", name: "3 Chocolate Bar" }
    ]);

    const [checkedItems, setCheckedItems] = useState<string[]>([]);
    const [newItem, setNewItem] = useState("");
    const [modalVisible, setModalVisible] = useState(false);

    // Toggle checked items
    const handleToggleCheck = (id: string) => {
        setCheckedItems((prevCheckedItems) =>
            prevCheckedItems.includes(id)
                ? prevCheckedItems.filter((item) => item !== id)
                : [...prevCheckedItems, id]
        );
    };

    // Delete checked items from the list
    const handleDeleteCheckedItems = () => {
        setGroceryItems((prevItems) =>
            prevItems.filter((item) => !checkedItems.includes(item.id))
        );
        setCheckedItems([]);
    };

    // Add new item from input field
    const handleAddItem = () => {
        if (newItem.trim() === "") return;
        setGroceryItems([...groceryItems, { id: Date.now().toString(), name: newItem }]);
        setNewItem(""); 
    };

    // Add new item from Modal
    const handleAddItemFromModal = (name: string, quantity: number, shared: string, note: string) => {
        const newItemName = `${quantity} ${name} ${shared === "Yes" ? "(Shared)" : ""} ${note ? "- " + note : ""}`;
        setGroceryItems([...groceryItems, { id: Date.now().toString(), name: newItemName }]);
    };

    return (
        <View style={{ flex: 1 }}>
            {/* Fixed Header */}
            <View style={{ position: "absolute", top: 0, left: 0, right: 0, backgroundColor: "white", zIndex: 10, paddingVertical: 20 }}>
                <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 8 }}>Grocery List</Text>
                <View style={{ alignItems: "center", marginVertical: 10 }}>
                    <View style={{ width: 200 }}>  
                        <Text style={{ fontSize: 14, marginBottom: 5 }}>Category</Text>
                        <TextInputWithDropdown 
                            label=""
                            options={["All Items", "Beverages", "Condiments", "Dairy", "Fruits", "Grains", "Meals", "Meats/Fish", "Vegetables"]}
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 20 }}>
                    <DeleteFromList title="Delete From List" onPress={handleDeleteCheckedItems} />
                    <FridgeButton title="Add To Fridge" onPress={() => alert("Items will be added to Fridge")} />
                </View>
            </View>

            {/* Scrollable List */}
            <ScrollView contentContainerStyle={{ paddingTop: 180, alignItems: "center", paddingBottom: 20 }}>
                <ListOfItems items={groceryItems} onToggleCheck={handleToggleCheck} checkedItems={checkedItems} />
            </ScrollView>

            {/* Input & Add Item Button */}
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", padding: 20 }}>
                <AddItems title="Add Item" onPress={() => setModalVisible(true)} />
            </View>

            {/* Add Item Modal */}
            <AddItemModal 
                visible={modalVisible} 
                onClose={() => setModalVisible(false)} 
                onAddItem={handleAddItemFromModal} 
            />
        </View>
    );
}
