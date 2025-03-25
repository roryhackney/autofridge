import {Text, View} from "react-native";
import {Link} from "expo-router";
import globalStyles from "@/assets/globalStyles";

export default function Notifications() {
    return (
        <View>
            <Text>Implement Notifications screen</Text>
            <Link style={globalStyles.links} href="/home">Home</Link>
        </View>
    );
}