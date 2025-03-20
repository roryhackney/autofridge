import {Text, View} from "react-native";
import {Link} from "expo-router";
import globalStyles from "@/assets/global";

export default function Household() {
    return (
        <View>
            <Text>Implement Household screen</Text>
            <Link style={globalStyles.links} href="/home">Home</Link>
        </View>
    );
}