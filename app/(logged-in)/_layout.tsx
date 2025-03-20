// import BottomTabNavigator from "@/components/BottomTabNavigator";
// import TopTabNavigator from "/@/components/TopTabNavigator";
import { Stack } from "expo-router";
import { View } from "react-native";

export default function RootLayout() {
    return (
        <View>
            {/* <TopTabNavigator/> */}
            <Stack />
            {/* <BottomTabNavigator/> */}
        </View>
    );
}
