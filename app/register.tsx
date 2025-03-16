import {Text, View} from "react-native";
import {Link} from "expo-router";
import { globalStyles } from "@/assets/global";

export default function Register() {
    return (
        <View>
            <Text>Implement Sign Up screen</Text>
            <Link style={globalStyles.links} href="./">Home</Link>
        </View>
    );
}