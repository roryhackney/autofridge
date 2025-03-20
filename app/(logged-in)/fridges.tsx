import {Text, View} from "react-native";
import {Link} from "expo-router";
import { globalStyles } from "@/assets/global";

export default function Fridges() {
    return (
        <View>
            <Text>Implement All Fridges screen</Text>
            <Link style={globalStyles.links} href="/home">Home</Link>
        </View>
    );
}