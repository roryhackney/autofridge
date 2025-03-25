// components/LogoLogin.tsx
import React from "react-native";
import { View, Image } from "react-native";
import globalStyles from "../assets/globalStyles";

export default function LogoLogin() {
  return (
    <View>
      <Image
        source={require('@/assets/images/AutoFridge.png')}
        style={globalStyles.logo}
      />
    </View>
  );
}
