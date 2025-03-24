import { Stack } from "expo-router";
import { Link } from "expo-router";
import { View, Text } from "react-native"; // Import Text & View properly

import Bell from "@/components/Bell";

import Menu from "@/components/Menu";



export default function RootLayout() {
    return (
        <>
        
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 10 }}>
                <Link href="../components/Bell" style={{ color: "black" }}>
                    <View style={{ alignItems: "center" }}>
                        <Bell/>
                    </View>
                </Link>
                <Link href="../components/MenuIcon" style={{ color: "black" }}>
                    <View style={{ alignItems: "center" }}>
                        <View style={{ transform: [{ scale: 0.6 }] }}>
                            <Menu/>
                        </View>
                    </View>
                </Link>
            </View>
            <Stack /> 
            </>

        
    );
}
