import { Text, View } from "react-native";
import { Link } from "expo-router";
import globalStyles from "@/assets/globalStyles";
import LogoLogin from "@/components/LogoLogin";

export default function Index() {
  return (
    <View style={globalStyles.container}>
        <LogoLogin />
        <Link style={globalStyles.links} href="/login">Log In</Link>
        <Link style={globalStyles.links} href="/register">Sign Up</Link>
        <Link style={globalStyles.links} href="/home">Go to Home</Link>
    </View>
  );
}
