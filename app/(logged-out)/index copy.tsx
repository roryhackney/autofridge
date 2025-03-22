import { Text, View } from "react-native";
import { Link } from "expo-router";
import globalStyles from "@/assets/global";
import LogoLogin from "@/components/LogoLogin";

export default function Index() {
  return (
    <View style={globalStyles.container}>
      <LogoLogin />
      <Text style={{ fontSize: 24, fontWeight: "bold", marginVertical: 20 }}>
        Welcome to the App
      </Text>
      <Link style={globalStyles.links} href="/login">
        <View style={globalStyles.genericButton}>
          <Text style={globalStyles.genericButtonText}>Log In</Text>
        </View>
      </Link>
      <Link style={globalStyles.links} href="/signup">
        <View style={globalStyles.genericButton}>
          <Text style={globalStyles.genericButtonText}>Sign Up</Text>
        </View>
      </Link>
    </View>
  );
}
