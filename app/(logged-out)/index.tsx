import { View } from "react-native";
import LogoLogin from "@/components/LogoLogin";
import Login from "../(logged-out)/login"; 

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <Login /> 
    </View>
  );
}
