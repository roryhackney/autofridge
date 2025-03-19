import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import LogoLogin from "../components/LogoLogin";
import globalStyles from "../assets/global";

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={globalStyles.container}>
      <LogoLogin />

      {/* Input Fields */}
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

      {/* Buttons */}
      <View style={globalStyles.buttonContainer}>
        <TouchableOpacity style={globalStyles.loginButton}>
          <Text style={globalStyles.buttonText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={globalStyles.signUpButton}>
          <Text style={globalStyles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
