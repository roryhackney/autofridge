import { Text, View } from "react-native";
import { Link } from "expo-router";
import globalStyles from "@/assets/globalStyles";
import LogoLogin from "@/components/LogoLogin";

export default function Index() {
  return (
    <View style={globalStyles.container}>
        <LogoLogin />
        <View style={[globalStyles.genericButton, {backgroundColor: "#00434B", width: 272}]}>
            <Link style={globalStyles.genericButtonText} href="/login">Log In</Link>
        </View>
        <View style={[globalStyles.genericButton, {backgroundColor: "#00434B", width: 272, margin: 10}]}>
            <Link style={globalStyles.genericButtonText} href="/register">Sign Up</Link>
        </View>
        <View style={[globalStyles.genericButton, {backgroundColor: "#00434B", width: 272}]}>
            <Link style={globalStyles.genericButtonText} href="/home">Go to Home</Link>
        </View>
    </View>
  );
}
