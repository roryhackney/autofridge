import { Text, View } from "react-native";
import { Link } from "expo-router";
import globalStyles from "@/assets/global";
<<<<<<< HEAD
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
    </View>
  );
=======

export default function Index() {
    return (
        <View>
            <Text>Implement Sign Up screen</Text>
            <Link style={globalStyles.links} href="/home">Home</Link>
        </View>
    );
>>>>>>> bba3f2740d45e1d7002df31599a9e401e1af0f3f
}
