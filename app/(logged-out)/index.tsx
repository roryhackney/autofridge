import { Text, View } from "react-native";
import { Link } from "expo-router";
import globalStyles from "@/assets/global";
import LogoLogin from "@/components/LogoLogin";

export default function Index() {
  return (
    <View style={globalStyles.container}>
      <LogoLogin />
      <Link style={globalStyles.links} href="/login">
        <View style={globalStyles.genericButton}>
          <Text style={globalStyles.genericButtonText}>Log In</Text>
        </View>
      </Link>
      <Link style={globalStyles.links} href="/register">
        <View style={globalStyles.genericButton}>
          <Text style={globalStyles.genericButtonText}>Sign Up</Text>
        </View>
      </Link>
      <Link style={globalStyles.links} href="/home">
        <View style={globalStyles.genericButton}>
          <Text style={globalStyles.genericButtonText}>Go to Home</Text>
        </View>
      </Link>
    </View>
  );
}
