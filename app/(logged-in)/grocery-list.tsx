import {Text, View} from "react-native";
import {Link} from "expo-router";
import { globalStyles } from "@/assets/global";

export default function GroceryList() {
    return (
        <View>
            <Text>Implement Grocery List screen</Text>
            <Link style={globalStyles.links} href="/home">Home</Link>
        </View>
    );
}