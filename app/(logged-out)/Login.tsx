import React, { useState } from "react";
import { TextInput, TouchableOpacity, Text, View } from "react-native";
import globalStyles from "@/assets/globalStyles";
import LogoLogin from "@/components/LogoLogin";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={globalStyles.container}>
      <LogoLogin />

      <TextInput
        style={globalStyles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={globalStyles.input}
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />
      <TouchableOpacity style={globalStyles.loginButton}>
        <Text style={globalStyles.buttonText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
}
