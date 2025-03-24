import React, { useState } from "react";
import { Modal, View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import RoundButton from "./RoundButton";
import TextInputWithDropdown from "./TextInputWithDropdown";
import AddItems from "./AddItems";

type AddItemModalProps = {
  visible: boolean;
  onClose: () => void;
  onAddItem: (name: string, quantity: number, shared: string, note: string) => void;
};

export default function AddItemModal({ visible, onClose, onAddItem }: AddItemModalProps) {
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [shared, setShared] = useState("No");
  const [note, setNote] = useState("");

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {/* Title */}
          <Text style={styles.title}>Add Item</Text>

          {/* Search Area  */}
          <TextInput
            style={styles.searchBox}
            placeholder="Search"
          />

          {/* Quantity & Shared Section */}
          <View style={styles.row}>
            {/* Quantity Section */}
            <View style={styles.quantitySection}>
              <Text style={styles.label}>Quantity</Text>
              <View style={styles.quantityControls}>
                <RoundButton label="-" disabled={false} onTouch={() => setQuantity(Math.max(1, quantity - 1))} />
                <View style={styles.squareBox}>
                  <Text style={styles.quantityText}>{quantity}</Text>
                </View>
                <RoundButton label="+" disabled={false} onTouch={() => setQuantity(quantity + 1)} />
              </View>
            </View>

            {/* Shared Section */}
            <View style={styles.sharedSection}>
              <Text style={styles.label}>Shared</Text>
              <TextInputWithDropdown
                label="" // Prevents red underline
                options={["Yes", "No"]}
                selectedValue={shared}
                onValueChange={setShared}
                style={styles.dropdown}
              />
            </View>
          </View>

          {/* Note Input */}
          <Text style={styles.label}>Note</Text>
          <TextInput
            style={styles.noteInput}
            placeholder="Enter a note"
            value={note}
            onChangeText={setNote}
          />


            <View style={styles.noteInput}>
                <TouchableOpacity onPress={() => {
                onAddItem(itemName, quantity, shared, note);
                onClose();
                }}>
                <Text style={{ textAlign: "center", fontSize: 16 }}>Add Item To Grocery List</Text>
                </TouchableOpacity>
            </View>
        
          {/* Close Button */}
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}


const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "60%",  // Reduced to half original size
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  searchBox: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 20,
    marginBottom: 15,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 10,
  },
  quantitySection: {
    alignItems: "flex-start",
    flex: 1,
  },
  sharedSection: {
    alignItems: "flex-start",
    flex: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5,
    textAlign: "left", 
    alignSelf: "flex-start"
  },
  
  
  quantityControls: {
    flexDirection: "row",
    alignItems: "center",
  },
  squareBox: {
    width: 35,
    height: 35,
    borderWidth: 1,
    borderColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  quantityText: {
    fontSize: 18,
  },
  dropdown: {
    width: 60,  
    maxWidth: 60,
    height: 35,
    overflow: "hidden",
    alignSelf: "center",
  },
  noteInput: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  closeButton: {
    marginTop: 10,
  },
  closeText: {
    color: "red",
    fontSize: 16,
  },
});

