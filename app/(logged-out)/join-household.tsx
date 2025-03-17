import {Text, View} from "react-native";
import {Link} from "expo-router";
import { globalStyles } from "@/assets/global";

export default function Join() {
    return (
        <View>
            <Text>Implement Join Household screen</Text>
            <Link style={globalStyles.links} href="/home">Home</Link>
        </View>
    );
}