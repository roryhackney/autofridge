import { Stack } from "expo-router";
import { View, Text } from "react-native"; // Import Text & View properly
import HomeIcon from "../../assets/icons/HomeIcon";
import GroceryListIcon from "../../assets/icons/GroceryListIcon";
import MyFridgeIcon from "../../assets/icons/MyFridgeIcon";
import { Link } from 'expo-router';

export default function RootLayout() {
    return (
        <>
            <Stack />
            <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center', padding: 20 }}>
                <Link href="/fridges" style={{ color: "black" }}>
                    <View style={{ alignItems: "center" }}>
                        <MyFridgeIcon />
                        <Text>My Fridge</Text>
                    </View>
                </Link>
                <Link href="/home" style={{ color: "black" }}>
                    <View style={{ alignItems: "center" }}>
                        <HomeIcon />
                        <Text>Home</Text>
                    </View>
                </Link>
                <Link href="/grocery-list" style={{ color: "black" }}>
                    <View style={{ alignItems: "center" }}>
                        <View style={{ transform: [{ scale: 0.6 }] }}> 
                            <GroceryListIcon />
                        </View>
                        <Text>Grocery List</Text>
                    </View>
                </Link>
            </View>
        </>
    );
}
