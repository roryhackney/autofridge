import { View, Text, StyleSheet } from "react-native";

export default function MyFridgeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My Fridge Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 20, fontWeight: "bold" },
});
