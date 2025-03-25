import { Stack } from "expo-router";
import { Link } from "expo-router";
import { View, Text } from "react-native"; // Import Text & View properly

import Bell from "@/components/Bell";

import Menu from "@/components/Menu";



export default function RootLayout() {
    return (
        <>
            <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center', padding: 20 }}>
                <Text style={{ color: "black" }}>
                    <View style={{ alignItems: "center" }}>
                        <Bell/>
                    </View>
                </Text>
                <Text style={{ color: "black" }}>
                    <View style={{ alignItems: "center" }}>
                        <View style={{ transform: [{ scale: 0.6 }] }}>
                            <Menu/>
                        </View>
                    </View>
                </Text>
            </View>
            <Stack /> 
            </>

        
    );
}
