// components/LogoLogin.tsx
import React from "react-native";
import { View, Image } from "react-native";
import globalStyles from "../assets/global";

export default function LogoLogin() {
  return (
    <View style={globalStyles.container}>
      <Image
        source={require('../../assets/images/AutoFridge.png')}
        style={globalStyles.logo}
      />
    </View>
  );
}
